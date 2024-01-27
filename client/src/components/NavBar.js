import React from "react";
import "../styles/home.css";

function NavBar() {
  return (
    <nav>
      <h3>ICCSRKR 2024</h3>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/callforpaper">Call for Paper</a>
      <a href="/committee">Committe</a>
      <div className="dropdown">
        <a className="dropdown-link" href="/author">
          Author
        </a>
        <div className="dropdown-content">
          <a href="/author/profile">Profile</a>
          <a href="/author/posts">Posts</a>
        </div>
      </div>
      <a href="/keynotespeakers">Keynote Speakers</a>
      <a href="/contact">Contact</a>
      <a href="/venue">Venue</a>
      <a href="/important">Important Dates</a>
    </nav>
  );
}

export default NavBar;