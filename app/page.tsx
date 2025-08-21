"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        style={{ 
          backgroundImage: "url('/GRAD2.jpg')",
          backgroundPosition: "center center"
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Greeting */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg sm:text-xl font-bold">F</span>
                    </div>
                    <div className="text-sm sm:text-base text-white font-medium">
                      Welcome to my portfolio
                    </div>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient">
                      France Witness Mokoena
                    </span>
                  </h1>
                  
                  <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium">
                    Professional Web Developer & App Developer
                  </p>
                </div>

                {/* Tagline */}
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl text-white leading-relaxed">
                    <strong>Web Developer</strong> | <strong>App Developer</strong> | <strong>Software Engineer</strong> | AI & Cybersecurity Expert
                  </p>
                  
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    I'm <strong>France Witness Mokoena</strong>, a professional <strong>Web Developer</strong> and <strong>App Developer</strong> based in South Africa. 
                    I build robust web & mobile solutions, work with databases, and explore cutting-edge technologies 
                    in AI, cybersecurity, and networking. Passionate about solving real-world problems through innovative technology 
                    as a dedicated <strong>Software Developer</strong> and <strong>Mobile App Developer</strong>.
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Web Development",
                    "Mobile App Development", 
                    "React Native",
                    "Node.js",
                    "AI / ML",
                    "Cybersecurity"
                  ].map((skill, index) => (
                    <div key={skill} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <span 
                        className={`relative inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-md border border-white/30 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in-up text-white group-hover:text-blue-200`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/projects"
                    className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                  >
                    <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-300">View My Projects</span>
                  </Link>
                  
                  <Link
                    href="/contacts"
                    className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <span className="group-hover:text-blue-200 transition-colors duration-300">Hire Me</span>
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Status */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2 group">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse group-hover:bg-green-300 transition-colors duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-blue-200 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-white transition-colors duration-300">Mpumalanga, South Africa</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Overview */}
              <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Quick Overview Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/30">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                      Professional Web Developer & App Developer
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      {[
                        {
                          icon: "🎯",
                          title: "Professional Objective",
                          desc: "Seeking opportunities as a <strong>Web Developer</strong> and <strong>App Developer</strong> in software development, AI/ML, cybersecurity, database management, networking & more."
                        },
                        {
                          icon: "🎓",
                          title: "Education",
                          desc: "University of Mpumalanga — Diploma in ICT (Application Development), specialized in <strong>Web Development</strong> and <strong>Mobile App Development</strong>."
                        },
                        {
                          icon: "🏅",
                          title: "Certifications",
                          desc: "IBM NLP & Computer Vision, SQL & RDBMS, AI/Deep Learning (TensorFlow) - enhancing my skills as a <strong>Software Developer</strong>."
                        },
                        {
                          icon: "🛡️",
                          title: "Security Expertise",
                          desc: "Cybersecurity Awareness, SAP ERP (MENTEC Foundation) - comprehensive security knowledge for <strong>Web Development</strong> projects."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4 group/item">
                          <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300 group-hover/item:animate-pulse">{item.icon}</span>
                          <div>
                            <h3 className="font-semibold text-white mb-1 group-hover/item:text-blue-200 transition-colors duration-300 text-sm sm:text-base">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-white/80 leading-relaxed group-hover/item:text-white transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-300 animate-pulse">4+</div>
                      <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors duration-300 animate-pulse">5+</div>
                      <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Professional Certifications</div>
                    </div>
                  </div>
                </div>

                {/* Featured Project Preview */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 hover:scale-105 transition-all duration-300">
                    <h3 className="font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-200 transition-colors duration-300 text-sm sm:text-base">🚀 Latest Web Development Project</h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                      EmbroideryTech - A comprehensive mobile application for embroidery screen management and quality control, showcasing my skills as a <strong>Mobile App Developer</strong>.
                    </p>
                    <Link 
                      href="/projects" 
                      className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium inline-flex items-center gap-1 group-hover:text-blue-200 transition-colors duration-300"
                    >
                      View All Projects
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
