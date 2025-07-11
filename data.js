export const bio = [
    `Software Engineer with years of backend development experience using Spring Boot and Django.<br/>Bachelor’s degree in Computer Engineering from Iran University of Science and Technology.<br/>Bronze Medalist in the Iranian National Olympiad in Informatics.`,
    `I’m always excited to explore new ideas and opportunities. If you think we could collaborate in any way, let’s connect!`
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, C, C++, Java, Kotlin",
        color: "1",
        percentage: "80",
    },
    {
        title: "Datebases",
        skillName: "PostgreSQL, MongoDB, Elasticsearch, Apache Kafka, Redis",
        color: "6",
        percentage: "75",
    },
    {
        title: "Others",
        skillName: "Competitive Programming, Algorithms",
        color: "4",
        percentage: "90",
    },
    {
        title: "Python frameworks",
        skillName: "Django, Django-Rest",
        color: "7",
        percentage: "70",
    },
    {
        title: "Java frameworks",
        skillName: "Spring, Spring-Boot",
        color: "3",
        percentage: "80",
    },
    {
        title: "Data and ML",
        skillName: "Pandas, Numpy, TensorFlow, Keras",
        color: "5",
        percentage: "60",
    },
    {
        title: "Native Language",
        skillName: "Persian (Farsi)",
        color: "2",
        percentage: "100",
    },
    {
        title: "Foreign Language",
        skillName: "English[IELTS]: 7 (L: 7.5, W: 6, R: 7.5, S: 6)",
        color: "1",
        percentage: "77",
    },
];

export const projects = {
    SoftwareProjects: [
        {
            projectName: "MHQ - Software Engineering",
            image: "images/mhq.jpg",
            summary:
                "A collaboration platform for automated API development using Python, Django, and PostgreSQL as the primary database.",
            preview: "https://github.com/mhq-dev",
            techStack: ["python", "django", "docker", "celery", "celery-beat"],
        },
        {
            projectName: "TalkZone - System Design \& Analysis",
            image: "images/2319.jpg",
            summary:
                "A dating app similar to Tinder (with opening messages instead of photos) based on Python, Django, and PostgreSQL as the main database.",
            preview: "https://github.com/twenty-three-nineteen",
            techStack: ["python", "django", "django-rest-framework", "django-channels"],
        },
    ],
};

export const experience = [
    {
        title: "Metrix",
        duration: "Feb. 2025 - Present",
        subtitle: "Technical Team Lead",
        details: [
            `Led a <b>4-developer team to manage the migration of automation microservices into a unified monolith, enhancing development velocity by 2x.`,
            `Implemented a flexible deployment model for the new <b>monolith, enabling vertical scaling and resource optimization.`,
            `Improved internal and technical documentation and feature development, supporting delivery of <b>2M+ messages daily.`
        ],
        tags: ["Spring boot", "Kotlin", "Kafka", "Elasticsearch", "MongoDB", "Agile"],
        icon: "bar-chart",
    },
    {
        title: "Metrix",
        duration: "Feb. 2023 - Feb. 2025",
        subtitle: "Software Engineer",
        details: [
            `Developed and integrated marketing automation microservices (<b>Kotlin</b>, <b>Spring Boot</b>, <b>MongoDB</b>, <b>Elasticsearch</b>) via <b>Kafka</b>.`,
            `Expanded initial features: <b>Campaign statistics, <b>Journey</b> flow control nodes, and live user <b>Segments</b>.`,
            `Reduced sending time of <b>10M+ messages</b> from hours to under one hour by implementing batching techniques and <b>Redis</b>-based caching. Performance was validated through <b>end-to-end load testing</b> with JMeter.`,
            `Deployed and monitored services using <b>Kubectl</b>, <b>Grafana</b>, and <b>Kibana</b>.`,
        ],
        tags: ["Spring Boot", "Kotlin", "Kafka", "MongoDB", "Elasticsearch"],
        icon: "bar-chart",
    },
    {
        title: "Pinket",
        duration: "Aug. 2020 - Nov. 2021",
        subtitle: "Back-End Developer",
        details: [
            `Developed a <b>Spring Boot</b> service backed by <b>PostgreSQL</b> to fetch inventory data from external retailers via APIs, file uploads, or webhooks.`,
            `Briefly contributed to a shelf inventory forecasting service by refining input data to improve model accuracy.`,
            `Built features for the shopper's <b>Android</b> app to enable shelf availability reporting.`,
        ],
        tags: ["Spring Boot", "Java", "PostgreSQL", "Python", "Pandas", "MongoDB", "Android"],
        icon: "shopping-cart",
    },
];

export const education = [
    {
        title: "B.S. in Computer Engineering",
        duration: "Sep. 2018 - Sep. 2023",
        subtitle: "Iran University of Science and Technology (IUST)",
        details: [
            `Ranked 4th among Iran universities based on QS ranking`,
            `GPA - Last two years [via 60 credits]: 3.85 (17.98 / 20)`,
            `GPA - Overall [via 143 credits]: 3.38 (16.56 / 20)`,
            `Final Thesis: Data collection and automatic labeling for dense video captioning models`,
        ],
        tags: [],
        icon: "graduation-cap",
    },
    {
        title: "Diploma in Mathematics and Physics Discipline",
        duration: "2014 - 2018",
        subtitle: "Salam High School",
        details: [
            `GPA: 4/4`,
        ],
        tags: [],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/amirh-khali",
            },
            {
                text: "Codeforces",
                link: "https://codeforces.com/profile/irtTbow",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Terminal",
                link: "https://amirh-khali.github.io/terminal/",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/dloneswordsman/",
            },
            {
                text: "Instagram",
                link: "https://www.instagram.com/khaaliofficial/",
            },
            {
                text: "Telegram",
                link: "https://t.me/DLoneSwordsman/",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vinay Somawat.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
