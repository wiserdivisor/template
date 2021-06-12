import React from "react";
import Layout from "../components/layout";
import {Section} from "../components/section";

const AboutPage = () => {
  return (
    <Layout pageTitle="Contact">
      <Section
        showPoint={false}
        headerColor="dimgrey"
        showHr={false}
        title="For futher inquiries, information, registration and admission."
      >
        <Section
          title="Call, WhatsApp and SMS"
          showPoint={false}
          borderColor="dimgrey"
          headerColor="#de5246"
        >
          <p style={{ fontSize: 30, textAlign: "center" }}>+91 9136359123</p>
        </Section>
        <Section
          title="Send us an Email"
          showPoint={false}
          borderColor="dimgrey"
          headerColor="#de5246"
        >
          <p style={{ fontSize: 20, textAlign: "center" }}>
            <a
              href="mailto:ieas.training@gmail.com"
              style={{ textDecoration: "none" }}
            >
              ieas.training@gmail.com
            </a>
            <br />
            <a
              href="mailto:ahsap.mumbai@gmail.com"
              style={{ textDecoration: "none" }}
            >
              ahsap.mumbai@gmail.com
            </a>
          </p>
        </Section>
        <Section
          title="Location"
          showPoint={false}
          borderColor="dimgrey"
          headerColor="#de5246"
        >
          <p style={{ fontSize: 16, textAlign: "center" }}>
            #3, Divya Apartments, off Mumbai University Kalina, Santacruz East,
            Mumbai 400098 (M.S)
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7889164410885!2d72.86035381529926!3d19.073016157021748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8fabadc44af%3A0xb3f5fdc39a7a0755!2sDivya%20Apartments!5e0!3m2!1sen!2sin!4v1623084718108!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ borderRadius:10 }}
              allowfullscreen=""
              loading="lazy"
              title="addressMap"
            ></iframe>
          </div>
        </Section>
      </Section>
    </Layout>
  );
};

export default AboutPage;
