import React from 'react';
import { Menu, X, Star, Wifi, Coffee, Dumbbell, School as Pool, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const rooms = [
    {
      title: "Luxury Suite",
      price: "$499",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800",
      description: "Spacious suite with ocean view"
    },
    {
      title: "Executive Room",
      price: "$299",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      description: "Perfect for business travelers"
    },
    {
      title: "Penthouse",
      price: "$899",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800",
      description: "Ultimate luxury experience"
    }
  ];

  const amenities = [
    { icon: <Wifi size={24} />, name: "Free High-Speed WiFi" },
    { icon: <Coffee size={24} />, name: "24/7 Room Service" },
    { icon: <Dumbbell size={24} />, name: "Fitness Center" },
    { icon: <Pool size={24} />, name: "Infinity Pool" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-semibold text-gray-800">LuxeStay</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#rooms" className="text-gray-600 hover:text-gray-900">Rooms</a>
              <a href="#amenities" className="text-gray-600 hover:text-gray-900">Amenities</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Book Now Button */}
            <div className="hidden md:block">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-600">Home</a>
              <a href="#rooms" className="block px-3 py-2 text-gray-600">Rooms</a>
              <a href="#amenities" className="block px-3 py-2 text-gray-600">Amenities</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
              <button className="w-full mt-2 bg-gray-900 text-white px-6 py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920"
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Experience Luxury<br />Like Never Before
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Indulge in world-class amenities and unparalleled service at our five-star hotel
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Luxury Accommodations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={room.image} alt={room.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{room.title}</h3>
                    <span className="text-2xl font-bold">{room.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Amenities</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="mr-4" />
                  <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4" />
                  <span>contact@luxestay.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                ></textarea>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">LuxeStay</h3>
              <p className="text-sm">Experience luxury and comfort in the heart of Beverly Hills.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#rooms" className="hover:text-white transition">Rooms</a></li>
                <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cancellation Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
                <button className="bg-white text-gray-900 px-4 rounded-r-md hover:bg-gray-100 transition">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 LuxeStay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;