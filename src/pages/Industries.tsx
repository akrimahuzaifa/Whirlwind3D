import * as Icons from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const industries = [
    {
      icon: 'Plane',
      title: 'Aerospace',
      description: 'Flight simulation systems for commercial and military aviation training, mission rehearsal, and aircraft development programs.',
      applications: [
        'Fixed-wing flight simulators',
        'Rotary-wing training systems',
        'Mission rehearsal environments',
        'Aircraft systems development',
        'Pilot training devices'
      ]
    },
    {
      icon: 'Shield',
      title: 'Defense',
      description: 'Mission-critical training systems for military operations, tactical training, and multi-domain exercises.',
      applications: [
        'Combat flight training',
        'Ground vehicle simulation',
        'Command and control exercises',
        'Electronic warfare training',
        'Multi-domain operations'
      ]
    },
    {
      icon: 'FlaskConical',
      title: 'Government Research Labs',
      description: 'Advanced research and development environments for government agencies and national laboratories.',
      applications: [
        'Human factors research',
        'Technology development',
        'Systems integration testing',
        'Concept validation',
        'Performance evaluation'
      ]
    },
    {
      icon: 'GraduationCap',
      title: 'Commercial Training Providers',
      description: 'Professional training systems for civilian operators across multiple transportation sectors.',
      applications: [
        'Commercial pilot training',
        'Truck driving simulation',
        'Locomotive operator training',
        'Construction equipment training',
        'Emergency response training'
      ]
    },
    {
      icon: 'Network',
      title: 'Advanced Simulation Developers',
      description: 'Technology providers building next-generation distributed simulation and training systems.',
      applications: [
        'Distributed simulation networks',
        'Live-virtual-constructive training',
        'Multi-site training exercises',
        'Synthetic environment development',
        'Interoperability solutions'
      ]
    },
    {
      icon: 'Building2',
      title: 'Defense Contractors',
      description: 'Prime contractors and integrators developing large-scale training systems for government customers.',
      applications: [
        'Platform-specific trainers',
        'Mission training centers',
        'Maintenance training systems',
        'System integration',
        'Program support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mission-critical training systems, not gaming studios
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Specialized Engineering for Professional Simulation
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whirlwind3D serves organizations that require mission-critical, high-reliability electronic hardware for simulation and training systems. Our customers include aerospace companies, defense contractors, government research facilities, and professional training providers who demand technical excellence and proven performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = Icons[industry.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-7 h-7 text-blue-400" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Typical Applications
                    </h4>
                    <ul className="space-y-2">
                      {industry.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-start gap-3">
                          <Icons.ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-800/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Organizations including NASA, Boeing, Lockheed Martin, and Airbus rely on Whirlwind3D technology for their simulation and training systems.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
            >
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
