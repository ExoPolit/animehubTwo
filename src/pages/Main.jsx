import Nav from "../components/Nav";
import Search from "../components/Search";
import "../styles/main.css";
import axios from "axios";
import { useEffect } from "react";
import ApiComponent from "../components/api";

const Main = () => {


    return (
        <div id="main">
            <Nav />
            <Search />
            <h1>Home</h1>
            <ApiComponent />
        </div>
    );
}

export default Main;
