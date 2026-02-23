interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ww3d-surface border-t border-ww3d-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img
              src="/WW3D_logo-2021.svg"
              alt="Whirlwind3D"
              className="h-12 w-auto invert mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Advanced electronic solutions for high-end simulation and training systems.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-400 hover-ww3d-light transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-gray-400 hover-ww3d-light transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-gray-400 hover-ww3d-light transition-colors text-sm"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Remo 3D</li>
              <li className="text-gray-400 text-sm">Remoscape</li>
              <li className="text-gray-400 text-sm">AuSim</li>
              <li className="text-gray-400 text-sm">Sim.SNR</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-ww3d hover-ww3d-light transition-colors text-sm font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Whirlwind3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
