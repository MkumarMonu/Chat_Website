import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
// import { Button } from "@/components/ui/button";
// import { MessageCircle } from "lucide-react";
function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Chat!
        </h1>
        <p className="text-gray-600 mb-8">
          Connect with us for seamless communication. Join us on WhatsApp for
          quick and easy chats!
        </p>
        <button
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl transition duration-300"
          onClick={() =>
            window.open("https://wa.me/YOUR_WHATSAPP_NUMBER", "_blank")
          }
        >
          {/* <MessageCircle className="w-5 h-5" /> */}
          Join WhatsApp
        </button>
      </motion.div>
    </div>
    // <div className="mt-10">this is home page</div>
  );
}

export default Home;
