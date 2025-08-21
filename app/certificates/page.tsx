export default function CertificatesPage() {
  const certificates = [
    {
      name: "Natural Language Processing & Computer Vision",
      issuer: "IBM Developer Skills Network (CognitiveClass.ai)",
      year: "2024",
      category: "AI/ML",
      icon: "🤖",
      description: "Comprehensive training in NLP techniques and computer vision applications using modern AI frameworks."
    },
    {
      name: "SQL & Relational Databases",
      issuer: "IBM Developer Skills Network",
      year: "2024",
      category: "Database",
      icon: "🗄️",
      description: "Advanced database management, query optimization, and relational database design principles."
    },
    {
      name: "AI & Deep Learning with TensorFlow",
      issuer: "IBM Developer Skills Network",
      year: "2024",
      category: "AI/ML",
      icon: "🧠",
      description: "Hands-on experience with TensorFlow for building and deploying deep learning models."
    },
    {
      name: "Cybersecurity Awareness — Safe QR Code Scanning",
      issuer: "KnowBe4 (via UMP)",
      year: "2024",
      category: "Security",
      icon: "🛡️",
      description: "Best practices for cybersecurity awareness and safe digital practices in modern environments."
    },
    {
      name: "SAP ERP",
      issuer: "MENTEC Foundation (partnered with UMP)",
      year: "2024",
      category: "Enterprise",
      icon: "🏢",
      description: "Enterprise Resource Planning systems and business process management using SAP technologies."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "text-purple-600 dark:text-purple-400";
      case "Database": return "text-blue-600 dark:text-blue-400";
      case "Security": return "text-red-600 dark:text-red-400";
      case "Enterprise": return "text-green-600 dark:text-green-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-purple-100 dark:bg-purple-900/30";
      case "Database": return "bg-blue-100 dark:bg-blue-900/30";
      case "Security": return "bg-red-100 dark:bg-red-900/30";
      case "Enterprise": return "bg-green-100 dark:bg-green-900/30";
      default: return "bg-gray-100 dark:bg-gray-700";
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Achievements & Certifications</h1>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I've earned several professional certifications to validate my skills and stay current with industry standards. 
          These certifications demonstrate my commitment to continuous learning and professional development.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.name} className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h3>
                    <span className="text-sm text-gray-500">{cert.year}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryBg(cert.category)} ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                    <span className="text-xs text-gray-500">• Verified Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            📚 Continuous Learning
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm committed to staying updated with the latest technologies and industry best practices. 
            Currently pursuing additional certifications in:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Cloud Computing (AWS/Azure)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              DevOps & CI/CD
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
              Mobile Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              Advanced AI/ML
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              Cybersecurity
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
              Data Science
            </span>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            💡 <strong>Tip:</strong> Certificate logos and links to PDFs can be added later for enhanced verification.
          </p>
        </div>
      </div>
    </div>
  );
}
