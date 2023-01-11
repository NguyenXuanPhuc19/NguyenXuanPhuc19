import $ from "../utils/common";
import {
    get,
    update,
} from "../api/categoryPost";
import Nav from "../components/AdminNav";
import rerender from "../utils/rerender";
import CategoryPostManager from "./CategoryPostManager";

const CategoryPostEdit = {
    async render(id) {
        const categoryPost = await get(id);
        if (!categoryPost) return `<div>Not found</div>`;
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Edit Category Post Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formEdit">
                            <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" id="categoryPost-name" value="${categoryPost.name}">
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
            const categoryPost = {
                id,
                name: $("#categoryPost-name").value,
            };
            update(categoryPost);
            window.location.href = "/#/admin/categoryPost";
            rerender("app", CategoryPostManager);
        });
    },
};
export default CategoryPostEdit;