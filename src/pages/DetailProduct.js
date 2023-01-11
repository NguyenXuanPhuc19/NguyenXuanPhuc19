import Header from "../components/Header";
import {
    get,
} from "../api/product";
import Footer from "../components/Footer";

const ProductDetil = {
    async render(id) {
        const data = await get(id);
        return /* html */ `
            <div class="container mx-auto">
                <header>
                    ${Header.render()}  
                </header>
                <main>
                    <div class="max-w-6xl mx-auto px-5">
                        <h1 class="text-3xl font-bold text-[#142850]">Detail Project</h1>
                        <div class="project-item grid grid-cols-[246px,auto] gap-8 border-b py-8">
                            <div>
                                <img src="${data.thumbnail}" width="180px" alt="" class="rounded-lg" />
                            </div>
                            <div>
                                <h3>
                                    <a class="text-[#21243D] text-[30px] font-bolđ" href="">${data.name}</a>
                                </h3>
                                <div class="flex space-x-4 items-center py-4">
                                    <span class="inline-block bg-[#142850] py-1 px-2 text-white rounded-full">${data.createat}</span>
                                    <span class="text-[#8695A4]">${data.category_name}</span>
                                </div>
                                <p class="text-[#21243D]">
                                    ${data.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-10">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default ProductDetil;