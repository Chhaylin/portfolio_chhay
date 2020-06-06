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
    </div>
  );
}
