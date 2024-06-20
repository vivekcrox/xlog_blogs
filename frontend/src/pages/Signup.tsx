import { Auth } from "../components/Auth"
import { VidSideBar } from "../components/VidSideBar"

export const Signup = () => {
    return <div className="rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="hidden lg:block">
                <VidSideBar />
            </div>
        </div>
    </div>
}