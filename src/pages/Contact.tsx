import { useState } from 'react';
import * as Icons from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest. This is a demo form. In production, this would submit to your backend.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discuss your simulation system requirements with our engineering team
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Whether you're developing a new training system, modernizing existing equipment, or evaluating technology options, our team is ready to discuss how Whirlwind3D products can meet your requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">For Business Inquiries</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Contact us to discuss product specifications, integration requirements, and program support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Wrench className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our engineering team provides comprehensive technical support for all deployed systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Consulting Services</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Leverage our expertise in distributed simulation architecture and system integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Who We Work With</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Icons.Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Defense contractors and prime integrators
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Icons.Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Aerospace manufacturers and training providers
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Icons.Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Government agencies and research laboratories
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Icons.Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Military training centers and facilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-blue-500 text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
