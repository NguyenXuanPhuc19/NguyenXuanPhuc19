import Nav from "../components/AdminNav";

const DashBoardPage = {
    render() {
        return /* html */`
        
        <div class="min-h-full">
            ${Nav.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1>Chào mừng bạn đến với trang quản lý</h1>
            </div>
            </div>
            </main>
        </div>
    
                    `;
    },
};
export default DashBoardPage;