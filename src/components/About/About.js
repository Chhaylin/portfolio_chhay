import React from "react";
import Pro_pic from "../../assets/chhay_pic1.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-text">
        <p>
          In my free time, when I am not working on Serey or teaching at Saxion
          University, I am probably dancing with ideas and the pen - writing
          articles on Philosophy, Economics and Politics.
        </p>
        <br />
        <p>
          I attach great value to creativity and self-development. I believe
          that creativity and self-development are indispensably linked to
          liberty. Without liberty, it would be impossible to be truly creative
          and to develop ourselves.
        </p>
        <br />
        <p className="bold-text">
          My goal at this moment is to utilize the wonderful{" "}
          <span className="color-text">blockchain </span>
          technology - which is essentially a social, political, and economic
          revolution - for its essential purpose: securing the rights to{" "}
          <span className="color-text">LIFE, LIBERTY and PROPERTY</span> for
          all.
        </p>
        <br />
        <p>
          I dream of the day when the unbanked finally become banked and of a
          world in which seasteads are common and where anyone is allowed to
          speak in freedom without fear of being coerced into silence or
          conformity.
        </p>
      </div>
      <img src={Pro_pic} alt="profile pic" className="about-img" />

      <div className="timeline">
        <h1 className="timeline__title">Education &amp; Works </h1>
        <div className="flex-parent">
          <div className="input-flex-container">
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2009"
            />
            <div className="dot-info" data-description="2009">
              <span className="year">2009</span>
              <span className="label">University of Amsterdam</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2011"
            />
            <div className="dot-info" data-description="2011">
              <span className="year">2011</span>
              <span className="label">University of Macau</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2013"
            />
            <div className="dot-info" data-description="2013">
              <span className="year">2013</span>
              <span className="label">University College Dublin</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2014"
            />
            <div className="dot-info" data-description="2014">
              <span className="year">2014</span>
              <span className="label">Mises University</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2015"
            />
            <div className="dot-info" data-description="2015">
              <span className="year">2015</span>
              <span className="label">Eneco</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2016"
            />
            <div className="dot-info" data-description="2016">
              <span className="year">2016</span>
              <span className="label">European Merchant Services</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2018-03"
            />
            <div className="dot-info" data-description="2018-03">
              <span className="year">2018-03</span>
              <span className="label">Serey</span>
            </div>
            <input
              className="timeline__input"
              type="radio"
              name="timeline-dot"
              data-description="2018-08"
            />
            <div className="dot-info" data-description="2018-08">
              <span className="year">2018-08</span>
              <span className="label">Saxion University</span>
            </div>

            <div id="timeline-descriptions-wrapper">
              <p data-description="2009">
                Bachelor of Science, Economics and Business
              </p>
              <p data-description="2011">
                Exchange Program, Philosophy and Economics
              </p>
              <p data-description="2013">
                Master of Arts, Philosophy and Public Affairs
              </p>
              <p data-description="2014">
                Visiting Student on Scholarship, Economics and Philosophy
              </p>
              <p data-description="2015">Junior Sitecore Developer</p>
              <p data-description="2016">
                Technical Integration Specialist E-commerce
              </p>
              <p data-description="2018-03">Co-Founder</p>
              <p data-description="2018-08">Blockchain Lecturer/Researcher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
