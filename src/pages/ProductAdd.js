import axios from "axios";
import $ from "../utils/common";
import {
    add,
} from "../api/product";
import {
    getAll,
} from "../api/categoryProduct";
import Nav from "../components/AdminNav";
import ProductManager from "./ProductManager";
import rerender from "../utils/rerender";

const ProductAdd = {
    async render() {
        const data = await getAll();
        return /* html */ `
            <div class="container">
                <div class="min-h-full">
                ${Nav.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Add Product Form
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="product-name">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" name="image" id="product-img">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="number" class="form-control" id="product-price">
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
        const imgUpload = $("#product-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxvlhyxvc/image/upload";
        const CLOUDINARY_PRESET = "z4139i5y ";
        formAdd.addEventListener("submit", async (e) => {
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
                name: $("#product-name").value,
                thumbnail: response.data.url,
                price: $("#product-price").value,
            };
            add(product);
            window.location.href = "/admin/product";
            rerender("app", ProductManager);
        });
    },
};
export default ProductAdd;