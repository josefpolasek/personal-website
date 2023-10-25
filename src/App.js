import React, { useState } from 'react';
import "./index.css";

import profile_picture from "./media/profile_picture.jpeg";

console.log(profile_picture);

function App() {
  const [email, setEmail] = useState("josefpolasek@gmail.com");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="container">
      <img src={profile_picture} alt="Profile" className="image" />
      <h1 className="headline">Josef Polasek</h1>
      <div className="links">
        <a
          href="https://github.com/josefpolasek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/josef-polasek-b3a403227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div>
        {email}
        {/* <button onClick={copyToClipboard}>Copy to Clipboard</button> */}
      </div>
      {/* <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://github.com/josefpolasek/hotelBooking-cpp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel room booking program
            </a>
          </li>
          <li>
            <a
              href="https://github.com/josefpolasek/book-collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book collection in Java
            </a>
          </li>
          <li>
            <a
              href="https://github.com/josefpolasek/integrify-restCountries"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rest countries API
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default App;
