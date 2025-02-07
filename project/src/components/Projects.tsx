import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Blood Bank Management",
      description: "A comprehensive blood bank management system built with React, Redux, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/anuroop021/Blood_Bank_Management-_Application",
      live: "https://blood-bank-management-application.netlify.app"
    },
    {
      title: "CyberTEA 2.0",
      description: "Event management platform with 3D visualizations using React, Three.js, and Material UI.",
      image: "https://images.unsplash.com/photo-1638136264464-2711f0078d1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Three.js", "Material UI", "Framer Motion"],
      github: "https://github.com/anuroop021/cybertea2.0",
      live: "https://cybertea2-0.netlify.app"
    },
    {
      title: "Chat-space",
      description: "Real-time chat application built with MERN stack and Firebase integration.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["MERN Stack", "Firebase", "Material UI"],
      github: "https://github.com/anuroop021/Chat-space-Mern-application",
      live: "https://chat-space-mern.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                perspective: 1000,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity
                              flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#64ffda] rounded-full hover:bg-[#64ffda]/90 transition-colors"
                  >
                    <Github className="w-5 h-5 text-[#0a192f]" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#64ffda] rounded-full hover:bg-[#64ffda]/90 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-[#0a192f]" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#233554] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;