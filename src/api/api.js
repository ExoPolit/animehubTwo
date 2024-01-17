import axios from "axios";
import { useEffect } from "react";
import React from "react";



// fetch apiURL with axios
const ApiComponent = () => {

const apiUrl = `https://api.jikan.moe/v4`;


    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (   
        <div>
            <h1>API</h1>
        </div>
    )

}

export default ApiComponent;
