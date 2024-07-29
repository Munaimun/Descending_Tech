import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Descending Tech Solutions</h4>
            <p className="text-gray-400">
              Innovative IT solutions for your digital needs.
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Descending Tech Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
