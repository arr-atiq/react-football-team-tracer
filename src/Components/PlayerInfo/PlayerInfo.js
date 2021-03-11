import { Button } from 'react-bootstrap';
import React from 'react';
import './PlayerInfo.css';
import { useHistory } from 'react-router';

const PlayerInfo = (props) => {
    const { idTeam, strTeam, strTeamBadge } = props.team;
    const history = useHistory();
    const showInformation = id =>{
        history.push(`/playerInfo/${idTeam}`)
    }
    return (
        <div className="container">
            <div className="team-categories">
                <div className="team-info">
                    <img src={strTeamBadge} alt="" />
                    <h5>{strTeam}</h5>
                    <small>Sports Type: FootBall</small>
                    <div className="main-btn">
                        <Button onClick={()=> showInformation(idTeam)} variant="primary">Explore</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;