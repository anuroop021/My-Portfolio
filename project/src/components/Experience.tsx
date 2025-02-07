import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: "Tikaana",
      role: "Software Developer Intern",
      date: "May - July 2024",
      description: [
        "Implemented subscription mutations and enhanced Redis caching",
        "Created comprehensive API documentation",
        "Optimized database queries for improved performance"
      ]
    },
    {
      company: "Epoch",
      role: "Software Developer",
      date: "Aug 2024 - Present",
      description: [
        "Developed CyberTEA event management system",
        "Led frontend development using React and Three.js",
        "Implemented real-time features and optimizations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 
                         before:top-0 before:bottom-0 before:w-px before:bg-[#64ffda]"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-[#64ffda] rounded-full 
                            transform -translate-x-[5px]" />
              <h3 className="text-xl font-bold text-[#64ffda]">{exp.role}</h3>
              <p className="text-lg mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;