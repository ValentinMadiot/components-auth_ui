import { motion } from "framer-motion";
import "./authMenu.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1, // attends que le texte soit fini (~1s)
      staggerChildren: 0.12,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const AuthMenu = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "instant" });
  };

  return (
    <motion.div
      className="auth-menu"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <motion.button
          key={num}
          variants={buttonVariants}
          onClick={() => handleScroll(`auth${num}`)}>
          {num}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default AuthMenu;
