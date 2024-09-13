import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (

        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl">Blog </h1>
                <p>Posts are yet to be added</p>
            </div>
        </div>
    );
};

export default Blog;