import React from "react";

import Banner from "./PageComponents/Banner";
import Experiences from "./PageComponents/Experiences";
import Team from "./PageComponents/Team";
import Topbar from "./PageComponents/Topbar";


function App() {
    // Create refs for each section
    const aboutRef = React.createRef();
    const experiencesRef = React.createRef();
    const teamRef = React.createRef();

    return (
        <div className="App">
            <Topbar refList={{ "about": aboutRef, "experiences": experiencesRef, "team": teamRef }}></Topbar>
            <div className="scroll-content">
                <Banner ref={aboutRef}></Banner>
                <Experiences ref={experiencesRef} experiences={
                    [
                        {
                            image: "https://tr.rbxcdn.com/3be7abea60a2b51e79ef87415ba0b2b2/768/432/Image/Png",
                            title: "🐻 Fractured Franchise",
                            description: `🐻 Immerse yourself in a Five Nights at Freddy's experience like never before with the debut of the FNAF MOVIE MAP and FNAF PROP HUNT! Play as beloved characters from the franchise, take on the role of a nightguard, or simply delve into the eerie world of Freddy's!
                            
                            📝 Updates for our game may take some time, but rest assured, each one is filled with fresh, exciting content!!
                            
                            📈 We're currently hard at work on numerous quality-of-life enhancements and bug fixes. Keep an eye out for upcoming improvements!
                            `,
                            link: "https://www.roblox.com/games/7377364733"
                        }
                    ]
                }></Experiences>
                <Team title="Developers" desc="People who actively develop our game."
                    ref={teamRef} members={
                        [
                            {
                                name: "Fazey",
                                role: "Founder, Music, Environments, Models",
                                image: "https://i.imgur.com/iM4wkUn.png",
                                link: "https://www.roblox.com/users/94162462/profile"
                            },
                            {
                                name: "Zwei",
                                role: "Lead Gameplay Engineer",
                                image: "https://avatars.githubusercontent.com/u/83478397?v=4",
                                link: "https://www.roblox.com/users/193503404/profile"
                            },
                            {
                                name: "Nissanette",
                                role: "Lead 3D Artist",
                                image: "https://i.imgur.com/IZEz0ff.png",
                                link: "https://www.roblox.com/users/97803966/profile"
                            },
                            {
                                name: "Polly",
                                role: "Lead Project Manager & Marketing",
                                image: "https://i.imgur.com/FKLij8A.png",
                                link: "https://www.roblox.com/users/96565404/profile"
                            },
                        
                            {
                                name: "Torre",
                                role: "2D Artist & Graphics Designer",
                                image: "https://i.imgur.com/X1NTKJr.png",
                                link: "https://twitter.com/TorreTheFool"
                            },
                            {
                                name: "Sarah",
                                role: "3D Artist",
                                image: "https://i.imgur.com/4yCqyil.png",
                                link: "https://www.roblox.com/users/180000298/profile"
                            }
                        ]
                    }></Team>
                <Team title="Contributors" desc="People who contribute to the game occasionally."
                     members={
                        [
                            {
                                name: "JkGb",
                                role: "Animator",
                                image: "https://i.imgur.com/IYPQiyi.png",
                                link: "https://www.roblox.com/users/128307136/profile"
                            },
                            {
                                name: "BackspaceRGB",
                                role: "Programmer",
                                image: "https://i.imgur.com/yO67tZe.png",
                                link: "https://www.roblox.com/users/330661714/profile"
                            },
                            {
                                name: "Springy",
                                role: "Voice Acting",
                                image: "https://i.imgur.com/J1vgpkf.png",
                                link: "https://twitter.com/SpringyTheC_S"
                            },
                            {
                                name: "ToxZinn",
                                role: "Concept Art",
                                image: "https://i.imgur.com/qlUdwgF.png",
                                link: "https://twitter.com/ToxZinn"
                            },
                            {
                                name: "katfanf",
                                role: "Marketing & Moderation",
                                image: "https://i.imgur.com/YolqnqA.png",
                                link: "https://twitter.com/katsterlingfan"
                            },
                            {
                                name: "2jammers",
                                role: "Programming Helper",
                                image: "https://i.imgur.com/my6Blz7.jpeg",
                                link: "https://github.com/2jammers"
                            },
                            {
                                name: "odeadspace",
                                role: "3D Artist",
                                image: "https://i.imgur.com/GOy543c.png",
                                link: "https://twitter.com/odeadspace"
                            }
                        ]
                    }></Team>
                <Team title="Discord Staff" desc="Our awesome Discord team!"
                     members={
                        [
                            {
                                name: "Mushyfoxy",
                                role: "Discord Moderation",
                                image: "https://i.imgur.com/Q6YTdbp.png",
                                link: "https://www.roblox.com/users/634645974/profile"
                            },
                            {
                                name: "ElementEarth",
                                role: "Discord Moderation",
                                image: "https://i.imgur.com/i37zrVI.jpeg",
                                link: "https://x.com/elementearth100"
                            },
                            {
                                name: "Eddison",
                                role: "Discord Moderation",
                                image: "https://i.imgur.com/aK3PHAQ.jpeg",
                                link: "https://www.roblox.com/users/149477778/profile"
                            }
                        ]
                    }></Team>
                <Team title="QA" desc="Our amazing QA team!"
                    members={
                        [
                            {
                                name: "Ritoriam",
                                role: "QA",
                                image: "https://i.imgur.com/jCGcAuM.jpeg",
                                link: "https://twitter.com/Ritoriam3D"
                            },
                            {
                                name: "Duo",
                                role: "QA",
                                image: "https://i.imgur.com/MCGnxxZ.png",
                                link: "https://www.roblox.com/users/1593202495/profile"
                            },
                            {
                                name: "Fredder Fastbear",
                                role: "QA",
                                image: "https://i.imgur.com/BiordUD.png",
                                link: "https://twitter.com/fredderfastbear"
                            },
                            {
                                name: "FE4RR_FUL",
                                role: "QA",
                                image: "https://i.imgur.com/YBh0ZSt.png",
                                link: "https://www.roblox.com/users/124273950/profile"
                            },
                            {
                                name: "Khaled",
                                role: "QA",
                                image: "https://i.imgur.com/HQyRmWF.png",
                                link: "https://twitter.com/DarkestSFMZ"
                            },
                            {
                                name: "TheRealThing",
                                role: "QA",
                                image: "https://i.imgur.com/qrutcE6.png",
                                link: "https://www.roblox.com/users/1792112123/profile"
                            },
                            {
                                name: "Vintii",
                                role: "QA",
                                image: "https://i.imgur.com/CXap13i.png",
                                link: ""
                            },
                            {
                                name: "crem800",
                                role: "QA",
                                image: "https://i.imgur.com/Hcv2bhO.png",
                                link: "https://www.roblox.com/users/54568537/profile"
                            },
                            {
                                name: "Aloteran",
                                role: "QA",
                                image: "https://i.imgur.com/7msZaAC.png",
                                link: "https://twitter.com/AloteranReal"
                            },
                        ]
                    }></Team>
            </div>
        </div>
    );
}

export default App;
