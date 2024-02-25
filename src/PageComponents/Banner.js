import React from "react";

import "./Banner.scss";
import Background from "../Images/SpawnpointBanner.svg"
import DiscordIcon from "../Images/Discord_Icon.svg"
import RobloxIcon from "../Images/Roblox_Icon.svg"


import Button from "../Widgets/Button";

class Banner extends React.Component {
    constructor() {
        super();

        this.primaryDiv = React.createRef();
    }

    render() {
        return (
            <div ref={this.primaryDiv} className="banner" id="about">
                <img className="banner-background" src={Background} alt="Banner Background"></img>
                <div className="banner-content">
                    <h1>Spawnpoint Interactive</h1>
                    <p>A group of <b>6 passionate developers</b> with a goal of creating top-notch FNAF experiences on Roblox!</p>
                    <div className="banner-buttons">
                        <Button type="discord" link="https://discord.gg/spawnpoint-interactive"><img src={DiscordIcon} alt="Discord Icon"></img>Join the Discord</Button>
                        <Button type="roblox" link="https://www.roblox.com/groups/3024886"><img src={RobloxIcon} alt="Roblox Icon"></img>Join the Roblox Group</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;