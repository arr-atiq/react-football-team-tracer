import React, { useEffect, useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import './Home.css';

const Home = () => {
    const [home, setHome] = useState([]);
    // console.log(home);
    useEffect(() => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`);
        fetch(url)
        .then(res=> res.json())
        .then(data => setHome(data.teams));
    }, [])
    return (
        <div className="player-card">
            <div className="player-info">
            {
                home.map(team => <PlayerInfo 
                    key = {team.idTeam}
                    team={team}></PlayerInfo>)
            }
            </div>
        </div>
    );
};

export default Home;