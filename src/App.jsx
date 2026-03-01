import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto pt-20">
        <header className="mb-16">
          <h1 className="text-7xl font-black tracking-tighter mb-4">
            Rajesh Yadav
          </h1>
          <p className="text-blue-400 font-mono text-xl uppercase tracking-[0.2em]">
            MCA Graduate 2023 | Full-Stack Developer
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Backend Card */}
          <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Backend Mastery
            </h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                Java (Core & Advanced)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                Spring Boot & Hibernate
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                MySQL Database Management
              </li>
            </ul>
          </div>

          {/* Frontend Card */}
          <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Frontend Skills
            </h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                React.js & Vite
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                Tailwind CSS Modern UI
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>{" "}
                JavaScript (ES6+)
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="grid gap-6">
            {/* Project 1: Java Spring Boot */}
            <div className="group p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    E-Commerce Backend API
                  </h3>
                  <p className="text-slate-400 mb-4 max-w-2xl text-sm leading-relaxed">
                    Developed a secure RESTful API using Java and Spring Boot.
                    Implemented JWT authentication and optimized MySQL queries
                    for inventory management.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      Spring Boot
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      MySQL
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/yadav-rajesh"
                  target="_blank"
                  className="text-sm font-bold text-slate-500 hover:text-white flex items-center gap-1"
                >
                  GitHub <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="mailto:mr.raj1275@gmail.com"
            className="text-slate-500 hover:text-blue-400 transition-all font-medium"
          >
            mr.raj1275@gmail.com
          </a>
          <p className="text-slate-600 text-sm">
            © 2026 Rajesh Yadav • Pune, India
          </p>
        </footer>
      </div>
    </div>
  );
}
