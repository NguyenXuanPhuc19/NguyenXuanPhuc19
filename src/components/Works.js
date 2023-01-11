const Works = {
    render() {
        return /* html */ `
            <div class="max-w-6xl mx-auto px-5">
                <h1 class="font-bold text-[44px] text-[#21243D]">Work</h1>
                <div class="project-item grid grid-cols-[246px,auto] gap-8 border-b py-8">
                    <div>
                        <img src="https://picsum.photos/246/180" alt="" class="rounded-lg" />
                    </div>
                    <div>
                        <h3>
                            <a class="text-[#21243D] text-[30px] font-bolđ" href="">Designing Dashboards</a>
                        </h3>
                        <div class="flex space-x-4 items-center py-5">
                            <span class="inline-block bg-[#142850] py-1 px-2 text-white rounded-full">2020</span>
                            <span class="text-[#8695A4]">Dashboard</span>
                        </div>
                        <p class="text-[#21243D]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        `;
    },
};
export default Works;