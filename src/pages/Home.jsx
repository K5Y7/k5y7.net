import React from "react";
import projects from "../components/projects";
import Projects from "../components/Projects";

function Home() {
    return (
      <div>
        <div style={{ textAlign: "center", padding: "20px" }}>
          
          <h1>Welcome to My Website</h1>
          <p>This is a personal website built using React and Vite.</p>
          <a href="https://github.com/k5y7/k5y7.net" target="_blank" rel="noopener noreferrer">
            Visit My GitHub Repository
          </a>
  
          {/* Projects Section */}
          <Projects projects={projects} />
        </div>
      </div>
    );
}

export default Home;