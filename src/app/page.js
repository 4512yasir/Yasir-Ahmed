"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import heroImage from "../../public/hero.jpeg"; 
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-animated min-h-screen flex items-center text-white relative overflow-hidden">
      {/* Floating Social Icons */}
      <div className="hidden lg:flex flex-col space-y-4 fixed top-1/3 left-6 z-50">
        <a
          href="https://github.com/4512yasir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-mohammedahmed/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:yaskamohamed00@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m{" "}
            <span className="text-yellow-300">Yasir Mohammed Ahmed</span>
          </h1>

          {/* Typing Animation */}
          <ReactTyped
            strings={[
              "Fullstack Web Developer",
              "React & Flask Specialist",
              "PostgreSQL Enthusiast",
              "UI/UX Problem Solver",
              "Graphic Designer",
              "UI/UX Designer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="block text-lg md:text-2xl text-gray-100"
          />

          <p className="text-lg text-gray-200 max-w-lg">
            I build responsive, scalable applications that deliver real value.
            Explore my work and let’s collaborate to bring your ideas to life.
          </p>

          <div className="space-x-4">
            <a
              href="/projects"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 mt-10 md:mt-0 animate-fadeInUp delay-200">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="rounded-lg shadow-xl border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-500"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
