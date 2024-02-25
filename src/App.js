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
                            description: `🐻 A Five Nights at Freddy's game featuring the first ever FNAF MOVIE MAP and FNAF PROP HUNT! You can play as all your favorite characters from Five Nights at Freddy's, be a nightguard or just explore!

                            📈 We are actively updating this game almost every day. We add new characters and content at least bi-weekly.
                            
                            📝 Lots of QoL changes and bug fixes are actively being worked on. Stay tuned for more improvements!
                            `,
                            link: "https://www.roblox.com/games/7377364733"
                        }
                    ]
                }></Experiences>
                <Team title="Developers" desc="People who actively develop our game."
                    ref={teamRef} members={
                        [
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
                                link: "https://www.roblox.com/users/193503404/profile"
                            },
                            {
                                name: "Polly",
                                role: "Lead Project Manager & Marketing",
                                image: "https://i.imgur.com/FKLij8A.png",
                                link: "https://www.roblox.com/users/96565404/profile"
                            },
                            {
                                name: "Fazey",
                                role: "Founder, Music, Environments, Models",
                                image: "https://i.imgur.com/iM4wkUn.png",
                                link: "https://www.roblox.com/users/94162462/profile"
                            },
                            {
                                name: "JkGb",
                                role: "Lead Animator",
                                image: "https://i.imgur.com/IYPQiyi.png",
                                link: "https://www.roblox.com/users/128307136/profile"
                            },
                            {
                                name: "Torre",
                                role: "2D Artist & Graphics Designer",
                                image: "https://i.imgur.com/X1NTKJr.png",
                                link: "https://twitter.com/TorreTheFool"
                            }
                        ]
                    }></Team>
                <Team title="Contributors" desc="People who contribute to the game occasionally."
                    ref={teamRef} members={
                        [
                            {
                                name: "BackspaceRGB",
                                role: "Occasional Programmer",
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
                                name: "katfanf",
                                role: "Marketing & Moderation",
                                image: "https://i.imgur.com/YolqnqA.png",
                                link: "https://twitter.com/katsterlingfan"
                            },
                            {
                                name: "lolmansreturn",
                                role: "Programming Helper",
                                image: "https://i.imgur.com/VVcPfJG.png",
                                link: ""
                            }
                        ]
                    }></Team>
                <Team title="Discord Staff" desc="Our awesome Discord team!"
                    ref={teamRef} members={
                        [
                            {
                                name: "ToxZinn",
                                role: "Lead Discord Moderation",
                                image: "https://i.imgur.com/qlUdwgF.png",
                                link: "https://twitter.com/ToxZinn"
                            },
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
                            }
                        ]
                    }></Team>
                <Team title="QA" desc="Our amazing QA team!"
                    ref={teamRef} members={
                        [
                            {
                                name: "Ritoriam",
                                role: "QA",
                                image: "https://i.imgur.com/jCGcAuM.jpeg",
                                link: "https://twitter.com/Ritoriam3D"
                            },
                            {
                                name: "Vintii",
                                role: "QA",
                                image: "https://i.imgur.com/CXap13i.png",
                                link: ""
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
                            }
                        ]
                    }></Team>
            </div>
        </div>
    );
}

export default App;
