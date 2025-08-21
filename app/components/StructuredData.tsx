export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://francewitnessmokoena.com/#person",
        "name": "France Witness Mokoena",
        "alternateName": "France Mokoena",
        "jobTitle": "Web Developer and App Developer",
        "description": "Professional software developer specializing in web development, mobile app development, AI/ML, and cybersecurity",
        "url": "https://francewitnessmokoena.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://francewitnessmokoena.com/GRAD2.jpg",
          "width": 1200,
          "height": 630
        },
        "sameAs": [
          "https://www.linkedin.com/in/france-witness-mokoena-929793311/",
          "https://github.com/FranceMokoena"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Wiggle Digital",
          "url": "https://wiggledigital.com"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "University of Mpumalanga",
          "url": "https://ump.ac.za"
        },
        "knowsAbout": [
          "Web Development",
          "Mobile App Development", 
          "React Native",
          "Node.js",
          "JavaScript",
          "TypeScript",
          "AI/ML",
          "Cybersecurity",
          "Database Management",
          "Software Engineering",
          "React.js",
          "Full Stack Development",
          "API Development",
          "Mobile UI/UX Design"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mpumalanga",
          "addressRegion": "Mpumalanga",
          "addressCountry": "South Africa",
          "postalCode": "1341"
        },
        "email": "francewitness9@gmail.com",
        "telephone": "+27-XX-XXX-XXXX",
        "birthDate": "2002-12-31",
        "nationality": "South African",
        "knowsLanguage": ["English", "Sepedi", "Tshwane", "Sisulu"]
      },
      {
        "@type": "WebSite",
        "@id": "https://francewitnessmokoena.com/#website",
        "name": "France Witness Mokoena Portfolio",
        "url": "https://francewitnessmokoena.com",
        "description": "Professional portfolio of France Witness Mokoena - Web Developer and App Developer",
        "author": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "publisher": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://francewitnessmokoena.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://francewitnessmokoena.com/#organization",
        "name": "France Witness Mokoena - Web Developer & App Developer",
        "url": "https://francewitnessmokoena.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://francewitnessmokoena.com/logo.png"
        },
        "description": "Professional web development and mobile app development services",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mpumalanga",
          "addressCountry": "South Africa"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "francewitness9@gmail.com"
        },
        "sameAs": [
          "https://www.linkedin.com/in/france-witness-mokoena-929793311/",
          "https://github.com/FranceMokoena"
        ]
      },
      {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development services including React.js, Node.js, and full-stack development",
        "provider": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "areaServed": "South Africa",
        "serviceType": "Web Development"
      },
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Cross-platform mobile app development using React Native and mobile UI/UX design",
        "provider": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "areaServed": "South Africa",
        "serviceType": "Mobile App Development"
      },
      {
        "@type": "Service",
        "name": "AI/ML Development",
        "description": "Artificial Intelligence and Machine Learning development services including TensorFlow, NLP, and Computer Vision",
        "provider": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "areaServed": "South Africa",
        "serviceType": "AI/ML Development"
      },
      {
        "@type": "Service",
        "name": "Cybersecurity Services",
        "description": "Cybersecurity consulting and implementation services for web and mobile applications",
        "provider": {
          "@id": "https://francewitnessmokoena.com/#person"
        },
        "areaServed": "South Africa",
        "serviceType": "Cybersecurity"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
