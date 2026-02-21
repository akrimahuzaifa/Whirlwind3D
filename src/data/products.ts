import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'remo-3d',
    name: 'Remo 3D',
    shortDescription: '3D modeling software',
    fullDescription: 'Remo 3D is a professional 3D modeling application specifically designed for real-time simulation applications. Built for engineers and technical artists working in the simulation industry, it provides powerful tools for creating, editing, and optimizing 3D models that must perform efficiently in real-time environments.',
    keyCapabilities: [
      'Real-time 3D model creation and editing optimized for simulation performance',
      'Native support for OpenFlight format used throughout the simulation industry',
      'Advanced polygon reduction and level-of-detail (LOD) generation',
      'Texture mapping and material assignment for realistic rendering',
      'Model validation and optimization for real-time frame rates'
    ],
    applications: [
      'Flight simulator visual database development',
      'Vehicle simulator model creation',
      'Distributed training system asset development',
      'Government lab simulation environments',
      'VR training system content creation'
    ],
    technicalHighlights: [
      'Purpose-built for OpenFlight and real-time requirements',
      'Efficient workflow for simulation-specific modeling tasks',
      'Industry-standard tool used by major defense contractors',
      'Optimized for large-scale terrain and vehicle models'
    ],
    icon: 'Box'
  },
  {
    id: 'remoscape',
    name: 'Remoscape',
    shortDescription: '3D terrain generation software',
    fullDescription: 'Remoscape is a specialized terrain generation and management system designed for creating high-fidelity, real-time 3D environments used in professional simulation systems. It enables the development of accurate, performance-optimized terrain databases for training and mission rehearsal applications.',
    keyCapabilities: [
      'Large-scale terrain database creation from geospatial source data',
      'Multi-resolution terrain generation with automatic LOD management',
      'Integration of satellite imagery, elevation data, and vector features',
      'Feature extraction and placement for realistic environmental detail',
      'Performance optimization for real-time rendering requirements'
    ],
    applications: [
      'Flight simulator terrain database development',
      'Vehicle simulator environment creation',
      'Distributed simulation training areas',
      'Mission rehearsal system terrain',
      'VR training environment generation'
    ],
    technicalHighlights: [
      'Handles massive geospatial datasets efficiently',
      'Generates industry-standard OpenFlight terrain databases',
      'Supports multi-spectral and sensor simulation requirements',
      'Proven in large-scale military training applications'
    ],
    icon: 'Mountain'
  },
  {
    id: 'ausim',
    name: 'AuSim',
    shortDescription: 'Realistic real-time audio for individual and team training devices',
    fullDescription: 'AuSim provides physics-based, real-time 3D audio simulation for training systems. It delivers accurate acoustic environments that respond dynamically to trainee actions, environmental conditions, and platform characteristics, creating immersive and realistic training scenarios.',
    keyCapabilities: [
      'Physics-based acoustic propagation modeling',
      'Real-time 3D positional audio rendering',
      'Dynamic sound source management and mixing',
      'Environmental acoustic modeling (terrain, structures, weather)',
      'Integration with simulation host systems via standard interfaces'
    ],
    applications: [
      'Flight simulator cockpit audio environments',
      'Ground vehicle simulator audio systems',
      'Distributed team training scenarios',
      'Virtual reality training immersion',
      'Mission rehearsal audio realism'
    ],
    technicalHighlights: [
      'Low-latency real-time processing for immediate feedback',
      'Scalable from single-user to multi-participant scenarios',
      'Physically accurate acoustic modeling',
      'Proven in high-fidelity military training systems'
    ],
    icon: 'Volume2'
  },
  {
    id: 'sim-snr',
    name: 'Sim.SNR',
    shortDescription: 'Physics-based radio signal propagation and degradation',
    fullDescription: 'Sim.SNR provides realistic radio frequency (RF) signal propagation simulation for training systems. It accurately models how radio signals behave in real-world environments, including terrain effects, atmospheric conditions, and equipment characteristics, enabling realistic communications training.',
    keyCapabilities: [
      'Physics-based RF propagation modeling using terrain data',
      'Line-of-sight and beyond-line-of-sight calculations',
      'Atmospheric and weather effects on signal quality',
      'Multi-path interference and signal fading simulation',
      'Real-time signal-to-noise ratio computation'
    ],
    applications: [
      'Military communications training systems',
      'Distributed simulation exercises',
      'Multi-platform training scenarios',
      'Electronic warfare simulation',
      'Mission planning and rehearsal systems'
    ],
    technicalHighlights: [
      'Integrates with OTH terrain server for accurate propagation',
      'Supports multiple radio frequency bands',
      'Validated against real-world RF measurements',
      'Scalable for large distributed training exercises'
    ],
    icon: 'Radio'
  },
  {
    id: 'oth',
    name: 'OTH',
    shortDescription: '3D terrain query server for Line Of Sight (LOS) & terrain intelligence',
    fullDescription: 'OTH (Over The Horizon) is a high-performance terrain query server that provides real-time access to 3D terrain data for simulation systems. It enables rapid line-of-sight calculations, terrain intelligence queries, and elevation data access critical for realistic training scenarios.',
    keyCapabilities: [
      'High-speed line-of-sight (LOS) calculations',
      'Real-time terrain elevation queries',
      'Multi-spectral terrain data access',
      'Networked architecture supporting multiple clients',
      'Optimized algorithms for large terrain databases'
    ],
    applications: [
      'Sensor simulation systems',
      'Radio propagation modeling (Sim.SNR)',
      'Flight simulator visual systems',
      'Weapon simulation accuracy',
      'Distributed training network services'
    ],
    technicalHighlights: [
      'Handles large-scale terrain databases efficiently',
      'Sub-millisecond query response times',
      'Supports industry-standard terrain formats',
      'Mission-critical reliability for training exercises'
    ],
    icon: 'Radar'
  },
  {
    id: 'ptt-link',
    name: 'PTT.Link',
    shortDescription: 'Interconnect live push-to-talk radios with PC-based simulated radios',
    fullDescription: 'PTT.Link bridges live tactical radios with simulated radio systems, enabling hybrid training scenarios where live operators can communicate with simulator-based trainees. This creates more realistic and cost-effective training by mixing live and virtual participants.',
    keyCapabilities: [
      'Interface between tactical radios and simulation systems',
      'Protocol translation and audio format conversion',
      'Multiple radio network support',
      'Low-latency audio path for natural communications',
      'Integration with AuSim and other simulation audio systems'
    ],
    applications: [
      'Live-virtual-constructive (LVC) training',
      'Distributed team training exercises',
      'Command post exercises',
      'Multi-echelon training scenarios',
      'Blended live and simulated operations'
    ],
    technicalHighlights: [
      'Supports multiple tactical radio types',
      'Transparent operation to users',
      'Minimal latency for natural conversation',
      'Field-proven in large-scale exercises'
    ],
    icon: 'Headphones'
  },
  {
    id: 'project-5',
    name: 'Project 5',
    shortDescription: 'Real-time video transmission with dramatically reduced bandwidth',
    fullDescription: 'Project 5 delivers innovative video compression and transmission technology for bandwidth-constrained training and operational environments. It enables high-quality video feeds to be transmitted over limited network connections, critical for distributed simulation and remote training scenarios.',
    keyCapabilities: [
      'Advanced video compression algorithms',
      'Real-time encoding and decoding',
      'Adaptive bitrate for varying network conditions',
      'Low-latency transmission suitable for interactive training',
      'Support for multiple simultaneous video streams'
    ],
    applications: [
      'Distributed simulation video feeds',
      'Remote training observation and assessment',
      'Multi-site exercise coordination',
      'Bandwidth-limited operational environments',
      'Training system video distribution'
    ],
    technicalHighlights: [
      'Significantly reduced bandwidth requirements',
      'Maintains acceptable video quality for training purposes',
      'Resilient to network conditions',
      'Proven in field training exercises'
    ],
    icon: 'Video'
  },
  {
    id: 'consulting',
    name: 'Engineering & Business Consulting',
    shortDescription: 'Distributed simulation-based training expertise',
    fullDescription: 'Whirlwind3D provides specialized consulting services for organizations developing or deploying simulation-based training systems. Our team brings decades of experience in distributed simulation architecture, system integration, and training system deployment.',
    keyCapabilities: [
      'Distributed simulation architecture design',
      'System requirements analysis and specification',
      'Technology selection and vendor evaluation',
      'Integration planning and execution support',
      'Training effectiveness analysis and optimization'
    ],
    applications: [
      'New training system development programs',
      'Legacy system modernization',
      'Multi-site training network design',
      'Standards-based interoperability implementation',
      'Training system performance optimization'
    ],
    technicalHighlights: [
      'Deep expertise in DIS, HLA, and TENA standards',
      'Experience with major defense contractor programs',
      'Understanding of military training requirements',
      'Proven track record with government customers'
    ],
    icon: 'Users'
  }
];
