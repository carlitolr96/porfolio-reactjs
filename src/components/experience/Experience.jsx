import React from "react";
import "./experience.css";
import { FaWordpress } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experience = [
  {
      id: 1,
      date: "2016 - present",
      iconsSrc: <FaWordpress />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description: 
          "My Experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta enim omnis commodi, ducimus aperiam architecto.",
  },
  {
      id: 2,
      date: "2014 - 2016",
      iconsSrc: <FaReact />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description: 
          "My Experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta enim omnis commodi, ducimus aperiam architecto.",
  },
  {
      id: 3,
      date: "2012 - 2014",
      iconsSrc: <FaHtml5 />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description: 
          "My Experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta enim omnis commodi, ducimus aperiam architecto.",
  },
  {
      id: 4,
      date: "2011 - 2012",
      iconsSrc: <FaJs />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description: 
          "My Experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta enim omnis commodi, ducimus aperiam architecto.",
  },
  {
    id: 5,
    date: "2011 - 2009",
    iconsSrc: <FaCss3Alt />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description: 
        "My Experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta enim omnis commodi, ducimus aperiam architecto.",
}
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <VerticalTimeline>
        {
          experience.map(({id, date, iconsSrc, title, location, description}) => {
            return (
              <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={iconsSrc}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {location}
              </h4>
              <p>{description}</p>
            </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
