import React from 'react';
import { Sparkles, Droplet, Shield, ShoppingCart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="text-blue-600 w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold text-blue-800">CleanPro Supplies</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#products" className="text-blue-600 hover:text-blue-800">Products</a></li>
              <li><a href="#about" className="text-blue-600 hover:text-blue-800">About Us</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Cleaning Supplies for Every Need</h2>
          <p className="text-xl mb-8">Discover our wide range of high-quality cleaning products</p>
          <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Shop Now
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Droplet className="w-12 h-12 text-blue-500" />}
              title="Eco-Friendly Solutions"
              description="Environmentally conscious cleaning products that are tough on dirt but gentle on the planet."
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-blue-500" />}
              title="Industrial Strength"
              description="Heavy-duty cleaners designed for the toughest commercial and industrial cleaning challenges."
            />
            <FeatureCard
              icon={<ShoppingCart className="w-12 h-12 text-blue-500" />}
              title="Home Essentials"
              description="A complete range of household cleaning supplies for a spotless and hygienic home."
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">About CleanPro Supplies</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At CleanPro Supplies, we're dedicated to providing top-quality cleaning products for homes, businesses, and industries. With over 20 years of experience, we understand the importance of cleanliness and hygiene in every environment.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CleanPro Supplies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;