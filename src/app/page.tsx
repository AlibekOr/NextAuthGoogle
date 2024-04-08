import {HeaderSimple} from "@/components/header/HeaderSimple";
import {Providers} from "@/components/Providers";
import {Footer} from "@/components/footer/Footer";
import Profile from "@/app/profile/page";

export default function Home() {
    return (
        <Providers>
            <HeaderSimple/>

            <Footer/>
        </Providers>
    );
}
