import { useEffect, useState } from "react";
import "../scss/style.css"; 
import FrenchApi from "./FrenchApi";



function ChuckNorrisFacts() {
    const [ChuckNorrisFactsData, setChuckNorrisFactsData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(FrenchApi);
            const data = await response.json();
            console.log(data)
            setChuckNorrisFactsData(data.results[0])
        }

        fetchData();
    }, []);

    if (!ChuckNorrisFactsData) {
        return <span className="loader"></span>
    }

    const {
        joke: Facts,
        created_at: date
    } = ChuckNorrisFactsData;

    return (
        <div>
            <h1>{Facts}</h1>
        </div>
    )
};



export default ChuckNorrisFacts;