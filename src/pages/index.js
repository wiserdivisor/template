import React from "react";
import Layout from "../components/layout";
import Table from "../components/table";
import Section from "../components/section";
import data from "../data/home_data.json";
import imageData from "../data/slide_data.json";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

const HomePage = () => {
  const imageList = imageData.images;
  const careerList = data.career_list;
  const joinRev = data.join_rev;
  const scopeDesc = data.scope;
  const joinList = data.join_list;
  const certification = data.certification;
  const featList = data.feat_list;
  const trainObj = data.train_obj;
  const practical = data.practical;
  const settings = {
    autoplay: true,
    dots: true,
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
      <div style={{ width: "100%", height: "10%", margin: "5px 0px 25px 0px" }}>
        <Slider {...settings}>
          <div>
            <StaticImage src="../images/daily.png" alt="" />
          </div>
          <div>
            <StaticImage src="../images/scoot.png" alt="" />
          </div>
          <div>
            <StaticImage src="../images/aggregate.png" alt="" />
          </div>
          <div>
            <StaticImage src="../images/bike.png" alt="" />
          </div>
          <div>
            <StaticImage src="../images/swap.png" alt="" />
          </div>
        </Slider>
      </div>
      <StaticImage
        src="../images/bike_making.png"
        alt="some"
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />
      <Section title="Join the E-Vehicles Revolution in India">
        {joinRev}
      </Section>
      <Section title="Techno-Commercial Scope of EV Industry">
        <div>
          <p>
            {scopeDesc.part1}
            <br />
            <br />
            {scopeDesc.part2}
          </p>
          <StaticImage
            src="../images/map.jpg"
            alt="Map"
            style={{ borderRadius: 10 }}
          />
        </div>
      </Section>

      <Section title="Start your career in EV Industry">
        <div style={{ display: "flex" }}>
          <div style={{ width: "75%" }}>
            <StaticImage
              src="../images/assemble.png"
              alt="Career"
              style={{ borderRadius: 10 }}
            />
          </div>
          <p>
            <ul style={{ marginTop: -10, marginBottom: -10, fontSize: 18 }}>
              {careerList.map((x, index) => (
                <div key={index}>
                  <li>{x}</li>
                  <br />
                </div>
              ))}
            </ul>
          </p>
        </div>
      </Section>

      <Section title="Who should Join the Training Program?">
        <div style={{ display: "flex" }}>
          <ol>
            {joinList.map((x, index) => (
              <div key={index}>
                <li>
                  <b style={{ color: "cadetblue" }}>{x.head}</b>
                  {x.body}
                </li>
                <br />
              </div>
            ))}
          </ol>
          <div>
            <StaticImage
              style={{ borderRadius: 10 }}
              src="../images/rsz_repair.png"
              alt="repair"
            />
          </div>
        </div>
      </Section>

      <Section title="Duration of the Training">
        <Table />
      </Section>

      <Section title="Certification">
        <div style={{ display: "flex" }}>
          <div>
            <StaticImage src="../images/cert.jpeg" alt="" />
          </div>
          <div style={{ marginTop: 10, width: "90%" }}>
            {certification.part1}
            <br />
            <br />
            {certification.part2}
          </div>
        </div>
      </Section>

      <Section title="Prominent features of the Training Program">
        <ol style={{ fontSize: 14 }}>
          {featList.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ol>
      </Section>

      <Section title="Training Objectives">
        <ul style={{ fontSize: 14 }}>
          {trainObj.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Practical Training">
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
