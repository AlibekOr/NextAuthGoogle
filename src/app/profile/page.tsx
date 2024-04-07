import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";

const Profile = async () => {
    const session = await getServerSession(authConfig)
    return (
        <div>
            <h4>Profile of {session?.user?.name}</h4>
            {session?.user?.image && <img src={session.user.image} />}
        </div>
    );
}
export default Profile