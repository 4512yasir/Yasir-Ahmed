"use client";
import { FaGraduationCap, FaLaptopCode, FaKeyboard } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      period: "Feb 3 – Aug 1, 2025",
      school: "Moringa School, Nairobi",
      course: "Software Engineering",
      description:
        "An immersive, project-based program focused on fullstack software engineering. Worked on multiple real-world projects, mastering both frontend and backend development.",
      skills: [
        "React.js, Next.js, and Tailwind CSS",
        "Python Flask and REST API development",
        "PostgreSQL database design and optimization",
        "Agile methodology & Git version control",
      ],
      achievements: [
        "Built and deployed a fullstack portfolio project",
        "Collaborated in team projects with GitHub workflow",
        "Completed all program requirements with distinction",
      ],
      icon: <FaGraduationCap className="text-blue-900" size={20} />,
    },
    {
      period: "May 1 – Dec 13, 2022",
      school: "Nairobits Trust",
      course: "Front-End Web Development",
      description:
        "Hands-on training in creating visually appealing and responsive websites. Learned to translate UI/UX designs into functional, optimized front-end code.",
      skills: [
        "HTML5, CSS3, and JavaScript ES6+",
        "Responsive web design & mobile-first approach",
        "Basic React concepts",
        "UI/UX principles",
      ],
      achievements: [
        "Designed and launched responsive websites",
        "Improved performance of web pages using best practices",
        "Completed multiple mini-projects simulating client work",
      ],
      icon: <FaLaptopCode className="text-blue-900" size={20} />,
    },
    {
      period: "Jan 5 – Apr 2022",
      school: "Nairobits Trust",
      course: "Digital Literacy Program",
      description:
        "Introduction to computing fundamentals, productivity tools, and online communication for professional growth.",
      skills: [
        "Microsoft Office Suite (Word, Excel, PowerPoint)",
        "Email & professional communication",
        "Internet navigation & online safety",
      ],
      achievements: [
        "Built a personal CV using Microsoft Word",
        "Learned safe and professional online behavior",
      ],
      icon: <FaKeyboard className="text-blue-900" size={20} />,
    },
  ];

  return (
    <section className="bg-animated min-h-screen py-16 relative overflow-hidden">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Education
        </h1>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-yellow-400"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-14 mb-10 group">
              {/* Timeline Dot with Icon */}
              <div className="absolute left-0 w-10 h-10 bg-yellow-400 rounded-full border-4 border-blue-900 flex items-center justify-center z-10">
                {edu.icon}
              </div>

              {/* Education Card */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
                <span className="text-yellow-300 font-semibold">
                  {edu.period}
                </span>
                <h2 className="text-2xl font-bold text-white">{edu.school}</h2>
                <h3 className="text-lg text-blue-200">{edu.course}</h3>
                <p className="text-gray-100 mt-2">{edu.description}</p>

                {/* Skills Learned */}
                <h4 className="mt-4 text-yellow-300 font-semibold">
                  Key Skills Learned:
                </h4>
                <ul className="list-disc list-inside text-gray-100">
                  {edu.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>

                {/* Achievements */}
                <h4 className="mt-4 text-yellow-300 font-semibold">
                  Achievements:
                </h4>
                <ul className="list-disc list-inside text-gray-100">
                  {edu.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
