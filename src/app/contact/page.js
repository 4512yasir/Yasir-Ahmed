"use client";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-animated min-h-screen py-16 relative overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Contact Me
        </h1>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
          I’m always open to discussing new projects, opportunities, or
          collaborations. Feel free to drop me a message!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <form
              action="https://formspree.io/f/mpwlbvkp"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  name="_replyto"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-200 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                Contact Information
              </h2>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-yellow-300" />{" "}
                yaskamohamed00@gmail.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-yellow-300" /> +254 758 741 425
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                Social Links
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/4512yasir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:text-yellow-200 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/yasir-mohammedahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:text-yellow-200 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
