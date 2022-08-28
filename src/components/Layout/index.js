import Navbar from "./navbar";
import Footer from "./footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
