const Header = {
    render() {
        return /* html */ `
            <nav class="navbar navbar-expand-lg bg-light grid grid-cols-3 gap-10 py-5">
                <div>
                    <div class="collapse navbar-collapse pl-[30px]" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/work">PAGES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blog">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="logo"><img class="pl-[210px]" src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo-dark.png" alt=""></div>
                <div class="users text-end text-[26px] pr-[40px]">
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    <a href="#"><i class="fa-solid fa-user px-[20px]"></i></i></a>
                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                </div>
            </nav>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/slides-3-2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block mb-[340px]">
                    <h5 style="font-size: 20px">Making our coffee with love.</h5>
                    <p style="font-size: 80px; font-weight: bold;">Alluring & Fragrant <br> Coffee Aroma</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/slides-3-3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block mb-[340px]">
                    <h5 style="font-size: 20px">We really like what we do.</h5>
                    <p style="font-size: 80px; font-weight: bold;">Exquisite Taste <br> in Your Cup</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/slides-3-1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block mb-[340px]">
                    <h5 style="font-size: 20px">Enjoy the finest coffee drinks.</h5>
                    <p style="font-size: 80px; font-weight: bold;">Enjoy our Exclusive <br> Coffee & Cocktails</p>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
    },
};
export default Header;