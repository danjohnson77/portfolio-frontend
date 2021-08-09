import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
