import React from "react"
import ProjectOne from "./projectOne"

const WorkPage = () => {
  return (
    <div className="work-container">
      <div className="workHeader">
        <h1>Client & Personal Projects</h1>
        <p>
          Here are a few examples of my client and personal projects that I've
          been working on.
        </p>
      </div>
      <ProjectOne />
    </div>
  )
}

export default WorkPage
