import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

const navItems = Object.keys(navLinks);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle resize to close menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 830) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="h-[44px] fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="mx-auto flex items-center justify-between h-full max-w-[980px] px-4 text-black relative z-[60]">
        
        {/* Left Icon (Logo) */}
        <NavLink to="/" className="flex items-center justify-center z-[60]" onClick={() => setIsMobileMenuOpen(false)}>
          <svg className="w-[18px] h-[44px]" viewBox="0 0 16 44" fill="#333232">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
          </svg>
        </NavLink>

        {/* Center Nav Items (Desktop) */}
        <ul className="hidden min-[830px]:flex flex-1 justify-between list-none px-8">
          {navItems.map((item) => (
            <li key={item} className="group flex items-center h-full">
              <NavLink
                to={`/${item.toLowerCase().replace(/\s|&/g, "")}`}
                className={({ isActive }) =>
                  `flex items-center justify-center h-full text-[13px] font-normal no-underline transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`
                }
                style={{ color: "black" }}
              >
                {item}
              </NavLink>

              {/* Dropdown (Desktop) */}
              {navLinks[item] && (
                <div
                  className="
                        fixed top-[44px] left-0 w-full
                        bg-white  
                        opacity-0 invisible
                        -translate-y-3
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        transition-all
                        duration-300
                        ease-[cubic-bezier(0.25,0.1,0.25,1)]
                        z-[40]
                        shadow-xl
                      
                        pointer-events-auto
                        "
                >
                  <div className="mx-auto max-w-[1024px] px-[22px] pt-[40px] pb-[80px] flex gap-8">
                    {/* Column 1 - Shop */}
                    {navLinks[item].shop?.length > 0 && (
                      <div className="flex flex-col w-[264px]">
                        <h4 className="text-[12px] text-gray-500 font-medium p-[10px] mb-2">
                          {item}
                        </h4>
                        {navLinks[item].shop.map((link, idx) => (
                          <span
                            key={idx}
                            className="text-[20px] leading-tight font-semibold text-gray-900 hover:text-blue-600 cursor-pointer block py-1 px-[10px] transition-colors"
                          >
                            {link}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Column 2 - Quick Links */}
                    {navLinks[item].quickLinks?.length > 0 && (
                      <div className="flex flex-col w-[131px]">
                        <h4 className="text-[12px] text-gray-500 font-medium p-[10px] mb-2">
                          Quick Links
                        </h4>
                        {navLinks[item].quickLinks.map((link, idx) => (
                          <span
                            key={idx}
                            className="text-[12px] font-medium text-gray-600 hover:text-gray-900 cursor-pointer block py-1 px-[10px] transition-colors"
                          >
                            {link}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Column 3 - Special / Stores */}
                    {navLinks[item].shopSpecial?.length > 0 && (
                      <div className="flex flex-col w-[168px]">
                        <h4 className="text-[12px] text-gray-500 font-medium p-[10px] mb-2">
                          {item} Stores
                        </h4>
                        {navLinks[item].shopSpecial.map((link, idx) => (
                          <span
                            key={idx}
                            className="text-[12px] font-medium text-gray-600 hover:text-gray-900 cursor-pointer block py-1 px-[10px] transition-colors"
                          >
                            {link}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons (Desktop & Mobile) */}
        <div className="flex items-center gap-4 min-[830px]:gap-8 z-[60]">
          {/* Search (Hidden on mobile if needed, or keeping minimal) */}
           <div className="hidden min-[830px]:block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="44px"
                viewBox="0 0 15 44"
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
            >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
           </div>

          {/* Bag */}
          <NavLink className="opacity-80 hover:opacity-100 transition-opacity">
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
            </svg>
          </NavLink>

          {/* Burger Menu (Mobile Only) */}
          <button
            className="min-[830px]:hidden flex flex-col justify-center gap-[5px] w-[18px] h-[44px] cursor-pointer z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-full h-[1px] bg-black transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-full h-[1px] bg-black transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[50] pt-[60px] px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-[100%]"
        }`}
      >
        <ul className="flex flex-col gap-4 text-2xl font-semibold text-gray-800">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`border-b border-gray-100 pb-2 transition-all duration-500 delay-[${index * 50}ms] ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <NavLink
                to={`/${item.toLowerCase().replace(/\s|&/g, "")}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-black"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
