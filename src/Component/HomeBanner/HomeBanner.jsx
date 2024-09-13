

const HomeBanner = () => {
    return (
        <div className="grid sm:grid-cols-2 my-12">
            <div className="text-left flex flex-col gap-4 justify-center w-96">
                <h2 className="mb-2 text-4xl md:text-5xl lg:text-6xl">One Step Closer To Your <span className="text-violet-300">Dream Job</span></h2>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis culpa officiis fugiat minima. Inventore reiciendis, iusto ut architecto, explicabo  mollitia consequuntur, eos pariatur ea temporibus exercitationem laborum.</p>
                <button className="btn btn-ghost w-fit text-lg bg-violet-600">Get Started</button>
            </div>
            <div>
                <img src="https://i.postimg.cc/0NVcjQbw/user.png" alt="banner-image" />
            </div>
        </div>
    );
};

export default HomeBanner;