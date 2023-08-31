import React from "react"
import Avatar from '@mui/material/Avatar'

//install material ui
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

//put pictures link here
import sanjeevpic from '../assets/sanjeev.png'
import ujjwalpic from '../assets/ujjwal.png'
import satyampic from '../assets/satyam.png'
import './ContactUs.css'

const UserProfile = ({ name, avatarSrc, githubLink, linkedinLink }) => {
    return (
      <div className="user-profile">
        <Avatar
          alt={`${name}'s Avatar`}
          src={avatarSrc}
          sx={{
            width: 100,
            height: 100,
            margin: '0 auto',
          }}
        />
        <div className="user-info" >
            <div className="social-links">
                <IconButton className="Iconbtn"
                    aria-label="GitHub"
                    color="light"
                    href={githubLink}
                    target="_blank"
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton className="Iconbtn"
                    aria-label="LinkedIn"
                    color="primary"
                    href={linkedinLink}
                    target="_blank"
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
      </div>
    );
  };

export default function ContactUs() {
    const users = [
        {
          name: 'Sanjeev',
          avatarSrc: sanjeevpic,
          githubLink: 'https://github.com/',  //put github link
          linkedinLink: 'https://linkedin.com/in/',  //put linkedin link
        },
        {
          name: 'Ujjawal',
          avatarSrc: ujjwalpic,
          githubLink: 'https://github.com/',
          linkedinLink: 'https://linkedin.com/in/',
        },
        {
          name: 'Satyam',
          avatarSrc: satyampic,
          githubLink: 'https://github.com/',
          linkedinLink: 'https://linkedin.com/in/',
        },
      ];
    return (
        <div className="container">
          
            {users.map((user, index) => (
        <UserProfile
          key={index}
          name={user.name}
          avatarSrc={user.avatarSrc}
          githubLink={user.githubLink}
          linkedinLink={user.linkedinLink}
        />
      ))}
        </div>

    )
}
