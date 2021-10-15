import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const constants = {
  colors: {
    primaryColor: "#002a45",
    secondaryColor: "#fea713",
    backgroundColor: "#fffcf7",
  },
  contactUsDetails: {
    address: "6/1, Chintamani Moraya Nagar, Dharangaon, Dist. Jalgaon.",
    pin: "425105",
    phones: ["+91-8767-346-075", "+91-9545-583-393"],
    emails: ["rahulcricket91@gmail.com"],
    mapSource:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.0089036969048!2d75.27714206587453!3d21.0068755731363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd93ccf44240bc1%3A0xa4b27f2b909fe46e!2sChintamani%20Moraya%20Rd%2C%20Dharangaon%2C%20Maharashtra%20425105!5e0!3m2!1sen!2sin!4v1634277181267!5m2!1sen!2sin",
  },
  headerDetails: {
    navLinks: [
      { label: "Home", to: "/" },
      { label: "Courses", to: "/courses" },
      { label: "Contact Us", to: "/contact" },
      { label: "About Us", to: "/about" },
    ],
    ctaButtons: [
      { label: "Sign up", to: "/signup", isPrimary: true },
      { label: "Log in", to: "/login", isPrimary: false },
    ],
  },
  footerDetails: {
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
  },
};