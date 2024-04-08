import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";
import {UserCardImage} from "@/components/Cart/UserCardImage";
import {Providers} from "@/components/Providers";
const Profile = async () => {
    const session = await getServerSession(authConfig)
    return (
        <Providers>
            <UserCardImage/>
        </Providers>
    );
}
export default Profile