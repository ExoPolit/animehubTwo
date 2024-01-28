import Nav from "../components/Nav";
import ApiComponent from "../components/Api";
import Footer from "../components/Footer";
import "../styles/main.css";

const Main = () => {
    

    const mainStyling = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--font-wt)",
    };
    

    return (
        <div id="main" style={mainStyling} >
            <Nav />
            <ApiComponent />
            <Footer />
        </div>
    );
}

export default Main;
