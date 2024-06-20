
import videoBg from '../assets/video.mp4'

export const  VidSideBar = () => {
    return <div className='w-full h-screen'>


            <video src={videoBg} autoPlay loop muted className='w-full h-full object-cover rounded-md' />

            <div className="flex justify-center opacity-100">
                <div className="top-0 w-full h-full absolute flex flex-col justify-center items-center text-white max-w-lg">
                    <div className="text-3xl font-bold">
                        "Write. Share. Inspire."
                    </div>
                    <div className="mt-4 max-w-md text-md font-light text-slate-300">
                    Begin your blogging journey now!
                    </div>
                </div>
            </div>



    </div>
}