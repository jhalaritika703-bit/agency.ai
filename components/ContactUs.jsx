import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);

      formData.append(
        "access_key",
        "dd4907b4-a88b-4699-b3c3-5d0d2bec0ec7"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <Title
          title="Reach out to us"
          desc="From strategy to execution we craft digital solutions that move your business forward."
        />
      </motion.div>

      <motion.form
        variants={itemVariants}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <motion.div variants={itemVariants}>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mb-2 text-sm font-medium">Email Address</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="sm:col-span-2"
        >
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter your message"
            required
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
          ></textarea>
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Submit
              <img
                src={assets.arrow_icon}
                alt=""
                className="w-4"
              />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;