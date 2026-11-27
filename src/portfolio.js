/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pasindu Sandeep",
  title: "Hi all, I'm Pasindu",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 with hands-on experience building scalable web applications using React."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const about = {
  profile: require("./assets/images/profile.png"),

  description: [
    "Hey there! 👋 I'm Pasindu Sandeep, a passionate Full Stack Software Engineer from Sri Lanka 🇱🇰.",

    "I specialize in crafting modern, scalable, and user-friendly web applications with React, Next.js, and Angular, while building robust backend systems using Java and Golang.",

    "From designing seamless RESTful APIs to managing containerized environments with Docker, I bring ideas to life through clean code, creative problem-solving, and a passion for technology.",

    "My mission? To build software that doesn't just work — it makes an impact. ✨"
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pasindu-sandeep",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "pasindusandeep20@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@pasindusandeep20",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "GoLang",
      fontAwesomeClassname: "devicon-go-original-wordmark"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Moratuwa",
      logo: require("./assets/images/uom_logo.png"),
      subHeader:
        "Master of Science in Computer Science - specialized in Software Architecture",
      duration: "September 2026 - present",
      desc: "Software Architecture Concepts, Advanced Data Structures, Parallel and Concurrent Programming, Software Development on Cloud Platform"
    },
    {
      schoolName: "University of Moratuwa",
      logo: require("./assets/images/uom_logo.png"),
      subHeader:
        "BSc. Eng. (Hons) in Electronic and Telecommunication Engineering",
      duration: "August 2021 - July 2025",
      desc: "Data Structures and Algorithms, Modular Software Design, Internet of Things, Deep Learning for Vision, Networking Foundamentals"
    },
    {
      schoolName: "St. Aloysius College, Ratnapura ",
      logo: require("./assets/images/school_logo.png"),
      subHeader: "G.C.E. A/L, Physical Science",
      duration: "August 2017 - August 2019",
      desc: "District Rank 9, Island Rank 261"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Kast Finance",
      companylogo: require("./assets/images/kast_logo.png"),
      date: "June 2025 – August 2026",
      techstack: [
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "tailwindcss",
          fontAwesomeClassname: "devicon-tailwindcss-plain"
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "devicon-go-original-wordmark"
        },
        {
          skillName: "postgresql",
          fontAwesomeClassname: "devicon-postgresql-plain"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "github",
          fontAwesomeClassname: "fab fa-github"
        },
        {
          skillName: "kafka",
          fontAwesomeClassname: "devicon-apachekafka-original"
        }
      ],
      responsibilities: [
        "Developed secure Go-based APIs following hexagonal architecture to improve maintainability, imple- \
          mented Kafka-based inter-service communication, and integrated PostgreSQL for data retrieval and \
          Redis for caching to optimize performance",
        "Used JWT based authentication and role-based permissions to maintain the high security of the \
          admin panne",
        "Designed Functional Specification Documents (FSDs) for backend services, covering system require- \
          ments, API specifications, workflows, and technical implementation details",
        "Developed React.js based user interfaces using Tailwind CSS and integrated REST APIs with admin \
           backend service"
      ]
    },
    {
      role: "Software Engineer",
      company: "Zero One Technologies",
      companylogo: require("./assets/images/zero_one_logo.png"),
      date: "June 2024 – June 2025",
      techstack: [
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "React",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "fas fa-wind"
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fab fa-github"
        }
      ],
      responsibilities: [
        "Tableside Ordering Web Application",
        "Developed a web application for tableside ordering, enabling customers to browse menus using QR \
        codes, place orders, and make payments effortlessly",
        "The application features QR-based menu browsing for easy access, real-time order tracking, and a \
        shared cart for collaborative group dining. It also integrates the Lia Chatbot for seamless customer \
        interaction and instant assistance"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Zebra Technologies",
      companylogo: require("./assets/images/zebra_logo.png"),
      date: "November 2023 – May 2024",
      techstack: [
        {
          skillName: "C++",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ],
      responsibilities: [
        "Developed a Windows application using the .NET Framework, with a backend C++ driver compiled \
         into a dynamic link library (DLL) for USB barcode scanner communication",
        "..."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sunteclanka.png"),
      projectName: "SuntecLanka",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://sunteclanka.lk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bms1.png"),
      projectName: "Baggage Monitoring System",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://lnkd.in/p/gwzNcmHb"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "Followed the AWS Certified Solutions Architect - Associate course",
      image: require("./assets/images/aws-solution_architect.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        },
        {
          name: "Award Letter"
        },
        {
          name: "Google Code-in Blog"
        }
      ]
    },
    {
      title: "Machine Learning – Stanford University",
      subtitle:
        "Built a strong foundation in supervised and unsupervised learning, model evaluation, and optimization algorithms.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/ANFLR5TTMG4C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "Go for Developers",
      subtitle:
        "Learned Practical Techniques for Effective Coding (Linkedin Course)",
      image: require("./assets/images/go_logo.jpeg"),
      imageAlt: "Go Language",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Wt780XYY8fYRrUy1F4NQvF_1c2atLSJa/view"
        }
      ]
    },
    {
      title: "Applied Concurrency in Go",
      subtitle:
        "Completed Certifcation from SMIT for PWA Web App Development (Linkedin Course)",
      image: require("./assets/images/go_logo.jpeg"),
      imageAlt: "Go Language",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://drive.google.com/file/d/1Wt780XYY8fYRrUy1F4NQvF_1c2atLSJa/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+94-717159789",
  email_address: "pasindusandeep20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  about,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
