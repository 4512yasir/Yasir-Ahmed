"use client";
import { FaDownload } from "react-icons/fa";

export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "Python Flask",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Git & GitHub",
    "UI/UX Design",
  ];

  return (
    <section className="bg-animated min-h-screen flex items-center py-16 text-white relative overflow-hidden">
      {/* Floating shapes for background depth */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center animate-fadeInUp">
          <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-blue-600 shadow-lg hover:shadow-yellow-400/50 transition">
            <img
              src="/hero.jpeg"
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Glassmorphism Content Card */}
        <div className="flex-1 animate-fadeInUp delay-200">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6">
            {/* Section Title */}
            <h1 className="text-4xl font-bold relative inline-block">
              About Me
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 animate-slideIn"></span>
            </h1>

            <p className="leading-relaxed max-w-2xl text-gray-100">
              I’m{" "}
              <span className="font-semibold text-yellow-300">
                Yasir Mohammed Ahmed
              </span>
              , a passionate <strong>Fullstack Web Developer</strong> with
              expertise in
              <span className="text-blue-300"> React.js</span> and
              <span className="text-green-300"> Python Flask</span>. I build
              scalable, responsive, and user-friendly applications that solve
              real-world challenges.
            </p>

            <p className="leading-relaxed max-w-2xl text-gray-200">
              Beyond coding, I focus on delivering intuitive designs, seamless
              user experiences, and performant solutions that make an impact.
            </p>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm transform hover:scale-105 hover:bg-gray-200 transition opacity-0 animate-popIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Button with shine effect */}
            <a
              href="/Yasir_Mohamed_CV.pdf" // Place your CV in /public
              download
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-md shadow-lg relative overflow-hidden group"
            >
              <FaDownload className="mr-2" /> Download CV
              <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
