import * as Icons from 'lucide-react';
import { products } from '../data/products';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-ww3d-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <button
            onClick={() => onNavigate('products')}
            className="text-ww3d hover-ww3d-light"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const logos: Record<string, string> = {
    'ausim': '/AuSim_logo.png',
    'oth': '/OTH_logo.jpg',
    'sim-snr': '/logo_Sim_SNR.png',
    'remo-3d': '/Remo_3D_logo.png',
    // curated placeholders for products without supplied logos
    'remoscape': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=256&q=80',
    'project-5': 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=256&q=80',
    'consulting': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=256&q=80',
    // placeholder for PTT.Link until client supplies logo
    'ptt-link': 'https://via.placeholder.com/128x128.png?text=PTT.Link'
  };

  return (
    <div className="min-h-screen bg-ww3d-surface">
      <section className="ww3d-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('products')}
            className="text-ww3d hover-ww3d-light mb-8 inline-flex items-center gap-2"
          >
            <Icons.ArrowLeft className="w-4 h-4" /> Back to Products
          </button>

          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 icon-ww3d-bg rounded-lg flex items-center justify-center">
                {logos[product.id] ? (
                  <img src={logos[product.id]} alt={product.name + ' logo'} className="w-16 h-16 object-contain" />
                ) : (
                  IconComponent && <IconComponent className="w-10 h-10 text-ww3d" />
                )}
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-300">
                {product.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Technical Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Key Capabilities</h2>
                <ul className="space-y-4">
                  {product.keyCapabilities.map((capability, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full icon-ww3d-bg-20 flex items-center justify-center">
                          <Icons.Check className="w-4 h-4 text-ww3d" />
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{capability}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Technical Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.technicalHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="card-ww3d border border-ww3d-30 rounded-lg p-4"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="card-ww3d border border-ww3d-30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icons.Target className="w-5 h-5 text-ww3d" />
                  Application Areas
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-ww3d-30"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-ww3d border border-ww3d-30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Interested?</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Contact us to learn more about how {product.name} can enhance your simulation system.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 btn-ww3d text-white font-semibold rounded transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
