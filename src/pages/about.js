import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function About() {
  return (
    <Layout pageTitle="About Us">
      <p style={{ color: "dimgrey", textAlign: "justify" }}>
        AEVRT - Academy of Electric Vehicles Research and Technology is an
        initiative of KBP Trust and IEAS.
        <br />
        <br />
        Institute of Engineering & Applied Sciences-Mumbai (IEAS) is a member of
        the KBP Public Educational Consortium registered under the Bombay Public
        Trust Act 1949 (Govt of Maharashtra).
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 0px 20px 0px",
          }}
        >
          <div style={{ height: 50, width: 75 }}>
            <StaticImage src="../images/kbp.jpg" alt="" />
          </div>
          <div style={{ height: 50, width: 100 }}>
            <StaticImage src="../images/ieas.png" alt="" />
          </div>
          <div style={{ height: 50, width: 75 }}>
            <StaticImage src="../images/ahsap.png" alt="" />
          </div>
          <div style={{ height: 50, width: 75 }}>
            <StaticImage src="../images/avert.png" alt="" />
          </div>
          <div style={{ height: 50, width: 75 }}>
            <StaticImage src="../images/bonent.png" alt="" />
          </div>
          <div style={{ display: "block", marginBottom: -60 }}>
            <div style={{ height: 50, width: 75 }}>
              <StaticImage src="../images/np.png" alt="" />
            </div>
            <div style={{ height: 50, width: 75 }}>
              <StaticImage src="../images/enpedia.png" alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        IEAS is a pioneering institution in technical vocational training sector
        since last 21 years, the institute has developed and conducted several
        training programmes in Telecom, Electro-Mechanical Services, HVAC-MEP &
        Building Management Services (BMS), Piping design, Two & Four Wheeler
        Maintenance and repairs, CCTV, biometrics and E-Security. For several
        Government, Semi-Government, Corporate and Industrial entities.
        <br />
        <br />
        Academy of Health Sciences and Advanced Paramedics (AHSAP) is their
        Paramedical & Medical Training division which conducts India's most
        prestigious "BONENT (USA) Certified and Approved" dialysis training
        programme in India and South East Asia in collaboration with Nephrocare
        Health Services - brand owners of "Nephroplus - Network of dialysis
        centres and Enpidia dialysis training programme.
        <br />
        <br />
        <StaticImage src="../images/coll1.png" alt="" />
        <StaticImage src="../images/coll2.png" alt="" />
        <StaticImage src="../images/coll3.jpg" alt="" />
      </p>
    </Layout>
  );
}

export default About;
