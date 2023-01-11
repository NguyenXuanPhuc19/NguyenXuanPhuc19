import {
    signup,
} from "../api/auth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import $ from "../utils/common";

const Signup = {
    render() {
        return /* html */ `
            <div class="">
                ${Header.render()}
                <div class="news mx-auto my-[30px] w-96 border p-3">
                    <h1 class="mb-6 text-[25px]">Đăng ký</h1>
                    <form id="formSignup">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <button class="btn btn-primary">Đăng ký</button>
                    </form>
                </div>
                <footer class="py-10">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender() {
        const formSignup = $("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            const user = {
                email: $("#email").value,
                password: $("#password").value,
                name: $("#name").value,
            };
            const result = await signup(user);
            if (result) {
                window.location.href = "/signin";
            }
        });
    },
};
export default Signup;