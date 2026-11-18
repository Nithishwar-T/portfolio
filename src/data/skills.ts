import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = { name: string; icon?: IconType };

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "C#", icon: SiSharp },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "ASP.NET Core Web API", icon: SiDotnet },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs" },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL Server" },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code" },
      { name: "Visual Studio" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "OOPS" },
      { name: "MVC Architecture" },
      { name: "RESTful API Design" },
      { name: "CRUD Operations" },
      { name: "Agile" },
    ],
  },
];
