import $ from "../utils/common";
import {
    get,
    update,
} from "../api/categoryProduct";
import Nav from "../components/AdminNav";
import rerender from "../utils/rerender";
import CategoryProductManager from "./CategoryProductManager";

const CategoryProductEdit = {
    async render(id) {
        const categoryProduct = await get(id);
        if (!categoryProduct) return `<div>Not found</div>`;
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Edit Category Product Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formEdit">
                            <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" id="categoryProduct-name" value="${categoryProduct.name}">
                            </div>
                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </main>
            </div>
        `;
    },
    afterRender(id) {
        const formEdit = $("#formEdit");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const categoryProduct = {
                id,
                name: $("#categoryProduct-name").value,
            };
            update(categoryProduct);
            window.location.href = "/#/admin/categoryProduct";
            rerender("app", CategoryProductManager);
        });
    },
};
export default CategoryProductEdit;