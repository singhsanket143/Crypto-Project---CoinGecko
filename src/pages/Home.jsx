import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <CoinTable />
        </>
    );
}

export default Home;