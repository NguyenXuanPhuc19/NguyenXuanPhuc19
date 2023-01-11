import $ from "../utils/common";
import {
    add,
} from "../api/categoryPost";
import Nav from "../components/AdminNav";
import rerender from "../utils/rerender";
import CategoryPostManager from "./CategoryPostManager";

const CategoryPostAdd = {
    async render() {
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Add Category Post Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd">
                            <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" id="categoryPost-name">
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
                name: $("#categoryPost-name").value,
            };
            add(post);
            window.location.href = "/#/admin/categoryPost";
            rerender("app", CategoryPostManager);
        });
    },
};
export default CategoryPostAdd;