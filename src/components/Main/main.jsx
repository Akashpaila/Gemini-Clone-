import React from "react"
import './main.css'
import {assets} from '../../assets/assets'

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Power Tools Finder</p>
                <img src={assets.user_icon}alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Heyyyy,</span></p>
                    <p>How can I assist you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Which power tool is best for making straight, long cuts in plywood?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>What power tool is best for making rip cuts in lumber?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>What power tool is best for removing damaged sections of flooring?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Which power tool is the go-to choice for creating holes in different surfaces?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter your query here..." />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Bosch Project in Collabaration with IIIT Raichur 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main 