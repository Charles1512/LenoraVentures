import Chance from "../components/chance";
import Header from "../components/header";
import HomeComponent from "../components/home";
import Homes from "../components/homes";
import New from "../components/New";
import Set from "../components/Set";
import Works from "../components/works";
import Footer from "../components/footer";

export default function Home() {
    return (<>
        <Header />
        <HomeComponent />
        <Homes/>
        <Chance/>
        <New/>
        <Set/>
        <Works/>
        <Footer/>
    </>
    )

}