import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";
import ReposForm from "root/components/ReposForm";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
  },
});

const HomePage: React.FC = () => (
  <ApolloProvider client={client}>
    <SEO title="Home Page" />
    <Header />

    <Layout>
      <ReposForm />
    </Layout>
  </ApolloProvider>
);

export default HomePage;
