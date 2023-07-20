import React, { useState } from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";



function Project(props) {
  const [flipped, setFlipped] = useState(false)
  console.log("propss---->", props)
  const { projectImage, projectTitle, projectDescription, tech, projectLink, youtubeLink, githubLink, addInfoHeading, addInfoContent  } = props

  const linkData = {
    className: 'links',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: { color: "#b6bb8b" },
    fontSize: 'large'
  }
  return (
    <div>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
      >
        <div>
          {/* THIS IS THE FRONT OF THE CARD */}
          <button className="project-pods">
            <img
              className="img-container"
              alt=""
              src={projectImage}
            />
            <div>
              <div className="projects-title">
                {projectTitle}
              </div>
              <p className='project-desc'>
                {projectDescription}
              </p>
            </div>
            <div onClick={() => setFlipped(!flipped)} className="card-detail-btn">
                <p>Click for details</p>
            </div>
          </button>
        </div>
        {/* THIS IS THE BACK OF THE CARD */}
        <button className='project-pods-back'>
          <div className='pods-content-back'>
            <div className='tech-group'>
              {tech && tech.map((el) => (
                <div className='tech'>{el}</div>
              ))}
            </div>
            <div className='links-circle'>
             { projectLink &&
              <div className='project-link'>
                <a
                  className={linkData.className}
                  href={projectLink}
                  target={linkData.target}
                  rel={linkData.rel}
                  style={linkData.style}
                  >
                  <HttpIcon fontSize={linkData.fontSize}/>
                </a>
              </div>}
              { youtubeLink &&
                <div className='youtubeLink'>
                  <a
                    className={linkData.className}
                    href={projectLink}
                    target={linkData.target}
                    rel={linkData.rel}
                    style={linkData.style}
                  >
                  <YouTubeIcon fontSize={linkData.fontSize}/>
                  </a>
                </div>
              }
               { githubLink &&
                <div className='githubLink'>
                  <a
                    className={linkData.className}
                    href={projectLink}
                    target={linkData.target}
                    rel={linkData.rel}
                    style={linkData.style}
                  >
                  <GitHubIcon fontSize={linkData.fontSize}/>
                  </a>
                </div>
              }
            </div>
           {addInfoHeading &&
              <div>
                  <div className='mobile-notice'>
                    {addInfoHeading}
                  </div>
                  <div className='mobile-notice-small'>
                    {addInfoContent}
                  </div>
              </div>
            }
          </div>
          <div onClick={() => setFlipped(!flipped)} className="card-detail-btn">
            <p>Flip Back</p>
          </div>
        </button>
      </ReactCardFlip>
    </div>
  )
}

export default Project
