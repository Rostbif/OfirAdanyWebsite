const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="font-bold flex justify-center">Home Page</div>

      <div className="flex-1 flex gap-6">
        <div className="basis-1/4">
          <h1 className="text-6xl">I am Ofir Adany</h1>
        </div>
        <div className="basis-1/2">
          <img
            src="https://res.cloudinary.com/dwtfped05/image/upload/v1719912600/PXL_20240630_093526454_ozqjpb.jpg"
            alt="Ofir Adany"
          />
        </div>
        <div className="basis-1/4">
          {`I'm a full stack engineer with a passion for creating and improving products.
            During my career I had the chance to also function as a Product Manager`}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
