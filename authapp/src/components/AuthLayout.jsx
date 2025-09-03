import { motion } from 'framer-motion';

export const AuthLayout = ({ children, title, subtitle, illustration }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: '3s' }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 300, 180],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"
        style={{ animationDelay: '1.5s' }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [90, 270, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-8 w-full max-w-md z-10"
      >
        {/* Logo/Header area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center"
            >
              <span className="text-white text-2xl font-bold">A</span>
            </motion.div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {title}
          </h1>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </motion.div>

        {children}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8 pt-6 border-t border-gray-100"
        >
          <p className="text-xs text-gray-500">
            © 2024 Your App Name. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};