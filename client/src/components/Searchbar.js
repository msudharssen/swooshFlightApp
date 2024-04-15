import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import Flightdata from './Flightdata';

const Searchbar = function() {
    const [fnum, setFnum] = useState("");
    const [results, setResults] = useState([]);

    function getInfo(word){
        setFnum(word);
        console.log(fnum);
    }

  

    async function sendResult(){

        let path = `http://localhost:3002/flights/${fnum}`;
        let response = await fetch(path);
        let data = await response.json();
        let alldata = data.info;
        setResults(alldata);
        console.log(results);
        console.log(response);
       
    }
    return(
        <>
        <div className="flex items-center place-content-center">
        <Input className="w-2/5" placeholder="Enter Flight Number" onChange={e => getInfo(e.target.value)}/>
        <Button className="w-24" onClick={sendResult}>Track</Button>
        </div>
        {results.length > 0 ? <Flightdata data={results}></Flightdata> : <div>HELLO</div>}
        </>
    )
}

export default Searchbar;
