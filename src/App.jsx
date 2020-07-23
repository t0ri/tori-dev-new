import React from 'react'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Projects from './Projects/Projects'
import Articles from './Articles/Articles'

import './App.scss'


// ToriDev Function Component
// Displays at HTML Root
function ToriDev() {
  // Set Web Page Title
  document.title = '@t0ri\'s website'
  return (
    <div id="tori-dev">
      <Navigation />
      <div id="content">
        <Index />
        <Projects />
        <Articles />
      </div>
    </div>
  )
}

export default ToriDev
