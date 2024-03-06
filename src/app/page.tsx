import React from "react"
import Hero from "./component/hero"
import Contact from "./component/contact"
import Project from "./component/project"
import About from "./component/about"
import Skill from "./component/skill"



export default function Home() {
  return(
  <div>
<Hero />
<Skill />
<Project />
<About />
<Contact />



  </div>)
}