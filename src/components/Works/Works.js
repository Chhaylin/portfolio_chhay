import React from "react";

import serey_img from "../../assets/serey.png";
import saxion_img from "../../assets/Saxion_img.png";
import ems_img from "../../assets/EMS_img.png";
import eneco_img from "../../assets/Eneco_img.png";
import book_img from "../../assets/book_img.jpg";
import newBook_img from "../../assets/New_Book_img.jpg";
import seasteading_img from "../../assets/seasteading_img.png";
import talk_img from "../../assets/talk_img.jpg";

export default function Works() {
  return (
    <div className="works">
      <div className="works__table">
        <div className="works__title">My Works</div>
        <div className="cell__1">
          <img src={serey_img} alt="serey img" className="cell__1-img" />
          <div className="cell__1-text">
            <p>
              I co-founded Serey in 2018. Serey is a next generation
              blockchain-based social media platform with an ecosystem of
              frontier decentralized applications (dApps) of Web 3.0. On Serey,
              anyone in any place of the world is free to enter into dialogue
              without privilege, and is rewarded in SEREY coins for the
              creativity he or she provides to the platform.
            </p>
            <br />
            <p>
              Serey solves the following three main problems: media
              centralization, censorship and low quality media. Examples of
              dApps we have already developed are Serey IO, Serey Marketplace,
              Serey Wallet, Serey DEX.
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="cell__2">
          <p className="cell__2-text">
            I have always been interested in teaching students the technologies
            of tomorrow, and critical thinking skills. Most importantly, my goal
            is to help students develop a certain intellectual craftsmanship
            that allows them to look at the world from different perspectives as
            if their minds are “a moving prism catching light from as many
            angles as possible”.
          </p>
          <img src={saxion_img} alt="saxion img" className="cell__2-img" />
        </div>
        <div className="role__container">
          <div className="role">
            <div className="role-title">
              Blockchain Research Group (2018 - current)
            </div>
            <div className="role-desc">
              Researching Blockchain-related topics, mainly on the intersection
              between Philosophy and Blockchain.
            </div>
          </div>
          <div className="role">
            <div className="role-title">
              Lecturer Saxion x UC Berkeley Strategy and Business Intelligence
              minor
            </div>
            <div className="role-desc">
              Develop a series of Blockchain-related workshops.
            </div>
          </div>
          <div className="role">
            <div className="role-title">
              Lecturer Blockchain (2018 - current)
            </div>
            <div className="role-desc">
              Developed the Blockchain course, which looks at Blockchain from a
              technical, economics, philosophical, and enterprise perspective.
            </div>
          </div>
          <div className="role">
            <div className="role-title">
              Lecturer Digital Technology/Financial Technology (2018 - current)
            </div>
            <div className="role-desc">
              Developed the DigTech/FinTech course, which teaches students
              important skills for Industry 4.0. Students are required to create
              a website, webshop, integrated payment methods, robotic process
              automation, data analysis, machine learning chatbot, and ICO’s.
            </div>
          </div>
          <div className="role">
            <div className="role-title">
              Lecturer Investing &amp; Financing (2018-2019)
            </div>
            <div className="role-desc">
              Teaching 1st year students an introduction into Investing and
              Finance.
            </div>
          </div>
          <div className="role">
            <div className="role-title">Dissertation supervisor</div>
            <div className="role-desc">
              Supervise students for their Bachelor’s theses on topics related
              to Finance, Economics, and Blockchain.
            </div>
          </div>
        </div>
        <hr className="divider" />

        <div className="cell__3">
          <img src={ems_img} alt="ems img" className="cell__3-img" />
          <div className="cell__3-text">
            <p>
              The FinTech industry is one of the most exciting industries to
              work in. My work at EMS as a Technical Integration Specialist
              offered me many insights in the world of payments. I integrated
              online payment methods, such as iDeal, creditcards, Klarna,
              Sofort, Bancontact for over a hundred customers, including Bayer,
              BinckBank, and Kruizinga into the EMS e-Commerce gateway. In
              addition, I also managed the development of the Developer’s
              portal, and the Wordpress and Magento payment plugins for EMS.
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="cell__4">
          <div className="cell__4-text">
            <p>
              I landed my first software developer’s job at Eneco as a Jr. C#
              .NET and Sitecore developer. My responsibility was to develop the
              backend of Eneco’s e-Commerce ordering process and to implement
              unit tests.
            </p>
          </div>
          <img src={eneco_img} alt="eneco img" className="cell__4-img" />
        </div>

        <div className="works__title">My Publications</div>
        <div className="cell__5">
          <img src={book_img} alt="book img" className="cell__5-img" />
          <div className="cell__5-text">
            <h4 className="cell__5-title">Blockchain Basics Book</h4>
            <p>
              After two months of teaching Blockchain at Saxoin University of
              Applied Sciences, October 2018, I realized that Blockchain
              education in the Netherlands (probably in most parts of the world)
              is still lacking. There is few Dutch class material, Dutch content
              is dispersed among many different websites, and current Dutch
              books on Blockchain are not very useful for educational purposes.
              For this reason, I have co-authored the Blockchain Basics Book,
              which is currently used among more than 8 universities in the
              Netherlands.
            </p>
            <br />
            <p>
              Order the book{" "}
              <a
                href="https://www.managementboek.nl/boek/9789090321912/blockchain-basisboek-chhay-lin-lim"
                target="_blank"
              >
                HERE.
              </a>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="cell__6">
          <img src={newBook_img} alt="newbook img" className="cell__6-img" />
          <div className="cell__6-text">
            <h4 className="cell__6-title">
              Serey: A Case Study on the Alignment of Applied Philosophy and
              Blockchain Applications
            </h4>
            <p>
              As a contributing writer to the book, Blockchain Technology and
              Applications II, I submitted a chapter. The chapter is on Serey, a
              social blockchain inspired by a Rothbardian libertarian
              philosophy. The question I attempt to answer is how Serey, the
              first blockchain project in Cambodia, aligns its philosophy with
              its blockchain applications.
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="cell__7">
          <img
            src={seasteading_img}
            alt="seasteading img"
            className="cell__7-img"
          />
          <div className="cell__7-text">
            <h4 className="cell__7-title">
              A philosophical investigation into Seasteading as a means to
              discover better forms of social organization
            </h4>
            <p>
              This dissertation aims at providing a philosophical investigation
              of the concept of seasteading from a libertarian anarchist
              perspective. My investigation revolves around the following
              research question: “given that governments are resistant to
              structural changes of governance, how can mankind discover better
              forms of social organization?”
            </p>
            <br />
            <p>
              Download the paper{" "}
              <a
                href="https://chhaylinlim.files.wordpress.com/2014/10/chhay-lin-a-philosophical-investigation-into-seasteading-as-a-means-to-discover-better-forms-of-social-organization.pdf "
                target="_blank"
              >
                HERE.
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="works__title">Conferences &amp; Others</div>
        <div className="cell__8">
          <div className="talk__list">
            <ul>
              <li className="talk">Saxion Blockchain Hackathon (2020)</li>
              <li className="talk">Blockchain Lab Drenthe (2020)</li>
              <li className="talk">Dutch Blockchain Coalition (2019)</li>
              <li className="talk">Saxion Smart Solutions Festival (2019)</li>
              <li className="talk">
                Cambodian National Television Networks (2018)
              </li>
              <li className="talk">BitFest (2018)</li>
              <li className="talk">TekHub (2018)</li>
              <li className="talk">
                Prague Conference on Political Economy (2016)
              </li>
              <li className="talk">SteemFest (2016)</li>
            </ul>
          </div>
          <img src={talk_img} alt="talk img" className="cell__8-img" />
        </div>
      </div>
    </div>
  );
}
