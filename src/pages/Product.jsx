import viewfinder from "../assets/viewfinder.png";
import "../Styles/ProductsPage.css";

const ProductCard = ({ title, description, link, image }) => {
  return (
    <div className="card relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="product-img rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-110"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Visit Website
      </a>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Explore Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover the innovative solutions we offer.
        </p>
        <div className="flex justify-center">
          <ProductCard
            title="ViewFinder"
            description="Explore destinations within your budget with our intuitive tour solution app. Find the perfect spots for your next adventure."
            link="https://view-finder-nine.vercel.app/"
            image={viewfinder}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
