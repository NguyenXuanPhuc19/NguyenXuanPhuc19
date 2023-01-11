import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = {
    async render() {
        return /* html */ `
            <div class="">
                <header>
                    ${Header.render()}  
                </header>
                <main>
                    ${Contact.render()}
                </main>
                <footer class="">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};

export default ContactPage;