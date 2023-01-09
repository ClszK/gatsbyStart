import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>About Page test!!</p>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="About Page" />;
};

export default AboutPage;
