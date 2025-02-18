const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1>About me</h1>
          <p>
            As a <b>MAMRAM</b> graduate and a full-stack developer with over
            four years of experience in the IDF’s elite Matzpen Unit, I have
            built and optimized robust, scalable systems using{" "}
            <b>C#, JavaScript, React, Node.js, .NET Core, SQL, and MongoDB.</b>
          </p>
          <p>
            My expertise extends <b>beyond development</b> — I have also worked
            as a technical product manager in leading startups, where I
            collaborated with R&D teams to design and deliver innovative,
            high-performance solutions in cloud environments like AWS, Azure,
            and Kubernetes. This blend of hands-on coding experience and
            product-driven mindset allows me to create software that is not only
            technically sound but also user-centric and business-driven.
          </p>
          <p>
            Whether it's building a full-stack web application, optimizing
            backend performance, or designing scalable APIs, I am committed to
            delivering high-quality, efficient solutions{" "}
            <b>tailored to your needs.</b> If you're looking for a freelance
            developer who understands both the technical and strategic aspects
            of software development, let's connect and bring your ideas to life!
          </p>
        </div>
        <div className="py-10">
          <img
            className="justify-self-center transform rotate-3 border-4 border-gray-300 shadow-lg"
            src="https://res.cloudinary.com/dwtfped05/image/upload/v1725183767/pkljwhqaovdwasujjbl3.jpg"
            alt="Ofir Adany"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
