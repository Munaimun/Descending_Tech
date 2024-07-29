import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Descending Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Descending Techer is committed to driving business success in the
          digital era. Our experienced team excels in developing custom
          websites, creating robust e-commerce platforms, crafting compelling
          portfolio sites, implementing efficient ERP systems, and delivering
          innovative digital marketing and UI/UX design solutions. We aim to
          empower businesses with the technology and creativity needed to thrive
          in today&apos;s competitive landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To empower businesses with cutting-edge technology solutions that
              drive growth and efficiency.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              To be the most trusted IT solutions partner, delivering
              exceptional value and innovation to our clients.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-600 mb-4">
            With years of industry experience, our team of professionals brings
            unparalleled expertise to every project. We are proficient in the
            latest technologies and committed to continuous learning and
            improvement.
          </p>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-left text-gray-600">
              <li className="mb-2">Custom Website Development</li>
              <li className="mb-2">E-commerce Solutions</li>
              <li className="mb-2">Portfolio Websites</li>
              <li className="mb-2">ERP Systems</li>
              <li className="mb-2">UI/UX Design</li>
              <li className="mb-2">Digital Marketing</li>
              <li className="mb-2">Graphics Design</li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600 mb-4">
            Our core values guide everything we do. We believe in:
          </p>
          <ul className="list-disc justify-center list-inside text-left mx-auto max-w-xl text-gray-600">
            <li className="mb-2">
              Integrity: Upholding the highest standards of honesty and ethics.
            </li>
            <li className="mb-2">
              Innovation: Continuously exploring new ideas and technologies.
            </li>
            <li className="mb-2">
              Excellence: Striving for the highest quality in every project.
            </li>
            <li className="mb-2">
              Collaboration: Working closely with clients to understand their
              needs and goals.
            </li>
            <li className="mb-2">
              Customer Satisfaction: Prioritizing client success and happiness.
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact us today to discuss your project and learn how we can help
            your business succeed in the digital age.
          </p>
          <Link
            to="/contact"
            className="bg-gray-800 px-6 py-3 rounded-md text-lg md:text-xl hover:bg-black transition duration-300 text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
