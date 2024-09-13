

const LogoBanner = ({title}) => {
    return (
        <div className="">
            <div className="pb-8 flex justify-between">
                <div>
                    <img className="w-0 2xl:w-60 mt-20" src="https://i.postimg.cc/x1ysrgQg/bg1.png" alt="header-bg-logo" />
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-32">{title}</h2>
                </div>
                <div>
                    <img className="w-0 2xl:w-52" src="https://i.postimg.cc/8CpZTWPG/bg2.png" alt="header-bg-logo" />
                </div>
            </div>
        </div>
    );
};

export default LogoBanner;