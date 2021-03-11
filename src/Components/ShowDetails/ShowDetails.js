import React from 'react';
import './ShowDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faFlag, faTransgender, faUserFriends, faVenusDouble } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faSteam } from "@fortawesome/free-brands-svg-icons";

const ShowDetails = (props) => {
    const { strTeam, intFormedYear, strLeague, strStadium, strTeamLogo, strCountry, strDescriptionEN, strTeamBanner, strGender } = props.playerInfo
    return (
        <div className="container">
            <div className="logo-team">
                <img src={strTeamLogo} alt="" />
            </div>
            <div className="row">
                <div className="col-md-5 main-card">
                    <h2>{strTeam}</h2>
                    <h5><i><FontAwesomeIcon icon={faUserFriends} /></i> {strLeague}</h5>
                    <h5><i><FontAwesomeIcon icon={faVenusDouble} /></i> {strStadium}</h5>
                    <h5><i><FontAwesomeIcon icon={faSteam} /></i> {intFormedYear}</h5>
                    <h5><i><FontAwesomeIcon icon={faFlag} /></i> {strCountry}</h5>
                    <h5><i><FontAwesomeIcon icon={faTransgender} /></i> {strGender}</h5>
                </div>
                <div className="col-md-5 img-banner">
                    <img src={strTeamBanner} alt="" />
                </div>
            </div>
            <div className="para-div">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="all-icon">
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube-social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook-social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/jamesqquick" className="twitter-social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="instagram-social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="linkedin-social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    );
};

export default ShowDetails;
