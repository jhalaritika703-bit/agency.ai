import React, { useState } from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react"

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("🎉 Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-24 sm:mt-36">
      <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <img
              src={assets.logo}
              alt="Logo"
              className="w-40 mb-6"
            />

            <p className="leading-7 text-sm max-w-md">
              From strategy to execution, we craft digital solutions
              that move your business forward. We help businesses
              transform ideas into powerful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <a href="#hero" className="hover:text-primary transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#our-work" className="hover:text-primary transition">
                  Our Work
                </a>
              </li>

              <li>
                <a href="#contact-us" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 dark:text-white">
              Subscribe to our Newsletter
            </h3>

            <p className="text-sm leading-6 mb-6">
              Get the latest news, project updates, and digital insights
              delivered directly to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none"
              />

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a href="#" className="hover:scale-110 transition">
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="w-9"
                />
              </a>

              <a href="#" className="hover:scale-110 transition">
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="w-9"
                />
              </a>

              <a href="#" className="hover:scale-110 transition">
                <img
                  src={assets.instagram_icon}
                  alt="Instagram"
                  className="w-9"
                />
              </a>

              <a href="#" className="hover:scale-110 transition">
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="w-9"
                />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © {new Date().getFullYear()} AI Agency. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-primary transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;