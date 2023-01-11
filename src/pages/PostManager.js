import {
    getAll,
    remove,
} from "../api/post";
import rerender from "../utils/rerender";
import $ from "../utils/common";
import Nav from "../components/AdminNav";

const PostManager = {
    async render() {
        const data = await getAll();
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        List Post
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <a href="/#/post/add" data class="btn btn-primary mb-3">Add post</a>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Category Name</th> 
                                    <th>Create At</th> 
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.map((item, index) => /* html */ `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${item.title}</td>
                                        <td>${item.content}</td>
                                        <td>${item.category_name}</td>
                                        <td>${item.createat}</td>
                                        <td>
                                            <button class="btn btn-danger btn-remove" data-id=${item.id}>Remove</button> <br>
                                            <a href="/post/${item.id}/edit" class="btn btn-danger btn-update">Update</a>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table> 
                    </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        const btns = $("table .btn");
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
                        rerender("app", PostManager);
                        if (data) {
                            console.log("delete thành công!");
                        }
                    }
                }
            });
        });
    },
};

export default PostManager;