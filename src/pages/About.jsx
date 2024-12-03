import React from "react";

function About() {
    return (
      <div>
        <div style={{ textAlign: "center", padding: "20px" }}>
          
          <h1>About Me</h1>

          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            My name is Kyle Merino{'\n'}
            {'\n'}
            I graduated from San Diego State University in 2024,
            with a Bachelor of Science in Computer Science. My
            main areas of interest are software development,
            operating systems, and cybersecurity. I enjoy
            learning new programming languages, tech skills,
            and software. Currently I am working on projects that
            revolve around embedded devices, AI, and web development.{'\n'}
            {'\n'}
            For personal and professional inquiries, I can be reached
            at kylemerino57@gmail.com
          </pre>
        </div>
      </div>
    );
}

export default About;