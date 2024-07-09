import {Header} from "./Components/Header/Header.jsx";
import {EstilosGlobales} from "./Components/EstilosGlobales/EstilosGlobales.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./Pages/Home/Home.jsx";
import {AgregarVideo} from "./Pages/AgregarVideo/AgregarVideo.jsx";

function App() {
    return (
        <>
            <Router>
                <EstilosGlobales/>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/agregar'} element={<AgregarVideo/>}/>
                </Routes>
                <Footer/>
            </Router>





            {/*<EstilosGlobales/>*/}
            {/*<Header/>*/}
            {/*<AgregarVideo/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default App
