import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Home Page Test</p>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Home Page" />;
};

export default IndexPage;
