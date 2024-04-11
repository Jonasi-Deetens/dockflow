import ToggleableItem from "../components/ToggleableItem"
import Title from "../components/Title"
import Image from "../components/Image"
import me from "../assets/me.jpg"
import LinkedInSocial from "../components/LinkedInSocial"
import GithubSocial from "../components/GithubSocial"
import InfoSection from "../components/InfoSection"
import Degree from "../components/Degree"
import CV from "../components/CV"
import Interests from "../components/Interests"
import Contact from "../components/Contact"
import Skill from "../components/Skill"
import DarkMode from "../components/DarkMode"

const ComponentList = [
    {
        component: ToggleableItem,
        props: {
            title: "About"
        },
        functions: [
            "onToggle"
        ],
        tag: "",
        gridData: { 
            x: 5, 
            y: 1, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 1
    },
    {
        component: ToggleableItem,
        props: {
            title: "Contact"
        },
        functions: [
            "onToggle"
        ],
        tag: "",
        gridData: {
            x: 4, 
            y: 1, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 2
    },
    {
        component: Title,
        props: {
            title: "Welcome,",
            text: "I'm Jonasi Deetens, and this is my portfolio!"
        },
        functions: [
        ],
        tag: "",
        gridData: {
            x: 2, 
            y: 0, 
            w: 4, 
            h: 1,
            minW: 4,
            maxH: 2
        },
        id: 3
    },
    {
        component: ToggleableItem,
        props: {
            title: "Project"
        },
        functions: [
            "onToggle"
        ],
        tag: "",
        gridData: { 
            x: 3, 
            y: 1, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 4
    },
    {
        component: ToggleableItem,
        props: {
            title: "Skills"
        },
        functions: [
            "onToggle"
        ],
        tag: "",
        gridData: { 
            x: 2, 
            y: 1, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 5
    },
    {
        component: Image,
        props: {
            src: me,
            alt: "Photo of myself holding a book while sitting down"
        },
        functions: [
        ],
        tag: "",
        gridData: { 
            x: 0, 
            y: 0, 
            w: 2, 
            h: 2,
            minH: 2,
            minW: 2,
            maxH: 2,
            maxW: 2
        },
        id: 6
    },
    {
        component: LinkedInSocial,
        props: {
        },
        functions: [
        ],
        tag: "Contact",
        gridData: { 
            x: 7, 
            y: 0, 
            w: 1, 
            h: 1,
            minH: 1,
            minW: 1,
            maxH: 2,
            maxW: 2
        },
        id: 7
    },
    {
        component: GithubSocial,
        props: {
        },
        functions: [
        ],
        tag: "Contact",
        gridData: { 
            x: 7, 
            y: 1, 
            w: 1, 
            h: 1,
            minH: 1,
            minW: 1,
            maxH: 2,
            maxW: 2
        },
        id: 8
    },
    {
        component: InfoSection,
        props: {
            title: "Introduction",
            text: "Hello, I am Jonasi Deetens and I am a Full Stack Developer.",
            textTwo: "I have a passion for coding in JavaScript, Node.js & frameworks like React. But I'm not afraid off diving in the unknown areas like Docker and Kubernetes."
        },
        functions: [
        ],
        tag: "About",
        gridData: { 
            x: 0, 
            y: 2, 
            w: 3, 
            h: 2,
            minH: 2,
            minW: 2,
            maxH: 3,
            maxW: 4
        },
        id: 9
    },
    {
        component: InfoSection,
        props: {
            title: "Background",
            text: "I pursued a degree in Computer Science from Howest Brugge, where I gained a solid foundation in algorithms, data structures, and software engineering principles. During my time at school, I immersed myself in various programming languages and frameworks, honing my skills through hands-on projects and internships. Sadly enough during one of my internship I had a bad experience, where I lost my interest in coding and development alike because of bad mentorship and business mentality. Which set me back a few years where I spend my time working on a beachbar.",
            textTwo: "As I progressed in that career, I took on roles of increasing responsibility, but I still felt the need for tackling complex challenges and embracing emerging technologies. From building scalable web applications with React and Node.js to delving into the intricacies of machine learning with Python and TensorFlow, I kept comming back to try and learn new technical languages. Because of that lingering intereset, I finally decided to throw my career in a new way and follow a training at BeCode Gent. Today, I stand as a junior developer with a diverse skill set and a passion for innovation. I'm excited to continue my journey, exploring new technologies, solving complex problems, and making a meaningful impact through code."
        },
        functions: [
        ],
        tag: "About",
        gridData: { 
            x: 3, 
            y: 2, 
            w: 4, 
            h: 2,
            minH: 2,
            minW: 3,
            maxH: 6,
            maxW: 4
        },
        id: 10
    },
    {
        component: Degree,
        props: {
            school: "Howest Brugge",
            course: "Software Development",
            year: "2012-2015"
        },
        functions: [
        ],
        tag: "About",
        gridData: { 
            x: 3, 
            y: 4, 
            w: 2, 
            h: 2,
            minH: 2,
            minW: 2,
            maxH: 3,
            maxW: 2
        },
        id: 11
    },
    {
        component: Degree,
        props: {
            school: "BeCode Ghent",
            course: "Full Stack Developer",
            year: "2023-now"
        },
        functions: [
        ],
        tag: "About",
        gridData: { 
            x: 5, 
            y: 4, 
            w: 2, 
            h: 2,
            minH: 2,
            minW: 2,
            maxH: 3,
            maxW: 2
        },
        id: 12
    },
    {
        component: CV,
        props: {
        },
        functions: [
        ],
        tag: "",
        gridData: { 
            x: 6, 
            y: 0, 
            w: 1, 
            h: 1,
            minH: 1,
            minW: 1,
            maxH: 2,
            maxW: 2
        },
        id: 13
    },
    {
        component: Interests,
        props: {
        },
        functions: [
        ],
        tag: "About",
        gridData: { 
            x: 0, 
            y: 4, 
            w: 2, 
            h: 3,
            minH: 3,
            minW: 2,
            maxH: 5,
            maxW: 2
        },
        id: 14
    },
    {
        component: Contact,
        props: {
        },
        functions: [
        ],
        tag: "Contact",
        gridData: { 
            x: 0, 
            y: 3, 
            w: 3, 
            h: 1,
            minH: 1,
            minW: 3,
            maxH: 2,
            maxW: 4
        },
        id: 15
    },
    {
        component: Skill,
        props: {
            icon: "html",
            color: "text-blue-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 0, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 16
    },
    {
        component: Skill,
        props: {
            icon: "css",
            color: "text-orange-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 1, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 17
    },
    {
        component: Skill,
        props: {
            icon: "javascript",
            color: "text-yellow-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 2, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 18
    },
    {
        component: Skill,
        props: {
            icon: "react",
            color: "text-blue-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 3, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 19
    },
    {
        component: Skill,
        props: {
            icon: "node",
            color: "text-green-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 4, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 20
    },
    {
        component: Skill,
        props: {
            icon: "java",
            color: "text-gray-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 5, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 21
    },
    {
        component: Skill,
        props: {
            icon: "python",
            color: "text-blue-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 6, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 22
    },
    {
        component: Skill,
        props: {
            icon: "php",
            color: "text-slate-900"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 7, 
            y: 2, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 23
    },
    {
        component: Skill,
        props: {
            icon: "laravel",
            color: "text-red-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 0, 
            y: 3, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 24
    },
    {
        component: Skill,
        props: {
            icon: "mongodb",
            color: "text-green-700"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 1, 
            y: 3, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 25
    },
    {
        component: Skill,
        props: {
            icon: "mysql",
            color: "text-blue-900"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 2, 
            y: 3, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 26
    },
    {
        component: Skill,
        props: {
            icon: "docker",
            color: "text-blue-500"
        },
        functions: [
        ],
        tag: "Skills",
        gridData: { 
            x: 3, 
            y: 3, 
            w: 1, 
            h: 1,
            maxH: 1,
            maxW: 1
        },
        id: 27
    },
    {
        component: DarkMode,
        props: {
        },
        functions: [
        ],
        tag: "",
        gridData: { 
            x: 7, 
            y: 0, 
            w: 1, 
            h: 1,
            maxH: 2,
            maxW: 2
        },
        id: 28
    },
]

export default ComponentList