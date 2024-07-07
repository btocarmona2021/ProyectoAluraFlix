import {Header} from "./Components/Header/Header.jsx";
import {EstilosGlobales} from "./Components/EstilosGlobales/EstilosGlobales.jsx";
import {BannerMain} from "./Components/BannerMain/BannerMain.jsx";
import {Cards} from "./Components/Cards/Cards.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
function App() {


    return (
        <>
            <EstilosGlobales/>
            <Header/>
            <BannerMain/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default App
