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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <button
            onClick={() => onNavigate('products')}
            className="text-blue-400 hover:text-blue-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('products')}
            className="text-blue-400 hover:text-blue-300 mb-8 inline-flex items-center gap-2"
          >
            <Icons.ArrowLeft className="w-4 h-4" /> Back to Products
          </button>

          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-600/10 rounded-lg flex items-center justify-center">
                {IconComponent && <IconComponent className="w-10 h-10 text-blue-400" />}
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
                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                          <Icons.Check className="w-4 h-4 text-blue-400" />
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
                      className="bg-slate-900 border border-slate-800 rounded-lg p-4"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icons.Target className="w-5 h-5 text-blue-400" />
                  Application Areas
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-blue-600/30"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Interested?</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Contact us to learn more about how {product.name} can enhance your simulation system.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
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
