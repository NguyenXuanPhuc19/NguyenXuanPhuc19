import Footer from "../components/Footer";
import Header from "../components/Header";
import Blog from "../components/Blog";

const BlogPage = {
    render() {
        return /* html */ `
            <div class="">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    ${Blog.render()}
                </main>
                <footer class="">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default BlogPage;