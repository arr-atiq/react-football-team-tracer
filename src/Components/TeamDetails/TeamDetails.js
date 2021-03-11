import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowDetails from '../ShowDetails/ShowDetails';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    // console.log({idTeam});
    const [info, setInfo] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInfo(data.teams))
    },[idTeam])
    return (
        <div>
            {
                info.map(playerInfo => <ShowDetails playerInfo={playerInfo}></ShowDetails>)
            }
        </div>
    );
};

export default TeamDetails;