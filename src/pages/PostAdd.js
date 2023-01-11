import $ from "../utils/common";
import {
    add,
} from "../api/post";
import {
    getAll,
} from "../api/categoryPost";
import Nav from "../components/AdminNav";
import rerender from "../utils/rerender";
import PostManager from "./PostManager";

const PostAdd = {
    async render() {
        const data = await getAll();
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Add Post Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd">
                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input type="text" class="form-control" id="post-title">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Content</label>
                                <input type="text" class="form-control" id="post-content">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Category Name</label>
                                <select class="form-control" id="categoryName">
                                    ${data.map((categoryProduct) => /* html */ `
                                        <option value="${categoryProduct.name}">${categoryProduct.name}</option>
                                    `).join("")}
                                </select> <br>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Create at</label>
                                <input type="date" class="form-control" id="post-date">
                            </div>
                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        const formAdd = $("#formAdd");
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const post = {
                title: $("#post-title").value,
                content: $("#post-content").value,
                category_name: $("#categoryName").value,
                createat: $("#post-date").value,
            };
            add(post);
            window.location.href = "/#/admin/post";
            rerender("app", PostManager);
        });
    },
};
export default PostAdd;