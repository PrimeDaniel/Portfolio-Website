import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Daniel Fraimovich",
  title: "BSc. Software Engineer",
  summary: "Software Engineering Graduate skilled in Full Stack development (MERN), C++, Python, and DevOps methodologies. Industry experience at Intel architecting end-to-end applications and automating validation workflows. Strong problem-solver with a background in operational command.",
  location: "Haifa, Israel",
  links: {
    linkedin: "https://www.linkedin.com/in/danny-fraimovich",
    github: "https://github.com/PrimeDaniel",
    email: "Dfraimo@gmail.com"
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: "Software Validation Engineer",
    company: "Intel Corporation",
    period: "February 2024 - Present",
    description: [
      "Streamlined CPU and chip validation by executing and monitoring advanced testing procedures.",
      "Optimized validation programs to ensure efficient processes, reducing cycle times by 20%.",
      "Selected to join a specialized student DevOps engineering team focused on internal tool development.",
      "Designed and built a complete management application from end-to-end, adopted by the department with 40+ weekly active users.",
      "Gained hands-on experience in CI/CD pipelines and large-scale application architecture."
    ]
  },
  {
    id: '2',
    role: "Project Manager",
    company: "\"ISEF\" Foundation - Leadership Program",
    period: "January 2021 - January 2024",
    description: [
      "Mentored 50+ scholarship students through PERACH volunteering program.",
      "Built partnerships with 5 new local organizations to expand foundations' reach."
    ]
  },
  {
    id: '3',
    role: "Naval Warship Repair and Maintenance Officer",
    company: "IDF - Israeli Navy",
    period: "May 2015 - August 2018",
    description: [
      "Led maintenance and repair operations for the naval fleet.",
      "Managed critical path scheduling for repair operations, ensuring optimal resource allocation."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "C++", "C#", "JavaScript"]
  },
  {
    category: "Web & Frameworks",
    skills: ["React.js", "Node.js", "Express", "ASP.NET Core", ".NET", "Tailwind CSS"]
  },
  {
    category: "Tools, Databases & DevOps",
    skills: ["MongoDB", "MySQL", "Firebase", "Linux", "Git", "Postman", "CI/CD Pipelines"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: "Cryptocurrency Simulator",
    description: "Built a zero-risk, real-time cryptocurrency trading platform integrating live market data via API. Implemented full buying/selling option logic.",
    technologies: ["Node.js", "Express", "React", "Tailwind CSS", "GeckoApi"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 'p2',
    title: "CEMS (Exam Management System)",
    description: "Developed a Lecturer Management System empowering faculty to manage exams and students efficiently.",
    technologies: ["Java", "JavaFX", "MySQL", "OCSF"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 'p3',
    title: "Nvidia Search Engine",
    description: "Created a custom searching platform featuring a self-developed page ranking system.",
    technologies: ["Python", "Firebase", "Jupyter", "Google Colab"],
    image: "https://picsum.photos/600/400?random=3"
  }
];