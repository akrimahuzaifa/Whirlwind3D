import * as Icons from 'lucide-react';
import { products } from '../data/products';

interface HomeProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Electronic Solutions for<br />
              <span className="text-blue-400">High-End Simulation & Training Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Custom-designed embedded hardware and firmware powering mission-critical simulation environments worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
              >
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Products & Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized electronic hardware and software for professional simulation systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={product.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer"
                  onClick={() => onNavigate('product', product.id)}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      {IconComponent && <IconComponent className="w-6 h-6 text-blue-400" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <button className="text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mission-Critical</h3>
              <p className="text-gray-400">
                Trusted by defense contractors and aerospace companies for mission-critical applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Engineering</h3>
              <p className="text-gray-400">
                Highly specialized electronic hardware products with embedded firmware
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-400">
                Powering simulation systems worldwide in aerospace, defense, and training
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
