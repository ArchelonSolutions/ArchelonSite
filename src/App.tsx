import React, { useRef, useState } from 'react';
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
  ArrowLeft,
  Star,
  CheckCircle,
  Wifi,
  Server,
  Headphones
} from 'lucide-react';
import { services, servicePackages } from '../src/servicesData'
import ASLogo from '../assets/ASLogo.jpg';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const email = 'archelonsolutions@gmail.com';
    const subject = encodeURIComponent('Inquiry from Website');
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -1300 : 1300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={ASLogo} className="h-12 w-12 text-blue-600" ></img>
              <span className="ml-2 text-xl font-bold text-[#00112C]">Archelon Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-[#CE1C1A] transition-colors duration-200 font-medium">Home</a>
                <a href="#services" className="text-gray-900 hover:text-[#CE1C1A] transition-colors duration-200 font-medium">Services</a>
                <a href="#about" className="text-gray-900 hover:text-[#CE1C1A] transition-colors duration-200 font-medium">Pricing</a>
                <a href="#contact" className="text-gray-900 hover:text-[#CE1C1A] transition-colors duration-200 font-medium">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-[#00112C] text-white px-6 py-2 rounded-lg hover:bg-[#CE1C1A] transition-colors duration-200 font-medium">
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
      <section id="home" className="relative py-20 lg:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black-900 leading-tight">
                Driving innovation with
                <span className="text-[#CE1C1A] block">smart, secure, and scalable tech solutions.</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Archelon Solutions is a Bloomington-based tech consulting firm delivering high-quality, client-centered technology solutions. We empower businesses and organizations through innovative digital services, ranging from software development and artificial intelligence to cybersecurity and cloud infrastructure. Built on the principle of accessible, impact-driven technology, Archelon Solutions offers flexible, expert-led solutions that enable growth, digital engagement, and resilience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00112C] text-white px-8 py-4 rounded-lg hover:bg-[#CE1C1A] transition-all duration-200 font-semibold flex items-center justify-center group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-[#00112C] text-[#00112C] px-8 py-4 rounded-lg hover:border-[#CE1C1A] hover:text-[#CE1C1A] transition-all duration-200 font-semibold">
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white relative">
        {/* Scroll Buttons */}
        <div className="action-btns">
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-6 transform -translate-y-1/2">
            <ArrowLeft className="py-18 h-10 w-10 text-[#00112C] hover:text-[#CE1C1A] hover:-translate-x-1 transition-all duration-200" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 ">
            <ArrowRight className="py-18 h-10 w-10 text-[#00112C] hover:text-[#CE1C1A] hover:translate-x-1 transition-all duration-200" />

          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#CE1C1A] mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-[#00112C] max-w-3xl mx-auto">
              From high-speed internet to enterprise hosting, we provide the infrastructure your business needs to thrive in the digital age.
            </p>
          </div>

          {/* Horizontal Scroll (no size change) */}
          <div ref={scrollRef} className="flex flex-nowrap gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)]"
              >
                <div
                  className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.hoverBgColor} transition-colors duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center text-[#00112C] font-medium group-hover:text-[#CE1C1A] transition-colors duration-200">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#CE1C1A] mb-6">
                Add-On Services and Flexible Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer tailored solutions to meet your evolving business needs. Whether you're looking to enhance your service package or need custom project support, our flexible model ensures you get exactly what fits.              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700"><b>Hourly Rate</b> – Ideal for short-term tasks like consultations or training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700"><b>Monthly Retainer</b> – Best for ongoing, consistent support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700"><b>Milestone based Payments</b> –Pay as each project phase is completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700"><b>Flexible Packages</b> – Customizable based on client scope and budget
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700"><b>Transparent Pricing</b> – No hidden fees or surprise costs</span>
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

      {/* Packages and Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#CE1C1A] group-hover:text-[#CE1C1A] transition-colors duration-200 mb-4">
              Packages and Pricing
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-[#00112C] group-hover:text-[#CE1C1A] transition-colors duration-200 mb-2">{pkg.name}</h3>
                <p className="text-sm text-black-700 mb-4">
                  <span className="font-bold text-[#00112C] group-hover:text-[#CE1C1A] transition-colors duration-200">Ideal for:</span> <span>{pkg.idealFor}</span>
                </p>
                <div className="mb-4">
                  <p className="font-bold text-sm text-[#00112C] group-hover:text-[#CE1C1A] transition-colors duration-200 mb-1">Included Services:</p>
                  <ul className="list-disc list-inside text-sm text-black-600 space-y-1">
                    {pkg.includedServices.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-black-700 mb-2">
                  <span className="font-bold text-[#00112C] group-hover:text-[#CE1C1A] transition-colors duration-200">Pricing Model:</span> {pkg.pricingModel}
                </p>
                <p className="text-sm text-black-700">
                  <span className="font-bold text-[#00112C] group-hover:text-[#CE1C1A] transition-colors duration-200">Benefits:</span> {pkg.benefits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#CE1C1A] mb-4">
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
                  <div className="text-gray-600">archelonsolutions@gmail.com</div>
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
                  className="w-full bg-[#00112C] text-white px-6 py-3 rounded-lg hover:bg-[#CE1C1A] transition-colors duration-200 font-semibold"
                  onClick={handleSendEmail}
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
                <img src={ASLogo} className="h-20 w-20 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Archelon Solutions</span>
              </div>
              <p className="text-gray-400 mb-4 ml-8">
                Connecting communities across America's heartland with reliable internet and hosting solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Web Hosting</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Network Security</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Business Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Network Status</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Contact Support</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">System Requirements</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#CE1C1A] transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Archelonsolutions.com. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-[#CE1C1A] transition-colors duration-200">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-[#CE1C1A] transition-colors duration-200">Terms</a>
                <a href="#" className="text-gray-400 hover:text-[#CE1C1A] transition-colors duration-200">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;