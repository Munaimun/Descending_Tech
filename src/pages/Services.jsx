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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Custom Website Building
            </h2>
            <p className="text-gray-600">
              We create custom websites that are visually appealing,
              user-friendly, and optimized for performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              E-Commerce Solutions
            </h2>
            <p className="text-gray-600">
              Our e-commerce solutions are designed to help you sell more online
              with robust features and seamless integrations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Portfolio Websites
            </h2>
            <p className="text-gray-600">
              Showcase your work with a stunning portfolio website that
              highlights your skills and achievements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ERP Solutions
            </h2>
            <p className="text-gray-600">
              Streamline your business processes with our comprehensive ERP
              solutions tailored to your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Digital Marketing
            </h2>
            <p className="text-gray-600">
              Enhance your online presence with our digital marketing services,
              including SEO, social media, and PPC campaigns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              UI/UX Design
            </h2>
            <p className="text-gray-600">
              Our UI/UX design services ensure your applications are
              user-friendly, aesthetically pleasing, and highly functional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
