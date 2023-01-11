const Contact = {
    render() {
        return /* html */ `
            <div class="grid grid-cols-3 gap-8 py-[100px] px-[300px]">
                <div class="col-span-1">
                    <h3 class="text-[28px] mb-[28px]">Contact Details</h3>
                    <p class="text-[17px] text-[#888682]">785 15h Street, Office 478 <br> Berlin, De 81566</p>
                    <a href="#" class="inline-block text-[17px] text-[#888682] mt-[28px] mb-[28px]">info@email.com</a> <br>
                    <a href="#" class="inline-block text-[20px] mb-[40px]">+1 840 841 25 69</a>
                    <div class="flex space-x-6">
                        <a class="text-2xl border p-2 rounded-full" href=""><i class="fa-brands fa-facebook-square"></i></a>
                        <a class="text-2xl border p-2 rounded-full" href=""><i class="fa-brands fa-instagram"></i></a>
                        <a class="text-2xl border p-2 rounded-full" href=""><i class="fa-brands fa-twitter"></i></a>
                        <a class="text-2xl border p-2 rounded-full" href=""><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="login-box col-span-2">
                    <form>
                        <div class="grid grid-cols-2 gap-8">
                            <div class="user-box">
                                <input type="text" name="" required="">
                                <label>Name</label>
                            </div>
                            <div class="user-box">
                                <input type="password" name="" required="">
                                <label>Phone</label>
                            </div>
                            <div class="user-box">
                                <input type="password" name="" required="">
                                <label>Email Address</label>
                            </div>
                            <div class="user-box">
                                <input type="password" name="" required="">
                                <label>Subject</label>
                            </div>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="">
                            <label>How can we help you? Feel free to get in touch</label>
                        </div>
                        <a href="#" class="inline-block mr-[30px]" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Get In Touch
                        </a>
                        <input class="" type="checkbox" /> I agree that my submitted data is collected stored
                    </form>
                </div>
            </div>
        `;
    },
};
export default Contact;