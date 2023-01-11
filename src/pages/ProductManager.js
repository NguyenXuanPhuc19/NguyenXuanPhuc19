import {
    remove,
} from "../api/product";
import rerender from "../utils/rerender";
import $ from "../utils/common";
import Nav from "../components/AdminNav";

const ProductManager = {
    async render() {
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        List Product
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <p> <br> <br>
                            <label for="">Sort</label>
                            <select id="sort" class="form-control">
                                <option value="asc">Name A-Z</option>
                                <option value="desc">Name Z-A</option>
                            </select>
                        </p>
                        <p>
                            <input type="text" placeholder="enter keyword" class="form-control mt-3" id="search">
                        </p>
                        <a href="/#/product/add" data class="btn btn-primary mt-3 mb-3">Add product</a>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Thumbnail</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                
                            </tbody>
                        </table> 
                    </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        function render(url, div) {
            fetch(url, {method: "GET"})
                .then((response) => response.json())
                .then((data) => {
                    const html = data.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td><img src="${item.thumbnail}" width="150px" class="rounded-lg"/></td>
                            <td>${item.price}</td>
                            
                            <td>
                                <button class="btn btn-danger btn-remove" data-id=${item.id}>Remove</button>
                                <a href="/product/${item.id}/edit" class="btn btn-info btn-update">Update</a>
                            </td>
                        </tr>
                    `);
                    document.querySelector(div).innerHTML = html.join("");
                });
        }
        render("http://localhost:3001/products?_expand=role", "tbody");

        const search = $("#search");
        search.addEventListener("keyup", () => {
            const timKiem = search.value;
            render(`http://localhost:3001/products?_expand=role&q=${timKiem}`, "tbody");
        });

        const sort = $("#sort");
        sort.addEventListener("change", () => {
            const action = sort.value;
            if (action === "asc") {
                render("http://localhost:3001/products?_expand=role&_sort=name&_order=asc", "tbody");
            }
            if (action === "desc") {
                render("http://localhost:3001/products?_expand=role&_sort=name&_order=desc", "tbody");
            }
        });

        const btns = $("table .btn-danger");
        btns.forEach((btn) => {
            const {
                id,
            } = btn.dataset;
            btn.addEventListener("click", async () => {
                if (btn.classList.contains("btn-remove")) {
                    const confirm = window.confirm("Bạn có chắc chắn xóa không?");
                    if (confirm) {
                        const {
                            data,
                        } = await remove(id);
                        rerender("app", ProductManager);
                        if (data) {
                            alert("delete thành công!");
                        }
                    }
                }
            });
        });
    },
};

export default ProductManager;