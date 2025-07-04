/**
 * Centralized CV data constants
 * Eliminates redundant hardcoded values and improves maintainability
 */

// Section IDs for navigation and scroll tracking
export const SECTION_IDS = [
  'about',
  'education',
  'licensing',
  'clinical',
  'publications',
  'presentations',
  'extracurriculars',
  'community',
  'skills',
] as const;

// Section background colors for visual distinction
export const SECTION_BACKGROUNDS = {
  about: 'rgba(74, 222, 128, 0.08)', // green
  education: 'rgba(90, 93, 240, 0.08)', // blue
  licensing: 'rgba(245, 158, 66, 0.08)', // orange
  clinical: 'rgba(229, 115, 115, 0.08)', // red
  publications: 'rgba(251, 192, 45, 0.08)', // yellow
  presentations: 'rgba(66, 165, 245, 0.08)', // blue
  extracurriculars: 'rgba(42, 176, 145, 0.08)', // teal
  community: 'rgba(255, 112, 67, 0.08)', // orange
  skills: 'rgba(120, 90, 200, 0.10)', // slightly less purple, more neutral
} as const;

// Section glow colors for active state highlighting
export const SECTION_GLOW_COLORS = {
  education: '#5a5df0', // blue (graduation cap)
  licensing: '#f59e42', // orange (clipboard)
  clinical: '#e57373', // red (stethoscope)
  publications: '#fbc02d', // yellow (book)
  presentations: '#42a5f5', // blue (megaphone)
  extracurriculars: '#26a69a', // teal (lightbulb)
  community: '#ff7043', // orange (hands/heart)
  skills: '#7e57c2', // purple (tools/gear)
} as const;

// Education data
export const EDUCATION_DATA = [
  {
    organization: 'Aga Khan University, Pakistan',
    role: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    dateRange: '2019 – 2023',
    achievements: [
      'Honors – Anatomy, Physiology, Microbiology, Biochemistry, Community Health Sciences',
      'University Scholarship – Awarded to the top 15% of students during basic science years'
    ]
  },
  {
    organization: 'Beaconhouse School System',
    role: 'O and A levels',
    dateRange: '2014 – 2018',
    achievements: [
      '9A*s 1A in O levels, 3A*s 1A in A levels',
      'Qualified for Pakistan\'s team for International Chemistry Olympiad 2018 (Prague)'
    ]
  }
];

// Licensing exams data
export const LICENSING_DATA = [
  {
    exam: 'USMLE Step 3',
    score: '235',
    date: '2025'
  },
  {
    exam: 'USMLE Step 2 CK',
    score: '267',
    date: '2024'
  },
  {
    exam: 'USMLE Step 1',
    score: 'Pass',
    date: '2022'
  }
];

