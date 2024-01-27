import React from "react";
import "../styles/home.css";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
          <h4>
            ICCSRKR 2024 International Conference on <br />
            Cyber Security Resilience and Knowledge Research 2024
            <br /> (ICCSRKR-2024)
          </h4>
          <p>Dec 6-7, 2024 | Bhimavaram, India</p>
        </div>
        <div className="content2">
          <h4>Organized by</h4>
          <img src="SRKR.png" alt="Collge" />
          <p>
            Sagi Rama Krishnam Raju Engineering College (Autonomous)
            <br />
            <center> Bhimavaram, Andhra Pradesh, India</center>
          </p>
        </div>
      </div>
      <div className="container2">
        <div className="card">
          <div className="card-header">
            <h4 style={{textAlign:"center"}}>Important dates</h4>
          </div>
          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>Paper Submission Deadline:</td>
                  <td>
                    <span className="submission-date">Oct 8, 2024</span>
                  </td>
                </tr>
                <tr>
                  <td>Notification of acceptance:</td>
                  <td>Nov 8, 2024</td>
                </tr>
                <tr>
                    <td>Registration Deadline:</td>
                    <td>Nov 20, 2024</td>
                </tr>
                <tr>
                  <td>Conference Dates:</td>
                  <td>6-7, Dec 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
