"use client";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "BCR-FM - Barberton Radio Station FM 104.1",
      period: "2025",
      stack: ["React Native", "Expo", "Firebase", "Axios", "Cheerio", "Lottie", "WordPress API"],
      description:
        "A cross-platform mobile application for Barberton Radio Station FM 104.1, providing live radio streaming, trending news, weather updates for Mpumalanga towns, podcasts, and interactive features. Successfully published on Google Play Store.",
      highlights: [
        "Developed during internship at Wiggle Digital as Software Developer Intern",
        "Live radio streaming with background audio playback",
        "Real-time news integration from WordPress site with web scraping",
        "Weather API integration for Mpumalanga towns",
        "Interactive user reactions and feedback system",
        "Dark/Light theme toggle with modern responsive UI",
        "Successfully deployed and available for download on Google Play Store"
      ],
      status: "completed",
      category: "Mobile Development",
      image: "📻",
      link: "https://play.google.com/store/apps/details?id=com.bcrfm.app",
      github: "https://github.com/FranceMokoena/BCR-FM-Mobile-App",
      features: [
        "🎵 Live Radio Streaming",
        "📰 Trending News Integration",
        "🌤️ Real-Time Weather Updates",
        "🎧 Podcast Management",
        "😊 Interactive User Reactions",
        "🌙 Dark/Light Theme Toggle"
      ]
    },
    {
      title: "EmbroideryTech Mobile Application",
      period: "2025",
      stack: ["React Native", "TypeScript", "Node.js", "MongoDB", "Expo", "JWT", "REST API"],
      description:
        "A comprehensive mobile application for embroidery screen management and quality control. Features real-time barcode scanning, screen categorization, session management, and professional reporting system.",
      highlights: [
        "Professional authentication system with role-based access control",
        "Real-time barcode scanning with camera integration",
        "Smart notification system with 30-minute interval reminders",
        "Comprehensive reporting with PDF export and email integration",
        "Session management with automatic timing and audit trails",
        "Database management with bulk operations and cleanup"
      ],
      status: "completed",
      category: "Mobile Development",
      image: "📱",
      link: "#",
      github: "https://github.com/FranceMokoena/Embroider-Scann-App",
      features: [
        "🔐 Secure Authentication & Session Management",
        "📊 Real-Time Dashboard & Statistics",
        "🔔 Smart Notification System",
        "📋 Professional Reporting (PDF/Email)",
        "🗂️ Advanced Data Management",
        "📈 Analytics & Performance Monitoring"
      ]
    },
    {
      title: "EmbroideryTech Desktop Management App",
      period: "2025",
      stack: ["React", "Electron", "Node.js", "Express", "MongoDB", "REST API"],
      description:
        "Desktop admin dashboard application that fetches and displays data from the mobile backend, providing comprehensive oversight of technicians, scans, sessions, and system statistics.",
      highlights: [
        "Real-time data synchronization with mobile backend",
        "Comprehensive admin dashboard with live statistics",
        "Advanced filtering and search capabilities",
        "Professional report generation (CSV, Excel, PDF)",
        "Technician performance monitoring and analytics",
        "Session tracking and management interface"
      ],
      status: "completed",
      category: "Desktop Application",
      image: "🖥️",
      link: "#",
      github: "https://github.com/FranceMokoena/Embroider-Tech-DesktopManagementApp",
      features: [
        "📊 Real-Time Dashboard Analytics",
        "👥 Technician Management System",
        "📈 Advanced Reporting & Export",
        "🔍 Comprehensive Search & Filtering",
        "📱 Mobile Integration Bridge",
        "📋 Session & Activity Monitoring"
      ]
    },
    {
      title: "Bus Ticket Purchase System",
      period: "2024 IN MY FINAL YEAR OF STUDY",
      stack: ["Python", "Firebase Realtime DB", "NoSQL", "HTML", "CSS", "Bootstrap"],
      description:
        "A comprehensive dashboard system for bus ticket management with real-time location tracking. Users can purchase tickets and track bus locations through an intuitive web interface.",
      highlights: [
        "Integrated Firebase for real-time location updates and data synchronization",
        "User-friendly, responsive dashboards with modern UI/UX design",
        "Secure ticket validation and booking management system",
        "Real-time notifications for bus arrivals and departures",
        "Admin panel for route and schedule management"
      ],
      status: "completed",
      category: "Web Application",
      image: "🚌",
      link: "#",
      github: "https://github.com/francewitnessmokoena/bus-ticket-system",
      features: [
        "🎫 Ticket Management System",
        "📍 Real-Time Location Tracking",
        "📱 Responsive Web Interface",
        "🔔 Real-Time Notifications",
        "👨‍💼 Admin Dashboard",
        "📊 Booking Analytics"
      ]
    },
    {
      title: "Content Creation Management System",
      period: " 2024 IN MY FINAL YEAR OF STUDY",
      stack: ["MySQL", "Room", "Java", "Jakarta EE", "Servlets", "JPA", "CDI", "REST"],
      description:
        "Enterprise-level content management system designed for digital content workflows. Features robust database design and scalable server-side architecture.",
      highlights: [
        "Applied Java OOP principles and Jakarta EE enterprise stack",
        "RESTful API design with proper HTTP status codes and error handling",
        "Advanced database modeling with JPA and transaction management",
        "Content versioning and approval workflow system",
        "Role-based access control and user management"
      ],
      status: "completed",
      category: "Enterprise System",
      image: "📝",
      link: "#",
      github: "https://github.com/francewitnessmokoena/content-management",
      features: [
        "🏗️ Enterprise Architecture",
        "🔐 Role-Based Access Control",
        "📄 Content Versioning System",
        "⚡ RESTful API Design",
        "🗄️ Advanced Database Modeling",
        "🔄 Workflow Management"
      ]
    }
  ];

  const categories = ["all", "mobile", "desktop", "web", "enterprise"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 dark:text-green-400";
      case "in-progress": return "text-blue-600 dark:text-blue-400";
      case "planned": return "text-orange-600 dark:text-orange-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 dark:bg-green-900/30";
      case "in-progress": return "bg-blue-100 dark:bg-blue-900/30";
      case "planned": return "bg-orange-100 dark:bg-orange-900/30";
      default: return "bg-gray-100 dark:bg-gray-700";
    }
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category.toLowerCase().includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Featured Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Here are some of the key projects I've worked on, showcasing my technical skills and problem-solving abilities. 
                Each project represents different aspects of software development, from mobile applications to enterprise systems.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.title} 
                  className={`group relative transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-4xl">{project.image}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-500">{project.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.period && (
                          <span className="text-sm text-gray-500">{project.period}</span>
                        )}
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusBg(project.status)} ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span 
                            key={tech} 
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-600">{feature.split(' ')[0]}</span>
                            <span>{feature.split(' ').slice(1).join(' ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Technical Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-3">
                        {project.link && project.link !== "#" && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                          >
                            View Live Project
                            <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm group/github"
                          >
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View Code
                            <svg className="ml-2 w-4 h-4 group-hover/github:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  🚀 Ready to Collaborate?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  I'm currently exploring new technologies and working on exciting projects. 
                  Interested in collaborating or discussing potential opportunities?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contacts"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="/skills"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View My Skills
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
