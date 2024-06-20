import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { Footer } from "../components/Footer";
import CurrentDate from "./CurDate"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center min-h-screen">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-12 lg:col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2 flex">
                        <span>Post on :&nbsp;</span><CurrentDate />
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="mx-2 mb-3 p-4 border-2 border-slate-300 rounded-md shadow-lg col-span-4 hidden lg:block">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-3 flex flex-col">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold mt-1.5">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Passionate about transforming ideas into compelling narratives, I bring stories to life with a unique blend of creativity and insight, one blog post at a time.
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>


        <div className="mr-5 px-10 h-full">
            <div className="mt-5 mb-5 border-2 p-4 border-slate-300 rounded-md shadow-lg block lg:hidden">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-3 flex flex-col">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold mt-1.5">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Passionate about transforming ideas into compelling narratives, I bring stories to life with a unique blend of creativity and insight, one blog post at a time.
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>

            <Footer />
        </div>

}