import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faShoppingCart,
  faPalette,
  faCogs,
  faMobileAlt,
  faObjectGroup,
  faBrush,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We offer a wide range of IT solutions tailored to meet your business
          needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Custom Website Building",
              description:
                "We create custom websites that are visually appealing, user-friendly, and optimized for performance.",
              icon: faLaptopCode,
            },
            {
              title: "E-Commerce Solutions",
              description:
                "Our e-commerce solutions are designed to help you sell more online with robust features and seamless integrations.",
              icon: faShoppingCart,
            },
            {
              title: "Portfolio Websites",
              description:
                "Showcase your work with a stunning portfolio website that highlights your skills and achievements.",
              icon: faPalette,
            },
            {
              title: "ERP Solutions",
              description:
                "Streamline your business processes with our comprehensive ERP solutions tailored to your needs.",
              icon: faCogs,
            },
            {
              title: "Mobile App Development",
              description:
                "Our mobile app development services ensure your business is accessible on the go. We create intuitive, high-performing apps for both iOS and Android platforms.",
              icon: faMobileAlt,
            },
            {
              title: "UI/UX Design",
              description:
                "Our UI/UX design services ensure your applications are user-friendly, aesthetically pleasing, and highly functional.",
              icon: faObjectGroup,
            },
            {
              title: "Graphics Design",
              description:
                "Our graphics design team crafts visually stunning and impactful designs that elevate your brand's identity and engage your audience. From logos and marketing materials to digital assets, we bring your vision to life.",
              icon: faBrush,
            },
            {
              title: "Digital Marketing",
              description:
                "Enhance your online presence with our digital marketing services, including SEO, social media, and PPC campaigns.",
              icon: faBullhorn,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
