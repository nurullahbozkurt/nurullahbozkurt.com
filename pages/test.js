import { MdLegendToggle } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <MdLegendToggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <div className="bg-red-900">asasdasddd</div>
    </motion.nav>
  );
};
export default TestPage;
