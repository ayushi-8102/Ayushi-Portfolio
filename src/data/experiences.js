import gdsc from "../assets/images/gdsc.png";
import out from "../assets/images/oumt.png";
import rbl from "../assets/images/shit.png";
import iiitv from "../assets/images/iitv.png";

import { blue, green, pink, yellow } from "../utils";

export const experiences = [
  {
    logo: iiitv,
    name: "IIIT Vadodara ",
    joined: "May 23",
    end: "July 23",
    title: "Research Intern",
    bio: "Worked on a project that aims at integrating NLP based models in Software Engineering Using LangchainandOpenAI Framework."
   ,
    color: blue,
  },
  {
    logo: rbl,
    name: "HOOGAAA",
    joined: "March'23",
    end: "May'23",
    title: "SDE Intern",
    bio: "Worked as a full stack developer and developed their Travel Booking Website.Worked on code optimization and refactoring the existing code-base. ",
    color: green,
  },
  {
    logo: out,
    name: "Outreachy",
    joined: "Mar'23",
    end: "Apr'23",
    title: "Open-Source Contributor",
    bio: " Contributed to Open Source Organizations like  LLVM and  Palisadoes Foundation .Got shortlisted  Out of 5,000+ registrations.(Top 10%)"
   ,
    color: yellow,
  },
  {
    logo: gdsc,
    name: "Google Developer Students Club",
    joined: "Aug'22",
    end: "Present",
    title: "Women-In-Tech-Co lead",
    bio: "Mentored 70+ girls to improve technical and professional skills",
    color: pink,
  },
];
