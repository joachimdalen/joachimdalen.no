import * as React from "react";
import avatar from "src/images/me.jpeg";
const AboutMe: React.SFC = () => (
  <div className="jd-about-me">
    <div className="jd-center-card">
      <h2>About me</h2>
      <div className="jd-about-me-details">
        <img src={avatar} alt="" />
        <div>
          <p>
            I'm currently studying for a bachelor's degree within software
            development, I do already have a certificate of apprenticeship as a
            ICT Technician.
          </p>
          <p>
            Over the last years I've had my hands in many different things,
            ranging from server admin to coding. I'm skilled in both Windows and
            Linux systems, from installation to management and day to day
            maintenance.
          </p>
          <p>
            Always looking for new challenges and to take your idea from paper
            to production. I have a good understanding of the whole software
            infrastructure, from back-end micro services to the user interface
            used by your clients.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default AboutMe;
