// ============================================================
// VHSS DATA LAYER - All dynamic data managed via localStorage
// ============================================================

const ADMIN_PASSWORD = "vhss@admin2025";

const DEFAULT_DATA = {
  siteInfo: {
    name: "Vivekananda Higher Secondary +2 Junior Science College",
    shortName: "VHSS",
    tagline: "Build your life with the ideals and inspiration of Swamiji",
    taglineOdia: "ସ୍ୱାମିଜୀଙ୍କ ଆଦର୍ଶ ଓ ପ୍ରେରଣାରେ ଜୀବନ ଗଠନ କରନ୍ତୁ",
    address: "Main Road, Malkangiri, Odisha - 764048",
    phones: ["7684035626", "9937448007", "7978745737", "7205037870", "7656888626"],
    email: "info@vhssmalkangiri.edu.in",
    founded: "2005",
    type: "Residential Junior College",
    affiliation: "CHSE Odisha"
  },

  stats: {
    students: "1800+",
    faculty: "40+",
    passRate: "97%",
    experience: "20+ Yrs",
    streams: "4"
  },

  courses: [
    {
      id: 1,
      stream: "Science (PCM)",
      code: "PCM",
      icon: "⚗️",
      color: "#0a1f5c",
      subjects: ["Physics", "Chemistry", "Mathematics", "English", "MIL (Odia)"],
      duration: "2 Years (+2)",
      seats: 60,
      fees: "₹15,000/year",
      eligibility: "Class 10 pass with minimum 50% marks in Science & Mathematics",
      description: "Designed for students aspiring to enter engineering, technology, and applied sciences. Strong foundation in Physics, Chemistry and Mathematics prepares students for JEE and other competitive exams.",
      career: ["Engineering (JEE)", "Architecture", "Technology", "Defence Services", "Research"]
    },
    {
      id: 2,
      stream: "Science (PCB)",
      code: "PCB",
      icon: "🔬",
      color: "#1a6b3a",
      subjects: ["Physics", "Chemistry", "Biology", "English", "MIL (Odia)"],
      duration: "2 Years (+2)",
      seats: 60,
      fees: "₹15,000/year",
      eligibility: "Class 10 pass with minimum 50% marks in Science",
      description: "Tailored for students targeting medical and life science careers. In-depth study of Biology, Chemistry and Physics with NEET preparation support.",
      career: ["Medicine (NEET/MBBS)", "Nursing", "Pharmacy", "Biotechnology", "Veterinary"]
    },
    {
      id: 3,
      stream: "Commerce",
      code: "COM",
      icon: "📊",
      color: "#7d4e00",
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / Statistics", "English", "MIL (Odia)"],
      duration: "2 Years (+2)",
      seats: 60,
      fees: "₹12,000/year",
      eligibility: "Class 10 pass with minimum 45% marks",
      description: "Prepares students for careers in business, finance, banking and management. Covers core commerce subjects with practical exposure to accounts and economics.",
      career: ["CA / CMA / CS", "Banking & Finance", "Business Management", "MBA", "Government Services"]
    },
    {
      id: 4,
      stream: "Arts / Humanities",
      code: "ARTS",
      icon: "📚",
      color: "#6b1a1a",
      subjects: ["History", "Political Science", "Economics", "Geography / Sociology / Psychology", "English", "MIL (Odia)"],
      duration: "2 Years (+2)",
      seats: 60,
      fees: "₹10,000/year",
      eligibility: "Class 10 pass with minimum 40% marks",
      description: "Broad-based program covering social sciences, languages and humanities. Opens doors to civil services, law, journalism and social work careers.",
      career: ["Civil Services (IAS/OAS/IPS)", "Law (CLAT)", "Journalism & Media", "Teaching / Education", "Social Work"]
    }
  ],

  toppers: [
    {
      id: 1,
      name: "Anjali Pradhan",
      year: "2024",
      stream: "Science (PCB)",
      percentage: "97.8%",
      marks: "489/500",
      rank: "District Topper",
      photo: null
    },
    {
      id: 2,
      name: "Bikash Kumar Nayak",
      year: "2024",
      stream: "Science (PCM)",
      percentage: "96.4%",
      marks: "482/500",
      rank: "2nd in College",
      photo: null
    },
    {
      id: 3,
      name: "Smruti Ranjan Sahu",
      year: "2023",
      stream: "Commerce",
      percentage: "98.2%",
      marks: "491/500",
      rank: "State Rank 12",
      photo: null
    },
    {
      id: 4,
      name: "Puja Pattnaik",
      year: "2023",
      stream: "Arts",
      percentage: "95.6%",
      marks: "478/500",
      rank: "District Topper",
      photo: null
    },
    {
      id: 5,
      name: "Rahul Behera",
      year: "2022",
      stream: "Science (PCM)",
      percentage: "97.2%",
      marks: "486/500",
      rank: "College Topper",
      photo: null
    }
  ],

  faculty: [
    { id: 1, name: "Dr. Sarat Kumar Panda", designation: "Principal", department: "Administration", qualification: "Ph.D in Physics", experience: "28 Years", photo: null },
    { id: 2, name: "Mr. Bijay Kumar Nanda", designation: "Sr. Lecturer", department: "Physics", qualification: "M.Sc Physics, B.Ed", experience: "20 Years", photo: null },
    { id: 3, name: "Mrs. Sunita Mohanty", designation: "Sr. Lecturer", department: "Chemistry", qualification: "M.Sc Chemistry", experience: "17 Years", photo: null },
    { id: 4, name: "Mr. Debasish Mishra", designation: "Lecturer", department: "Mathematics", qualification: "M.Sc Mathematics", experience: "13 Years", photo: null },
    { id: 5, name: "Mrs. Lipsa Rath", designation: "Lecturer", department: "Biology", qualification: "M.Sc Zoology, B.Ed", experience: "11 Years", photo: null },
    { id: 6, name: "Mr. Santosh Kumar Sahu", designation: "Lecturer", department: "Commerce", qualification: "M.Com, MBA", experience: "9 Years", photo: null },
    { id: 7, name: "Mrs. Pratima Dash", designation: "Lecturer", department: "Economics", qualification: "M.A Economics", experience: "10 Years", photo: null },
    { id: 8, name: "Mr. Rabi Narayan Behera", designation: "Lecturer", department: "Arts / Political Sc.", qualification: "M.A Political Science", experience: "12 Years", photo: null }
  ],

  gallery: [],

  news: [
    { id: 1, title: "Admission Open 2025-26", date: "2025-04-01", type: "Admission", content: "Applications are now open for Class 11 admissions for all streams — Science (PCM/PCB), Commerce and Arts. Residential facility available. Contact: 7684035626." },
    { id: 2, title: "CHSE Result 2025 — 97% Pass Rate", date: "2025-05-22", type: "Result", content: "Vivekananda HSS achieves outstanding 97% pass rate in CHSE Odisha 2025. 18 students scored above 90%. Our students made Malkangiri proud!" },
    { id: 3, title: "Annual Cultural Fest — Vivek Utsav 2025", date: "2025-01-26", type: "Event", content: "VHSS Annual Cultural Festival 'Vivek Utsav' held on Republic Day. Students showcased talents in dance, drama, music and debate." },
    { id: 4, title: "JEE & NEET Coaching Now Available", date: "2025-03-10", type: "Academic", content: "Special coaching classes for JEE Main and NEET now integrated into regular curriculum for PCM and PCB students." }
  ],

  admissions: {
    process: [
      { step: "1", title: "Fill Application Form", desc: "Collect form from college office or fill online. Submit with Class 10 marksheet, TC and 2 passport photos." },
      { step: "2", title: "Document Verification", desc: "Original documents verified at college office. Caste certificate and residential proof required for reserved categories." },
      { step: "3", title: "Merit List Publication", desc: "Merit list published based on Class 10 percentage. Check notice board or college website." },
      { step: "4", title: "Fee Payment & Enrollment", desc: "Pay tuition and hostel fees. Collect ID card and join orientation program." }
    ],
    documents: ["Class 10 Marksheet (Original + Photocopy)", "Transfer Certificate (TC)", "Conduct Certificate", "Caste Certificate (if applicable)", "Residential Certificate", "2 Passport Size Photos", "Aadhaar Card"],
    lastDate: "30th June 2025",
    startDate: "1st July 2025"
  },

  placements: {
    stats: { placed: "88%", avgPackage: "3.2 LPA", topPackage: "7.5 LPA", companies: "35+" },
    higherStudies: ["IIT / NIT (via JEE)", "AIIMS / Medical Colleges (via NEET)", "State Universities", "Law Schools (CLAT)", "Management Colleges"],
    recruiters: ["TCS", "Infosys", "Wipro", "HCL", "HDFC Bank", "SBI", "ONGC", "Indian Army / Navy", "Odisha Government Services"]
  }
};

