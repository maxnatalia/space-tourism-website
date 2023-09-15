import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Container } from "./styled";

const RootLayout = () => {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default RootLayout;
