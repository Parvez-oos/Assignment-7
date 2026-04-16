import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#244d3f] text-white mt-auto pt-20 pb-10 text-center">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <div className="mb-4">
          <img 
            src="/assets/logo-xl.png" 
            alt="KeenKeeper" 
            className="h-13 mx-auto object-contain" 
          />
        </div>

        
       <p className="text-[#9CA3AF] text-[14px] leading-relaxed mb-6 max-w-3xl mx-auto font-medium px-4">
  Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
</p>
        
        
        <div className="mb-12">
          <p className="font-bold mb-5 text-[11px] tracking-[0.15em] uppercase text-[#F3F4F6]">
            Social Links
          </p>
          <div className="flex justify-center gap-5">
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <img src="/assets/instagram.png" alt="Instagram" className="w-9 h-9" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <img src="/assets/facebook.png" alt="Facebook" className="w-9 h-9" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-200">
              <img src="/assets/twitter.png" alt="X" className="w-9 h-9" />
            </a>
          </div>
        </div>

      
        <div className="border-t border-[#FFFFFF1A] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
          <p className="text-[12px] font-medium text-[#9CA3AF]">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <span className="text-[12px] font-medium text-[#9CA3AF] cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="text-[12px] font-medium text-[#9CA3AF] cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </span>
            <span className="text-[12px] font-medium text-[#9CA3AF] cursor-pointer hover:text-white transition-colors">
              Cookies
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}