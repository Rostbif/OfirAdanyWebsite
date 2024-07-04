import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center grow">
      {/* <div className="font-bold flex justify-center text-2xl">Home Page</div> */}

      <div className="grow flex flex-col justify-center">
        <div className="flex gap-6 items-center">
          <div className="basis-1/4">
            <h1 className="text-8xl font-semibold border-b-2 border-dashed border-black pb-6 drop-shadow-md">
              I'm Ofir Adany
            </h1>
            <div className="mt-3 drop-shadow-md">
              A full stack engineer with passion for building great products.
            </div>
          </div>
          <div className="basis-1/2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dwtfped05/image/upload/v1719912600/PXL_20240630_093526454_ozqjpb.jpg"
              alt="Ofir Adany"
              className="size-96 rounded-lg shadow-md shadow-black-500"
            />
          </div>
          <div className="basis-1/4">
            <div className="flex">
              {/* <p className="text-8xl"> '' </p> */}
              <FaQuoteLeft size="2.25rem" />
            </div>
            <div className="text-xl">
              <p className="drop-shadow-md">
                A good developer is someone who can take a business problem
                end-to-end.
                <Link to="/blog" className="font-semibold drop-shadow-md">
                  {" "}
                  Read More{" "}
                </Link>
              </p>
            </div>
            <div className="flex justify-end">
              <FaQuoteRight size="2.25rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
