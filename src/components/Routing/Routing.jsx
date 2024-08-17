import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";

function Routing() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:coinId" element={<CoinDetailsPage />} />
        </Routes>
    )
}

export default Routing;