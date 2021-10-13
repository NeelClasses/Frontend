import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterConfig = {
  navLinks: [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "Contact us", to: "/contact" },
    { label: "About us", to: "/about" },
  ],
  socialLinks: [
    { icon: faFacebook, to: "/" },
    { icon: faInstagram, to: "/" },
    { icon: faTwitter, to: "/" },
  ],
};

export default FooterConfig;
