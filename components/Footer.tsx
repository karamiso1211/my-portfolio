import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* 左側：コピーライト */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </div>

        {/* 右側：SNSリンク（アイコンの代わりに文字で） */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            X (Twitter)
          </a>
          {/* 必要ならメールリンクも */}
          <a href="mailto:example@email.com" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;