import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              プライバシーポリシー
            </a>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MOTHER. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
