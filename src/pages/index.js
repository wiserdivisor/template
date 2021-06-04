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
  const joinList = data.join_list;
  const certification = data.certification;
  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout pageTitle="ÆVRT - Academy of Electric Vehicles Research and Technology">
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
      <div style={{ width: "100%", height:'10%' , margin: "5px 0px 25px 0px" }}>
        <Slider {...settings}>
          <div><StaticImage src="../images/aggregate.jpg" alt="" /></div>
          <div><StaticImage src="../images/bike.jpg" alt="" /></div>
          <div><StaticImage src="../images/daily.jpg" alt="" /></div>
          <div><StaticImage src="../images/scoot.jpg" alt="" /></div>
        </Slider>
      </div>
      <StaticImage
        src="../images/bike_making.png"
        alt="some"
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />
      <Section title="Join the E-Vehicles Revolution in India">
        India is headed towards becoming a manufacturing hub for electric
        vehicles in the next five years. The Indian EV industry growth is
        estimated at Rs.500 billion by 2025. This industry will create the
        largest employment and self-employment opportunities for semi-skilled
        and drop out individuals.
      </Section>
      <Section title="Techno-Commercial Scope of EV Industry">
        <div>
          <p>
            Presently the Electric Vehicle industry is experiencing an acute
            shortage of manpower with skills at par with the industry's standard
            requirements. EV-OEM's are aggressuvely gearing up to increase their
            production capacity. As a result there will be an increase in job
            (Employment and Self-Employment) opportunities in Indian EV-sector.
            <br />
            <br />
            Ola Electric Bike manufacturing plant in India will be the largest
            scooter manufacturing facility in the world that will create nearly
            10,000 direct jobs.
          </p>
          <StaticImage
            src="../images/map.jpg"
            alt="Map"
            style={{ borderRadius: 10 }}
          />
        </div>
      </Section>

      <Section title="Start your career in the EV Industry">
        <div style={{ display: "flex" }}>
          <div style={{ width: "75%" }}>
            <StaticImage
              src="../images/assemble.jpg"
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
          <StaticImage
            style={{ height: 500, marginLeft: 40, borderRadius: 10 }}
            src="../images/rsz_repair.jpg"
            alt="repair"
          />
        </div>
      </Section>

      <Section title="Duration of the Training">
        <Table />
      </Section>

      <Section title="Certification">
        {certification.part1}
        <br />
        <br />
        {certification.part2}
      </Section>
    </Layout>
  );
};

export default HomePage;
