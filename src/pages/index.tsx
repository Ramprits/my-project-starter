import React from "react";

import { Cards, Container, Footer, Header } from "components";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
