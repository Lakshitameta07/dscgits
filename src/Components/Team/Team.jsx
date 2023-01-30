import React from "react";
import "./Team.css";
import Card from "../Card/Card";
import img1 from "../../assets/Bhvyc.jpeg";
import img2 from "../../assets/himakshi.jpg";
import img3 from "../../assets/hitikshaa.jpg";
import img4 from "../../assets/karan.jpeg";
import img5 from "../../assets/lakshit.jpeg";
import img6 from "../../assets/nishant.jpeg";
import img7 from "../../assets/niharikaB.jpeg";
import img8 from "../../assets/saloni.jpeg";
import img9 from "../../assets/yugal.jpeg";
import img10 from "../../assets/parth.jpg";
import img11 from "../../assets/vinay.jpg";
import img12 from "../../assets/taha.JPG";
import img13 from "../../assets/varun.jpeg";
import img14 from "../../assets/mehul.jpeg";
import img15 from "../../assets/amisha.jpg";

function Team() {
  return (
    <div className="Team">
      <div className="core-team">
        <h2 id="core">Core Team</h2>
      </div>
      <div className="core-card">
        <Card
          profile={img1}
          icon1={"http://linkedin.com/in/bhavychawda"}
          icon2={"https://github.com/bhavychawda"}
          heading={"Bhavya Chawda"}
          detail={"GDSC Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
        <Card
          profile={img2}
          icon1={"https://www.linkedin.com/in/himakshi-sharma-a626211ba/"}
          icon2={"https://github.com/Himakshi14"}
          heading={"Himakshi Sharma"}
          detail={"Design Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
        <Card
          profile={img3}
          icon1={"https://www.linkedin.com/in/hitiksha-manoti-a6450a229/"}
          icon2={"https://github.com/hitiksha10"}
          heading={"Hitiksha Manoti"}
          detail={"AI Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img4}
          icon1={"http://surl.li/eksce"}
          icon2={"http://surl.li/eksdv"}
          heading={"Karan Singh Asoliya"}
          detail={"Community Manger"}
          color="rgba(252, 166, 31, 0.45)"
        />
      </div>
      <div className="core-card2">
        <Card
          profile={img5}
          icon1={"https://www.linkedin.com/in/lakshit-ameta-45220a218/"}
          icon2={"https://github.com/Lakshitameta07"}
          heading={"Lakshit Ameta"}
          detail={"Android Lead & Cloud Facilitator"}
          color="rgba(252, 166, 31, 0.45)"
        />
        <Card
          profile={img6}
          icon1={"https://www.linkedin.com/in/nishant-arora-48173a245"}
          icon2={"https://github.com/NISHANTARORA29"}
          heading={"Nishant Arora"}
          detail={"Tech Lead & IOT Robotics Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img7}
          icon1={"http://www.linkedin.com/in/niharika-banoth-b15680240"}
          icon2={"https://github.com/Niharikabanoth"}
          heading={"B.Niharika"}
          detail={"Content Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
      </div>
      <div className="core-card3">
        <Card
          profile={img8}
          icon1={"https://www.linkedin.com/in/saloni-maheshwari-756830/"}
          icon2={"https://github.com/salonimaheshwarii"}
          heading={"Saloni Maheshwari"}
          detail={"Sponsorship Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img9}
          heading={"Yugal Ameta"}
          icon1={"https://www.linkedin.com/in/yugal-ameta"}
          icon2={"https://github.com/yugalameta7"}
          detail={"Web Dev Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img10}
          icon1={"https://www.linkedin.com/in/parth-malvi-b77741212"}
          icon2={"https://github.com/itsparth47"}
          heading={"Parth Malvi"}
          detail={" CP Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img11}
          icon1={"https://www.linkedin.com/in/vinay-kumar-562218204"}
          icon2={"https://github.com/vinayadav710"}
          heading={"Vinay Kumar"}
          detail={"Game Dev Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
      </div>
      <div className="core-card3">
      <Card
          profile={img12}
          icon1={"https://www.linkedin.com/in/taha-lohawala-222a85194"}
          icon2={"https://www.github.com/konstent"}
          heading={"Taha Lohawala"}
          detail={"Cyber Security Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
        <Card
          profile={img13}
          icon1={"http://www.linkedin.com/in/varun-mehra-6aa165221"}
          icon2={"https://github.com/mehravarun666"}
          heading={"Varun Mehra"}
          detail={"Flutter Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img14}
          icon1={"https://www.linkedin.com/in/mehul-jain257/"}
          icon2={"https://github.com/mehuljain75"}
          heading={"Mehul Jain"}
          detail={"AR-VR Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
         <Card
          profile={img15}
          icon1={""}
          icon2={""}
          heading={"Amisha Ajit"}
          detail={"Outreach Lead"}
          color="rgba(252, 166, 31, 0.45)"
        />
      </div>
    </div>
  );
}

export default Team;
