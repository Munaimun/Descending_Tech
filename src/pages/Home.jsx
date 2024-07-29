import { Link } from "react-router-dom";
import workingImage from "../assets/worling.jpg";
import officeDeskImage from "../assets/officeDesk.jpg";
import engineerImage from "../assets/engineer.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${workingImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Descending Tech Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop solution for custom website building, e-commerce,
            portfolio, ERP, digital marketing, and UI/UX design.
          </p>
          <Link
            to="/services"
            className="bg-blue-600 px-6 py-3 rounded-md text-lg md:text-xl hover:bg-blue-700 transition duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Descending Tech Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          At Descending Tech Solutions, we are dedicated to delivering
          innovative IT solutions tailored to meet the unique needs of our
          clients. With expertise in web development, e-commerce, ERP, digital
          marketing, and UI/UX design, we help businesses thrive in the digital
          landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={officeDeskImage}
              alt="Office Desk"
              className="w-full h-64 object-cover blur-sm opacity-80 hover:opacity-100 transition duration-500"
              style={{ filter: "blur(4px)" }}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="relative">
            <img
              src={engineerImage}
              alt="Engineer"
              className="w-full h-64 object-cover blur-sm opacity-80 hover:opacity-100 transition duration-500"
              style={{ filter: "blur(4px)" }}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto text-center py-16 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Descending Tech Solutions?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We offer unparalleled expertise and a commitment to excellence in
          every project. Our team of experienced professionals ensures that your
          digital needs are met with the highest standards of quality and
          innovation. Here’s why you should choose us:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-xl text-gray-600">
          <li className="mb-4">
            Customized Solutions: Tailored to meet your specific requirements
            and goals.
          </li>
          <li className="mb-4">
            Expert Team: Highly skilled professionals with years of industry
            experience.
          </li>
          <li className="mb-4">
            Innovative Approach: Embracing the latest technologies and
            methodologies.
          </li>
          <li className="mb-4">
            Client-Centric: Focused on delivering exceptional results and
            ensuring your satisfaction.
          </li>
          <li className="mb-4">
            Timely Delivery: Committed to meeting deadlines and exceeding
            expectations.
          </li>
        </ul>
      </div>

      {/* Contact Call to Action */}
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Ready to transform your digital presence? Contact us today to discuss
          your project and discover how we can help your business grow.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 px-6 py-3 rounded-md text-lg md:text-xl hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
