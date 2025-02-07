import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Redux"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      technologies: ["Node.js", "MongoDB", "SQL", "Redis", "Express"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Other Skills",
      technologies: ["Git", "Docker", "AWS", "Firebase", "REST APIs"]
    }
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-400 mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development started with a curiosity for creating interactive
              experiences, and has evolved into a deep understanding of both frontend and backend technologies.
            </p>
            <p className="text-gray-400">
              Currently, I'm focused on building scalable applications and exploring new technologies
              to create better user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Developer workspace"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] p-6 rounded-lg cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                perspective: 1000
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-[#64ffda] mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#233554] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;