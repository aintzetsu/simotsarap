import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, MapPin, Clock, Star, Menu as MenuIcon, X, Facebook, ExternalLink } from 'lucide-react';
import { mockMenuData, mockTestimonials, mockPromotions } from '../utils/mock';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const filteredMenu = selectedCategory === 'all' 
    ? mockMenuData 
    : mockMenuData.filter(item => item.category === selectedCategory);

  const categories = ['all', ...new Set(mockMenuData.map(item => item.category))];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_qc-wings-spot/artifacts/8jf5l0sj_05d81a58-affc-4c24-bd5d-e67051951aa4-md.jpg" 
                alt="Simot Sarap Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Simot Sarap</h1>
                <p className="text-xs text-orange-600">Chicken Wings</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Order Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-orange-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-600">About</a>
              <a href="#menu" className="block py-2 text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-orange-600">Gallery</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-600">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-orange-100 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Simot Sarap
                <span className="block text-orange-600">Chicken Wings</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Experience the perfect blend of crispy, flavorful chicken wings that will make your taste buds dance!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                  Order on Foodpanda
                </Button>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                  Order on GrabFood
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTedzcuh5JxVeLLMAtgpmoNB2duWU-Qe3o6YtavRJM2RZ2yxgdkeQGZuFdvixEKnpV9G-Roq-PaCRTOtUA6RZGD4m5It-sLPH7B6FTca5LUCp2xZyQHZrv4G2eUWqoNmoGZTMdRg=s900-k"
                alt="Delicious Chicken Wings"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-orange-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone size={24} />
              <span>+63 947 104 1002</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock size={24} />
              <span>Daily: Morning to Late Evening</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin size={24} />
              <span>Fairview, Quezon City</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx5EPDc0PcidPzcCzs2_dYz1ne5aYUivX6jU5vxokcHVTHZE6Ob-f3WB2YJ2-FDPUatQABQ78lBtXs2Ztg3LTg68_Goec-OEGYUPskPNCXpkY59ip9SiZ97u83-OTNFkePk40gp=s900-k"
                alt="Our Food"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Local Flavor Destination</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Simot Sarap Chicken Wings is a proud local food business serving the Quezon City community with passion and dedication. We specialize in creating flavorful chicken wings and delicious meals that bring people together.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our secret? Fresh ingredients, unique seasoning blends, and a commitment to quality that you can taste in every bite. From our crispy chicken wings to our savory rice meals, every dish is crafted with care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're dining in or ordering for delivery, we're here to satisfy your cravings with food that's simply... Simot Sarap!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockPromotions.map((promo, index) => (
              <Card key={index} className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-600">{promo.title}</CardTitle>
                  <CardDescription>{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gray-900">{promo.price}</p>
                  <p className="text-sm text-gray-600 mt-2">{promo.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-orange-600 hover:bg-orange-700 text-white" 
                  : "border-orange-600 text-orange-600 hover:bg-orange-50"}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-600">₱{item.price}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Food Gallery</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTedzcuh5JxVeLLMAtgpmoNB2duWU-Qe3o6YtavRJM2RZ2yxgdkeQGZuFdvixEKnpV9G-Roq-PaCRTOtUA6RZGD4m5It-sLPH7B6FTca5LUCp2xZyQHZrv4G2eUWqoNmoGZTMdRg=s900-k" alt="Simot Sarap Chicken Wings" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx5EPDc0PcidPzcCzs2_dYz1ne5aYUivX6jU5vxokcHVTHZE6Ob-f3WB2YJ2-FDPUatQABQ78lBtXs2Ztg3LTg68_Goec-OEGYUPskPNCXpkY59ip9SiZ97u83-OTNFkePk40gp=s900-k" alt="Delicious Wings Meal" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhEu283rzRNz-vcqOZoYlXU1AVk_gMtWdNz9mJS47dUFc7cB_sdrift4UJovZtPnJVJGyKHSYdJUjyGinx9bTXzbDFhJwgRgaun5oFP4rEHwaLu_Mt5CMUZCfOg6g4bEOxWq6t6ysn1s2r59YLVfz7-9MvTeGlg7VT1_Z40BhNePhWE2OxSP5rC5hg=s900-k" alt="Chicken Poppers" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhGkqIHr2wUCulzjLEZMaD4zDhbf_3_NknYf3kIaHwRGKlMGvDL1SBYkNDW6lHWa-2x5z1dx0fDxFRqIwk6fdqhcYnud_CEHHEEF9dBgWF5_TBLFk5Wj-YssLFIuoNcyny4NlHTageyW-G1IojK7sfwxbVRLxBQOz1JaurzriuQ6qvY_euhslaU9dg=s900-k" alt="Restaurant Interior" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhFeAYWJG2hQawmLDmoEduj1Tkbgxf6uMIBIsdbE5SQre2EKuSzgZfJsGnwDT00udzlW3BlHW9ZgZ5P_0LaJGyI7PimSHKvxwjkeSmIrOEsKPTHAbHmSK8xVvUv9qsQkqBJhmiezbXoanvThLQE9oY3fstrUpL7lkEvkrU7pw3dhVe2E79Hpcgxt=s900-k" alt="Wings Platter" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhHR4fK4BOeqjk4bVg9mR0byaFTMz61NCqizGNUW9VGSQHSVjzVk3BuZ4q9H9BqySdwIAXXwfYrUfbU0p1_7Z-7t2dWmZAKTZf3iSlnMhCMu73VeR7i_nZoPHPr2MBKUuJqNl680SHJFCMPiDBMs_cHH1Q5wKSLb_mSzoUTeeIB1fCk2iSH8CWNP=s900-k" alt="Japchae Meal" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhFhAEHoV8RM5xthHjv0z2rcWcM14zfsp7db__ArkK2U8-zMoQQy9Dbb3uvX9lFlxi_Ei7Ww4oC0B8cnOB-m6YuQwVLIjx-rQC-cWFqDCEEw-wedQb8a_5X-CP8lbrkfi_t9-g5uG9kkYC5_I5aHOZMYaZjiTJhgCWhxhd-2xMU6jrY3WhuSTaE5=s900-k" alt="Rice Meal Combo" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhGZvznCyEe2bf8mHREeip_-Po8rL6fSxj6AMaBo87TqycdLlODfvdScHZDAFvDvyJqycuRy1ZaXYaE2vEv6po0rAEoor__d0q9eG4MZPlqKXQRpYpjzcCiUL6Jp1Hyeigutc04vLvoi-b-714ZwDnEh-NHsfZu3rDeGdMzMiFAorzn6iKWAVk85=s900-k" alt="Chicken Wings Special" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhFXUJ-iro7mzOs_8iyKGKR8WhvVmcOhcZJIlcOiiYEcgMlwPxjjWlIg96QV2Auedg8hj8Q-Ymoqu63s4KrxU9ar_B3_MeqOvovrkhrDzY1TWniLNM_snED2Kw-DisCxsML7f09kMGI4FAqMX9Z8W84DutVMBdxPdonwSI1J1e_De1PDcyXovYlhWQ=s900-k" alt="Food Menu Display" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhFjZApNRgyhQ5A0ZkLAp7txwtR71Kqe_B3xwHzje0HzsJQvHgG3BFbIC_IJmk_-WDHEsZmrxlLEBtDtQBHlIcxkV3zeDNHCf1vFQVAhOfrhBeDRMCVO41QwE0QG74kCpQ-uT8sIqbfd5J1_03OrGAxWMgGR3S9Rwn4vxUytVAH1iP96w0y6kuk=s900-k" alt="Dining Area" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhGG8c15Me5rjk2fcYaFkc1687UivdUN3O2WWfVi8YSk93Ua2R6MO0c9nnVtQxZesyTh574in9XURKBx1Ntp9wpH_xrWi8aQSaMm-TEwgWsaRF4GgP-ZRxt-zxQRbcn2-8F_qe_PV4LLLtCJWOMXpubcmgbXzNF4ax_c_xYVggRCNWp6KBXhwmSD=s900-k" alt="Special Wings Combo" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
            <img src="https://lh3.googleusercontent.com/gps-proxy/ALd4DhEIxfCEy65MhYLlNVCtbHl_z-UOgSIYeY7h66ELuR8asnlO3nXh9lX_Rwb5fekd_3dFtlwms0mblGtSekeTnJv9PVu3gWaa_Kbohqts7gsi2e3IWXxXAVzh4twqMaOBnnNYMZd3EfqtLyt602-nHCVGiJIjlN3PFBAnQwdhf75xG-DADwbQ9pGq=s900-k" alt="Restaurant Exterior" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 mb-4">Real reviews from Google Maps</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-600 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">B5 L15 Rolex Street, Brgy. Fairview</p>
                    <p className="text-gray-700">Quezon City, Metro Manila, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-600 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+63 947 104 1002</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-orange-600 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-700">Daily: Morning to Late Evening</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0799!2d121.0866!3d14.7168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzAwLjUiTiAxMjHCsDA1JzExLjgiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Simot Sarap Chicken Wings</h3>
              <p className="text-gray-400">Serving delicious chicken wings and meals in Quezon City.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-orange-400 transition-colors">Menu</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Order Online</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Foodpanda</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-2">
                    <ExternalLink size={16} />
                    <span>GrabFood</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/simot.sarap.ibp.road" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Simot Sarap Chicken Wings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;