import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About France Witness Mokoena - Web Developer & App Developer | Software Engineer",
  description: "Learn about France Witness Mokoena, a professional Web Developer and App Developer from South Africa. ICT Graduate with expertise in React Native, Node.js, AI/ML, and Cybersecurity. View experience, education, and skills.",
  keywords: [
    "About France Witness Mokoena",
    "France Witness Mokoena Bio",
    "Web Developer South Africa",
    "App Developer Mpumalanga",
    "Software Developer Portfolio",
    "React Native Developer",
    "Node.js Developer",
    "ICT Graduate",
    "University of Mpumalanga",
    "Wiggle Digital Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "AI Developer",
    "Cybersecurity Expert"
  ],
  openGraph: {
    title: "About France Witness Mokoena - Web Developer & App Developer",
    description: "Professional Web Developer and App Developer from South Africa. ICT Graduate with expertise in React Native, Node.js, AI/ML, and Cybersecurity.",
    url: "https://francewitnessmokoena.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          About France Witness Mokoena - Web Developer & App Developer
        </h1>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I'm <strong>France Witness Mokoena</strong>, a passionate <strong>Web Developer</strong> and <strong>App Developer</strong> based in South Africa. 
          As an ICT graduate with a strong focus on programming and application development, I specialize in building robust web and mobile solutions 
          that solve real-world problems. Here's a comprehensive overview of my background and professional objectives:
        </p>
        
        <div className="space-y-8">
          {/* Personal Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👨‍💻</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Professional Web Developer & App Developer
              </h2>
            </div>
            
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <strong>France Witness Mokoena</strong>, a dedicated <strong>Web Developer</strong> and <strong>App Developer</strong> with a passion for creating innovative software solutions. 
                As an ICT graduate from the University of Mpumalanga, I specialize in building cross-platform mobile applications, web solutions, and enterprise systems 
                using modern technologies like <strong>React Native</strong>, <strong>Node.js</strong>, and cloud platforms. With experience as a Software Developer Intern at Wiggle Digital, 
                I've successfully developed and deployed applications to the Google Play Store, demonstrating my ability to deliver production-ready software solutions 
                as a professional <strong>Mobile App Developer</strong> and <strong>Web Developer</strong>.
              </p>
            </div>
          </div>

          {/* Professional Objective */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Professional Objective as Web Developer & App Developer
              </h2>
            </div>
            
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To secure a <strong>software development role</strong> where I can leverage my expertise as a <strong>Web Developer</strong> and <strong>App Developer</strong>, 
                problem-solving abilities, and hands-on experience in mobile app development, web development, and full-stack solutions. 
                I aim to contribute to innovative projects that challenge my technical skills while allowing me to grow as a developer. 
                My goal is to work with cutting-edge technologies, collaborate with experienced teams, and build scalable software solutions 
                that make a real impact as a professional <strong>Software Developer</strong> and <strong>Mobile App Developer</strong>.
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Personal Information - France Witness Mokoena
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> France Witness Mokoena</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Date of Birth:</strong> 31/12/2002</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Gender:</strong> Male</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Nationality:</strong> South African (Mpumalanga)</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Languages:</strong> English, Sepedi, Tshwane, Sisulu</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> P.O Box 892, uThokozani, 1341</p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Education Timeline - France Witness Mokoena
              </h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Diploma in Information Communication Technology (Application Development)</h3>
                <p className="text-gray-600 dark:text-gray-400">University of Mpumalanga</p>
                <p className="text-sm text-gray-500">Completed 02 May 2025</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Specialized in <strong>Web Development</strong>, <strong>Mobile App Development</strong>, and <strong>Software Engineering</strong>
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Matric (NSC)</h3>
                <p className="text-gray-600 dark:text-gray-400">Prof SS Repinga Combined School</p>
                <p className="text-sm text-gray-500">2019 - Bachelor's pass</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Professional Experience - Web Developer & App Developer
              </h2>
            </div>
            
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Software Developer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">Wiggle Digital</p>
              <p className="text-sm text-gray-500">Mobile App Development & Web Development</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>• Developed and deployed mobile applications to Google Play Store</li>
                <li>• Worked on cross-platform mobile app development using React Native</li>
                <li>• Contributed to web development projects and full-stack solutions</li>
                <li>• Gained hands-on experience in software development lifecycle</li>
              </ul>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Technical Expertise - Web Developer & App Developer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Web Development</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• React.js & Next.js</li>
                  <li>• Node.js & Express.js</li>
                  <li>• JavaScript & TypeScript</li>
                  <li>• HTML5, CSS3, Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mobile App Development</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• React Native</li>
                  <li>• Cross-platform development</li>
                  <li>• Google Play Store deployment</li>
                  <li>• Mobile UI/UX design</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI & Cybersecurity</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Machine Learning & AI</li>
                  <li>• TensorFlow & Deep Learning</li>
                  <li>• Cybersecurity Awareness</li>
                  <li>• NLP & Computer Vision</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Database & Tools</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• SQL & RDBMS</li>
                  <li>• Database Management</li>
                  <li>• Git & Version Control</li>
                  <li>• Cloud Platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
