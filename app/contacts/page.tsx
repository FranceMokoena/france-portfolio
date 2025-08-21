"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
        console.error('Contact form error:', data.error);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get In Touch</h1>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I'm available for internships, junior roles, and collaborations. Whether you have a project in mind, 
          want to discuss opportunities, or just want to connect, I'd love to hear from you!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                📞 Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <span className="text-blue-600 text-lg">📞</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+27 76 778 9235</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <span className="text-blue-600 text-lg">✉️</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">francewitness9@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-400">220320233@ump.ac.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <span className="text-blue-600 text-lg">📍</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Mpumalanga, South Africa</p>
                    <p className="text-gray-600 dark:text-gray-400">P.O Box 892, uThokozani, 1341</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                🔗 Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/in/france-witness-mokoena-929793311/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all duration-200"
                >
                  <span className="text-blue-600">💼</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/FranceMokoena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <span className="text-gray-800 dark:text-gray-200">🐙</span>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href="mailto:francewitness9@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 transition-all duration-200"
                >
                  <span className="text-green-600">📧</span>
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                🎯 What I'm Looking For
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
                  Software Development Internships
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
                  Web Development Roles
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200">
                  Database Management
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
                  AI/ML Projects
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
                  Cybersecurity Opportunities
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-200">
                  Open Source Contributions
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              💬 Send Me a Message
            </h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✅</span>
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 text-lg">❌</span>
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Failed to send message. Please try again or email me directly at francewitness9@gmail.com
                  </p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            🚀 <strong>Ready to connect!</strong> Your message will be sent directly to my email. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
