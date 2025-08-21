import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise - France Witness Mokoena | Web Developer & App Developer",
  description: "Explore the technical skills and expertise of France Witness Mokoena - Web Developer and App Developer. Specializing in React Native, Node.js, AI/ML, Cybersecurity, and Database Management.",
  keywords: [
    "France Witness Mokoena Skills",
    "Web Developer Skills",
    "App Developer Skills",
    "React Native Developer",
    "Node.js Developer",
    "AI Developer Skills",
    "Cybersecurity Expert",
    "Database Developer",
    "Mobile App Development Skills",
    "Software Developer Skills",
    "Programming Skills",
    "Technical Expertise"
  ],
  openGraph: {
    title: "Skills & Expertise - France Witness Mokoena | Web Developer & App Developer",
    description: "Comprehensive technical skills and expertise in web development, mobile app development, AI/ML, and cybersecurity.",
    url: "https://francewitnessmokoena.com/skills",
  },
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Web Development & Programming",
      icon: "💻",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "React Native", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Kotlin", level: "Intermediate" },
      ]
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      skills: [
        { name: "React Native", level: "Advanced" },
        { name: "Cross-platform Development", level: "Advanced" },
        { name: "Mobile UI/UX Design", level: "Advanced" },
        { name: "Google Play Store Deployment", level: "Advanced" },
        { name: "Mobile App Testing", level: "Intermediate" },
        { name: "App Performance Optimization", level: "Intermediate" },
        { name: "Mobile Security", level: "Intermediate" },
      ]
    },
    {
      title: "Databases & Data Management",
      icon: "🗄️",
      skills: [
        { name: "SQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "Database Design", level: "Advanced" },
        { name: "Query Optimization", level: "Advanced" },
        { name: "Firebase Realtime DB", level: "Intermediate" },
        { name: "Firestore", level: "Intermediate" },
        { name: "NoSQL", level: "Intermediate" },
        { name: "Transactions", level: "Intermediate" },
        { name: "Room Database", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Natural Language Processing (NLP)", level: "Intermediate" },
        { name: "Computer Vision", level: "Intermediate" },
        { name: "Machine Learning", level: "Intermediate" },
        { name: "Deep Learning", level: "Intermediate" },
        { name: "Data Modeling", level: "Intermediate" },
        { name: "AI Integration", level: "Intermediate" },
      ]
    },
    {
      title: "Cybersecurity & Networking",
      icon: "🔒",
      skills: [
        { name: "Cybersecurity Awareness", level: "Advanced" },
        { name: "Network Security", level: "Intermediate" },
        { name: "TCP/IP", level: "Intermediate" },
        { name: "Firewalls", level: "Intermediate" },
        { name: "VPN", level: "Intermediate" },
        { name: "Access Control", level: "Intermediate" },
        { name: "Security Best Practices", level: "Advanced" },
        { name: "Data Protection", level: "Intermediate" },
      ]
    },
    {
      title: "Development Tools & Best Practices",
      icon: "🛠️",
      skills: [
        { name: "Git & Version Control", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "Debugging", level: "Advanced" },
        { name: "Project Management", level: "Intermediate" },
        { name: "Agile/Scrum", level: "Intermediate" },
        { name: "Code Review", level: "Intermediate" },
        { name: "Testing & Quality Assurance", level: "Intermediate" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "text-green-600 dark:text-green-400";
      case "Intermediate": return "text-blue-600 dark:text-blue-400";
      case "Beginner": return "text-orange-600 dark:text-orange-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Technical Skills & Expertise - France Witness Mokoena
        </h1>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          As a professional <strong>Web Developer</strong> and <strong>App Developer</strong>, I've developed a comprehensive skill set through academic projects, 
          certifications, and hands-on experience at Wiggle Digital. Here's a detailed overview of my technical capabilities 
          as a <strong>Software Developer</strong> and <strong>Mobile App Developer</strong>:
        </p>
        
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            🎯 Professional Focus Areas - Web Developer & App Developer
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Web Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Mobile App Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Full Stack Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Database Design
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              API Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              AI/ML Integration
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              Cybersecurity
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              Cloud Computing
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-8 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            💼 Professional Summary - France Witness Mokoena
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As a dedicated <strong>Web Developer</strong> and <strong>App Developer</strong>, I combine technical expertise with creative problem-solving to deliver 
            innovative software solutions. My experience spans from mobile app development with React Native to full-stack web development, 
            with a strong foundation in AI/ML and cybersecurity. I'm passionate about staying current with emerging technologies and 
            best practices in software development, making me a versatile <strong>Software Developer</strong> ready to tackle complex challenges 
            in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
