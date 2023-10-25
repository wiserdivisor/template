import React from "react";
import Layout from "../components/layout";
import Table from "../components/table";
import { Section } from "../components/section";
import data from "../data/home_data.json";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

const HomePage = () => {
  const careerList = data.career_list;
  const joinRev = data.join_rev;
  const scopeDesc = data.scope;
  const joinList = data.join_list;
  const certification = data.certification;
  const featList = data.feat_list;
  const trainObj = data.train_obj;
  const practical = data.practical;
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout pageTitle="Academy of Electric Vehicles Research and Technology">
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <div 
        style={{ 
          margin:"10px 0px 10px 0px",
          textAlign:"center", 
          alignItems:"row" 
        }}
      >
        <StaticImage
           src="../images/msmeGov.jpeg"
           alt="Man riding an EV scooter"
           style={{ 
             width:"24%",
           }} 
        />
        <StaticImage
           src="../images/msmeForum.jpeg"
           alt="Man riding an EV scooter"
           style={{ 
             width:"20%",
             margin:"0px 10px 0px"             
           }} 
        />
        <StaticImage
           src="../images/policyPromo.jpeg"
           alt="Man riding an EV scooter"
           style={{ 
              width:"20%",
              margin:"0px 10px 0px"             
           }} 
        />
        <StaticImage
           src="../images/startupIndia.jpeg"
           alt="Man riding an EV scooter"
           style={{ width:"20%" }} 
        />
      </div>
      <div
        style={{
          height: "10%",
          margin: "5px 0px 0px 0px",
          overflow: "hidden",
        }}
      >
        <Slider {...settings}>
          <div>
            <StaticImage
              src="../images/daily.png"
              alt="Man riding an EV scooter"
            />
          </div>
          <div>
            <StaticImage
              src="../images/scoot.png"
              alt="EV scooter in meadows"
            />
          </div>
          <div>
            <StaticImage src="../images/cost.png" alt="Swapping EV battery" />
          </div>

          <div>
            <StaticImage
              src="../images/aggregate.png"
              alt="A row of EV scooters"
            />
          </div>
          <div>
            <StaticImage src="../images/bike.png" alt="Man fixing EV bike" />
          </div>

          <div>
            <StaticImage src="../images/swap.png" alt="Swapping EV battery" />
          </div>
        </Slider>
      </div>
      <StaticImage
        src="../images/bike_making.png"
        alt="Making EV bike"
        style={{
          margin: "auto",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      />
      <Section title="Join the E-Vehicles Revolution in India">
        {joinRev}
      </Section>
      <Section title="Techno-Commercial Scope of EV Industry" idName="scope">
        <div>
          <p>
            {scopeDesc.part1}
            <br />
            <br />
            {scopeDesc.part2}
          </p>
          <StaticImage
            src="../images/map.jpg"
            alt="Indian map for EV market"
            style={{ borderRadius: 10 }}
          />
        </div>
      </Section>

      <Section title="Start your career in EV Industry" idName="career">
        <div style={{ overflow: "hidden" }}>
          <StaticImage
            src="../images/assemble.png"
            alt="Assembling an EV scooter"
            style={{
              borderRadius: 10,
              width: 450,
              float: "left",
              margin: "0px 20px 20px 0px",
            }}
          />
          <ul>
            {careerList.map((x, index) => (
              <li key={index}>
                {x}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Who should Join the Training Program?" idName="join">
        <div style={{ overflow: "hidden" }}>
          <StaticImage
            style={{
              borderRadius: 10,
              width: 450,
              float: "right",
              margin: "0px 0px 20px 20px",
            }}
            src="../images/rsz_repair.png"
            alt="Man repairing scooter tire"
          />
          <ol>
            {joinList.map((x, index) => (
              <li key={index}>
                <b style={{ color: "cadetblue" }}>{x.head}</b>
                {x.body}
                <br />
                <br />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        title="Duration of the Training"
        idName="duration"
        textAlign="left"
      >
        <Table />
      </Section>

      <Section title="Certification" idName="certification">
        <div style={{ display: "grid", placeItems: "center" }}>
          <StaticImage
            src="../images/cert.jpeg"
            alt="EV training certificate"
            style={{ width: 300, height:500 }}
          />
          <div style={{ marginTop: 10 }}>
            {certification.part1}
            <br />
            <br />
            {certification.part2}
          </div>
        </div>
      </Section>

      <Section
        title="Prominent features of the Training Program"
        idName="features"
      >
        <ol style={{ fontSize: 14 }}>
          {featList.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ol>
      </Section>

      <Section title="Training Objectives" idName="objectives">
        <ul style={{ fontSize: 14 }}>
          {trainObj.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Practical Training" idName="practical">
        <ul style={{ fontSize: 14 }}>
          {practical.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};

export default HomePage;
