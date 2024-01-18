import Nav from "../components/Nav";
import Cards from "../components/Cards";
import Search from "../components/Search";
import "../styles/main.css";
import axios from "axios";
import { useEffect } from "react";
import ApiComponent from "../api/api";

const Main = () => {


    return (
        <div id="main">
            <Nav />
            <Search />
            <h1>Home</h1>
            <h2>Top 10 Anime</h2>
            <Cards />
            <ApiComponent />
        </div>
    );
}

export default Main;
