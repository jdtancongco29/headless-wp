export default async function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to Our Website</h2>
        <p className="mt-4 text-lg">We provide amazing solutions for your business.</p>
        <a href="#" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600">Fast & Reliable</h4>
            <p className="mt-2 text-gray-600">We ensure fast and reliable services for all clients.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600">Secure & Safe</h4>
            <p className="mt-2 text-gray-600">Your data is safe with us, security is our priority.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600">24/7 Support</h4>
            <p className="mt-2 text-gray-600">We provide round-the-clock support for all customers.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
        <p className="mt-4 text-lg">Join us today and grow your business with our solutions.</p>
        <a href="#" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Join Now
        </a>
      </section>
    </>
  );
}