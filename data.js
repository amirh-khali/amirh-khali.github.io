export const bio = [
    "Hello there, This is Amirhossein Ahmadi.",
    `I have recently graduated with a B.S.c degree in Computer Engineering from the Iran University of Science and Technology (IUST).`,
    `I'm also a former student of the <b>Computer Olympiad</b>, with a background as a Backend Developer (<b>Spring</b>, <b>Django</b>) and limited work in the field of Data Science.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Proficient at",
        skillName: "Python, C, C++, Java",
        color: "1",
        percentage: "80",
    },
    {
        title: "Familiar with",
        skillName: "Assembly, C\#, Verilog, Arduino",
        color: "6",
        percentage: "50",
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
        percentage: "70",
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
        skillName: "English",
        color: "1",
        percentage: "70",
    },
];

export const projects = {
    Courses: [
        {
            projectName: "Embedded and Real-Time Systems",
            image: "images/IoT.jpeg",
            summary:
                "Covers various topics such as implementing embedded systems on STM32 board, statecharts, and working with Arduino board via MQTT protocols",
            preview: "https://github.com/amirh-khali/iot-and-embedded-systems-course-00012/tree/main",
            techStack: ["arduino", "statecharts", "scheduling", "stm32", "android"],
        },
        {
            projectName: "Deep Learning",
            image: "images/deep-learning.jpg",
            summary:
                "Covers various topics in deep learning such as Neural networks, Convolutional neural networks, Recurrent neural networks, Generative adversarial networks, Transformer models.",
            preview: "https://github.com/AmirH-KHALI/deep-learning-course-00011",
            techStack: ["python", "neural-network", "keras", "tensorflow", "rnn", "transformers"],
        },
        {
            projectName: "Fundamentals of Computational Intelligence",
            image: "images/computational-intelligence.jpeg",
            summary:
                "Covers various implementation such as SOFM, MLP, Hopfield Network, ... from scratch.",
            preview: "https://github.com/AmirH-KHALI/computational-intelligence-course",
            techStack: ["python", "juputer-notebook", "matplotlib", "scikit‑learn"],
        },
        {
            projectName: "Artificial Intelligence and Expert Systems",
            image: "images/pacman.png",
            summary:
                "Solutions for Pac-Man practical projects of UC Berkeley\’s CS 188 course in 2019.",
            preview: "https://github.com/AmirH-KHALI/artificial-intelligence-course-99001",
            techStack: ["python", "q-learning", "a-star", "alpha-beta-pruning", "expectimax", "minmax"],
        },
        {
            projectName: "Analysis and Design of Algorithms",
            image: "images/algorithms.jpg",
            summary:
                "Solutions for Algorithms on Graphs, Algorithms on Strings, and Advanced Algorithms and Complexity Courses in UCSD\’s Data Structures and Algorithms specialization.",
            preview: "https://github.com/AmirH-KHALI/algorithm-design-course-98992",
            techStack: ["c-sharp", "dotnet", "algorithms", "data-structures"],
        },
        {
            projectName: "Data Structures",
            image: "images/data-structure.webp",
            summary:
                "Solutions for Algorithmic Toolbox and Data Structures in UCSD\’s Data Structures and Algorithms specialization.",
            preview: "https://github.com/AmirH-KHALI/data-structures-course-98991",
            techStack: ["c-sharp", "dotnet", "algorithms", "data-structures"],
        },
    ],
    DataAndAIProjects: [
        {
            projectName: "Data collection and automatic labeling for dense video captioning models [Final Thesis]",
            image: "images/final-thesis.jpg",
            summary:
                "Two implementation for data labeling. The first method is using the raw description provided by YouTube for videos and the second one is using raw subtitles of the videos.",
            preview: "https://github.com/amirh-khali/aavdc-collection",
            techStack: ["python", "data-collection", "video-captioning", "auto-annotation"],
        },
        {
            projectName: "MPA Classification",
            image: "images/mpa.jpg",
            summary:
                "Movie classification Based on plot summary for different ratings.",
            preview: "https://github.com/AmirH-KHALI/mpa-classification-using-plot",
            techStack: ["python", "jupyter-notebook", "transformes", "bert", "imdb"],
        },
        {
            projectName: "OCR",
            image: "images/ocr.png",
            summary:
                "OCR (Optical Character Recognition) for Iranian ID and credit cards.",
            preview: "https://github.com/meliiwamd/OpticalCharacterRecognition",
            techStack: ["python", "juputer-notebook", "pillow", "open-cv"],
        },
    ],
    GameProjects: [
        {
            projectName: "Super Mario Bros",
            image: "images/super-mario.jpg",
            summary:
                "A platformer game which the player controls Mario as they traverse the Mushroom Kingdom to rescue Princess Peach from Bowser.",
            preview: "https://github.com/amirh-khali/mario",
            techStack: ["c-sharp", "unity"],
        },
        {
            projectName: "Flappy Bird",
            image: "images/flappy-bird.jpg",
            summary:
                "A side-scroller game where the player controls a bird, attempting to fly between columns of green pipes without hitting them.",
            preview: "https://github.com/amirh-khali/flappy-bird",
            techStack: ["c-sharp", "unity"],
        },
        {
            projectName: "Sad Tap",
            image: "images/sad-tap.jpg",
            summary:
                "A simple and addictive Unity game based on one of Pou's minigames.",
            preview: "https://github.com/amirh-khali/sad-tap",
            techStack: ["c-sharp", "unity"],
        },
        {
            projectName: "Carbazi",
            image: "images/McQueen.jpg",
            summary:
                "A simple Unity game project that lets you drive a car, honk its horn, and turn on its lights when it's in a tunnel.",
            preview: "https://github.com/amirh-khali/carbazi",
            techStack: ["c-sharp", "unity"],
        },
        {
            projectName: "Stronghold - Advanced Programming",
            image: "images/Stronghold.jpg",
            summary:
                "A simple implementation of a medieval castle siege game (Stronghold).",
            preview: "https://github.com/AmirH-KHALI/advanced-programming-final-project-stronghold",
            techStack: ["java", "javafx", "swing"],
        },
        {
            projectName: "River Raid - Programming Basics",
            image: "images/river-raid.jpeg",
            summary:
                "A simple implementation inspired by the classic Atari game River Raid.",
            preview: "https://github.com/amirh-khali/programming-basics-final-project-river-raid",
            techStack: ["c-plus-plus", "makefile", "sdl2"],
        },
    ],
    SoftwareProjects: [
        {
            projectName: "MHQ - Software Engineering",
            image: "images/mhq.jpg",
            summary:
                "A collaboration platform for API development and automation. it simplifies each step of building an API and creating scenarios for your APIs.",
            preview: "https://github.com/mhq-dev",
            techStack: ["python", "django", "docker", "celery", "celery-beat"],
        },
        {
            projectName: "TalkZone - System Design \& Analysis",
            image: "images/2319.jpg",
            summary:
                "A dating app like tinder, but With opening messages instead of photos.",
            preview: "https://github.com/twenty-three-nineteen",
            techStack: ["python", "django", "django-rest-framework", "django-channels"],
        },
    ],
};

export const experience = [
    {
        title: "Metrix",
        duration: "Feb. 2023 - Present",
        subtitle: "Back-End Developer",
        details: [
            `Developed and Maintained some micro-services (based on Kotlin and Spring Boot) related to "Marketing Automation".`,
            `Expanded new features like Automation Journey and Different types of Campaigns (SMS/Email/Push-Notification/..).`,
            `Worked with many databases and message queuing services like MongoDB, Elasticsearch, and Kafka.`,
            `Deployed and monitor services using Kubectl, Grafana, Kibana and Sentry.`,
        ],
        tags: ["Java", "Spring boot", "Kafka", "Elasticsearch"],
        icon: "bar-chart",
    },
    {
        title: "Pinket",
        duration: "Jul. 2021 - Nov. 2021",
        subtitle: "Data Scientist",
        details: [
            `Maintained a prediction service related to "Retail Inventories".`,
            `Developed required features to improve availability of goods and minimize the false positive.`,
            `Designed new models to help the main model results.`,
            `Analyzed the data using Python, Pandas, Numpy, etc.`,
        ],
        tags: ["Python", "Pandas", "Numpy", "Boosting Models", "MongoDB"],
        icon: "shopping-cart",
    },
    {
        title: "Pinket",
        duration: "Aug. 2020 - Mar. 2021",
        subtitle: "Back-End Developer",
        details: [
            `Maintained a back-end service (based on Spring Boot) related to ”Retail Inventories”.`,
            `Developed required features for the process of apply new goods availability with OOP`,
            `Expanded new features for shoppers application in the android app and server.`,
            `Worked closely with my PM and other colleagues as an agile team for improving our products.`,
        ],
        tags: ["Java", "Spring", "Spring boot", "PostgreSQL", "Android"],
        icon: "shopping-cart",
    },
];

export const education = [
    {
        title: "B.S. in Computer Engineering",
        duration: "Sep. 2018 - Sep. 2023",
        subtitle: "Iran University of Science and Technology (IUST)",
        details: [
            `Ranked 4th among Iran universities based on QS ranking 2024`,
            `GPA - Last two years [via 60 credits]: 3.8 (17.93 / 20)`,
            `GPA - Overall [via 143 credits]: 3.35 (16.54 / 20)`,
            `Final Thesis: Data collection and automatic labeling for dense video captioning models (Under publication)`,
        ],
        tags: [],
        icon: "graduation-cap",
    },
    {
        title: "Diploma in Mathematics and Physics Discipline",
        duration: "2014 - 2018",
        subtitle: "Salam High School",
        details: [
            `Ranked 6th among 240 high schools in Iran (2013)`,
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
