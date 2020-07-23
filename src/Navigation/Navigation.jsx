import React from 'react'

import './navigation.scss'

// Navigation Functional Component
// Renders Navigation
function Navigation() {
  return (
    <nav>
      <ul>
        <li id="logo">
          {/* Logo Image */}
          <img src="./img/sig-dark.png" alt="@t0ri signature" />
        </li>
        <li id="description">
          <p><span role="img" aria-label="dizzy"> 💫</span> tori murray <span role="img" aria-label="woman">👩</span></p>
          <p>frontend web</p>
          <p><span role="img" aria-label="foggy">🌁</span> sf, ca <span role="img" aria-label="globe showing Americas">🌎</span></p>
        </li>
        <li id="socials">
          <li>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/t0ri/"
              target="_blank"
              rel="noopener noreferrer"
              alt="LinkedIn"
            >
              <img src="./img/002-linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            {/* GitHub Link */}
            <a
              href="https://www.github.com/t0ri"
              target="_blank"
              rel="noopener noreferrer"
              alt="GitHub"
            >
              <img src="./img/003-github-logo.png" alt="GitHub" />
            </a>
          </li>
          <li>
            {/* Twitter Link */}
            <a
              href="https://www.twitter.com/myomachy"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter"
            >
              <img src="./img/001-twitter.png" alt="Twitter" />
            </a>
          </li>
        </li>
        <li>
          {/* Projects Link */}
          projects
        </li>
        <li>
          {/* Articles Link */}
          articles
        </li>
        <li>
          {/* About Link */}
          about
        </li>
      </ul>
    </nav>
  )
}

export default Navigation