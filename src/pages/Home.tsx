import * as Icons from 'lucide-react';
import { products } from '../data/products';

interface HomeProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const logos: Record<string, string> = {
    'ausim': '/AuSim_logo.png',
    'oth': '/OTH_logo.jpg',
    'sim-snr': '/logo_Sim_SNR.png',
    'remo-3d': '/Remo_3D_logo.png'
  };
  return (
    <div className="min-h-screen bg-ww3d-surface">
      <section className="relative ww3d-gradient overflow-hidden">
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
              <button
                onClick={() => onNavigate('products')}
                className="text-ww3d-light cta-text hover:underline ml-0"
                aria-label="Explore products"
              >
                High-End Simulation &amp; Training Systems
              </button>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Custom-designed embedded hardware and firmware powering mission-critical simulation environments worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a href="#products" className="btn-pill-ww3d btn-ww3d inline-flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                    Explore Products
                  </a>
                  <a href="#contact" className="btn-pill-ww3d btn-pill-ww3d-secondary sm:ml-2">
                    Contact Us
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 card-section-ww3d">
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
                  className="card-ww3d-2 border border-ww3d-30 rounded-lg p-6 hover-border-ww3d transition-all duration-300 hover-shadow-ww3d group cursor-pointer"
                  onClick={() => onNavigate('product', product.id)}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 icon-ww3d-bg rounded-lg flex items-center justify-center group-hover-ww3d-bg transition-colors">
                      {logos[product.id] ? (
                        <img src={logos[product.id]} alt={product.name + ' logo'} className="w-8 h-8 object-contain" />
                      ) : (
                        IconComponent && <IconComponent className="w-6 h-6 text-ww3d" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover-ww3d transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <button className="text-ww3d font-medium text-sm hover-ww3d-light transition-colors">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ww3d-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 icon-ww3d-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Shield className="w-8 h-8 text-ww3d" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mission-Critical</h3>
              <p className="text-gray-400">
                Trusted by defense contractors and aerospace companies for mission-critical applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 icon-ww3d-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Cpu className="w-8 h-8 text-ww3d" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Engineering</h3>
              <p className="text-gray-400">
                Highly specialized electronic hardware products with embedded firmware
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 icon-ww3d-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Globe className="w-8 h-8 text-ww3d" />
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
