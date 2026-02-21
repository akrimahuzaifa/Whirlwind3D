import * as Icons from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
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
                  className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer"
                  onClick={() => onNavigate('product', product.id)}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        {IconComponent && <IconComponent className="w-8 h-8 text-blue-400" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {product.shortDescription}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {product.fullDescription.substring(0, 200)}...
                      </p>
                      <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-2">
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
