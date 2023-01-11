import "../style.css";
import Navigo from "navigo";
import Home from "./pages/Home";
import BlogPage from "./pages/Blog";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductManager from "./pages/ProductManager";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import DashBoardPage from "./pages/Dashboard";
import UserManager from "./pages/UserManager";
import PostManager from "./pages/PostManager";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";
import CategoryPostManager from "./pages/CategoryPostManager";
import CategoryPostAdd from "./pages/CategoryPostAdd";
import CategoryPostEdit from "./pages/CategoryPostEdit";
import CategoryProductManager from "./pages/CategoryProductManager";
import CategoryProductAdd from "./pages/CategoryProductAdd";
import CategoryProductEdit from "./pages/CategoryProductEdit";
import ProductDetil from "./pages/DetailProduct";
import PostDetil from "./pages/DetailPost";

const router = new Navigo("/", {
    linkSelector: "a",
    hash: true,
});

document.addEventListener("DOMContentLoaded", () => {
    async function print(page, id) {
        const app = document.getElementById("app");
        if (app) {
            app.innerHTML = await page.render(id);
        }
        if (page.afterRender) page.afterRender(id);
    }

    router.on({
        "/": () => print(Home),
        "/blog": () => print(BlogPage),
        "/work": () => print(WorksPage),
        "/contact": () => print(ContactPage),
        "/signin": () => print(Signin),
        "/signup": () => print(Signup),
        "/admin/product": () => print(ProductManager),
        "/admin/post": () => print(PostManager),
        "/admin/user": () => print(UserManager),
        "/product/add": () => print(ProductAdd),
        "/post/add": () => print(PostAdd),
        "/product/:id/edit": (data) => {
            const id = +data.data.id;
            print(ProductEdit, id);
        },
        "/post/:id/edit": (data) => {
            const id = +data.data.id;
            print(PostEdit, id);
        },
        "/product/:id": (data) => {
            const id = +data.data.id;
            print(ProductDetil, id);
        },
        "/post/:id": (data) => {
            const id = +data.data.id;
            print(PostDetil, id);
        },
        "/admin/dashboard": () => print(DashBoardPage),
        "/admin/categoryPost": () => print(CategoryPostManager),
        "/categoryPost/add": () => print(CategoryPostAdd),
        "/categoryPost/:id/edit": (data) => {
            const id = +data.data.id;
            print(CategoryPostEdit, id);
        },
        "/admin/categoryProduct": () => print(CategoryProductManager),
        "/categoryProduct/add": () => print(CategoryProductAdd),
        "/categoryProduct/:id/edit": (data) => {
            const id = +data.data.id;
            print(CategoryProductEdit, id);
        },
    });
    router.resolve();
});