import axios from "axios";
import $ from "../utils/common";
import {
    get,
    update,
} from "../api/product";
import {
    getAll,
} from "../api/categoryProduct";
import Nav from "../components/AdminNav";
import rerender from "../utils/rerender";
import ProductManager from "./ProductManager";

const ProductEdit = {
    async render(id) {
        const data = await getAll();
        const product = await get(id);
        if (!product) return `<div>Not found</div>`;
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Edit Product Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formEdit">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="product-name" value="${product.name}">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" name="image" id="product-img" value="${product.thumbnail}">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="number" class="form-control" id="product-price" value="${product.price}">
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
        const imgUpload = $("#product-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxvlhyxvc/image/upload";
        const CLOUDINARY_PRESET = "z4139i5y ";
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgUpload.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "content-type": "application/form-data",
                },
            });
            const product = {
                id,
                name: $("#product-name").value,
                thumbnail: response.data.url,
                price: $("#product-price").value,
            };
            update(product);
            window.location.href = "/#/admin/product";
            rerender("app", ProductManager);
        });
    },
};
export default ProductEdit;