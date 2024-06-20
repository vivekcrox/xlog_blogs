import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="appbar text-white rounded-md border-b flex justify-between px-10 py-4 shadow-lg shadow-slate-300/40 ...">

        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold">
                Xlog
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="hover:ring-4 hover:ring-2 ring-white-200 ring-offset-2 ring-offset-gray-50 mr-4 bg-white text-black focus:outline-none focus:ring-4 focus:ring-2 ring-white-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ... font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">📝 Write </button>
            </Link>
            <Link to={`https://vkeep-xlog.netlify.app/`}>
                <button type="button" className="mr-4 text-white border-2 border-white font-medium rounded-full text-sm px-2 py-2 text-center me-2 mb-2  border-2 border-slate-400 border-x-slate-100 hover:border-slate-100 hover:border-x-slate-400"> 📓 </button>

                
            </Link>


            <Avatar size={"big"} name="V" />
        </div>
    </div>
}