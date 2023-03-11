import Navbar from "./Navbar";

const Baselayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-20 -mt-14  ">{children}</div>
    </>
  );
};

export default Baselayout;
