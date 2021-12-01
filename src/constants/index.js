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
          {
            label: "Colour Chart",
            link: "/courses/home/color-chart",
            apiUrl: "homeCourses/color-chart",
          },
          {
            label: "Notes",
            link: "/courses/home/notes",
            apiUrl: "homeCourses/Notes",
          },
          {
            label: "Videos",
            link: "/courses/home/videos",
            apiUrl: "homeCourses/Videos",
          },
        ],
      },
      {
        heading: "Engg",
        content: [
          {
            label: "Math",
            link: "/courses/engg/math",
            apiUrl: "coursesByNav/Engineering/Math",
          },
          {
            label: "Mech",
            link: "/courses/engg/mech",
            apiUrl: "coursesByBranch/Engineering/Mechanical-Engineering",
          },
          {
            label: "Civil",
            link: "/courses/engg/civil",
            apiUrl: "coursesByBranch/Engineering/Civil-Engineering",
          },
          {
            label: "Videos",
            link: "/courses/engg/videos",
            apiUrl: "coursesByNav/Engineering/Videos",
          },
          {
            label: "Notes",
            link: "/courses/engg/notes",
            apiUrl: "coursesByNav/Engineering/Notes",
          },
          {
            label: "MCQ",
            link: "/courses/engg/mcq",
            apiUrl: "coursesByNav/Engineering/Mcq",
          },
        ],
      },
      {
        heading: "Diploma",
        content: [
          {
            label: "Math",
            link: "/courses/diploma/math",
            apiUrl: "coursesByNav/Diploma/Math",
          },
          {
            label: "Mech",
            link: "/courses/diploma/mech",
            apiUrl: "coursesByBranch/Diploma/Mechanical-Engineering",
          },
          {
            label: "Civil",
            link: "/courses/diploma/civil",
            apiUrl: "coursesByBranch/Diploma/Civil-Engineering",
          },
          {
            label: "Videos",
            link: "/courses/diploma/videos",
            apiUrl: "coursesByNav/Diploma/Videos",
          },
          {
            label: "Notes",
            link: "/courses/diploma/notes",
            apiUrl: "coursesByNav/Diploma/Notes",
          },
          {
            label: "MCQ",
            link: "/courses/diploma/mcq",
            apiUrl: "coursesByNav/Diploma/Mcq",
          },
        ],
      },
      {
        heading: "GATE",
        content: [
          {
            label: "Math",
            link: "/courses/gate/math",
            apiUrl: "coursesByNav/gate/Math",
          },
          {
            label: "Aptitude",
            link: "/courses/gate/apt",
            apiUrl: "coursesByNav/gate/Aptitude",
          },
          {
            label: "Videos",
            link: "/courses/gate/videos",
            apiUrl: "coursesByNav/gate/Videos",
          },
        ],
      },
      {
        heading: "11th",
        content: [
          {
            label: "Regular",
            link: "/courses/eleventh/regular",
            apiUrl: "coursesByNav/11th/Regular", // remaining
          },
          {
            label: "MHTCET and JEE",
            link: "/courses/eleventh/cetjee",
            apiUrl: "coursesByNav/11th/MHCET-and-JEE", // remaining
          },
          {
            label: "Math",
            link: "/courses/eleventh/math",
            apiUrl: "coursesByNav/11th/Math",
          },
          {
            label: "Videos",
            link: "/courses/eleventh/videos",
            apiUrl: "coursesByNav/11th/Videos",
          },
        ],
      },
      {
        heading: "12th",
        content: [
          {
            label: "Regular",
            link: "/courses/hsc/regular",
            apiUrl: "coursesByNav/HSC/Regular",
          },
          {
            label: "MHTCET and JEE",
            link: "/courses/hsc/cetjee",
            apiUrl: "coursesByNav/HSC/MHCET-and-JEE",
          },
          {
            label: "Math",
            link: "/courses/hsc/math",
            apiUrl: "coursesByNav/HSC/Math",
          },
          {
            label: "Videos",
            link: "/courses/hsc/videos",
            apiUrl: "coursesByNav/HSC/Videos",
          },
        ],
      },
      {
        heading: "BSc",
        content: [
          {
            label: "Math",
            link: "/courses/bsc/math",
            apiUrl: "coursesByNav/BSC/Math",
          },
          {
            label: "Videos",
            link: "/courses/bsc/videos",
            apiUrl: "coursesByNav/BSC/Videos",
          },
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
