"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
        .caveat-font {
          font-family: 'Caveat', cursive;
          font-optical-sizing: auto;
          font-weight: 400; /* Adjust weight as needed */
          font-style: normal;
          font-size: 2rem; /* Increase font size */
        }
      `}</style>
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
          <span className="caveat-font">Aagam Shah</span>
          <p className="text-slate-600">All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;