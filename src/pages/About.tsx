import * as Icons from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-ww3d-surface">
      <section className="ww3d-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Whirlwind3D
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering excellence in simulation technology since our founding
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Company Background</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Whirlwind3D designs and builds highly specialized electronic hardware products used in military and commercial flight simulators, driving simulators, distributed simulation-based training systems, government laboratory training environments, and defense contractor simulation systems.
                </p>
                <p>
                  We do not build games or VR experiences. We build custom electronic products featuring PCB-based hardware and embedded firmware that are integrated into large simulator systems developed by organizations such as NASA, Boeing, Lockheed Martin, and Airbus.
                </p>
                <p>
                  Our customers include government labs, defense contractors, aerospace companies, and military training centers that require mission-critical, high-reliability solutions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Engineering Philosophy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Our engineering approach is grounded in precision, reliability, and deep understanding of real-time embedded systems. Every product we develop must meet the stringent requirements of mission-critical training environments where failure is not an option.
                </p>
                <p>
                  We prioritize technical excellence over rapid iteration, comprehensive testing over quick deployment, and long-term reliability over short-term gains. This philosophy has earned us the trust of the world's most demanding customers.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="card-ww3d border border-ww3d-30 rounded-lg p-8">
              <div className="w-12 h-12 icon-ww3d-bg rounded-lg flex items-center justify-center mb-4">
                <Icons.Cpu className="w-6 h-6 text-ww3d" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Embedded Systems Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep expertise in custom PCB design, embedded firmware development, and real-time system optimization for demanding simulation applications.
              </p>
            </div>

            <div className="card-ww3d border border-ww3d-30 rounded-lg p-8">
              <div className="w-12 h-12 icon-ww3d-bg rounded-lg flex items-center justify-center mb-4">
                <Icons.Target className="w-6 h-6 text-ww3d" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commitment to Precision</h3>
              <p className="text-gray-400 leading-relaxed">
                Every design decision is driven by technical requirements, validated through rigorous testing, and proven in real-world mission-critical environments.
              </p>
            </div>

            <div className="card-ww3d border border-ww3d-30 rounded-lg p-8">
              <div className="w-12 h-12 icon-ww3d-bg rounded-lg flex items-center justify-center mb-4">
                <Icons.Shield className="w-6 h-6 text-ww3d" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Defense & Aerospace Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Proven track record with aerospace and defense organizations requiring the highest levels of reliability, security, and performance.
              </p>
            </div>
          </div>

            <div className="card-ww3d border border-ww3d-30 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Mission-Critical Environment
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto text-center mb-8">
              Our products operate in environments where precision matters. From fighter pilot training systems to NASA research facilities, from military command and control exercises to aerospace manufacturer test systems, Whirlwind3D technology enables the most demanding simulation and training applications worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-ww3d mb-2">25+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ww3d mb-2">100+</div>
                <div className="text-gray-400 text-sm">Government Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ww3d mb-2">1000+</div>
                <div className="text-gray-400 text-sm">Systems Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ww3d mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
