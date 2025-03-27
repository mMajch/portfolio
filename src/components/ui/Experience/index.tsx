import Image from "next/image"
import Tags from "../Tags"

const experiences = [
    {
        role: "Senior Mobile Engineer and Teamlead",
        company: "Codziennie Fit",
        location: "Remote",
        workload: "Freelance",
        from: "Nov 2024",
        to: "Present",
        description: "20k+ users. Fitness app with workouts and exercise programs. Top 1 in Polish App Store (in Fitness and Health) on the first day.",
        logo: "/logocf.png",
        url: "https://codzienniefit.app/",
        tags: ["React Native", "TypeScript", "Azure", "Mixpanel", "Firebase", "Tamagui", "Team managment", "User Research", "Data"],
    },
    {
        role: "Chief Technology Officer",
        company: "Silber Salon GmbH",
        location: "Berlin, DE",
        workload: "Full-time",
        from: "Jul 2024",
        to: "Nov 2024",
        description: "50k+ users. AI tool to help seniors solve technical problems ",
        logo: "/logolotti.png",
        url: "https://www.lotti.ai/",
        tags: ["React Native", "React", "Next.js", "TypeScript", "Open AI API"]
    },
    {
        role: "Product Manager and Strategist",
        company: "Instant Note for Notion",
        location: "Remote",
        workload: "Side project",
        from: "Jan 2023",
        to: "Jan 2025",
        description: "30k+ users. The fastest way to save a tagged note to Notion.",
        logo: "/logonote.jpg",
        url: "https://instantnotionapp.com/",
        tags: ["Management", "Design", "Data", "User Research"],

    },
    {
        role: "Senior React Native Engineer",
        company: "Happy Habits Solutions GmbH",
        location: "Berlin, DE",
        workload: "Full-time",
        from: "Mar 2021",
        to: "Mar 2024",
        description: "App for content creators. Unfortunately the start up did not succeed.",
        logo: "/actiodaily_logo.jpeg",
        url: "https://www.instagram.com/actiodaily/",
        tags:  ["React Native", "React", "TypeScript"]

    },
    {
        role: "Mobile Engineer and Co-founder",
        company: "CZTS",
        location: "Remote",
        workload: "Freelance",
        from: "Mar 2020",
        to: "Mar 2021",
        description: "200k+ users. Sex education app in Polish.",
        logo: "/logoCZTS.jpeg",
        url: "https://web.coztymseksemapp.pl/",
        tags: ["React Native", "TypeScript", "Azure", "Firebase", "Team management", "User Research", "Data"],
    },
    {
        role: "Senior Full Stack Engineer",
        company: "ValueLogic",
        location: "Wrocław, PL",
        workload: "Full-time",
        from: "Seb 2020",
        to: "Feb 2021",
        description: "Various project with many clients (Softwarehouse).",
        logo: "/logoVL.png",
        url: "https://valuelogic.one/",
        tags:  ["React Native", "React", "TypeScript", "Python", "Vue.js", "Angular", "GraphQL"]
    },
    {
        role: "Mobile Engineer",
        company: "4soft",
        location: "Wrocław, PL",
        workload: "Full-time",
        from: "May 2020",
        to: "Sep 2020",
        description: "A short-term project for the medical industry.",
        logo: "/4softco_logo.jpeg",
        url: "https://www.4soft.co/",
        tags:  ["React Native", "React", "TypeScript", "GraphQL"]

    },
    {
        role: "From Intern to Software Engineer",
        company: "ValueLogic",
        location: "Wrocław, PL",
        workload: "Full-time",
        from: "Sep 2019",
        to: "Apr 2020",
        description: "Various project with many clients (Softwarehouse).",
        logo: "/logoVL.png",
        url: "https://valuelogic.one/",
        tags:  ["React Native", "React", "Python", "Vue.js", "Angular"]

    },
]

const Experience = () => {
    return (
    <div className="lg:max-w-xl flex flex-col lg:rounded-xl bg-white p-1">

        {experiences.map((exp, index) => 
            <div key={index} className="flex items-start bg-gray-50 hover:bg-gray-100 m-1 rounded-lg py-4">
                {exp.url && <a target="_blank" href={exp.url} rel="noopener noreferrer"><Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image></a>}
                {!exp.url && <Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image>}

                <div className="flex-1" style={{overflowWrap: "anywhere"}}>
                    <div className="flex flex-space-between">
                        <span className="flex-1 font-semibold mb-2">{exp.role}</span>
                        {/*<span className="mr-4"><Tags tags={[exp.workload || ""]}></Tags></span>*/}
                    </div>
                    <div className="flex-col sm:flex-row flex gap-3 text-sm mb-3 pr-5 text-slate-700 font-medium">
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor"
                                      d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z"></path>
                            </svg>
                            {exp.url && <a target="_blank" href={exp.url} rel="noopener noreferrer">{exp.company}</a>}
                            {!exp.url && <span>{exp.company}</span>}
                        </span>
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor"
                                      d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path>
                            </svg>
                            {exp.location}
                        </span>
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor"
                                      d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></path>
                            </svg>
                            {exp.from} - {exp.to}
                        </span>
                    </div>
                    <div className="pr-5 text-slate-700">
                        {exp.description}
                    </div>
                    {exp.tags && <Tags tags={exp.tags} className="my-4"></Tags>}

                    <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline focus:ring focus:ring-blue-300 my-4 rounded"
                    >
                        <span>{exp.url}</span>
                    </a>


                </div>
            </div>
        )}
    </div>
    )
}

export default Experience
