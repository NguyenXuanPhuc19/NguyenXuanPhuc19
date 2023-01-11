import Header from "../components/Header";
import {
    get,
} from "../api/post";
import Footer from "../components/Footer";

const PostDetil = {
    async render(id) {
        const data = await get(id);
        return /* html */ `
            <div class="container mx-auto">
                <header>
                    ${Header.render()}  
                </header>
                <main>
                    <div class="max-w-6xl mx-auto px-5">
                        <h1 class="text-3xl font-bold text-[#142850]">Detail Blog</h1>
                        <div class="mt-10 border-b py-8">
                            <h3 class="mb-5">
                                <a href="" class="text-2xl font-bold">${data.title}</a>
                            </h3>
                            <div class="felx space-x-4 text-[#21243D] mb-5">
                                <span>${data.createat}</span>
                                <span>|</span>
                                <span class="text-[#8695A4]">${data.category_name}</span>
                            </div>
                            <p>
                                ${data.content}
                            </p>
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
export default PostDetil;