import React from 'react';
import { SiZalo } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-all duration-300"
  >
    <div className="p-3 bg-slate-800/70 group-hover:bg-blue-600/50 rounded-full transition-all duration-300 transform group-hover:scale-110 group-focus:ring-2 ring-blue-400 flex items-center justify-center">
      {children}
    </div>
    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tham gia cộng đồng</p>
        <div className="flex items-center justify-center space-x-6 sm:space-x-8">
          <SocialLink href="#" label="Zalo">
            <SiZalo size={24} />
          </SocialLink>
          <SocialLink href="#" label="Facebook Fanpage">
            <FaFacebook size={24} />
          </SocialLink>
          <SocialLink href="#" label="Facebook Group">
            <FaFacebook size={24} />
          </SocialLink>
          <SocialLink href="#" label="Discord">
            <FaDiscord size={24} />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
