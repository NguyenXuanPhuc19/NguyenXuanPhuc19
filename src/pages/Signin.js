import {
    signin,
} from "../api/auth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import $ from "../utils/common";

const Signin = {
    render() {
        return /* html */ `
            <div class="">
                ${Header.render()}
                <div class="news mx-auto my-[30px] w-96 border p-3">
                    <h1 class="mb-6 text-[25px]">Đăng nhập</h1>
                    <form id="formSignin">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <button class="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>
                <footer class="py-10">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender() {
        const formSignin = $("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const user = {
                    email: $("#email").value,
                    password: $("#password").value,
                };
                const result = await signin(user);
                if (result) {
                    localStorage.setItem("user", JSON.stringify(result.user));
                    window.location.href = "/";
                }
                $("#.alert").classList.remove("alert-danger");
                $("#.alert").classList.add("alert-success");
                $("#.alert").innerHTML = `Đăng nhập thành công!`;
            } catch (error) {
                $(".alert").classList.add("alert-danger");
                $(".alert").innerHTML = error.response.data;
            }
        });
    },
};
export default Signin;