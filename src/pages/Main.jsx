import Nav from "../components/Nav";
import MainCard from "../components/Cards";
import "../styles/main.css";
import ApiComponent from "../components/api";

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
            <ApiComponent />
            <MainCard />
        </div>
    );
}

export default Main;
