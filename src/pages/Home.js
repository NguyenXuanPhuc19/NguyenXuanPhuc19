import {
    getAll,
} from "../api/product";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = {
    async render() {
        const data = await getAll();
        return /* html */ `
            <div class="">
                <header>
                    ${Header.render()}  
                </header>
                <div class="bg-[#f9f4eb] pl-[140px]">
                    <section class="info pt-[100px] h-[1100px]">
                            <div class="grid grid-cols-3 px-3">
                                <div class="col-span-1 mt-[130px]">
                                    <h4 class="text-[12px] text-[#b4bb6b]">OUR PRODUCT</h4>
                                    <h1 class="text-[58px] pt-2 pb-4">We Produce Blends of <br> Aromatic Coffee</h1>
                                    <p class="text-[22px] pb-4">We grow and roast delicious and aromatic coffee and <br> deliver it all over the world.</p>
                                    <p class="border-l-4 border-[#b4bb6b]-500 text-[16px] text-[#6B6E71] pl-6">Natural coffee is grown on sunny plantations. We have blended it <br> with various additives that give the coffee a unique taste. Try our coffee <br> once, you won’t want another!</p>
                                    <button class="bg-[#b4bb6b] px-9 rounded-full text-[#fff] py-3 mt-5">About Us</button>
                                </div>
                                <div class="relative col-span-2">
                                    <img class="absolute right-0 bottom-[-300px] mr-[240px] w-[465px] z-30" src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/img-home-8.jpg" alt="" class=""/>
                                    <img class="absolute top-[140px] right-[400px] w-[552px] z-20" src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/img-home-7.jpg" />
                                    <img class="absolute right-0 mr-4 w-[510px]" src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/img-home-9.jpg" />
                                </div>
                            </div>
                        
                    </section>
                    <section class="recent-posts pb-[100px]">
                        
                            <div class="grid grid-cols-3 gap-10 px-3 flex items-center">
                                <div class="swiper mySwiper col-span-1">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide"><img class="w-[529px]" src="https://hotcoffee.themerex.net/wp-content/uploads/2020/05/images-32-min.jpg" alt="" /></div>
                                    </div>
                                </div>
                                <div class="col-span-2 ml-[220px]">
                                    <h4 class="text-[12px] text-[#b4bb6b]">WHAT WE DO</h4>
                                    <h1 class="text-[58px] pt-2 pb-4">We Produce Unique <br> Coffee Flavors</h1>
                                    <p class="text-[#6B6E71] text-[16px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et.</p>
                                    <ul class="pl-[18px]">
                                        <li class="list-disc"><a class="text-[18px]" href="#">Amazing Taste</a></li>
                                        <li class="list-disc py-3"><a class="text-[18px]" href="#">Natural & Fragrant Coffee</a></li>
                                        <li class="list-disc"><a class="text-[18px]" href="#">Quality Roast</a></li>
                                    </ul>
                                    <button class="bg-[#b4bb6b] px-9 rounded-full text-[#fff] py-3 mt-5">Our Coffee</button>
                                </div>
                            </div>
                        
                    </section>
                </div>
                <section class="feature-projects text-center px-[140px] pt-[100px]">
                        <div class="px-3">
                            <div class="">
                                <h4 class="text-[12px] text-[#b4bb6b]">AROMATIC COFFEE</h4>
                                <h1 class="text-[58px] pt-2 pb-4">Coffee Blends and Roasts for <br> Discerning Tastes</h1>
                            </div>
                            <div class="grid grid-cols-3 gap-8 mt-6">
                                ${data.map((item) => /* html */ `
                                    <div class="">
                                        <a href="#"><img class="" src=${item.thumbnail} /></a>
                                        <p class="text-[16px] text-[#797C7F] pt-3"><a href="#">Cappuccino</a>, <a href="#">Ground</a>, <a href="#">Robusta</a></p>
                                        <a href="#"><h3 class="text-[24px] text-[#333333] py-2">${item.name}</h3></a>
                                        <span class="inline-block text-[17px] text-[#797C7F] pb-2">$${item.price}.00</span>
                                        <p><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i><i class="fa-sharp fa-solid fa-star text-[#ffc107]"></i></p>
                                    </div>
                                `).join("")}
                                
                            </div>
                        </div>
                </section>
                <section class="bg-[#f3f0e8] text-center mt-[100px] py-[50px]">
                    <h4 class="text-[12px] text-[#b4bb6b]">WE COOPERATE</h4>
                    <h1 class="text-[58px] pt-2 pb-4">Check Our Best <br> Clients & Partners</h1>
                    <div class="grid grid-cols-4 gap-8 ">
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-5.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-1.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-8.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-7.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-3.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-2.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-4.png" /></a>
                        <a href="#" class="social"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/logo-06.png" /></a>
                    </div>
                </section>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default Home;