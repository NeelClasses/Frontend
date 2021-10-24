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
    addresses: {
      Dharangaon: "6/1, Chintamani Moraya Nagar, Dharangaon, Dist. Jalgaon.",
      DharangaonPin: "425105",
      Jalgaon:
        "Ratneshwar Nivas, Near Saptashrungi Apartment, \n Shri. Mahalakshmi Dugdhalaya, Gat No. 60/152, Shiv Colony, Jalgaon.",
    },
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
    dropDownDetails: [
      {
        heading: "Home",
        content: [
          { label: "Colour Chart", link: "/" },
          { label: "Popular Courses", link: "/" },
          { label: "Notes", link: "/" },
          { label: "Videos", link: "/" },
        ],
      },
      {
        heading: "Engg",
        content: [
          { label: "Math", link: "/" },
          { label: "Mech. Engg", link: "/" },
          { label: "Civil Engg.", link: "/" },
          { label: "Videos", link: "/" },
          { label: "MCQ", link: "/" },
        ],
      },
      {
        heading: "Diploma",
        content: [
          { label: "Math", link: "/" },
          { label: "Mech. Engg", link: "/" },
          { label: "Civil Engg.", link: "/" },
          { label: "Videos", link: "/" },
          { label: "MCQ", link: "/" },
        ],
      },
      {
        heading: "GATE",
        content: [
          { label: "Math", link: "/" },
          { label: "Aptitude", link: "/" },
          { label: "Videos", link: "/" },
        ],
      },
      {
        heading: "11th 12th",
        content: [
          { label: "Regular", link: "/" },
          { label: "MHTCET and JEE", link: "/" },
          { label: "Videos", link: "/" },
        ],
      },
      {
        heading: "BSc",
        content: [
          { label: "Math", link: "/" },
          { label: "Videos", link: "/" },
        ],
      },
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
