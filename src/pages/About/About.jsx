import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import iiit from "../../assets/images/iitv.png";
import highschool from "../../assets/images/download.png";
import shiv from "../../assets/images/shiv.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            I'm a passionate programmer, who is always looking for new
            challenges to improve myself, I am  always
            ready and eger to learn new things and help others.
            <br />I am a Pre-final year student at Indian Institute of Information Technology(IIIT),Vadodara. My major is Computer Science and Engineering and I do web development for fun. Currently I'm serving as a Women -In-Tech Co-Lead at GDSC IIIT Vadodara and Web lead for TEDX IIIT Vadodara. I am well versed with Computer Science fundamentals like OOPS, Operating Systems, Database Management Systems, Computer Networks and also have keen interest in Problem Solving(Data Structures and Algorithms). 
            I am interested and open to interview for Full Time roles in Software Engineering domain.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Indian Institute of Information Technology,Vadodara",
                p: "Bachelors of Computer Engineering (2020-2024)",
                image: iiit,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Shiv Jyoti Convent School",
                p: "Senior Secondary School-CBSE (2018-2020)",
               
                image: shiv,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "St. Micheal's Convent School",
                p: "Secondary Education-CBSE (2006-2018)",
                image: highschool,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
