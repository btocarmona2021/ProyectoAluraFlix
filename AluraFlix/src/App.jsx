import {Header} from "./Components/Header/Header.jsx";
import {EstilosGlobales} from "./Components/EstilosGlobales/EstilosGlobales.jsx";
import {BannerMain} from "./Components/BannerMain/BannerMain.jsx";
import {Cards} from "./Components/Cards/Cards.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {AgregarVideo} from "./Pages/AgregarVideo/AgregarVideo.jsx";


function App() {
    return (
        <>
            <EstilosGlobales/>
            <Header/>
            <AgregarVideo/>
            <BannerMain/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default App
