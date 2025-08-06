import React from "react";
// import TeamTabs from "./TeamTabs";
// import TeamMembers from "./TeamMembers";
import AboutHero from "./AboutHero";
import TaskForceTeam from "./TaskForceTeam";
import AboutUsTopSection from "./AboutUsTopSection";
import OurTeams from "./OurTeams";
import AdvisoryTeam from "./FacultyMember";

function AboutUs() {
    // const [activeTeamCategory, setActiveTeamCategory] = useState("TEAM LEADS");
    // const [globalLoadedImages, setGlobalLoadedImages] = useState({});

    // const handleGlobalImageLoad = (imageKey) => {
    //     setGlobalLoadedImages(prev => ({ ...prev, [imageKey]: true }));
    // };

    return (
        <div>
            {/* <Navbar /> */}
            <AboutUsTopSection />
            <AboutHero />
            <AdvisoryTeam />
            <div
                style={{
                    background:
                        "linear-gradient(177.36deg, rgba(4, 25, 34, 0) 2.21%, rgba(4, 25, 34, 0.405) 62.35%, rgba(0, 0, 0, 0.81) 122.5%), linear-gradient(179.87deg, #000000 -45.19%, rgba(5, 26, 36, 0.75) 27.35%, rgba(4, 25, 34, 0.1) 99.89%)"
                }}
            >
            <TaskForceTeam />
            <OurTeams /> 

                {/* Uncomment when needed:
                <TeamTabs

                {/* Uncomment when needed:
                <TeamTabs
                    teamCategories={teamCategories}
                    activeTeamCategory={activeTeamCategory}
                    setActiveTeamCategory={setActiveTeamCategory}
                />

                <TeamMembers
                />

                <TeamMembers
                    activeTeamCategory={activeTeamCategory}
                    teamMembers={teamMembers}
                    globalLoadedImages={globalLoadedImages}
                    onGlobalImageLoad={handleGlobalImageLoad}
                />
                */}

            {/* <Footer /> */}
        </div>
    </div>
    );
}

export default AboutUs;
