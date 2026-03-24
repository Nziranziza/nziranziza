import * as React from "react";

import SocialIcons from "./social-icons";

const Footer = () => {
  return (
    <footer className="relative mt-32 pt-16 pb-12 md:pt-20 md:pb-16">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center">
              <SocialIcons color="#6366f1" className="mr-0" />
            </div>

            {/* Main content */}
            <div className="text-center space-y-3">
              <p className="text-light/80 text-base">
                Designed & Built by{" "}
                <span className="text-indigo-400 font-semibold gradient-text">
                  Daniel Nziranziza
                </span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-dark-lighter/30 w-full max-w-md">
            <p className="text-center text-light/40 text-xs">
              © {new Date().getFullYear()} Daniel Nziranziza. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
