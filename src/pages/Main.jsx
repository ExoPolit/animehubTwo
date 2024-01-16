import Nav from "../components/Nav";
import Cards from "../components/Cards";
import Search from "../components/Search";
import "../styles/main.css";

const Main = () => {
    return (
        <div id="main">
            <Nav />
            <Search />
            <h1>Home</h1>
            <Cards />
        </div>
    );
}

export default Main;
