import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaPhp, FaLaravel, FaNode, FaDocker, FaJava, FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const ICONS = {
    html: FaHtml5,
    css: FaCss3,
    javascript: IoLogoJavascript,
    react: FaReact,
    node: FaNode,
    java: FaJava,
    python: FaPython,
    php: FaPhp,
    laravel: FaLaravel,
    mongodb: SiMongodb,
    mysql: GrMysql,
    docker: FaDocker
};

const Skill = ({icon, color}) => {
    const IconComponent = ICONS[icon]

    return (
        <div>
            <IconComponent className={color} size={50} />
        </div>
    )
}

export default Skill