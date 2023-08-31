import React, { useState, useEffect } from 'react';
import './About.css'
import codeweb from '../assets/codeweb.png'
import codeclan from '../assets/Code Clan.png'
import devx from '../assets/DevX Clan.png'
import python from '../assets/Python Hunters.png'
import opensource from '../assets/Open Source Club.png'

const objects=[
  {
    "aboutus": [
        {
            "id": "1",
            "title": "Codeweb",
            "image": codeweb,
            "about": "Immerse yourself in code at our dynamic coding camp! Explore diverse programming domains through specialized clubs: from web development to Python specilization. Engage with expert mentors, collaborate on projects, and ignite your passion for coding. Unleash your potential and shape your future in the world of programming."
        },
        {
            "id": "2",
            "title": "Code Clan",
            "image": codeclan,
            "about": "Join the elite ranks of the Code Clan at our coding camp. Sharpen your algorithmic skills and strategic thinking through intense coding battles. From data structures to coding challenges, immerse yourself in a competitive yet collaborative environment. Elevate your coding prowess and conquer the world of competitive programming with Code Clan"

        },
        {
            "id": "3",
            "title": "DevX Clan",
            "image": devx,
            "about": "Dive into the world of web development with DevX Clan at our coding camp. From frontend design using HTML/CSS to backend mastery with JavaScript and databases, craft interactive and dynamic websites. Join a community of aspiring developers, learn through hands-on projects, and shape the digital landscape with DevX Clan."
        },
        {
            "id": "4",
            "title": "Python Hunters",
            "image": python,
            "about": "Embark on a journey of coding exploration with Python Hunters at our camp. Delve into the versatility of Python - from automation and data analysis to AI applications. Join fellow enthusiasts, unravel the language's potential, and master the art of pythonic programming. Unleash innovation and stalk success with Python Hunters."
        },
        {
            "id": "5",
            "title": "Open Source Club",
            "image": opensource,
            "about": "Join the Open Source Club at our camp to pioneer collaborative innovation. Explore the world of open source technology, contribute to impactful projects, and cultivate a global coding community. From GitHub to community-driven development, harness the power of shared knowledge and propel the future of tech with the Open Source Club."
        }

    ]
}

]


 
  
    function About() {
      const [showAll, setShowAll] = useState(false);
    
      const loadAllObjects = () => {
        setShowAll(true);
      };
      const revertToShowOne = () => {
        setShowAll(false);
      };
    
      return (
        <div className="About">
          <h1>About Us</h1>
          <div className="object-container">
            {showAll
              ? objects[0].aboutus.map((club, index) => (
                  <div key={index} className="object">
                    <img src={club.image} alt={`Club ${index + 1}`} />
                    <p>{club.about}</p>
                  </div>
                ))
              : objects[0].aboutus.slice(0, 1).map((club, index) => (
                  <div key={index} className="object">
                    
                    <img src={club.image} alt={`Club ${index + 1}`} />
                    <p>{club.about}</p>
                  </div>
                ))}
          </div>
          {!showAll ? (
        <button onClick={loadAllObjects}>Load All Objects</button>
      ) : (
        <button onClick={revertToShowOne}>Revert</button>
      )}
        </div>
      );
    }
  
    
    export default About;