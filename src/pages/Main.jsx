import Nav from "../components/Nav";
import MainCard from "../components/Cards";
import Footer from "../components/Footer";
import "../styles/main.css";
import ApiComponent from "../components/DisplayAnime";

const Main = () => {

    const mainStyling = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--font-wt)",
    };
    

    return (
        <div id="main" style={mainStyling}>
            <Nav />
            <MainCard />
            <Footer />
        </div>
    );
}

export default Main;
