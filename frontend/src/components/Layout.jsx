import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-auto">
      <Header />
      <main className="flex-grow min-w-max overflow-x-auto whitespace-nowrap">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a valid React node and required
};

export default Layout;
