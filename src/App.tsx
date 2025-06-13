import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Wifi,
  Server,
  Headphones
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Heartland.net</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connect to the
                <span className="text-blue-600 block">Digital Future</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Experience lightning-fast internet, reliable hosting, and enterprise-grade networking solutions that power your business forward.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern networking infrastructure" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-orange-500" />
                  <div className="ml-3">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From high-speed internet to enterprise hosting, we provide the infrastructure your business needs to thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Speed Internet</h3>
              <p className="text-gray-600 mb-6">
                Blazing-fast fiber optic internet with speeds up to 1 Gigabit. Perfect for businesses and homes that demand reliable connectivity.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Server className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Hosting</h3>
              <p className="text-gray-600 mb-6">
                Secure, scalable hosting solutions with 99.9% uptime guarantee. From shared hosting to dedicated servers.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600 mb-6">
                Advanced cybersecurity solutions to protect your business from threats. Firewall management and monitoring included.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Powering America's Heartland Since 2008
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand that reliable internet and hosting services are essential for modern businesses. That's why we've built a robust network infrastructure that serves communities across the Midwest with enterprise-grade reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Local support team based in your community</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Enterprise-grade infrastructure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Network operations center" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Heartland.net has been our ISP for 3 years now. Their support is outstanding and we've never experienced any major downtime."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Small Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The fiber internet speeds are incredible. Our entire team can work remotely without any connectivity issues."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Chen</div>
                  <div className="text-sm text-gray-600">Tech Startup CEO</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Professional hosting service with excellent uptime. Our e-commerce site has never been more stable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                  <div className="text-sm text-gray-600">E-commerce Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Connected?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today to discuss your internet and hosting needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600">1-800-HEARTLAND</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600">hello@heartland.net</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600">123 Main Street<br />Heartland, KS 67000</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Headphones className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7 Support</div>
                  <div className="text-gray-600">Always here when you need us</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Heartland.net</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting communities across America's heartland with reliable internet and hosting solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">High-Speed Internet</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Web Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Network Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Business Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Network Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">System Requirements</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Heartland.net. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;