import { motion } from 'framer-motion';

export const Button = ({ children, disabled, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-colors ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};