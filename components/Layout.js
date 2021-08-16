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
      <footer className="w-full z-50 bg-black text-white">
        <div className="w-10/12 mx-auto flex justify-between flex-col md:flex-row">
          <div className="flex">
            <p>
              Background Photo by{" "}
              <a
                href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline"
              >
                eberhard grossgasteiger
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/collections/28176585/zillertal-alps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline"
              >
                Unsplash
              </a>
            </p>
          </div>
          <div className="flex">
            <p>&copy; 2021 Daniel Johnson</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
