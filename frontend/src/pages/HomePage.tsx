import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center grow bg-gray-100 px-10">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              I'm Ofir Adany
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A full stack engineer with a passion for building great products.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://res.cloudinary.com/dwtfped05/image/upload/v1725183767/pkljwhqaovdwasujjbl3.jpg"
              alt="Ofir Adany"
              className="w-64 h-64 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <div className="flex justify-start md:justify-start mb-4">
              <FaQuoteLeft size="2.25rem" className="text-gray-500" />
            </div>
            <p className="text-lg text-gray-600 italic mb-4">
              A good developer is someone who can take a business problem
              end-to-end.
              <Link to="/blog" className="font-semibold text-blue-500">
                {" "}
                Read More{" "}
              </Link>
            </p>
            <div className="flex justify-end md:justify-end">
              <FaQuoteRight size="2.25rem" className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
