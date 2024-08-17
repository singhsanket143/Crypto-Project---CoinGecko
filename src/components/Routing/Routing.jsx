import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import PageLoader from "../PageLoader/PageLoader";

const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));

function Routing() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >

                <Route index element={
                    <Suspense fallback={<PageLoader />}>
                        <Home />
                    </Suspense>
                } />
                <Route path="/details/:coinId" element={
                    
                    <Suspense fallback={<PageLoader />}>
                        <CoinDetailsPage />
                    </Suspense>
                
                } />

            </Route>
            
        </Routes>
    )
}

export default Routing;