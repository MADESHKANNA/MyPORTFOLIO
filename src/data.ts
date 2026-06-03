import { Project, Experience, Education, Certification, Achievement } from './types';

export const portfolioOwner = {
  name: 'Madesh Kanna S',
  title: 'Full Stack Developer & AI/ML Engineer',
  tagline: 'Building innovative solutions at the intersection of web development, data science, and cloud technologies.',
  about: 'I am a passionate Computer Science and Engineering student with an enthusiasm for learning and developing new technologies. With a CGPA of 8.76, I specialize in full-stack applications and data-driven predictive modeling. My internships in Full Stack Development and Data Science have equipped me with high proficiency in React, Node.js, Python, TensorFlow, and cloud architectures.',
  email: 'madeshkanna2005@gmail.com',
  phone: '919345530354',
  github: 'MADESHKANNA',
  linkedin: 'madesh-kanna-s',
  instagram: 's_madesh_kanna',
  reddit: 'Beginning-Yak-5089',
  cgpa: '8.76',
};

export const experiences: Experience[] = [
  {
    company: 'BYTEXL',
    role: 'Full Stack Development Intern',
    duration: '11/2025 - 12/2025',
    type: 'Full Stack',
    description: 'Focused on full-stack web architectures, API design, responsive frontends, and database synchronization.',
    bullets: [
      'Gained hands-on experience in full-stack development, including front-end technologies (HTML, CSS, JavaScript) and back-end frameworks (Node.js, Django, Flask), along with database management and server deployment.',
      'Developed and maintained an e-commerce website, integrating responsive user interfaces, RESTful APIs, and secure database operations to ensure smooth, scalable, and efficient performance.',
      'Optimized backend routes to enhance response times and structured relational/non-relational database queries.'
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Django', 'Flask', 'SQL', 'MongoDB', 'Git']
  },
  {
    company: 'POSTULATE INFO TECH',
    role: 'Data Science Intern',
    duration: '06/2025 - 07/2025',
    type: 'Data Science',
    description: 'Internship focused on predictive analytics, mathematical modeling, data mining, and feature engineering.',
    bullets: [
      'Gained hands-on experience in data analysis, preprocessing, statistical inference, and predictive modeling using Python.',
      'Worked extensively on Kaggle ML projects, establishing cross-validation pipelines and tuning hyper-parameters.',
      'Supermarket Sales Prediction – Forecasted store-level sales trends using advanced regression models to improve stock forecasting.',
      'Medical Insurance Price Prediction – Calculated optimal insurance premiums and risk factors after cleaning, transforming, and modeling large patient billing datasets.'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Kaggle']
  }
];

export const educationList: Education[] = [
  {
    institution: 'SNS College of Technology',
    degree: 'B.E. Computer Science and Engineering',
    duration: '2023 - 2027',
    location: 'India',
    grade: '8.76 CGPA (Active)',
    bullets: [
      'Focusing on Computer Network architectures, Database Management Systems, Theory of Computation, and Machine Learning.',
      'Active participant in technical symposiums, hackathons, and paper presentations representing the Department.'
    ]
  },
  {
    institution: 'T. V. Sekharan Memorial Matric. Hr. Sec. School',
    degree: 'SSLC & HSC (Secondary School Leaving Certificate & Higher Secondary Certificate)',
    duration: 'Completed in 2023',
    location: 'India',
    bullets: [
      'Specialized in Computer Science, Mathematics, Physics, and Chemistry.',
      'Subject topper in Maths, Physics, Chemistry, and Computer Science.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'medtrack',
    title: 'MedTrack',
    description: 'A real-time hospital bed monitoring and AI-driven occupancy reporting system built to enhance healthcare delivery.',
    bullets: [
      'Developed a real-time hospital bed monitoring and reporting system using React, Tailwind CSS, and Google Gemini AI.',
      'Integrated AI models to analyze occupancy patterns, generate automated medical facility reports, and optimize critical resource management.',
      'Designed a sleek, responsive dashboard showing critical department analytics, occupancy percentages, and bed availability.'
    ],
    githubUrl: 'https://github.com/MADESHKANNA/MEDTRACK',
    tech: ['React', 'Tailwind CSS', 'Google Gemini AI', 'Motion', 'JavaScript', 'Lucide Icons'],
    category: 'Full Stack',
    features: ['Real-time Monitoring', 'Occupancy Diagnostics', 'Automated AI Reports', 'Responsive Dashboard']
  },
  {
    id: 'diagnostic-system',
    title: 'AI-Based Disease Diagnostic System',
    description: 'An AI-powered diagnostic application predicting probable ailments based on symptom profiles with real-time feedback.',
    bullets: [
      'Developed an AI-based disease diagnostic system using Python, TensorFlow, and Keras to predict conditions based on symptomatic inputs.',
      'Built a highly interactive client interface using Streamlit, providing real-time diagnostic outputs, actionable wellness insights, and confidence ratings.',
      'Preprocessed hundreds of symptom-risk datasets, conducting categorical encoding and tuning neural network parameters for maximum accuracy.'
    ],
    githubUrl: 'https://github.com/MADESHKANNA/Disease-diagnosis-and-Medical-Report-Generator-',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'NumPy', 'Pandas', 'scikit-learn', 'Keras'],
    category: 'AI / Data Science',
    features: ['Neural Symptom Analysis', 'Confidence Score Projection', 'Interactive Streamlit UI', 'Automated Medical Guides']
  }
];

export const certifications: Certification[] = [
  {
    title: 'Human Computer Interaction (HCI)',
    issuer: 'NPTEL Elite + Gold Certification',
    score: '91%',
    type: 'nptel',
    description: 'Ranked in top percentiles. Earned elite gold standing for outstanding knowledge of user-centric designs, heuristics evaluation, cognitive walk-throughs, and wireframing practices.'
  },
  {
    title: 'Business Intelligence & Analytics',
    issuer: 'NPTEL Elite + Silver Certification',
    score: '77%',
    type: 'nptel',
    description: 'Certified in enterprise metrics, data cubes, star schemas, interactive dashboards, predictive querying, and analytical charts.'
  },
  {
    title: 'Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft Global Certification',
    type: 'azure',
    description: 'Hands-on validation of cloud-native storage concepts, relational/non-relational database architectures, data pipelines, and analytics options in Microsoft Azure.'
  },
  {
    title: 'PrepInsta Professional Development',
    issuer: 'PrepInsta Placement Certification',
    type: 'other',
    description: 'Successfully completed 8 intense professional, aptitude, and code training courses, strengthening algorithm performance and data-structure foundations.'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Subject Topper in School',
    description: 'Achieved outstanding academic success, scoring highest in Mathematics, Physics, Chemistry, and Computer Science during matriculation.'
  },
  {
    title: 'Hackathon & Symposium Excellence',
    description: 'Active participant and prize winner in college hackathons, developing prototypes tackling real-world healthcare and social obstacles.'
  },
  {
    title: 'Technical Paper Presentation',
    description: 'Actively presented research ideas and solutions in front of academic review panels, exploring modern AI paradigms.'
  }
];

export const skillsData = {
  languages: [
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '90%' },
    { name: 'JavaScript', level: '88%' },
    { name: 'TypeScript', level: '80%' },
    { name: 'Python', level: '88%' },
    { name: 'Java', level: '75%' },
    { name: 'C', level: '70%' },
    { name: 'C++', level: '72%' }
  ],
  frameworks: ['React', 'Node.js', 'Django', 'Flask', 'Express', 'Tailwind CSS'],
  databases: ['MySQL', 'MariaDB', 'MongoDB', 'SQL'],
  dataScience: ['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'mlflow', 'Seaborn', 'SciPy'],
  cloudTools: ['Azure', 'Netlify', 'Render', 'Git', 'GitHub', 'Kaggle'],
  softSkills: [
    'Verbal & Written Communication',
    'Teamwork & Collaboration',
    'Leadership',
    'Time Management',
    'Problem Solving'
  ]
};
