const Contact = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We&apos;d love to hear from you! Whether you have a question about our
          services, need assistance, or want to discuss a project, our team is
          ready to help.
        </p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
