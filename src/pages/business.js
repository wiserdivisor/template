import React from "react";
import Layout from "../components/layout";
import { Section, SectionHeader } from "../components/section";
import { StaticImage } from "gatsby-plugin-image";

function Business() {
  return (
    <Layout pageTitle="Business">
      <Section title="Partner with us - Be our franchise" idName="partner">
        <StaticImage
          src="../images/hs2"
          alt="Franchise"
          style={{ borderRadius: 10 }}
        />
        <br />
        <br />
        To carry the EV mission of AEVRT forward, to the most remote locations
        of our country and abroad, AEVRT invites eligible parties to partner
        with us, in the role of a franchise.
        <br />
        <br />
        <SectionHeader title="AEVRT Training Franchise" idName="train_fran" />
        <br />
        Establish a AEVRT authorised training franchise in your hometown and
        create professionally trained manpower of the future in EV, our
        state-of-art training methodologies and internationally renowned
        training curriculum covers existing and future technologies in electric
        vehicles.
        <br />
        <br />
        Well-equipped with latest tools and testing equipment, AEVRT-EV
        workshops provide adequate and comprehensive skills and practice for
        various processes and procedures involved in EV assembly, fabrication,
        testing, maintenance, repairs and commercial functions such as spare
        parts, procurement, inventory management etc. Best in industry training
        faculties with online consultation system. Meticulously designed
        curriculum which covers entire range of training needs of all levels of
        students. Large collection of online study material, expert guest
        lectures by entrepreneurs, manufacturers, assembly and training videos.
        Form the entire ecosystem of AEVRT authorised training franchise.
        <br />
        <br />
        <SectionHeader title="Who can be a franchise?" idName="who_fran" />
        <br />
        Any individual, or legal entity, who can fulfill the minimum
        requirements of becoming a AEVRT franchise can apply. There are no
        restrictions, pertaining to age, qualification and location. Any
        previous experience of operating educational institutions
        coaching/computer classes, vocational training centres will be an added
        advantage. Persons who are qualified trainers, teachers, or persons with
        similar profiles are encouraged to apply.
        <br />
        <br />
        Applicants should possess sound financial capacities for undertaking
        promotional activites to create local awareness about the training
        programme. For futher details kindly share your personal and
        professional profile on{" "}
        <a
          href="mailto:ieas.training@gmail.com"
          style={{ textDecoration: "none" }}
        >
          ieas.training@gmail.com
        </a>
      </Section>
      <Section title="Project Consultancy">
        <StaticImage
          src="../images/consult.png"
          alt=""
          style={{ borderRadius: 10 }}
        />
        <p>
          Get your dream projects up and running, within your scheduled
          deadlines without compromise and delays. Engage the services of our
          expert project consultants, experienced and expert project managers
          from the industry and observe your project taking shape as per plans.
          <br />
          <br />
          <b>AEVRT provides project consultancy services for :</b>
          <ul style={{ marginLeft: -25 }}>
            <li>EV Assembly factories and units</li>
            <li>EV delivery vehicle fleet management</li>
            <li>EV industry online business strategies</li>
            <li>EV aggregator business models solutions</li>
            <li>EV maintenance and service unit setup</li>
            <li>EV brand design and development</li>
            <li>EV battery packs manufacturing unit setup</li>
            <li>EV battery charging & swap stations</li>
            <li>EV solar charging solution & implementation</li>
            <li>EV technology research & development</li>
            <li>EV sales, service and spare part outlets</li>
            <li>EV products marketing and point of sale setups</li>
            <li>EV components sourcing, procurement and imports</li>
            <li>
              EV finance / government subsidies / production linked incentives
            </li>
          </ul>
        </p>
      </Section>
    </Layout>
  );
}

export default Business;