// Clinical experience data
export const CLINICAL_DATA = [
  {
    organization: 'Albany Medical Center, USA',
    role: 'Dr Edward Iskhakov, MD and Dr Rizwan AliMohammad, MD',
    dateRange: 'May 2025',
    setting: 'both' as const,
    specialty: ['Hospital Medicine', 'Cardiology'],
    achievements: []
  },
  {
    organization: 'M Health Fairview, Minnesota, USA',
    role: 'Dr Ayesha Rashid, MD',
    dateRange: 'June 2025',
    setting: 'both' as const,
    specialty: 'Infectious Diseases',
    achievements: [
      '',
      '',
      ''
    ]
  },
  {
    organization: 'Mayo Clinic, Rochester, USA',
    role: 'Dr. Karina Keogh, MD and Dr. Eric Olson, MD',
    dateRange: 'Mar 2023',
    setting: 'inpatient' as const,
    specialty: 'Pulmonology',
    achievements: [
      'Admitted and presented multiple patients in the pre-rounds (3 to 4 on average). Interacted with the families, shared the team\'s plan and addressed their queries. Collaborated with Interventional Pulmonology for further patient care and observed procedures including bronchoscopy and pleurocentesis.',
      'Regularly studied up on the teaching topics given by the fellow and presented them to the team after rounds. Some of the topics include Bronchiectasis, CT findings in Interstitial Lung Disease and Chylothorax.',
      'Presented in Mayo Clinic IM Weekly Case Conference - Chylothorax as a presentation of Superior Vena Cava Syndrome in Fibrosing Mediastinitis.'
    ]
  },
  {
    organization: 'Aga Khan University, Pakistan',
    role: 'Dr. Ali Zubairi, MD',
    dateRange: 'Apr 2022',
    setting: 'both' as const,
    specialty: 'Pulmonology',
    achievements: [
      'Attended clinics four days per week, including a special Interstitial Lung Disease (ILD) clinic and rounded with the team every morning. Carried out thorough patient histories and examinations and created management plans before presenting them to the consultant.',
      'Regularly attended tutorials and problem-based learning (PBL) sessions. Presented on topics including Asthma in Adults and Hospital Acquired Pneumonia to a team of residents and students. Attended weekly radiology didactic sessions and multidisciplinary meetings that had discussions about complex cases.'
    ]
  },
  {
    organization: 'Aga Khan University, Pakistan',
    role: 'Dr. Mahim Malik, MD',
    dateRange: 'Jan 2021',
    setting: 'both' as const,
    specialty: 'Pediatric Cardiothoracic Surgery',
    achievements: [
      'Scrubbed in on a variety of procedures including Atrial and Ventricular Septal Defects repairs, Tetralogy of Fallot corrections and Patent Ductus Arteriosus closures.',
      'Participated in pediatric cardiology clinics three times per week, honing skills in history-taking and physical examination focused on pediatric heart conditions. Gained foundational knowledge in echocardiography to diagnose common pathologies.'
    ]
  }
];

// Publications data
export const PUBLICATIONS_DATA = [
  {
    title: 'Pancreatic Surgery and Risk of Post-Pancreatectomy Diabetes: Can we identify patients earlier?',
    authors: 'Kumar S, Bilimoria MM, Enriques YS, Maheshwari A',
    journal: 'J Endocr Soc',
    date: 'Submitted',
    studyType: 'Retrospective Cohort'
  },
  {
    title: 'Impact of Drain Placement on Postoperative Complications after Thyroidectomy for Substernal Goiter.',
    authors: 'Waqar U, Nasir A, Angez M, Kumar S, Arshad H, Siddiqui M, Khan H, Viqar W, Abbas A, Javid A, Iftikhar H, Saleem S',
    journal: 'International Archives of Otorhinolaryngology',
    date: '2024 Mar 15',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38974637/',
    studyType: 'Retrospective Cohort'
  },
  {
    title: 'Chylothorax as a presentation of Superior Vena Cava syndrome in Fibrosing Mediastinitis: A case report.',
    authors: 'Albitar HA, Al-Ghoula FK, Kumar S, Peikert T, Kern R',
    journal: 'CHEST',
    date: '2023 Oct 1',
    link: 'https://journal.chestnet.org/article/S0012-3692(23)03291-9/fulltext',
    studyType: 'Case Report'
  },
  {
    title: 'The mid-term and long-term effects of tourniquet use in total knee arthroplasty: systematic review.',
    authors: 'Rafaqat W, Kumar S, Ahmad T, Qarnain Z, Khan KS, Lakdawala RH',
    journal: 'Journal of Experimental Orthopaedics',
    date: '2022 Dec 9',
    link: 'https://jeo-esska.springeropen.com/articles/10.1186/s40634-022-00544-1',
    studyType: 'Systematic Review'
  },
  {
    title: 'Is minimally invasive orthopedic surgery safer than open? A systematic review of systematic reviews.',
    authors: 'Rafaqat W, Ahmad T, Ibrahim MT, Kumar S, Bluman EM, Khan KS',
    journal: 'International Journal of Surgery',
    date: '2022 Apr 12',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S1743919122000894',
    studyType: 'Systematic Review'
  }
];

