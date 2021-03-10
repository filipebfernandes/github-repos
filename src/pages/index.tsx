import React from "react";

import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";

const HomePage: React.FC = () => (
  <div>
    <SEO title="Home Page" />
    <Header />

    <Layout>Github Repos</Layout>
  </div>
);

export default HomePage;
