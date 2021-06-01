import * as React from "react";
import Layout from "../components/layout";
import Table from "../components/table";
import Section from "../components/section";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="ÆVRT - Academy of Electric Vehicles Research and Technology">
      <div style={{ height: 5 }} />
      <StaticImage
        src="../images/bike_making.png"
        alt="some"
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />
      <Section title="Join the E-Vehicles Revolution in India">
        <p>
          India is headed towards becoming a manufacturing hub for electric
          vehicles in the next five years. The Indian EV industry growth is
          estimated at Rs.500 billion by 2025. This industry will create the
          largest employment and self-employment opportunities for semi-skilled
          and drop out individuals.
        </p>
      </Section>
      <Section title="Techno-Commercial Scope of EV Industry">
        <div style={{ flexDirection: "row" }}>
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

      <Section title='Start your career in "Electric Bike" manufacturing and service industry'>
        <div style={{ display: "flex" }}>
          <StaticImage
            src="../images/career.jpg"
            alt="Career"
            style={{ borderRadius: 10 }}
          />
          <p>
            <ul style={{ marginTop: -10, marginBottom: -10, fontSize: 18 }}>
              <li>EV Workshop / Service Station Supervisor</li>
              <br />
              <li>Maintenance and Repairs Technician</li>
              <br />
              <li>Field Service Technician</li>
              <br />
              <li>EV Designer</li>
              <br />
              <li>EV Digital Controller Programmer</li>
              <br />
              <li>EV Commercial Officer</li>
              <br />
              <li>Spare Parts Manager</li>
              <br />
              <li>Authorized Service Provider</li>
              <br />
              <li>Authorized Spare Parts Dealer</li>
              <br />
              <li>EV Manufacturing Unit Assembly Technician</li>
              <br />
              <li>Online E-Vehicles and spare parts Sales</li>
              <br />
              <li>EV Hub Motor Repair Specialist</li>
              <br />
              <li>EV Battery and Charging Stations Specialist</li>
              <br />
              <li>EV Procurement Officer</li>
              <br />
              <li>EV Conversion Specialist</li>
            </ul>
          </p>
        </div>
      </Section>

      <Section
        title={
          <p style={{ marginLeft: 20 }}>
            Who should Join the Training Program?
          </p>
        }
      >
        <div style={{ display: "flex" }}>
          <ol>
            <li>
              <b style={{ color: "cadetblue" }}>Technical Individuals</b> who
              are already working in the automobile maintenance, repairs &
              allied services, garages, service centers, spare parts vendors
              etc.
            </li>
            <br />
            <li>
              <b style={{ color: "cadetblue" }}>Non-Technical individuals</b>,
              who wish to make a career in the EV-industry.
            </li>
            <br />
            <li>
              <b style={{ color: "cadetblue" }}>Diploma & Graduate Engineers</b>
              , engaged in maintenance, design, service, etc. project managers,
              and other individuals seeking applied theoretical and practical
              knowledge and exposure. And/or desirous of a career change into
              this new fast growing sector.
            </li>
            <br />
            <li>
              <b style={{ color: "cadetblue" }}>Commercial Individuals</b>,
              commerce grauduates or persons from commercial backgrounds like
              accounts, marketing, sales, logistics can utilize their skills by
              upgrading their knowledge pertaining to the EV Industry and gain
              employment in their relevant departments.
            </li>
            <br />
            <li>
              <b style={{ color: "cadetblue" }}>Minimum prerequisites:</b> Basic
              Education (basic reading and writing). Physically able and ability
              to perform the practicals and pursue the course.
            </li>
          </ol>
          <StaticImage
            style={{ height: 500, marginLeft: 40, borderRadius: 10 }}
            src="../images/rsz_repair.jpg"
            alt="repair"
          />
        </div>
      </Section>

      <Section title="Duration of the Training">
        <p style={{ fontSize: 14 }}>
          <Table />
        </p>
      </Section>

      <Section title="">
        <p></p>
      </Section>

      <Section title="">
        <p></p>
      </Section>

      <Section title="">
        <p></p>
      </Section>

      <Section title="">
        <p></p>
      </Section>
    </Layout>
  );
};

export default HomePage;
