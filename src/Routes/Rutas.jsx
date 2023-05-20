import {Route, Routes} from "react-router-dom";
import {Menu} from "../assets/shared/Menu/Menu.jsx";
import {Home} from "../Home/Home.jsx";
import {Footer} from "../assets/shared/Footer/Footer.jsx";

export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}