const About = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Descending IT Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Descending IT Solutions is a leading provider of innovative IT
          services, dedicated to helping businesses succeed in the digital age.
          Our team of experts specializes in custom website building, e-commerce
          solutions, portfolio websites, ERP systems, digital marketing, and
          UI/UX design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that
              drive growth and efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the most trusted IT solutions partner, delivering
              exceptional value and innovation to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
