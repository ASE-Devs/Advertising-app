import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#09132F] h-85 text-white w-full flex flex-col items-center">
      <div className="top flex w-full justify-around pt-12 pb-15">
        <div className="feature space-y-4">
          <h1 className="font-bold">FEATURES</h1>
          <div className="flex flex-col space-y-2 text-[#c4c4c4]">
            <Link>Team Management</Link>
            <Link>Task Schedule</Link>
            <Link>File Manager</Link>
          </div>
        </div>
        <div className="resouces feature space-y-3">
          <h1 className="font-bold">RESOURCES </h1>
          <div className="flex flex-col feature space-y-2 text-[#c4c4c4]">
            <Link>Blog</Link>
            <Link>Support</Link>
            <Link>Newsletter</Link>
          </div>
        </div>
        <div className="community feature space-y-3">
          <h1 className="font-bold">COMMUNITY</h1>
          <div className="flex flex-col feature space-y-2 text-[#c4c4c4]">
            <Link>Twitter</Link>
            <Link>Instagram</Link>
            <Link>Facebook</Link>
            <Link>YouTube</Link>
          </div>
        </div>
        <div className="support feature space-y-3">
          <h1 className="font-bold">SUPPORT</h1>
          <div className="flex flex-col feature space-y-2 text-[#c4c4c4]">
            <Link>My Account</Link>
            <Link>Help & Support</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        <div className="company feature space-y-3">
          <h1 className="font-bold">COMPANY</h1>
          <div className="flex flex-col feature space-y-2 text-[#c4c4c4]">
            <Link>Company Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Code of Conduct</Link>
          </div>
        </div>
      </div>
      <div className="bottom flex w-full max-w-[80vw] justify-between border-t items-center pt-5">
        <p>Logo</p>
        <p>&copy; 2025, Made with passion by ASE Devs</p>
      </div>
    </footer>
  );
};

export default Footer;
