import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const languages = [
  { code: "us", name: "US", flag: "https://flagcdn.com/w40/us.png" },
  { code: "sa", name: "AR", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "in", name: "EN", flag: "https://flagcdn.com/w40/in.png" },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default: English
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Cancel any pending close event
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Short delay before closing
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Hoverable Button */}
      <button className="px-2 py-2 flex items-center gap-2 border border-transparent hover:border-white hover:rounded-md ">
  <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="w-5 h-5 rounded-full" />
  {selectedLanguage.name} 
  <IoIosArrowDown size={12} />
</button>


      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute bg-white text-black right-0 mt-2 w-40 rounded-md shadow-lg border">
          <ul>
            {languages.map((language) => (
              <li 
                key={language.code}
                className="px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageSelect(language)}
              >
                <img src={language.flag} alt={language.code} className="w-5 h-5 rounded-full" />
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
