import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      setError(false);
      setSuccess(false);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-8">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-[#112240] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-[#112240] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-[#112240] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#64ffda] text-[#0a192f] py-3 rounded-lg font-medium
                       hover:bg-[#64ffda]/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/anuroop021"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anuroop-reddy-413936293/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:anuroopreddy021@gmail.com"
                className="p-2 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {success && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;