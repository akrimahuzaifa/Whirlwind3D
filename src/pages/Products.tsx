import * as Icons from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const logos: Record<string, string> = {
    'ausim': '/AuSim_logo.png',
    'oth': '/OTH_logo.jpg',
    'sim-snr': '/logo_Sim_SNR.png',
    'remo-3d': '/Remo_3D_logo.png'
  };
  return (
    <div className="min-h-screen bg-ww3d-surface">
      <section className="ww3d-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized electronic hardware and software designed for professional simulation and training systems
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={product.id}
                  className="card-ww3d border border-ww3d-30 rounded-lg p-8 hover-border-ww3d transition-all duration-300 hover-shadow-ww3d group cursor-pointer"
                  onClick={() => onNavigate('product', product.id)}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 icon-ww3d-bg rounded-lg flex items-center justify-center group-hover-ww3d-bg transition-colors">
                        {logos[product.id] ? (
                          <img src={logos[product.id]} alt={product.name + ' logo'} className="w-10 h-10 object-contain" />
                        ) : (
                          IconComponent && <IconComponent className="w-8 h-8 text-ww3d" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover-ww3d transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {product.shortDescription}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {product.fullDescription.substring(0, 200)}...
                      </p>
                      <button className="text-ww3d font-medium hover-ww3d-light transition-colors inline-flex items-center gap-2">
                        Learn More <Icons.ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
