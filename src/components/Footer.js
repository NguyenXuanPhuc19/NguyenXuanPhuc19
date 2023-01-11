const Footer = {
    render() {
        return /* html */ `
            <div class="bg-[#222222] text-[#fff] text-center py-5"> 
                <a class="inline-block" href="#"><img src="https://hotcoffee.themerex.net/wp-content/uploads/2020/05/logo-footer.png" alt=""/></a>
                <ul class="py-4">
                    <li class="inline-block"><a href="#">HOME</a></li>
                    <li class="inline-block px-3"><a href="#">ABOUT US</a></li>
                    <li class="inline-block"><a href="#">SHOP</a></li>
                    <li class="inline-block px-3"><a href="#">FAQ</a></li>
                    <li class="inline-block"><a href="#">CONTACT US</a></li>
                </ul>
                <div class="flex justify-center space-x-4">
                    <a class="text-2xl" href=""><i class="fa-brands fa-facebook-square"></i></a>
                    <a class="text-2xl" href=""><i class="fa-brands fa-instagram"></i></a>
                    <a class="text-2xl" href=""><i class="fa-brands fa-twitter"></i></a>
                    <a class="text-2xl" href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <p class="text-center mt-5">Copyright ©2022 by Nguyen Xuan Phuc</p>
            </div>
        `;
    },
};
export default Footer;