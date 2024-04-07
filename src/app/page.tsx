import {HeaderSimple} from "@/components/header/HeaderSimple";
import {Providers} from "@/components/Providers";
import {Footer} from "@/components/footer/Footer";
import {StatsGrid} from "@/components/Cart/StatsGrid";

export default function Home() {
    return (
        <Providers>
            <HeaderSimple/>
            <StatsGrid/>
            <Footer/>
        </Providers>
    );
}