// ---- Core Functions ----

function initData() {
  Object.keys(DEFAULT_DATA).forEach(key => {
    if (!localStorage.getItem(`vhss_${key}`)) {
      localStorage.setItem(`vhss_${key}`, JSON.stringify(DEFAULT_DATA[key]));
    }
  });
}

function getData(key) {
  const raw = localStorage.getItem(`vhss_${key}`);
  return raw ? JSON.parse(raw) : DEFAULT_DATA[key];
}

function setData(key, value) {
  localStorage.setItem(`vhss_${key}`, JSON.stringify(value));
}

function resetData(key) {
  localStorage.setItem(`vhss_${key}`, JSON.stringify(DEFAULT_DATA[key]));
}

// ---- Admin Auth ----

function isAdminLoggedIn() {
  return sessionStorage.getItem('vhss_admin') === 'true';
}

function adminLogin(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem('vhss_admin', 'true');
    return true;
  }
  return false;
}

function adminLogout() {
  sessionStorage.removeItem('vhss_admin');
  window.location.href = '../admin/login.html';
}

function requireAdmin() {
  if (!isAdminLoggedIn()) {
    window.location.href = 'login.html';
  }
}

// ---- Utilities ----

function genId() { return Date.now(); }

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.innerHTML = `${type === 'success' ? '✅' : '❌'} ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// Init on load
initData();
