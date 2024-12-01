/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arnulfo Gonzalez Jr's Portfolio",
  description:
    "Explore the portfolio of Arnulfo Gonzalez Jr., a Full-Stack Developer and Coding Mentor with experience in building scalable web applications and empowering others through technology. Discover projects showcasing expertise in JavaScript, React, Node.js, and Firebase, as well as my work mentoring incarcerated individuals and developing impactful tech solutions. From freelance development to mentoring, I create sustainable, user-focused solutions that drive both technical excellence and social change.",
  og: {
    title: "Arnulfo Gonzalez Jr's Portfolio",
    type: "website",
    url: "http://arnulfogonzalezjr.com/",
  },
};

//Home Page
const greeting = {
  title: "Arnulfo Gonzalez Jr",
  logo_name: "ArnulfoGonzalezJr",
  nickname: "Junior",
  subTitle:
    "Passionate Full-Stack Developer & Mentor, Building Scalable Solutions That Drive Social Impact and Empower Change.",
  resumeLink:
    "https://drive.google.com/file/d/1iPzeq_AYtwM36D3C-RQy9arsBow9k87k/view?usp=sharing",
  portfolio_repository: "https://github.com/agonzalezjr327",
  githubProfile: "https://github.com/agonzalezjr327",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/agonzalezjr327",
  // linkedin: "https://www.linkedin.com/in/arnulfo-gonzalez-402794246",
  // gmail: "agonzalezjr327@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/agonzalezjr327",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arnulfo-gonzalez-402794246",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:agonzalezjr327@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ajuniorgonzalez327/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications with Flutter, React Native, Firebase and android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep-learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "#",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "#",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Columbia University",
      subtitle: "Software Engineering",
      logo_path: "columbia_university.png",
      alt_name: "Justice Through Code",
      duration: "2024 - Present",
      descriptions: [
        "⚡ I have taken variety of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have studies Python and JavaScript. I will be contributing to various open source projects.",
        "⚡ During my time at university, I have gained strong problem solving skills and a deep understanding of data structures and algorithms.",
      ],
      website_link: "https://centerforjustice.columbia.edu/justicethroughcode",
    },
    {
      title: "Persevere Now",
      subtitle: "Web Development",
      logo_path: "PersevereAZ.png",
      alt_name: "Persevere Now",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ I have studied Web development from Persevere Now. I have learned variety of software engineering subjects like Data Structures, Algorithms, System Design.",
        "⚡ Apart from this, I have done courses on Search Engine Optimization (SEO), Data Science, Data Analytics and Full Stack Development.",
        "⚡ I finished in the top 10% of students in the program. I have received 6 certificates for my performance in academics.",
      ],
      website_link: "https://www.perseverenow.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google IT Support",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/UV8RE5RRL7KE",
      alt_name: "Google",
      color_code: "#DEB887",
    },
    {
      title: "Google Data Analytics",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/FZGLM2N87J7K",
      alt_name: "Google",
      color_code: "#DEB887",
    },
    {
      title: "Google Cybersecurity",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/PKZEHZ842JLQ",
      alt_name: "Google",
      color_code: "#DEB887",
    },
    {
      title: "Data Analysis with R Programming",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NJA7BXHEXFAK",
      alt_name: "Google",
      color_code: "#00000099",
    },
    {
      title: "Automate Cybersecurity Tasks with Python",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QWAXAAML8T94",
      alt_name: "Google",
      color_code: "#00000099",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EQXZMLHD829D",
      alt_name: "Google",
      color_code: "#00000099",
    },
    {
      title: "Sound the Alarm: Detection and Response",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6WV2A2DPSC6S",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Assets, Threats, and Vulnerabilities",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FK7AGNJQ9E38",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9MMK7PB7QEVP",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RT8GT3ZK3G48",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Put It to Work: Prepare for Cybersecurity Jobs",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/45AAP9NE2STU",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Data Analytics Capstone: Complete a Case Study",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/SPWESVSBQFPL",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YWJJ6BHWPHNV",
      alt_name: "Google",
      color_code: "#D8A7FF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Freelance, and Mentorship",
  description:
    "I have worked as a freelance developer, collaborating with various clients on impactful web and app projects. My expertise spans full-stack development, including building custom solutions for both startups and established organizations. In addition to my freelance work, I am passionate about mentorship, teaching coding and guiding others, especially those seeking to break into tech. I thrive in helping individuals grow their skills and unlock new opportunities through technology.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Coding Instructor",
          company: "Persevere Now",
          company_url: "https://www.perseverenow.org/",
          logo_path: "PersevereAZ.png",
          duration: "May 2024 - Present",
          location: "Eloy, AZ, USA",
          description:
            "As a Coding Instructor at Persevere, I teach coding to incarcerated individuals, empowering them with the skills to transform their futures. I design and deliver comprehensive curriculum focused on full-stack development, covering JavaScript, React, Node.js, and other key technologies. My role involves mentoring students through hands-on projects, helping them build real-world applications, and fostering critical problem-solving skills. By providing guidance and support, I aim to equip students with the tools they need to succeed in tech careers, while also promoting personal growth and professional development.",
          color: "#000000",
        },
        {
          title: "Coding Instructor",
          company: "Second Chance Center",
          company_url: "https://corrections.az.gov/phoenix-west",
          logo_path: "scc.gif",
          duration: "Apr 2021 - Feb 2024",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Freelance Experience",
      experiences: [
        {
          title: "Bible Verse App",
          company: "Hope in Numbers",
          company_url:
            "https://play.google.com/store/apps/details?id=com.y3ccdc2b9e70.www&hl=en-US",
          logo_path: "hope_in_numbers.png",
          duration: "Mar 2024 - Nov 2024",
          location: "Arizona, USA",
          description:
            "This app provides a daily Bible verse tailored to your spiritual journey, with verses updating every minute and hour, each corresponding to a specific verse from the Bible. Built using Firebase, JavaScript, HTML, and CSS, the app dynamically fetches and displays new verses at regular intervals to inspire and guide users throughout their day. A challenge was designing a user-friendly interface that’s simple, yet engaging, while ensuring the app remains lightweight and responsive on a wide range of devices. After overcoming these hurdles, the app was successfully deployed on both the Google Play Store and Android Market, allowing users worldwide to easily access daily inspiration.",
          color: "#000000",
        },
        {
          title: "Outlaws to Advocates",
          company: "Refine 2 Inspire",
          company_url: "https://outlawstoadvocates.com/",
          logo_path: "outlaw_logo.jpg",
          duration: "Oct 2024 - Nov 2024",
          location: "Arizona, USA",
          description:
            "Responsive website that looks great on all devices. I used Bootstrap and Sass for front end development. I had regular meetings with client to get their feedback and implement it in website. Client was very satisfied with the website. I implemented a lot of features in the website like SEO, Social Media Integration, and Google Analytics.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Mentorship Experience",
      experiences: [
        {
          title: "Mentoring Inmates",
          company: "Second Chance Center",
          company_url: "https://corrections.az.gov/phoenix-west",
          logo_path: "scc.gif",
          duration: "Apr 2021 - Present",
          location: "Arizona, USA",
          description:
            "I have been mentoring 250+ incarcerated individuals both inside and outside of prison, helping them navigate the world of coding and technology. I work closely with them to identify the best resources for learning—whether that’s free online courses, coding tutorials, or open-source projects—and assist them in setting up their coding environments, ensuring they have the tools they need to succeed. I take a hands-on approach in troubleshooting technical issues, answering questions, and breaking down complex concepts into manageable steps. Outside of prison, I continue offering support by connecting them with job opportunities, internships, and additional educational resources, helping them build a path toward a career in tech. Through this mentorship, I aim to provide more than just technical skills; I help build confidence, motivation, and a sense of purpose, empowering individuals to transform their lives through coding.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of cutting-edge technologies to create innovative solutions. I specialize in developing Data Science applications and seamlessly deploying them as web applications using cloud infrastructure. Each project reflects my commitment to combining technical expertise with real-world impact, ensuring scalable, efficient, and data-driven results.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "I’m always open to new opportunities, collaborations, and projects! Whether you’re looking for assistance with Machine Learning, AI, React, Android, Cloud, or Open Source Development, I’m here to help. Feel free to reach out via any of the social media platforms listed below—I respond within 24 hours. Let’s connect and bring your ideas to life!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