// Presentations data
export const PRESENTATIONS_DATA = [
  {
    title: 'Chylothorax as a presentation of Superior Vena Cava syndrome in Fibrosing Mediastinitis.',
    authors: 'Kumar S, Albitar H, Witt D, Ticho A, Storandt M, Farrier D, Olson E',
    venue: 'Mayo Clinic Friday Case Conference',
    date: '2023 March 30'
  }
];

// Extracurriculars data
export const EXTRACURRICULARS_DATA = [
  {
    organization: 'Synergy',
    role: 'Mentor',
    dateRange: '2021 – 2023',
    achievements: [
      'Participated in a student-led society helping enhance the medical student life experience at Aga Khan University.',
      'Organized sports and social events attended by 500+ students cumulatively.',
      'Arranged a peer tutoring club and connected high-achieving students with those needing assistance in medical school subjects and USMLE exams.'
    ]
  },
  {
    organization: 'Surgery Interest Group',
    role: 'Core member of Marketing Wing',
    dateRange: '2020 – 2022',
    achievements: [
      'Engaged in a student-run organization that creates opportunities for surgical enthusiasts to learn, connect and collaborate.',
      'Developed marketing strategies and designed social media content for multiple organizational events.',
      'Recruited over 1,500 attendees nationally in 30 webinars, panel discussions, and workshops.'
    ]
  },
  {
    organization: 'Falah',
    role: 'Core member of BloodLine Committee',
    dateRange: '2021 – 2022',
    achievements: [
      'A student-run social welfare organization that helps underprivileged patients with their needs.',
      'Assisted 200+ underprivileged patients with medications, diagnostic tests and consultations, and streamlined donation tracking and auditing processes, ensuring transparency and accountability.',
      'Organized workshops for awareness that later led to the formation of weekly blood donation camps.'
    ]
  },
  {
    organization: '#Students_Against_COVID',
    role: 'Design Core Committee Member',
    dateRange: '2019',
    achievements: [
      'Volunteered in an international student group to raise awareness about the global COVID pandemic.',
      'Contributed to the development of a website that showcased the work of the organisation.',
      'Created infographics and curated social media posts with critical information that reached a global audience.'
    ]
  }
];

// Community service data
export const COMMUNITY_DATA = [
  {
    organization: 'Robinhood Army',
    role: 'Volunteer',
    dateRange: '2021 – 2024',
    achievements: [
      'Volunteered in an international non-governmental organization with a mandate to reduce global hunger.',
      'Facilitated the distribution of over 10,000 food packets to underprivileged families during the COVID-19 pandemic.',
      'Maintained a data repository ensuring accuracy and accountability for efficient food distribution.'
    ]
  },
  {
    organization: 'Thatta Flood Medical Camps',
    role: 'Volunteer',
    dateRange: '2022',
    achievements: [
      'Participated in university-organized medical camps for flood victims in Thatta, Pakistan.',
      'Treated over 500 patients, prescribed medications, and provided education regarding the prevention of malaria, dengue and other water-borne diseases.'
    ]
  },
  {
    organization: 'Karachi Down Syndrome Program Carnival',
    role: 'Volunteer',
    dateRange: '2020 – 2021',
    achievements: [
      'Organized an annual carnival that creates opportunities for kids with down syndrome to learn and have fun.',
      'Managed recreational activities for 500 children with Down Syndrome, providing engaging activities and support and received positive feedback from 95% of participating families.'
    ]
  },
  {
    organization: 'Bone Marrow Transplant Unit Kindness Crew',
    role: 'Volunteer',
    dateRange: '2019',
    achievements: [
      'A student-led society at the university that provides companionship to the immunocompromised kids.',
      'Helped organise the interaction between students and children and facilitated virtual engagement through Zoom sessions during the pandemic, which enhanced the children\'s mental well-being and reduced their isolation.'
    ]
  }
];

// Skills data
export const SKILLS_DATA = 'Data Analysis using STATA and R | Data Visualization | Manuscript Writing | Graphic Design | Web Development';

// Form submission endpoint
export const FORM_ENDPOINT = 'https://formspree.io/f/mvgrqylb'; 
