import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSkype,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Features", href: "#features" },
    { text: "News", href: "#news" },
    { text: "Blog", href: "#blog" },
    { text: "Contact us", href: "#contact" },
  ];

  const iconLinks = [
    { href: "https://www.facebook.com/login/", icon: faFacebookF },
    { href: "https://twitter.com/i/flow/login", icon: faTwitter },
    { href: "https://www.skype.com/en/", icon: faSkype },
    { href: "https://www.linkedin.com/home", icon: faLinkedinIn },
  ];
  return (
    <div className="w-full h-24 bg-[rgba(0,0,0,0.4)] px-4 flex items-center justify-between border-b-2 border-b-[#7b7b7b] fixed top-0 z-10 backdrop-blur-sm">
      <div className="w-1/5 flex items-center justify-end">
        <a href="#home">
          <img
            src="/Images/Logo.png"
            alt=""
            width={67}
            height={67}
            className="aspect-square object-cover"
          />
        </a>
      </div>
      <nav className="flex flex-row gap-12 flex-grow items-center justify-center h-full">
        <ul
          id="nav-links"
          className="flex flex-row gap-12 list-none items-center text-white h-full"
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center h-full border-0 transition-all ease-in-out text-xl font-myriad-pro hover:border-b-8 border-b-[#11749e] cursor-pointer"
            >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <ul id="icon-links" className="flex flex-row gap-6 text-white text-xl">
          {iconLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank">
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
