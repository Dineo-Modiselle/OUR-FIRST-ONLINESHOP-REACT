import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        className="text-6xl font-bold text-red-500"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="mt-4 text-lg text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Link
          to="/"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
}
