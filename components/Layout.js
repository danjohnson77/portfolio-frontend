import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="flex flex-col min-h-screen text-white items-center md:py-10 overflow-hidden">
        {children}
      </main>
    </>
  );
};

export default Layout;
