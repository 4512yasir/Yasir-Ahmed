"use client";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Vetty",
      description:
        "Full-stack platform for pet product sales & vet services with React, Flask, PostgreSQL, admin/user dashboards, + M-Pesa integration.",
      tech: ["React", "Flask", "PostgreSQL", "M-Pesa"],
      github: "https://github.com/buyengo-rr/Vetty",
      image: "/project/vetty.png",
      featured: true,
    },
    {
      title: "Tustahimili-Na-Lulu --->(Ongoing)",
      description:
        "Community finance system for managing contributions, loans & maintenance requests, built using Flask and SQLite.",
      tech: ["Flask", "SQLite", "Reactjs"],
      github: "https://github.com/4512yasir/Tustahimili-Na-Lulu",
    },
    {
      title: "Fullstack Portfolio",
      description:
        "Personal portfolio built with React (and Flask backend) showcasing my projects, skills, and journey.",
      tech: ["React", "Flask", "Tailwind CSS"],
      live: "https://4512yasir.github.io/Fullstack-portfolio/",
      github: "https://github.com/4512yasir/Fullstack-portfolio",
      image: "/project/portfolio.png",
    },
    {
      title: "MindDump",
      description:
        "A modern note-taking app to store, search, and manage your ideas securely and efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      live: "https://minddump.netlify.app/",
      github: "https://github.com/4512yasir/minddump",
      image: "/project/minddump.png",
    },
    {
      title: "Crushline",
      description:
        "A social and dating web application that allows users to connect, chat, and build relationships.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "https://crushline-link-d-in-love.onrender.com/",
      github: "https://github.com/4512yasir/crushline-link-d-in-love",
      image: "/project/crushline.png",
    },
    {
      title: "Budget Flow",
      description:
        "A smart financial management tool that helps users track income, expenses, and savings with insightful visual analytics. Designed to make budgeting simple, intuitive, and effective.",
      tech: ["React", "Flask", "PostgreSQL"],
      live: "https://budget-flo.netlify.app/",
      github: "https://github.com/4512yasir/Budget-flow",
      image: "/project/budget-flow.png",
    },
  ];

  return (
    <section className="bg-animated min-h-screen py-16 relative overflow-hidden">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h1>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden mb-12 transform hover:scale-[1.02] transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-yellow-300 mb-2">
                  {project.title}{" "}
                  <span className="bg-yellow-300 text-blue-900 text-sm px-2 py-1 rounded">
                    Featured
                  </span>
                </h2>
                <p className="text-gray-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-md shadow hover:bg-yellow-300 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-[1.03] transition transform"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-cover"
                />
                <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-md shadow hover:bg-yellow-300 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
