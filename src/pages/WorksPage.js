import Footer from "../components/Footer";
import Header from "../components/Header";
import {
    getAll,
} from "../api/product";

const WorksPage = {
    async render() {
        const data = await getAll();
        return /* html */ `
            <div class="">
                <header>
                    ${Header.render()}  
                </header>
                <main>
                    <div class="px-[140px]">
                        <h1 class="font-bold pt-[100px] pb-[20px] text-[44px] text-[#21243D]">Shop</h1>
                        <div class="grid grid-cols-3 gap-8 mt-6 text-center">
                            ${data.map((work) => /* html */ `
                                <div class="">
                                    <a href="#"><img class="w-[480px]" src="${work.thumbnail}" /></a>
                                    <p class="text-[16px] text-[#797C7F] pt-3"><a href="#">Cappuccino</a>, <a href="#">Ground</a>, <a href="#">Robusta</a></p>
                                    <a href="#"><h3 class="text-[24px] text-[#333333] py-2">${work.name}</h3></a>
                                    <span class="inline-block text-[17px] text-[#797C7F] pb-2">${work.content}</span>
                                    <p><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i></p>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </main>
                <footer class="mt-[40px]">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default WorksPage;