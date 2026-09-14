/**
 * Danhiko Industrial Training College
 * Exam Registration System - script.js
 * Pure Vanilla JavaScript & Browser LocalStorage
 */

// ==========================================================================
// 1. DATA DEFINITIONS & INITIAL STATE
// ==========================================================================

const INITIAL_SUBJECTS = [
  // =========================================================================
  // 1. INFORMATION TECHNOLOGY (ICT)
  // =========================================================================
  // Semester 1
  { id: "SUB_ICT101", code: "ICT101", name: "Safety, Health, Environment and Quality (SHEQ)", course: "Information Technology (ICT)", fee: 15.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ICT102", code: "ICT102", name: "National and Strategic Studies", course: "Information Technology (ICT)", fee: 15.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ICT103", code: "ICT103", name: "Workplace Communication Skills", course: "Information Technology (ICT)", fee: 12.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ICT104", code: "ICT104", name: "Programming Concepts & Python Logic", course: "Information Technology (ICT)", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT201", code: "ICT201", name: "Skills Proficiency & Applied Computing", course: "Information Technology (ICT)", fee: 20.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },

  // Semester 2
  { id: "SUB_ICT202", code: "ICT202", name: "Database Concepts & Relational Systems", course: "Information Technology (ICT)", fee: 20.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT203", code: "ICT203", name: "Computer Networking & Local Area Architectures", course: "Information Technology (ICT)", fee: 18.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT204", code: "ICT204", name: "Computer Security & Cyber Law Ethics", course: "Information Technology (ICT)", fee: 15.00, semester: 2, elective: false, assessmentType: "Written & Theory Examination" },

  // Semester 3
  { id: "SUB_ICT301_SE", code: "ICT301", name: "Software Engineering Methodologies", course: "Information Technology (ICT)", fee: 22.00, semester: 3, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ICT301_OOP", code: "ICT302", name: "Object Oriented Programming (Java/C++)", course: "Information Technology (ICT)", fee: 22.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT302", code: "ICT303", name: "Computer Hardware Maintenance & Diagnostics", course: "Information Technology (ICT)", fee: 20.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT303", code: "ICT304", name: "Enterprise Database Administration (SQL)", course: "Information Technology (ICT)", fee: 22.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT304", code: "ICT305", name: "Network Infrastructure & Cisco Routing", course: "Information Technology (ICT)", fee: 20.00, semester: 3, elective: true, assessmentType: "Practical Workshop Assessment" },

  // Semester 4
  { id: "SUB_ICT401", code: "ICT401", name: "Web & Mobile Cloud Application Development", course: "Information Technology (ICT)", fee: 25.00, semester: 4, elective: true, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT402", code: "ICT402", name: "Operating System Administration (Linux/Server)", course: "Information Technology (ICT)", fee: 25.00, semester: 4, elective: true, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ICT403", code: "ICT403", name: "IT Capstone Research & Software Defense", course: "Information Technology (ICT)", fee: 24.00, semester: 4, elective: false, assessmentType: "Psychomotor & Industrial Project" },
  { id: "SUB_ICT404", code: "ICT404", name: "Data Structures, Algorithms & Systems Analysis", course: "Information Technology (ICT)", fee: 22.00, semester: 4, elective: false, assessmentType: "Written & Theory Examination" },

  // =========================================================================
  // 2. CLOTHING DESIGN & TEXTILE TECHNOLOGY
  // =========================================================================
  // Semester 1
  { id: "SUB_CDTT101", code: "CDTT101", name: "Textile Science & Fiber Identification", course: "Clothing Design & Textile Technology", fee: 16.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_CDTT102", code: "CDTT102", name: "Basic Pattern Drafting & Garment Construction", course: "Clothing Design & Textile Technology", fee: 22.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT103", code: "CDTT103", name: "Fashion Sketching & Freehand Figure Drawing", course: "Clothing Design & Textile Technology", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT104", code: "CDTT104", name: "Industrial Sewing Machinery Maintenance", course: "Clothing Design & Textile Technology", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },

  // Semester 2
  { id: "SUB_CDTT201", code: "CDTT201", name: "Advanced Pattern Grading & Bespoke Fit", course: "Clothing Design & Textile Technology", fee: 24.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT202", code: "CDTT202", name: "Haute Couture Tailoring & Finishings", course: "Clothing Design & Textile Technology", fee: 25.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT203", code: "CDTT203", name: "Textile Dyeing, Batik & Screen Printing", course: "Clothing Design & Textile Technology", fee: 20.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT204", code: "CDTT204", name: "Indigenous African Heritage Textile Art", course: "Clothing Design & Textile Technology", fee: 15.00, semester: 2, elective: true, assessmentType: "Portfolio & Defense" },

  // Semester 3
  { id: "SUB_CDTT301", code: "CDTT301", name: "Computer-Aided Fashion Design (CAD Pattern)", course: "Clothing Design & Textile Technology", fee: 24.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT302", code: "CDTT302", name: "Production Planning & Garment Quality Control", course: "Clothing Design & Textile Technology", fee: 20.00, semester: 3, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_CDTT303", code: "CDTT303", name: "Formal Menswear & Tailored Jackets", course: "Clothing Design & Textile Technology", fee: 26.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT304", code: "CDTT304", name: "Fashion Entrepreneurship & Production Costing", course: "Clothing Design & Textile Technology", fee: 18.00, semester: 3, elective: true, assessmentType: "Written & Theory Examination" },

  // Semester 4
  { id: "SUB_CDTT401", code: "CDTT401", name: "Fashion Runway Collection & Portfolio Exhibition", course: "Clothing Design & Textile Technology", fee: 28.00, semester: 4, elective: false, assessmentType: "Psychomotor & Industrial Project" },
  { id: "SUB_CDTT402", code: "CDTT402", name: "Bridal, Evening Wear & Draping Techniques", course: "Clothing Design & Textile Technology", fee: 26.00, semester: 4, elective: true, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_CDTT403", code: "CDTT403", name: "Industrial Attachment Apprenticeship Portfolio", course: "Clothing Design & Textile Technology", fee: 22.00, semester: 4, elective: false, assessmentType: "Portfolio & Defense" },

  // =========================================================================
  // 3. ELECTRICAL INSTALLATION, MAINTENANCE & REPAIR
  // =========================================================================
  // Semester 1
  { id: "SUB_ELEC101", code: "ELEC101", name: "Applied Electrical Principles & Circuit Science", course: "Electrical Installation, Maintenance & Repair", fee: 18.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ELEC102", code: "ELEC102", name: "Workshop Practice & High-Voltage Safety Regs", course: "Electrical Installation, Maintenance & Repair", fee: 20.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC103", code: "ELEC103", name: "Electrical Schematics & Engineering Drawing", course: "Electrical Installation, Maintenance & Repair", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC104", code: "ELEC104", name: "Domestic Surface & Flush Wiring Installations", course: "Electrical Installation, Maintenance & Repair", fee: 24.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },

  // Semester 2
  { id: "SUB_ELEC201", code: "ELEC201", name: "Single-Phase & Three-Phase AC Power Circuits", course: "Electrical Installation, Maintenance & Repair", fee: 20.00, semester: 2, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ELEC202", code: "ELEC202", name: "Electrical Testing, Meters & Circuit Protection", course: "Electrical Installation, Maintenance & Repair", fee: 22.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC203", code: "ELEC203", name: "Commercial Trunking, Conduit & Cable Trays", course: "Electrical Installation, Maintenance & Repair", fee: 22.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC204", code: "ELEC204", name: "Solar PV Design, Inverters & Battery Storage", course: "Electrical Installation, Maintenance & Repair", fee: 25.00, semester: 2, elective: true, assessmentType: "Practical Workshop Assessment" },

  // Semester 3
  { id: "SUB_ELEC301", code: "ELEC301", name: "Industrial Electric Motor Starters & Control Gear", course: "Electrical Installation, Maintenance & Repair", fee: 25.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC302", code: "ELEC302", name: "PLC Programming & Industrial Automation", course: "Electrical Installation, Maintenance & Repair", fee: 26.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC303", code: "ELEC303", name: "Power Distribution Substation Earthing & Lightning", course: "Electrical Installation, Maintenance & Repair", fee: 22.00, semester: 3, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ELEC304", code: "ELEC304", name: "Solid-State Power Electronics & Variable Speed Drives", course: "Electrical Installation, Maintenance & Repair", fee: 24.00, semester: 3, elective: true, assessmentType: "Practical Workshop Assessment" },

  // Semester 4
  { id: "SUB_ELEC401", code: "ELEC401", name: "Industrial Diagnostic Troubleshooting & Plant Overhaul", course: "Electrical Installation, Maintenance & Repair", fee: 25.00, semester: 4, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_ELEC402", code: "ELEC402", name: "Mini-Grid & Renewable Hybrid Power Engineering", course: "Electrical Installation, Maintenance & Repair", fee: 24.00, semester: 4, elective: true, assessmentType: "Written & Theory Examination" },
  { id: "SUB_ELEC403", code: "ELEC403", name: "Industrial Electrical Trade Capstone & Viva Voce", course: "Electrical Installation, Maintenance & Repair", fee: 28.00, semester: 4, elective: false, assessmentType: "Psychomotor & Industrial Project" },

  // =========================================================================
  // 4. WOOD TECHNOLOGY / FURNITURE & CABINET MAKING
  // =========================================================================
  // Semester 1
  { id: "SUB_WOOD101", code: "WOOD101", name: "Indigenous & Commercial Timber Technology", course: "Wood Technology / Furniture & Cabinet Making", fee: 16.00, semester: 1, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_WOOD102", code: "WOOD102", name: "Bench Hand Tools & Mortise-Tenon Joints", course: "Wood Technology / Furniture & Cabinet Making", fee: 22.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD103", code: "WOOD103", name: "Furniture Technical Drawing & Isometric Views", course: "Wood Technology / Furniture & Cabinet Making", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD104", code: "WOOD104", name: "Woodshop Health, Safety & Planer Machine Setup", course: "Wood Technology / Furniture & Cabinet Making", fee: 18.00, semester: 1, elective: false, assessmentType: "Practical Workshop Assessment" },

  // Semester 2
  { id: "SUB_WOOD201", code: "WOOD201", name: "Architectural Joinery, Frames, Doors & Casements", course: "Wood Technology / Furniture & Cabinet Making", fee: 24.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD202", code: "WOOD202", name: "Modern Cabinet Making & Carcase Construction", course: "Wood Technology / Furniture & Cabinet Making", fee: 25.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD203", code: "WOOD203", name: "Wood Finishing, Staining, Lacquers & Spraying", course: "Wood Technology / Furniture & Cabinet Making", fee: 20.00, semester: 2, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD204", code: "WOOD204", name: "Circular Saw, Band Saw & Spindle Moulding", course: "Wood Technology / Furniture & Cabinet Making", fee: 22.00, semester: 2, elective: true, assessmentType: "Practical Workshop Assessment" },

  // Semester 3
  { id: "SUB_WOOD301", code: "WOOD301", name: "Computer-Aided Design (CAD) & CNC Router Machining", course: "Wood Technology / Furniture & Cabinet Making", fee: 25.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD302", code: "WOOD302", name: "Antique Furniture Restoration & Heritage Carving", course: "Wood Technology / Furniture & Cabinet Making", fee: 22.00, semester: 3, elective: false, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD303", code: "WOOD303", name: "Timber Bill of Quantities & Workshop Management", course: "Wood Technology / Furniture & Cabinet Making", fee: 18.00, semester: 3, elective: false, assessmentType: "Written & Theory Examination" },
  { id: "SUB_WOOD304", code: "WOOD304", name: "Deep Buttoning Upholstery & Cushion Craft", course: "Wood Technology / Furniture & Cabinet Making", fee: 22.00, semester: 3, elective: true, assessmentType: "Practical Workshop Assessment" },

  // Semester 4
  { id: "SUB_WOOD401", code: "WOOD401", name: "Heritage Hardwood Masterpiece Construction", course: "Wood Technology / Furniture & Cabinet Making", fee: 28.00, semester: 4, elective: false, assessmentType: "Psychomotor & Industrial Project" },
  { id: "SUB_WOOD402", code: "WOOD402", name: "Production Jigs & Modular Furniture Manufacturing", course: "Wood Technology / Furniture & Cabinet Making", fee: 24.00, semester: 4, elective: true, assessmentType: "Practical Workshop Assessment" },
  { id: "SUB_WOOD403", code: "WOOD403", name: "Final Guild Exhibition & Psychomotor Defense", course: "Wood Technology / Furniture & Cabinet Making", fee: 25.00, semester: 4, elective: false, assessmentType: "Portfolio & Defense" }
];

const SAMPLE_STUDENTS = [
  { id: "D001", name: "John Doe", course: "Information Technology (ICT)", semester: 1, email: "john.doe@danhiko.ac.zw", accommodation: "Standard (None Required)" },
  { id: "D002", name: "Mary Smith", course: "Information Technology (ICT)", semester: 2, email: "mary.smith@danhiko.ac.zw", accommodation: "Large Print Assessment Papers" },
  { id: "D003", name: "Peter Banda", course: "Information Technology (ICT)", semester: 3, email: "peter.banda@danhiko.ac.zw", accommodation: "Standard (None Required)" },
  { id: "D004", name: "Anna Moyo", course: "Information Technology (ICT)", semester: 4, email: "anna.moyo@danhiko.ac.zw", accommodation: "Wheelchair Accessible Workstation" },
  { id: "D005", name: "Tatenda Chiweshe", course: "Clothing Design & Textile Technology", semester: 1, email: "tatenda.chiweshe@danhiko.ac.zw", accommodation: "Sign Language Interpreter Support" },
  { id: "D006", name: "Rumbidzai Ndlovu", course: "Clothing Design & Textile Technology", semester: 2, email: "rumbidzai.ndlovu@danhiko.ac.zw", accommodation: "Standard (None Required)" },
  { id: "D007", name: "Farai Marange", course: "Electrical Installation, Maintenance & Repair", semester: 1, email: "farai.marange@danhiko.ac.zw", accommodation: "Standard (None Required)" },
  { id: "D008", name: "Blessing Mutasa", course: "Electrical Installation, Maintenance & Repair", semester: 3, email: "blessing.mutasa@danhiko.ac.zw", accommodation: "25% Extra Examination Time" },
  { id: "D009", name: "Tendai Sithole", course: "Wood Technology / Furniture & Cabinet Making", semester: 1, email: "tendai.sithole@danhiko.ac.zw", accommodation: "Standard (None Required)" },
  { id: "D010", name: "Kudzai Dube", course: "Wood Technology / Furniture & Cabinet Making", semester: 2, email: "kudzai.dube@danhiko.ac.zw", accommodation: "Wheelchair Accessible Workstation" }
];

let PROCESSING_FEE = 5.00;
let LATE_SURCHARGE = 10.00;
let EXAMINATION_SESSION = "November 2026 National Examinations";

// Application In-Memory State
let appState = {
  students: [],
  subjects: [],
  registrations: [],
  deadline: null,
  pendingConfirmation: null,
  isAdmin: true,
  processingFee: 5.00,
  lateFee: 10.00,
  sessionName: "November 2026 National Examinations",
  auditTrail: []
};

let countdownTimerInterval = null;

// ==========================================================================
// 2. STORAGE & DATA MANAGEMENT FUNCTIONS
// ==========================================================================

/**
 * Load all application data from LocalStorage or initialize defaults
 */
function loadData() {
  try {
    // 1. Load Students
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      const parsed = JSON.parse(storedStudents);
      // Migrate if students are fewer than sample or lack other courses
      if (!parsed.some(s => s.id === "D005")) {
        appState.students = [...SAMPLE_STUDENTS];
        localStorage.setItem("students", JSON.stringify(appState.students));
      } else {
        appState.students = parsed;
      }
    } else {
      appState.students = [...SAMPLE_STUDENTS];
      localStorage.setItem("students", JSON.stringify(appState.students));
    }

    // 2. Load Subjects (check if migration to full multi-course catalog is needed)
    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      const parsedSubs = JSON.parse(storedSubjects);
      // If old version only had ICT (less than 25 subjects or lacks CDTT)
      if (parsedSubs.length < 25 || !parsedSubs.some(s => s.code.startsWith("CDTT"))) {
        appState.subjects = [...INITIAL_SUBJECTS];
        localStorage.setItem("subjects", JSON.stringify(appState.subjects));
      } else {
        appState.subjects = parsedSubs;
      }
    } else {
      appState.subjects = [...INITIAL_SUBJECTS];
      localStorage.setItem("subjects", JSON.stringify(appState.subjects));
    }

    // 3. Load Registrations
    const storedRegistrations = localStorage.getItem("registrations");
    if (storedRegistrations) {
      appState.registrations = JSON.parse(storedRegistrations);
    } else {
      // Create initial sample confirmed registrations across courses
      const sampleRegDate = new Date();
      sampleRegDate.setDate(sampleRegDate.getDate() - 2);
      const initialReg1 = {
        registrationId: "REG20260912101500",
        studentId: "D001",
        studentName: "John Doe",
        course: "Information Technology (ICT)",
        semester: 1,
        email: "john.doe@danhiko.ac.zw",
        accommodation: "Standard (None Required)",
        subjects: [
          { code: "ICT101", name: "Safety, Health, Environment and Quality (SHEQ)", fee: 15.00 },
          { code: "ICT104", name: "Programming Concepts & Python Logic", fee: 18.00 },
          { code: "ICT201", name: "Skills Proficiency & Applied Computing", fee: 20.00 }
        ],
        subjectTotal: 53.00,
        processingFee: 5.00,
        totalFee: 58.00,
        date: sampleRegDate.toISOString().split("T")[0],
        status: "Confirmed",
        receiptNumber: "REC-2026-0001"
      };

      const initialReg2 = {
        registrationId: "REG20260913093000",
        studentId: "D005",
        studentName: "Tatenda Chiweshe",
        course: "Clothing Design & Textile Technology",
        semester: 1,
        email: "tatenda.chiweshe@danhiko.ac.zw",
        accommodation: "Sign Language Interpreter Support",
        subjects: [
          { code: "CDTT101", name: "Textile Science & Fiber Identification", fee: 16.00 },
          { code: "CDTT102", name: "Basic Pattern Drafting & Garment Construction", fee: 22.00 },
          { code: "CDTT103", name: "Fashion Sketching & Freehand Figure Drawing", fee: 18.00 }
        ],
        subjectTotal: 56.00,
        processingFee: 5.00,
        totalFee: 61.00,
        date: sampleRegDate.toISOString().split("T")[0],
        status: "Confirmed",
        receiptNumber: "REC-2026-0002"
      };

      appState.registrations = [initialReg1, initialReg2];
      localStorage.setItem("registrations", JSON.stringify(appState.registrations));
    }

    // 4. Load Deadline
    const storedDeadline = localStorage.getItem("deadline");
    if (storedDeadline) {
      appState.deadline = storedDeadline;
    } else {
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 14);
      defaultDate.setHours(23, 59, 0, 0);
      const isoString = defaultDate.toISOString().slice(0, 16);
      appState.deadline = isoString;
      localStorage.setItem("deadline", isoString);
    }

    // 5. Load Settings & Audit Trail
    const storedSettings = localStorage.getItem("adminSettings");
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);
      appState.processingFee = parsedSettings.processingFee ?? 5.00;
      appState.lateFee = parsedSettings.lateFee ?? 10.00;
      appState.sessionName = parsedSettings.sessionName ?? "November 2026 National Examinations";
      PROCESSING_FEE = appState.processingFee;
      LATE_SURCHARGE = appState.lateFee;
      EXAMINATION_SESSION = appState.sessionName;
    }

    const storedAudit = localStorage.getItem("auditTrail");
    if (storedAudit) {
      appState.auditTrail = JSON.parse(storedAudit);
    } else {
      appState.auditTrail = [
        {
          timestamp: new Date().toLocaleString(),
          action: "System Initialized",
          details: "Master curriculum database loaded for 4 vocational departments under Education 5.0."
        }
      ];
      localStorage.setItem("auditTrail", JSON.stringify(appState.auditTrail));
    }
  } catch (error) {
    console.error("Error loading data from LocalStorage:", error);
    showNotification("Error loading saved data. Resetting defaults.", "danger");
  }
}

/**
 * Save current application state to LocalStorage
 */
function saveData() {
  try {
    localStorage.setItem("students", JSON.stringify(appState.students));
    localStorage.setItem("subjects", JSON.stringify(appState.subjects));
    localStorage.setItem("registrations", JSON.stringify(appState.registrations));
    if (appState.deadline) {
      localStorage.setItem("deadline", appState.deadline);
    }
    localStorage.setItem("adminSettings", JSON.stringify({
      processingFee: appState.processingFee,
      lateFee: appState.lateFee,
      sessionName: appState.sessionName
    }));
    localStorage.setItem("auditTrail", JSON.stringify(appState.auditTrail));
  } catch (error) {
    console.error("Error saving data to LocalStorage:", error);
    showNotification("Error saving data to LocalStorage.", "danger");
  }
}

/**
 * Append entry to administrator audit log
 */
function logAudit(action, details) {
  const entry = {
    timestamp: new Date().toLocaleString(),
    action,
    details
  };
  appState.auditTrail.unshift(entry);
  if (appState.auditTrail.length > 50) appState.auditTrail.pop();
  try {
    localStorage.setItem("auditTrail", JSON.stringify(appState.auditTrail));
  } catch (e) {
    console.error(e);
  }
  renderAdminHub();
}

// ==========================================================================
// 3. STUDENT MANAGEMENT FUNCTIONS
// ==========================================================================

/**
 * Add a new student record
 */
function addStudent(studentObj) {
  if (!studentObj.id || !studentObj.name || !studentObj.course || !studentObj.semester || !studentObj.email) {
    showNotification("Please fill in all required student fields.", "warning");
    return false;
  }

  const exists = appState.students.some(s => s.id.toUpperCase() === studentObj.id.toUpperCase());
  if (exists) {
    showNotification(`Student ID '${studentObj.id.toUpperCase()}' already exists. IDs must be unique.`, "danger");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(studentObj.email)) {
    showNotification("Please provide a valid email address.", "warning");
    return false;
  }

  const newStudent = {
    id: studentObj.id.trim().toUpperCase(),
    name: studentObj.name.trim(),
    course: studentObj.course.trim(),
    semester: parseInt(studentObj.semester, 10),
    email: studentObj.email.trim().toLowerCase(),
    accommodation: studentObj.accommodation || "Standard (None Required)"
  };

  appState.students.push(newStudent);
  saveData();
  logAudit("Student Added", `Created candidate record ${newStudent.id} (${newStudent.name}) in ${newStudent.course}`);
  displayStudents();
  refreshStudentDropdown();
  updateDashboardKPIs();
  renderAdminHub();
  showNotification(`Student ${newStudent.id} added successfully.`, "success");
  return true;
}

/**
 * Update an existing student record
 */
function updateStudent(studentId, updatedData) {
  const index = appState.students.findIndex(s => s.id.toUpperCase() === studentId.toUpperCase());
  if (index === -1) {
    showNotification("Student record not found.", "danger");
    return false;
  }

  if (updatedData.id && updatedData.id.toUpperCase() !== studentId.toUpperCase()) {
    const exists = appState.students.some(s => s.id.toUpperCase() === updatedData.id.toUpperCase());
    if (exists) {
      showNotification(`Student ID '${updatedData.id}' already exists.`, "danger");
      return false;
    }
  }

  appState.students[index] = {
    id: (updatedData.id || studentId).trim().toUpperCase(),
    name: updatedData.name.trim(),
    course: updatedData.course.trim(),
    semester: parseInt(updatedData.semester, 10),
    email: updatedData.email.trim().toLowerCase(),
    accommodation: updatedData.accommodation || appState.students[index].accommodation || "Standard (None Required)"
  };

  saveData();
  logAudit("Student Updated", `Updated record for candidate ${appState.students[index].id} (${appState.students[index].name})`);
  displayStudents();
  refreshStudentDropdown();
  updateDashboardKPIs();
  renderAdminHub();
  showNotification(`Student ${appState.students[index].id} updated successfully.`, "success");
  return true;
}

/**
 * Delete a student record with validation and confirmation
 */
function deleteStudent(studentId) {
  const student = appState.students.find(s => s.id.toUpperCase() === studentId.toUpperCase());
  if (!student) return;

  const hasReg = appState.registrations.some(r => r.studentId.toUpperCase() === studentId.toUpperCase() && r.status !== "Cancelled");
  let promptMsg = `Are you sure you want to delete student ${student.name} (${student.id})?`;
  if (hasReg) {
    promptMsg += ` Note: This student has active examination registrations.`;
  }

  if (confirm(promptMsg)) {
    appState.students = appState.students.filter(s => s.id.toUpperCase() !== studentId.toUpperCase());
    saveData();
    logAudit("Student Deleted", `Deleted candidate record ${studentId} (${student.name})`);
    displayStudents();
    refreshStudentDropdown();
    updateDashboardKPIs();
    renderAdminHub();
    showNotification(`Student ${studentId} has been deleted.`, "warning");
  }
}

/**
 * Search students based on query string, course, and semester filter
 */
function searchStudents(query = "", semesterFilter = "ALL", courseFilter = "ALL") {
  const q = query.trim().toLowerCase();
  return appState.students.filter(student => {
    const matchesQuery = !q || 
      student.id.toLowerCase().includes(q) || 
      student.name.toLowerCase().includes(q) || 
      student.email.toLowerCase().includes(q) ||
      student.course.toLowerCase().includes(q);

    const matchesSemester = semesterFilter === "ALL" || student.semester.toString() === semesterFilter;
    const matchesCourse = courseFilter === "ALL" || student.course === courseFilter;
    return matchesQuery && matchesSemester && matchesCourse;
  });
}

/**
 * Display students in the management table
 */
function displayStudents() {
  const tbody = document.getElementById("studentsTableBody");
  if (!tbody) return;

  const searchInput = document.getElementById("studentSearchInput");
  const semesterSelect = document.getElementById("studentSemesterFilter");
  const courseSelect = document.getElementById("studentCourseFilter");

  const query = searchInput ? searchInput.value : "";
  const semFilter = semesterSelect ? semesterSelect.value : "ALL";
  const courseFilter = courseSelect ? courseSelect.value : "ALL";

  const filtered = searchStudents(query, semFilter, courseFilter);

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-subtle);">
          No candidate records found matching the current search &amp; filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(s => {
    const reg = appState.registrations.find(r => r.studentId.toUpperCase() === s.id.toUpperCase() && r.status !== "Cancelled");
    const regBadge = reg 
      ? `<span class="badge badge-success">Registered (${reg.registrationId})</span>`
      : `<span class="badge badge-warning">Not Registered</span>`;

    const accomBadge = (s.accommodation && s.accommodation !== "Standard (None Required)")
      ? `<span class="badge badge-elective" title="Disability Mainstreaming Accommodation">♿ ${escapeHTML(s.accommodation)}</span>`
      : `<span style="color: var(--text-subtle); font-size: 0.8125rem;">Standard</span>`;

    return `
      <tr>
        <td><strong>${escapeHTML(s.id)}</strong></td>
        <td>${escapeHTML(s.name)}</td>
        <td><span class="badge badge-course">${escapeHTML(s.course)}</span></td>
        <td>Semester ${s.semester}</td>
        <td>${accomBadge}</td>
        <td><a href="mailto:${escapeHTML(s.email)}">${escapeHTML(s.email)}</a></td>
        <td>${regBadge}</td>
        <td>
          <div style="display: flex; gap: 0.375rem; flex-wrap: wrap;">
            ${!reg ? `<button class="btn btn-primary btn-sm" onclick="registerDirectStudent('${s.id}')" title="Register Candidate for Exams">Register</button>` : ''}
            <button class="btn btn-secondary btn-sm" onclick="editStudentModal('${s.id}')" title="Edit Student">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent('${s.id}')" title="Delete Student">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

/**
 * Direct navigation to registration tab with student pre-selected
 */
function registerDirectStudent(studentId) {
  switchSystemTab("register");
  const select = document.getElementById("regStudentSelect");
  if (select) {
    select.value = studentId;
    onRegistrationStudentSelect(studentId);
  }
}

// ==========================================================================
// 4. SUBJECT MANAGEMENT FUNCTIONS
// ==========================================================================

/**
 * Load subjects from application state
 */
function loadSubjects() {
  return appState.subjects;
}

/**
 * Render subjects cards grouped by semester with course filter and assessment badges
 */
function displaySubjects(targetSemester = "ALL") {
  const container = document.getElementById("subjectsListContainer");
  if (!container) return;

  const courseSelect = document.getElementById("subjectCourseFilter");
  const selectedCourse = courseSelect ? courseSelect.value : "ALL";

  const semesters = targetSemester === "ALL" ? [1, 2, 3, 4] : [parseInt(targetSemester, 10)];
  let html = "";
  let totalDisplayed = 0;

  semesters.forEach(sem => {
    const subs = appState.subjects.filter(s => {
      const matchSem = s.semester === sem;
      const matchCourse = selectedCourse === "ALL" || s.course === selectedCourse || s.course === "All Courses";
      return matchSem && matchCourse;
    });

    if (subs.length === 0) return;
    totalDisplayed += subs.length;

    html += `
      <div class="semester-block">
        <h3 class="semester-heading">
          <span>Semester ${sem} Curriculum Modules</span>
          <span class="badge badge-primary">${subs.length} Modules</span>
        </h3>
        <div class="subjects-grid">
          ${subs.map(sub => {
            const assessBadge = getAssessmentBadge(sub.assessmentType);
            return `
              <div class="subject-card">
                <div>
                  <div class="subject-header">
                    <span class="subject-code">${escapeHTML(sub.code)}</span>
                    <div style="display: flex; gap: 0.25rem;">
                      ${sub.elective ? '<span class="badge badge-elective">Elective</span>' : '<span class="badge badge-neutral">Core</span>'}
                    </div>
                  </div>
                  <div class="subject-name">${escapeHTML(sub.name)}</div>
                  <div style="margin: 0.5rem 0; display: flex; flex-direction: column; gap: 0.25rem;">
                    <span class="badge badge-course" style="align-self: flex-start;">${escapeHTML(sub.course || "General")}</span>
                    ${assessBadge}
                  </div>
                </div>
                <div class="subject-footer">
                  <div>
                    <span style="font-size: 0.75rem; color: var(--text-subtle); display: block;">Exam Fee</span>
                    <span class="subject-fee">$${sub.fee.toFixed(2)}</span>
                  </div>
                  ${appState.isAdmin ? `
                    <div style="display: flex; gap: 0.375rem;">
                      <button class="btn btn-secondary btn-sm" onclick="openEditFeeModal('${sub.id}')" title="Adjust Fee">Fee</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteSubject('${sub.id}')" title="Remove Module">×</button>
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  });

  if (totalDisplayed === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: var(--surface); border: 1px dashed var(--border); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted); margin-bottom: 1rem;">No curriculum modules found for the selected course and semester.</p>
        <button class="btn btn-primary btn-sm" onclick="openAddSubjectModal()">+ Add Course Module</button>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }
}

/**
 * Helper to return styled assessment badge
 */
function getAssessmentBadge(type) {
  if (!type) return `<span class="badge badge-theory">Written & Theory</span>`;
  if (type.includes("Practical")) return `<span class="badge badge-practical">🛠️ Practical Workshop</span>`;
  if (type.includes("Psychomotor") || type.includes("Project")) return `<span class="badge badge-project">⚙️ Psychomotor Project</span>`;
  if (type.includes("Portfolio")) return `<span class="badge badge-elective">📂 Portfolio & Defense</span>`;
  return `<span class="badge badge-theory">📝 Written Examination</span>`;
}

// ==========================================================================
// 5. EXAM REGISTRATION FUNCTIONS
// ==========================================================================

/**
 * Generate a unique registration ID: e.g. REG20260914132100
 */
function generateRegistrationId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `REG${year}${month}${day}${hours}${minutes}${seconds}`;
}

/**
 * Calculate registration fees dynamically
 */
function calculateFee(selectedSubjectIds) {
  let subjectTotal = 0;
  const selectedSubjects = [];

  selectedSubjectIds.forEach(id => {
    const sub = appState.subjects.find(s => s.id === id);
    if (sub) {
      subjectTotal += sub.fee;
      selectedSubjects.push(sub);
    }
  });

  const processingFee = selectedSubjects.length > 0 ? (appState.processingFee ?? 5.00) : 0;
  const totalFee = selectedSubjects.length > 0 ? (subjectTotal + processingFee) : 0;

  return {
    selectedSubjects,
    subjectTotal,
    processingFee,
    totalFee
  };
}

/**
 * Handle student selection in the registration form:
 * Detect semester & course, load appropriate curriculum modules, verify active registration
 */
function onRegistrationStudentSelect(studentId) {
  const infoCard = document.getElementById("selectedStudentInfo");
  const subjectsContainer = document.getElementById("regSubjectsCheckboxes");
  const summaryBox = document.getElementById("regSummaryContent");
  const proceedBtn = document.getElementById("proceedToConfirmBtn");

  if (!studentId) {
    if (infoCard) infoCard.classList.remove("visible");
    if (subjectsContainer) subjectsContainer.innerHTML = `<p style="color: var(--text-subtle); padding: 1rem 0;">Please select a student above to load their curriculum subjects.</p>`;
    if (summaryBox) summaryBox.innerHTML = `<p style="color: var(--text-subtle);">Select subjects to view fee calculations.</p>`;
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  const student = appState.students.find(s => s.id.toUpperCase() === studentId.toUpperCase());
  if (!student) return;

  // Display Student Info
  if (infoCard) {
    infoCard.classList.add("visible");
    const nameEl = document.getElementById("dispStudentName");
    if (nameEl) nameEl.textContent = student.name;
    const idEl = document.getElementById("dispStudentID");
    if (idEl) idEl.textContent = student.id;
    const courseEl = document.getElementById("dispStudentCourse");
    if (courseEl) courseEl.textContent = student.course;
    const semEl = document.getElementById("dispStudentSemester");
    if (semEl) semEl.textContent = `Semester ${student.semester}`;
    const emailEl = document.getElementById("dispStudentEmail");
    if (emailEl) emailEl.textContent = student.email;
  }

  // Check if deadline has passed
  const deadlineCheck = checkDeadline();
  if (deadlineCheck.isClosed) {
    subjectsContainer.innerHTML = `
      <div style="background: #fee2e2; border: 1px solid #f87171; border-radius: 8px; padding: 1rem; color: #991b1b;">
        <strong>Registration Closed:</strong> The examination deadline has passed. New registrations are currently disabled.
      </div>
    `;
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  // Check if student already has an active registration
  const existingReg = appState.registrations.find(r => r.studentId.toUpperCase() === student.id.toUpperCase() && r.status !== "Cancelled");
  if (existingReg) {
    subjectsContainer.innerHTML = `
      <div style="background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 1.25rem; color: #1e40af;">
        <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">Already Registered</h4>
        <p style="font-size: 0.875rem; margin-bottom: 0.75rem;">
          ${student.name} already has an active examination registration (<strong>${existingReg.registrationId}</strong>) on ${existingReg.date} for $${existingReg.totalFee.toFixed(2)}.
        </p>
        <button type="button" class="btn btn-secondary btn-sm" onclick="viewReceipt('${existingReg.registrationId}')">View Existing Receipt</button>
      </div>
    `;
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  // Load subjects matching both course and semester
  const semSubjects = appState.subjects.filter(s => {
    const matchCourse = !s.course || s.course === "All Courses" || s.course === student.course;
    const matchSem = s.semester === student.semester;
    return matchCourse && matchSem;
  });

  if (semSubjects.length === 0) {
    subjectsContainer.innerHTML = `
      <div style="padding: 1.25rem; background: #fffbeb; border: 1px solid #fef3c7; border-radius: var(--radius-sm); color: #92400e;">
        <p style="font-weight: 600; margin-bottom: 0.25rem;">No Modules Configured for ${escapeHTML(student.course)} (Semester ${student.semester})</p>
        <p style="font-size: 0.875rem; margin-bottom: 0.75rem;">Use the Admin Hub or Subject Directory to add curriculum modules for this department.</p>
        <button type="button" class="btn btn-primary btn-sm" onclick="openAddSubjectModal()">+ Add Module to Catalog</button>
      </div>
    `;
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  subjectsContainer.innerHTML = semSubjects.map(sub => {
    const assessBadge = getAssessmentBadge(sub.assessmentType);
    return `
      <label class="subject-checkbox-item" id="chk_label_${sub.id}">
        <div class="sub-check-left">
          <input type="checkbox" name="selectedSubjects" value="${sub.id}" id="chk_${sub.id}" onchange="updateRegistrationCalculations()">
          <div>
            <div>
              <span style="font-weight: 700; font-family: var(--font-mono);">${escapeHTML(sub.code)}</span> – ${escapeHTML(sub.name)}
              ${sub.elective ? '<span class="badge badge-elective" style="margin-left: 0.5rem;">Elective</span>' : '<span class="badge badge-neutral" style="margin-left: 0.5rem;">Core</span>'}
            </div>
            <div style="margin-top: 0.25rem; font-size: 0.75rem;">
              ${assessBadge}
            </div>
          </div>
        </div>
        <div class="sub-fee-label">$${sub.fee.toFixed(2)}</div>
      </label>
    `;
  }).join("");

  if (proceedBtn) proceedBtn.disabled = true;
  updateRegistrationCalculations();
}

/**
 * Update the dynamic registration calculations box
 */
function updateRegistrationCalculations() {
  const checkboxes = document.querySelectorAll('input[name="selectedSubjects"]:checked');
  const selectedIds = Array.from(checkboxes).map(cb => cb.value);
  const summaryBox = document.getElementById("regSummaryContent");
  const proceedBtn = document.getElementById("proceedToConfirmBtn");

  // Highlight checked items
  document.querySelectorAll('.subject-checkbox-item').forEach(item => {
    const input = item.querySelector('input[type="checkbox"]');
    if (input && input.checked) {
      item.classList.add("checked");
    } else {
      item.classList.remove("checked");
    }
  });

  if (selectedIds.length === 0) {
    if (summaryBox) {
      summaryBox.innerHTML = `
        <p style="color: var(--text-subtle); padding: 1rem 0; text-align: center;">
          Please select at least one subject to calculate fees.
        </p>
      `;
    }
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  const calc = calculateFee(selectedIds);

  if (summaryBox) {
    summaryBox.innerHTML = `
      <ul class="calc-summary-list">
        ${calc.selectedSubjects.map(s => `
          <li class="calc-summary-item">
            <span>${escapeHTML(s.code)}: ${escapeHTML(s.name)}</span>
            <strong>$${s.fee.toFixed(2)}</strong>
          </li>
        `).join("")}
        <li class="calc-summary-item" style="border-top: 1px dashed var(--border); padding-top: 0.5rem;">
          <span>Subtotal (${calc.selectedSubjects.length} subjects)</span>
          <span>$${calc.subjectTotal.toFixed(2)}</span>
        </li>
        <li class="calc-summary-item">
          <span>Institutional Processing Fee</span>
          <span>$${calc.processingFee.toFixed(2)}</span>
        </li>
        <li class="calc-summary-item total">
          <span>Total Examination Fee</span>
          <span style="color: var(--primary);">$${calc.totalFee.toFixed(2)}</span>
        </li>
      </ul>
      <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem; font-size: 0.8125rem; color: var(--text-subtle);">
        Includes Heritage-Based practical examination assessment & materials fee.
      </div>
    `;
  }

  if (proceedBtn) proceedBtn.disabled = false;
}

/**
 * Open Registration Confirmation Modal before final commit
 */
function prepareRegistrationConfirmation() {
  const studentSelect = document.getElementById("regStudentSelect");
  const studentId = studentSelect ? studentSelect.value : "";
  if (!studentId) {
    showNotification("Please select a student.", "warning");
    return;
  }

  const student = appState.students.find(s => s.id.toUpperCase() === studentId.toUpperCase());
  if (!student) return;

  const checkboxes = document.querySelectorAll('input[name="selectedSubjects"]:checked');
  const selectedIds = Array.from(checkboxes).map(cb => cb.value);

  if (selectedIds.length === 0) {
    showNotification("Please select at least one subject for examination.", "warning");
    return;
  }

  const deadlineCheck = checkDeadline();
  if (deadlineCheck.isClosed) {
    showNotification("Registration is closed. Cannot proceed.", "danger");
    return;
  }

  const calc = calculateFee(selectedIds);
  const regId = generateRegistrationId();
  const today = new Date().toISOString().split("T")[0];

  appState.pendingConfirmation = {
    registrationId: regId,
    studentId: student.id,
    studentName: student.name,
    course: student.course,
    semester: student.semester,
    email: student.email,
    subjects: calc.selectedSubjects.map(s => ({ code: s.code, name: s.name, fee: s.fee })),
    subjectTotal: calc.subjectTotal,
    processingFee: calc.processingFee,
    totalFee: calc.totalFee,
    date: today,
    status: "Confirmed",
    receiptNumber: `REC-${new Date().getFullYear()}-${String(appState.registrations.length + 1).padStart(4, "0")}`
  };

  // Populate Modal Fields
  document.getElementById("confRegId").textContent = regId;
  document.getElementById("confStudentName").textContent = student.name;
  document.getElementById("confStudentID").textContent = student.id;
  document.getElementById("confCourse").textContent = student.course;
  document.getElementById("confSemester").textContent = `Semester ${student.semester}`;
  document.getElementById("confDate").textContent = today;
  document.getElementById("confProcessingFee").textContent = `$${calc.processingFee.toFixed(2)}`;
  document.getElementById("confTotalFee").textContent = `$${calc.totalFee.toFixed(2)}`;

  const subjectsList = document.getElementById("confSubjectsList");
  if (subjectsList) {
    subjectsList.innerHTML = calc.selectedSubjects.map(s => `
      <div style="display: flex; justify-content: space-between; padding: 0.375rem 0; border-bottom: 1px solid #f1f5f9; font-size: 0.875rem;">
        <span><strong>${escapeHTML(s.code)}</strong>: ${escapeHTML(s.name)}</span>
        <span>$${s.fee.toFixed(2)}</span>
      </div>
    `).join("");
  }

  openModal("confirmationModal");
}

/**
 * Save confirmed registration to state & LocalStorage
 */
function saveRegistration() {
  if (!appState.pendingConfirmation) return;

  // Final check to prevent duplicate
  const exists = appState.registrations.some(
    r => r.studentId.toUpperCase() === appState.pendingConfirmation.studentId.toUpperCase() && r.status !== "Cancelled"
  );
  if (exists) {
    showNotification("An active registration already exists for this student.", "danger");
    closeModal("confirmationModal");
    return;
  }

  appState.registrations.unshift(appState.pendingConfirmation);
  const savedReg = { ...appState.pendingConfirmation };
  appState.pendingConfirmation = null;

  saveData();
  logAudit("Registration Confirmed", `Exam registration ${savedReg.registrationId} confirmed for ${savedReg.studentName} (${savedReg.studentId}) - $${savedReg.totalFee.toFixed(2)}`);
  closeModal("confirmationModal");

  // Reset form
  const studentSelect = document.getElementById("regStudentSelect");
  if (studentSelect) studentSelect.value = "";
  onRegistrationStudentSelect("");

  displayRegistrations();
  displayStudents();
  updateDashboardKPIs();
  renderAdminHub();
  generateReport();

  showNotification(`Registration ${savedReg.registrationId} confirmed successfully!`, "success");

  // Prompt to view receipt immediately
  if (confirm(`Registration confirmed!\nRegistration ID: ${savedReg.registrationId}\nTotal Fee: $${savedReg.totalFee.toFixed(2)}\n\nWould you like to view and print the official Fee Receipt now?`)) {
    viewReceipt(savedReg.registrationId);
  }
}

/**
 * Cancel a registration with confirmation
 */
function cancelRegistration(registrationId) {
  const reg = appState.registrations.find(r => r.registrationId === registrationId);
  if (!reg) return;

  if (reg.status === "Cancelled") {
    showNotification("This registration is already cancelled.", "warning");
    return;
  }

  if (confirm(`Are you sure you want to CANCEL registration ${registrationId} for ${reg.studentName}?`)) {
    reg.status = "Cancelled";
    saveData();
    logAudit("Registration Cancelled", `Cancelled examination registration ${registrationId} for ${reg.studentName}`);
    displayRegistrations();
    displayStudents();
    updateDashboardKPIs();
    renderAdminHub();
    generateReport();
    showNotification(`Registration ${registrationId} has been cancelled.`, "warning");
  }
}

/**
 * Display registrations in management table
 */
function displayRegistrations() {
  const tbody = document.getElementById("registrationsTableBody");
  if (!tbody) return;

  const searchInput = document.getElementById("regSearchInput");
  const statusSelect = document.getElementById("regStatusFilter");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const statusFilter = statusSelect ? statusSelect.value : "ALL";

  const filtered = appState.registrations.filter(r => {
    const matchesQuery = !query ||
      r.registrationId.toLowerCase().includes(query) ||
      r.studentName.toLowerCase().includes(query) ||
      r.studentId.toLowerCase().includes(query);

    const matchesStatus = statusFilter === "ALL" || r.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-subtle);">
          No examination registrations found.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(r => {
    let badgeClass = "badge-success";
    if (r.status === "Pending") badgeClass = "badge-warning";
    if (r.status === "Cancelled") badgeClass = "badge-danger";

    const subjectsSummary = r.subjects.map(s => s.code).join(", ");

    return `
      <tr>
        <td><strong>${escapeHTML(r.registrationId)}</strong></td>
        <td>
          <div style="font-weight: 600;">${escapeHTML(r.studentName)}</div>
          <div style="font-size: 0.75rem; color: var(--text-subtle);">${escapeHTML(r.studentId)} • Sem ${r.semester}</div>
        </td>
        <td>
          <span title="${escapeHTML(r.subjects.map(s => s.name).join('; '))}">
            ${escapeHTML(subjectsSummary)} (${r.subjects.length})
          </span>
        </td>
        <td>${escapeHTML(r.date)}</td>
        <td><span class="badge ${badgeClass}">${escapeHTML(r.status)}</span></td>
        <td><strong>$${r.totalFee.toFixed(2)}</strong></td>
        <td>
          <div style="display: flex; gap: 0.375rem;">
            <button class="btn btn-secondary btn-sm" onclick="viewReceipt('${r.registrationId}')" title="View & Print Official Receipt">Receipt</button>
            ${r.status !== "Cancelled" ? `
              <button class="btn btn-danger btn-sm" onclick="cancelRegistration('${r.registrationId}')" title="Cancel Registration">Cancel</button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join("");

  refreshReceiptDropdown();
}

// ==========================================================================
// 6. FEE RECEIPT GENERATION & PRINTING
// ==========================================================================

/**
 * Generate official Fee Receipt data
 */
function generateReceipt(registrationId) {
  const reg = appState.registrations.find(r => r.registrationId === registrationId);
  if (!reg) return null;
  return reg;
}

/**
 * Generate HTML markup for an official fee receipt
 */
function buildReceiptHTML(reg) {
  let badgeClass = "badge-success";
  if (reg.status === "Pending") badgeClass = "badge-warning";
  if (reg.status === "Cancelled") badgeClass = "badge-danger";

  const rows = reg.subjects.map(s => `
    <tr>
      <td><strong>${escapeHTML(s.code)}</strong></td>
      <td>${escapeHTML(s.name)}</td>
      <td>Curriculum Paper</td>
      <td style="text-align: right;">$${s.fee.toFixed(2)}</td>
    </tr>
  `).join("");

  return `
    <div class="receipt-wrapper">
      <div class="receipt-header">
        <div class="receipt-institution">DANHIKO INDUSTRIAL TRAINING COLLEGE</div>
        <div class="receipt-title">EXAM REGISTRATION FEE RECEIPT</div>
        <div class="receipt-location">No 123, Mutare Road, Harare, Zimbabwe • Ministry of Higher &amp; Tertiary Education</div>
      </div>

      <div class="receipt-meta-grid">
        <div>
          <strong>Receipt Number</strong>
          <span>${escapeHTML(reg.receiptNumber || "REC-2026-0001")}</span>
        </div>
        <div>
          <strong>Registration ID</strong>
          <span style="font-family: var(--font-mono); font-weight: 700;">${escapeHTML(reg.registrationId)}</span>
        </div>
        <div>
          <strong>Issue Date</strong>
          <span>${escapeHTML(reg.date)}</span>
        </div>
        <div>
          <strong>Official Status</strong>
          <span class="badge ${badgeClass}">${escapeHTML(reg.status.toUpperCase())}</span>
        </div>
        <div>
          <strong>Candidate Name</strong>
          <span>${escapeHTML(reg.studentName)}</span>
        </div>
        <div>
          <strong>Candidate ID</strong>
          <span>${escapeHTML(reg.studentId)}</span>
        </div>
        <div>
          <strong>Course Curriculum</strong>
          <span>${escapeHTML(reg.course)}</span>
        </div>
        <div>
          <strong>Curriculum Semester</strong>
          <span>Semester ${escapeHTML(String(reg.semester))}</span>
        </div>
      </div>

      <table class="receipt-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Description / Module Title</th>
            <th>Assessment Type</th>
            <th style="text-align: right;">Fee (USD)</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="text-align: right;">Subject Modules Subtotal:</td>
            <td style="text-align: right;">$${reg.subjectTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" style="text-align: right;">Institutional Examination Processing Fee:</td>
            <td style="text-align: right;">$${reg.processingFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" style="text-align: right; font-size: 1.125rem;">Total Amount Paid:</td>
            <td style="text-align: right;" class="receipt-total-highlight">$${reg.totalFee.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <div class="receipt-footer-stamp">
        <div>
          <p>This document is an authentic electronic record issued under Danhiko College Regulations.</p>
          <p style="margin-top: 0.25rem;">Valid only upon confirmed endorsement by the Examinations Bursar.</p>
        </div>
        <div class="stamp-box">
          DANHIKO BURSAR<br>OFFICIAL STAMP
        </div>
      </div>
    </div>
  `;
}

/**
 * Populate receipt selector dropdown in Receipts Tab
 */
function refreshReceiptDropdown() {
  const select = document.getElementById("receiptSelectorDropdown");
  if (!select) return;

  if (appState.registrations.length === 0) {
    select.innerHTML = `<option value="">No registrations available yet</option>`;
    return;
  }

  const currentVal = select.value;
  select.innerHTML = appState.registrations.map(r => `
    <option value="${escapeHTML(r.registrationId)}">
      ${escapeHTML(r.registrationId)} - ${escapeHTML(r.studentName)} (${escapeHTML(r.studentId)}) - $${r.totalFee.toFixed(2)} [${r.status}]
    </option>
  `).join("");

  if (currentVal && appState.registrations.some(r => r.registrationId === currentVal)) {
    select.value = currentVal;
  }
}

/**
 * View fee receipt inside modal or tab
 */
function viewReceipt(registrationId, openAsModal = true) {
  const reg = generateReceipt(registrationId);
  if (!reg) {
    showNotification("Registration receipt not found.", "danger");
    return;
  }

  // Populate primary receipt tab
  const receiptNumEl = document.getElementById("receiptNum");
  if (receiptNumEl) receiptNumEl.textContent = reg.receiptNumber || "REC-2026-0001";
  const receiptRegIdEl = document.getElementById("receiptRegId");
  if (receiptRegIdEl) receiptRegIdEl.textContent = reg.registrationId;
  const receiptDateEl = document.getElementById("receiptDate");
  if (receiptDateEl) receiptDateEl.textContent = reg.date;
  const receiptStudentNameEl = document.getElementById("receiptStudentName");
  if (receiptStudentNameEl) receiptStudentNameEl.textContent = reg.studentName;
  const receiptStudentIDEl = document.getElementById("receiptStudentID");
  if (receiptStudentIDEl) receiptStudentIDEl.textContent = reg.studentId;
  const receiptCourseEl = document.getElementById("receiptCourse");
  if (receiptCourseEl) receiptCourseEl.textContent = reg.course;
  const receiptSemesterEl = document.getElementById("receiptSemester");
  if (receiptSemesterEl) receiptSemesterEl.textContent = `Semester ${reg.semester}`;
  const receiptStatusBadgeEl = document.getElementById("receiptStatusBadge");
  if (receiptStatusBadgeEl) {
    receiptStatusBadgeEl.textContent = reg.status.toUpperCase();
    receiptStatusBadgeEl.className = `badge ${reg.status === "Confirmed" ? "badge-success" : reg.status === "Cancelled" ? "badge-danger" : "badge-warning"}`;
  }

  const tbody = document.getElementById("receiptTableBody");
  if (tbody) {
    tbody.innerHTML = reg.subjects.map(s => `
      <tr>
        <td><strong>${escapeHTML(s.code)}</strong></td>
        <td>${escapeHTML(s.name)}</td>
        <td>Curriculum Paper</td>
        <td style="text-align: right;">$${s.fee.toFixed(2)}</td>
      </tr>
    `).join("");
  }

  const subtotalEl = document.getElementById("receiptSubtotal");
  if (subtotalEl) subtotalEl.textContent = `$${reg.subjectTotal.toFixed(2)}`;
  const procEl = document.getElementById("receiptProcessingFee");
  if (procEl) procEl.textContent = `$${reg.processingFee.toFixed(2)}`;
  const totalEl = document.getElementById("receiptTotalFee");
  if (totalEl) totalEl.textContent = `$${reg.totalFee.toFixed(2)}`;

  // Also update receipt selector dropdown value
  const dropdown = document.getElementById("receiptSelectorDropdown");
  if (dropdown) {
    dropdown.value = reg.registrationId;
  }

  // Populate modal container
  const modalContainer = document.getElementById("modalReceiptContainer");
  if (modalContainer) {
    modalContainer.innerHTML = buildReceiptHTML(reg);
  }

  if (openAsModal) {
    openModal("receiptModal");
  }
}

/**
 * Trigger print dialog with clean print media styling
 */
function printReceipt() {
  window.print();
}

// ==========================================================================
// 7. DEADLINE & COUNTDOWN TIMER
// ==========================================================================

/**
 * Check if the registration deadline has arrived or calculate remaining time
 */
function checkDeadline() {
  if (!appState.deadline) {
    return { isClosed: false, days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }

  const deadlineDate = new Date(appState.deadline);
  const now = new Date();
  const diff = deadlineDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { isClosed: true, days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: diff };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { isClosed: false, days, hours, minutes, seconds, totalMs: diff };
}

/**
 * Update the registration deadline set by administrator
 */
function updateDeadline(newDateString) {
  if (!newDateString) {
    showNotification("Please select a valid deadline date & time.", "warning");
    return;
  }

  appState.deadline = newDateString;
  saveData();
  updateCountdown();
  showNotification("Registration deadline updated successfully.", "success");
}

/**
 * Update countdown display across banner, dashboard, and settings
 */
function updateCountdown() {
  const status = checkDeadline();
  const banner = document.getElementById("deadlineAlertBanner");
  const bannerMsg = document.getElementById("bannerAlertMsg");
  const bannerStatusIcon = document.getElementById("bannerStatusIcon");

  // Timer fields in banner & dashboard
  const daysEls = document.querySelectorAll(".timer-days");
  const hoursEls = document.querySelectorAll(".timer-hours");
  const minutesEls = document.querySelectorAll(".timer-minutes");
  const secondsEls = document.querySelectorAll(".timer-seconds");

  daysEls.forEach(el => el.textContent = String(status.days).padStart(2, "0"));
  hoursEls.forEach(el => el.textContent = String(status.hours).padStart(2, "0"));
  minutesEls.forEach(el => el.textContent = String(status.minutes).padStart(2, "0"));
  secondsEls.forEach(el => el.textContent = String(status.seconds).padStart(2, "0"));

  // Dashboard deadline formatted text
  const formattedDeadline = appState.deadline 
    ? new Date(appState.deadline).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })
    : "Not Set";

  const deadlineTextEls = document.querySelectorAll(".deadline-display-text");
  deadlineTextEls.forEach(el => el.textContent = formattedDeadline);

  if (banner && bannerMsg) {
    banner.className = "deadline-banner"; // reset base

    if (status.isClosed) {
      banner.classList.add("banner-closed");
      if (bannerStatusIcon) bannerStatusIcon.textContent = "🛑";
      bannerMsg.innerHTML = "<strong>REGISTRATION CLOSED:</strong> The examination registration period has ended. New submissions are disabled.";
    } else if (status.days <= 3) {
      banner.classList.add("banner-urgent");
      if (bannerStatusIcon) bannerStatusIcon.textContent = "⚡";
      bannerMsg.innerHTML = "<strong>URGENT: Exam registration closes soon!</strong> Finalize subject selections before deadline.";
    } else if (status.days <= 7) {
      banner.classList.add("banner-warning");
      if (bannerStatusIcon) bannerStatusIcon.textContent = "⚠️";
      bannerMsg.innerHTML = "<strong>Reminder: Exam registration closes soon.</strong> Please submit exam registrations promptly.";
    } else {
      banner.classList.add("banner-normal");
      if (bannerStatusIcon) bannerStatusIcon.textContent = "⏱️";
      bannerMsg.innerHTML = `<strong>Active Registration Period:</strong> Open for all courses and semesters. Deadline: ${formattedDeadline}.`;
    }
  }

  // Update email reminder template if on reminders view
  updateSimulatedEmailTemplate();
}

// ==========================================================================
// 8. SIMULATED EMAIL REMINDERS SYSTEM
// ==========================================================================

function updateSimulatedEmailTemplate() {
  const unregisteredStudents = appState.students.filter(s => 
    !appState.registrations.some(r => r.studentId.toUpperCase() === s.id.toUpperCase() && r.status !== "Cancelled")
  );

  const select = document.getElementById("emailStudentSelect");
  if (select) {
    const currentVal = select.value;
    select.innerHTML = unregisteredStudents.length > 0
      ? unregisteredStudents.map(s => `<option value="${s.id}">${s.name} (${s.id}) – ${s.email}</option>`).join("")
      : `<option value="">No unregistered students</option>`;
    if (currentVal && unregisteredStudents.some(s => s.id === currentVal)) {
      select.value = currentVal;
    }
  }

  renderSelectedEmailPreview();
}

function renderSelectedEmailPreview() {
  const select = document.getElementById("emailStudentSelect");
  const studentId = select ? select.value : "";
  const previewTo = document.getElementById("emailPreviewTo");
  const previewSubject = document.getElementById("emailPreviewSubject");
  const previewBody = document.getElementById("emailPreviewBody");

  const formattedDeadline = appState.deadline 
    ? new Date(appState.deadline).toLocaleDateString("en-US", { dateStyle: "long" })
    : "September 30, 2026";

  if (!studentId) {
    if (previewTo) previewTo.textContent = "No student selected";
    if (previewSubject) previewSubject.textContent = "URGENT – Exam Registration Closing Soon";
    if (previewBody) {
      previewBody.innerHTML = `
        <p>Dear Student,</p>
        <p>Please register for your examinations before <strong>${formattedDeadline}</strong>.</p>
        <br>
        <p>Regards,<br><strong>Danhiko Industrial Training College</strong></p>
      `;
    }
    return;
  }

  const student = appState.students.find(s => s.id === studentId);
  if (!student) return;

  if (previewTo) previewTo.textContent = `${student.name} <${student.email}>`;
  if (previewSubject) previewSubject.textContent = "URGENT – Exam Registration Closing Soon";
  if (previewBody) {
    previewBody.innerHTML = `
      <p>Dear ${escapeHTML(student.name)},</p>
      <p>Please register for your examinations before <strong>${formattedDeadline}</strong>.</p>
      <p>Ensure you select all required core and elective modules for Semester ${student.semester} under Heritage-Based Education 5.0 curriculum.</p>
      <br>
      <p>Regards,<br><strong>Danhiko Industrial Training College</strong><br>Harare, Zimbabwe</p>
    `;
  }
}

function simulateSendEmailReminder() {
  const select = document.getElementById("emailStudentSelect");
  const studentId = select ? select.value : "";
  if (!studentId) {
    showNotification("No student selected to send reminder.", "warning");
    return;
  }

  const student = appState.students.find(s => s.id === studentId);
  if (!student) return;

  showNotification(`Simulated reminder sent successfully to ${student.name} (${student.email}).`, "success");
}

function simulateSendAllReminders() {
  const unregistered = appState.students.filter(s => 
    !appState.registrations.some(r => r.studentId.toUpperCase() === s.id.toUpperCase() && r.status !== "Cancelled")
  );

  if (unregistered.length === 0) {
    showNotification("All students are already registered! No reminders needed.", "success");
    return;
  }

  showNotification(`Sent simulated urgency reminders to all ${unregistered.length} unregistered students.`, "success");
}

// ==========================================================================
// 9. REPORTING & STATISTICS SYSTEM
// ==========================================================================

/**
 * Generate report calculations dynamically
 */
function generateReport() {
  const totalStudents = appState.students.length;
  const confirmedRegistrations = appState.registrations.filter(r => r.status === "Confirmed");
  const cancelledRegistrations = appState.registrations.filter(r => r.status === "Cancelled");
  const pendingRegistrations = appState.registrations.filter(r => r.status === "Pending");

  // Unique registered students
  const registeredStudentIds = new Set(
    appState.registrations
      .filter(r => r.status !== "Cancelled")
      .map(r => r.studentId.toUpperCase())
  );

  const registeredStudentsCount = registeredStudentIds.size;
  const notRegisteredStudentsCount = Math.max(0, totalStudents - registeredStudentsCount);

  // Total Revenue from Confirmed registrations
  const totalRevenue = confirmedRegistrations.reduce((acc, r) => acc + (r.totalFee || 0), 0);

  // Update Report Summary Elements
  const repTotalStudents = document.getElementById("repTotalStudents");
  const repRegistered = document.getElementById("repRegistered");
  const repNotRegistered = document.getElementById("repNotRegistered");
  const repConfirmed = document.getElementById("repConfirmed");
  const repCancelled = document.getElementById("repCancelled");
  const repRevenue = document.getElementById("repRevenue");

  if (repTotalStudents) repTotalStudents.textContent = totalStudents;
  if (repRegistered) repRegistered.textContent = registeredStudentsCount;
  if (repNotRegistered) repNotRegistered.textContent = notRegisteredStudentsCount;
  if (repConfirmed) repConfirmed.textContent = confirmedRegistrations.length;
  if (repCancelled) repCancelled.textContent = cancelledRegistrations.length;
  if (repRevenue) repRevenue.textContent = `$${totalRevenue.toFixed(2)}`;

  // Populate Detailed Report Table
  const reportTableBody = document.getElementById("reportTableBody");
  if (reportTableBody) {
    if (appState.registrations.length === 0) {
      reportTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem;">No registration data available for report.</td></tr>`;
    } else {
      reportTableBody.innerHTML = appState.registrations.map(r => `
        <tr>
          <td><strong>${escapeHTML(r.registrationId)}</strong></td>
          <td>${escapeHTML(r.studentName)} (${escapeHTML(r.studentId)})</td>
          <td>Semester ${r.semester}</td>
          <td>${r.subjects.length} Subjects</td>
          <td>$${r.subjectTotal.toFixed(2)}</td>
          <td>$${r.processingFee.toFixed(2)}</td>
          <td><strong>$${r.totalFee.toFixed(2)}</strong></td>
        </tr>
      `).join("");
    }
  }

  return {
    totalStudents,
    registeredStudentsCount,
    notRegisteredStudentsCount,
    confirmedCount: confirmedRegistrations.length,
    cancelledCount: cancelledRegistrations.length,
    totalRevenue
  };
}

/**
 * Export registrations report to CSV file
 */
function exportCSV() {
  if (appState.registrations.length === 0) {
    showNotification("No registration records available to export.", "warning");
    return;
  }

  const headers = ["Registration ID", "Receipt Number", "Student ID", "Student Name", "Course", "Semester", "Email", "Subject Count", "Subjects List", "Subject Total ($)", "Processing Fee ($)", "Total Fee ($)", "Date", "Status"];

  const rows = appState.registrations.map(r => [
    `"${r.registrationId}"`,
    `"${r.receiptNumber || ''}"`,
    `"${r.studentId}"`,
    `"${r.studentName.replace(/"/g, '""')}"`,
    `"${r.course.replace(/"/g, '""')}"`,
    r.semester,
    `"${r.email}"`,
    r.subjects.length,
    `"${r.subjects.map(s => s.code + ': ' + s.name).join('; ').replace(/"/g, '""')}"`,
    r.subjectTotal.toFixed(2),
    r.processingFee.toFixed(2),
    r.totalFee.toFixed(2),
    `"${r.date}"`,
    `"${r.status}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Danhiko_College_Exam_Registrations_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showNotification("CSV report downloaded successfully.", "success");
}

// ==========================================================================
// 10. DASHBOARD KPIS & STATS
// ==========================================================================

function updateDashboardKPIs() {
  const stats = generateReport();

  // Top Dashboard Stats
  const kpiStudents = document.getElementById("kpiTotalStudents");
  const kpiSubjects = document.getElementById("kpiTotalSubjects");
  const kpiRegistered = document.getElementById("kpiRegisteredStudents");
  const kpiNotRegistered = document.getElementById("kpiNotRegisteredStudents");
  const kpiRevenue = document.getElementById("kpiTotalRevenue");

  if (kpiStudents) kpiStudents.textContent = stats.totalStudents;
  if (kpiSubjects) kpiSubjects.textContent = appState.subjects.length;
  if (kpiRegistered) kpiRegistered.textContent = stats.registeredStudentsCount;
  if (kpiNotRegistered) kpiNotRegistered.textContent = stats.notRegisteredStudentsCount;
  if (kpiRevenue) kpiRevenue.textContent = `$${stats.totalRevenue.toFixed(2)}`;

  // Dashboard Recent Registrations Preview
  const previewTbody = document.getElementById("dashRecentRegsBody");
  if (previewTbody) {
    const recents = appState.registrations.slice(0, 5);
    if (recents.length === 0) {
      previewTbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-subtle); padding: 1.5rem;">No registrations recorded yet.</td></tr>`;
    } else {
      previewTbody.innerHTML = recents.map(r => `
        <tr>
          <td><strong>${escapeHTML(r.registrationId)}</strong></td>
          <td>${escapeHTML(r.studentName)}</td>
          <td>Semester ${r.semester}</td>
          <td>$${r.totalFee.toFixed(2)}</td>
          <td><span class="badge ${r.status === 'Confirmed' ? 'badge-success' : 'badge-danger'}">${escapeHTML(r.status)}</span></td>
        </tr>
      `).join("");
    }
  }
}

// ==========================================================================
// 11. UI MODALS & NOTIFICATIONS
// ==========================================================================

/**
 * Open modal by ID
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

/**
 * Close modal by ID
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

/**
 * Display toast notification
 */
function showNotification(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "warning") icon = "⚠️";
  if (type === "danger") icon = "🛑";

  toast.innerHTML = `<span>${icon}</span><div>${escapeHTML(message)}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

/**
 * Switch top portal navigation tabs
 */
function switchSystemTab(tabId) {
  document.querySelectorAll(".system-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `tab_${tabId}`);
  });

  // Additional tab specific refreshes
  if (tabId === "students") displayStudents();
  if (tabId === "subjects") displaySubjects();
  if (tabId === "registrations") displayRegistrations();
  if (tabId === "reports") generateReport();
  if (tabId === "reminders") updateSimulatedEmailTemplate();
}

/**
 * Helper to open the Add/Edit Student modal
 */
function openAddStudentModal() {
  document.getElementById("studentModalTitle").textContent = "Add New Student";
  document.getElementById("studentFormId").value = "";
  document.getElementById("studentFormMode").value = "add";
  document.getElementById("stdInputId").readOnly = false;
  document.getElementById("studentForm").reset();
  const accomSelect = document.getElementById("stdInputAccommodation");
  if (accomSelect) accomSelect.value = "Standard (None Required)";
  openModal("studentModal");
}

function editStudentModal(studentId) {
  const student = appState.students.find(s => s.id.toUpperCase() === studentId.toUpperCase());
  if (!student) return;

  document.getElementById("studentModalTitle").textContent = `Edit Student: ${student.id}`;
  document.getElementById("studentFormId").value = student.id;
  document.getElementById("studentFormMode").value = "edit";
  
  const idInput = document.getElementById("stdInputId");
  idInput.value = student.id;
  idInput.readOnly = true;

  document.getElementById("stdInputName").value = student.name;
  document.getElementById("stdInputCourse").value = student.course;
  document.getElementById("stdInputSemester").value = student.semester;
  document.getElementById("stdInputEmail").value = student.email;

  const accomSelect = document.getElementById("stdInputAccommodation");
  if (accomSelect) {
    accomSelect.value = student.accommodation || "Standard (None Required)";
  }

  openModal("studentModal");
}

function refreshStudentDropdown() {
  const select = document.getElementById("regStudentSelect");
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = `<option value="">-- Choose Candidate by ID or Name --</option>` +
    appState.students.map(s => `
      <option value="${s.id}">
        ${s.id} - ${s.name} (${s.course} • Sem ${s.semester})
      </option>
    `).join("");

  if (currentVal && appState.students.some(s => s.id === currentVal)) {
    select.value = currentVal;
  }
}

function escapeHTML(str) {
  if (typeof str !== "string") return str;
  return str.replace(/[&<>'"]/g, tag => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[tag] || tag));
}

// ==========================================================================
// 12. ADMIN HUB & CURRICULUM MANAGEMENT
// ==========================================================================

/**
 * Open modal to add a new curriculum module
 */
function openAddSubjectModal() {
  const form = document.getElementById("addSubjectForm");
  if (form) form.reset();
  openModal("addSubjectModal");
}

/**
 * Add a new curriculum subject/module to the master catalog
 */
function addSubject(subjectData) {
  if (!subjectData.code || !subjectData.name || !subjectData.course || !subjectData.semester || isNaN(subjectData.fee)) {
    showNotification("Please fill in all required module fields with valid numbers.", "warning");
    return false;
  }

  const codeUpper = subjectData.code.trim().toUpperCase();
  const exists = appState.subjects.some(s => s.code.toUpperCase() === codeUpper && s.course === subjectData.course);
  if (exists) {
    showNotification(`Module code '${codeUpper}' already exists for ${subjectData.course}.`, "danger");
    return false;
  }

  const newSubject = {
    id: `SUB_${codeUpper.replace(/[^A-Z0-9]/g, "")}_${Date.now().toString().slice(-4)}`,
    code: codeUpper,
    name: subjectData.name.trim(),
    course: subjectData.course.trim(),
    semester: parseInt(subjectData.semester, 10),
    fee: parseFloat(subjectData.fee),
    elective: Boolean(subjectData.elective),
    assessmentType: subjectData.assessmentType || "Written & Theory Examination"
  };

  appState.subjects.push(newSubject);
  saveData();
  logAudit("Module Added", `Added ${newSubject.code} (${newSubject.name}) to ${newSubject.course} Sem ${newSubject.semester} - Fee: $${newSubject.fee.toFixed(2)}`);
  displaySubjects();
  renderAdminHub();
  showNotification(`Curriculum module ${newSubject.code} added successfully!`, "success");
  return true;
}

/**
 * Open modal to edit subject examination fee
 */
function openEditFeeModal(subjectId) {
  const sub = appState.subjects.find(s => s.id === subjectId);
  if (!sub) return;

  const idInput = document.getElementById("editFeeSubjectId");
  const codeEl = document.getElementById("editFeeSubjectCode");
  const nameEl = document.getElementById("editFeeSubjectName");
  const feeInput = document.getElementById("editFeeAmount");

  if (idInput) idInput.value = sub.id;
  if (codeEl) codeEl.textContent = sub.code;
  if (nameEl) nameEl.textContent = `${sub.name} (${sub.course} • Sem ${sub.semester})`;
  if (feeInput) feeInput.value = sub.fee.toFixed(2);

  openModal("editFeeModal");
}

/**
 * Update exam fee for a specific module
 */
function updateSubjectFee(subjectId, newFee) {
  const sub = appState.subjects.find(s => s.id === subjectId);
  if (!sub) return false;

  const oldFee = sub.fee;
  sub.fee = parseFloat(newFee);
  saveData();
  logAudit("Fee Modified", `Updated exam fee for ${sub.code} from $${oldFee.toFixed(2)} to $${sub.fee.toFixed(2)}`);
  displaySubjects();
  renderAdminHub();
  showNotification(`Examination fee for ${sub.code} updated to $${sub.fee.toFixed(2)}.`, "success");
  return true;
}

/**
 * Delete a curriculum module from the catalog
 */
function deleteSubject(subjectId) {
  const sub = appState.subjects.find(s => s.id === subjectId);
  if (!sub) return;

  const isInUse = appState.registrations.some(
    r => r.status !== "Cancelled" && r.subjects.some(s => s.code === sub.code)
  );

  if (isInUse) {
    if (!confirm(`Warning: Module ${sub.code} is referenced in active student registrations. Are you sure you want to delete it from the master catalog?`)) {
      return;
    }
  } else {
    if (!confirm(`Delete module ${sub.code}: ${sub.name} (${sub.course})?`)) {
      return;
    }
  }

  appState.subjects = appState.subjects.filter(s => s.id !== subjectId);
  saveData();
  logAudit("Module Deleted", `Removed curriculum module ${sub.code} (${sub.name}) from ${sub.course}`);
  displaySubjects();
  renderAdminHub();
  showNotification(`Module ${sub.code} has been deleted.`, "warning");
}

/**
 * Render the entire Admin Hub interface (KPIs, tables, audit trail, settings)
 */
function renderAdminHub() {
  // 1. Update KPI Counters
  const totalStudentsEl = document.getElementById("adminKpiTotalStudents");
  const registrationsEl = document.getElementById("adminKpiRegistrations");
  const revenueEl = document.getElementById("adminKpiTotalRevenue");
  const modulesEl = document.getElementById("adminKpiActiveModules");

  const activeRegistrations = appState.registrations.filter(r => r.status !== "Cancelled");
  const totalRev = activeRegistrations.reduce((sum, r) => sum + (r.totalFee || 0), 0);

  if (totalStudentsEl) totalStudentsEl.textContent = appState.students.length;
  if (registrationsEl) registrationsEl.textContent = activeRegistrations.length;
  if (revenueEl) revenueEl.textContent = `$${totalRev.toFixed(2)}`;
  if (modulesEl) modulesEl.textContent = appState.subjects.length;

  // 2. Render Audit Trail
  const auditBody = document.getElementById("adminAuditTrailBody");
  if (auditBody) {
    if (appState.auditTrail.length === 0) {
      auditBody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; color: var(--text-subtle); padding: 1.5rem;">
            No audit records logged yet.
          </td>
        </tr>
      `;
    } else {
      auditBody.innerHTML = appState.auditTrail.slice(0, 8).map(entry => `
        <tr>
          <td style="font-size: 0.8125rem; white-space: nowrap; color: var(--text-subtle);">${escapeHTML(entry.timestamp)}</td>
          <td><span class="badge badge-neutral">${escapeHTML(entry.action)}</span></td>
          <td style="font-size: 0.875rem;">${escapeHTML(entry.details)}</td>
        </tr>
      `).join("");
    }
  }

  // 3. Render Admin Master Modules Table
  const modulesBody = document.getElementById("adminModulesTableBody");
  if (modulesBody) {
    const searchInput = document.getElementById("adminModuleSearchInput");
    const courseFilter = document.getElementById("adminModuleCourseFilter");

    const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filterCourse = courseFilter ? courseFilter.value : "ALL";

    const filteredModules = appState.subjects.filter(sub => {
      const matchQ = !q || 
        sub.code.toLowerCase().includes(q) || 
        sub.name.toLowerCase().includes(q) || 
        (sub.course && sub.course.toLowerCase().includes(q));
      const matchCourse = filterCourse === "ALL" || sub.course === filterCourse;
      return matchQ && matchCourse;
    });

    if (filteredModules.length === 0) {
      modulesBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: var(--text-subtle); padding: 2rem;">
            No modules match the filter. Click "+ Add Module" to register a new course syllabus.
          </td>
        </tr>
      `;
    } else {
      modulesBody.innerHTML = filteredModules.map(sub => {
        const assessBadge = getAssessmentBadge(sub.assessmentType);
        return `
          <tr>
            <td><strong style="font-family: var(--font-mono);">${escapeHTML(sub.code)}</strong></td>
            <td>
              <div>${escapeHTML(sub.name)}</div>
              ${sub.elective ? '<span class="badge badge-elective" style="font-size: 0.6875rem;">Elective</span>' : '<span class="badge badge-neutral" style="font-size: 0.6875rem;">Core</span>'}
            </td>
            <td><span class="badge badge-course">${escapeHTML(sub.course || "General")}</span></td>
            <td>Sem ${sub.semester}</td>
            <td>${assessBadge}</td>
            <td><strong>$${sub.fee.toFixed(2)}</strong></td>
            <td>
              <div style="display: flex; gap: 0.25rem;">
                <button class="btn btn-secondary btn-sm" onclick="openEditFeeModal('${sub.id}')" title="Adjust Exam Fee">Fee</button>
                <button class="btn btn-danger btn-sm" onclick="deleteSubject('${sub.id}')" title="Delete Module">×</button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  // 4. Update Admin Settings Fields if present
  const procFeeInput = document.getElementById("settingProcessingFee");
  const lateFeeInput = document.getElementById("settingLateFee");
  const sessionInput = document.getElementById("settingSessionName");

  if (procFeeInput && !procFeeInput.matches(":focus")) procFeeInput.value = appState.processingFee.toFixed(2);
  if (lateFeeInput && !lateFeeInput.matches(":focus")) lateFeeInput.value = appState.lateFee.toFixed(2);
  if (sessionInput && !sessionInput.matches(":focus")) sessionInput.value = appState.sessionName;

  // 5. Update Session Bar text elements
  const barSessionName = document.getElementById("adminSessionNameDisp");
  if (barSessionName) barSessionName.textContent = appState.sessionName;
}

/**
 * Export complete registration database to CSV for official college records
 */
function exportFullRegistryCSV() {
  if (appState.registrations.length === 0) {
    showNotification("No registration records to export.", "warning");
    return;
  }

  const headers = [
    "Registration ID",
    "Candidate ID",
    "Candidate Name",
    "Department Course",
    "Semester",
    "Accommodation Support",
    "Enrolled Modules",
    "Module Count",
    "Subject Fees ($)",
    "Processing Fee ($)",
    "Total Paid ($)",
    "Status",
    "Receipt Number",
    "Registration Date"
  ];

  const rows = appState.registrations.map(r => {
    const student = appState.students.find(s => s.id === r.studentId);
    const accom = (student && student.accommodation) || r.accommodation || "Standard";
    const modulesStr = r.subjects.map(s => `${s.code}: ${s.name}`).join(" | ");

    return [
      `"${r.registrationId}"`,
      `"${r.studentId}"`,
      `"${r.studentName}"`,
      `"${r.course}"`,
      r.semester,
      `"${accom}"`,
      `"${modulesStr}"`,
      r.subjects.length,
      r.subjectTotal.toFixed(2),
      r.processingFee.toFixed(2),
      r.totalFee.toFixed(2),
      `"${r.status}"`,
      `"${r.receiptNumber || ''}"`,
      `"${r.date}"`
    ];
  });

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Danhiko_College_Exam_Registry_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showNotification("Full registry CSV exported successfully.", "success");
}

/**
 * Reset system data to fresh official master catalog
 */
function resetSystemDefaults() {
  if (!confirm("Are you sure you want to reset all data to institutional defaults? This will reload all 4 vocational course modules and sample student records.")) {
    return;
  }

  localStorage.clear();
  appState.students = [...SAMPLE_STUDENTS];
  appState.subjects = [...INITIAL_SUBJECTS];
  appState.registrations = [];
  appState.processingFee = 5.00;
  appState.lateFee = 10.00;
  appState.sessionName = "November 2026 National Examinations";
  appState.auditTrail = [
    {
      timestamp: new Date().toLocaleString(),
      action: "System Reset",
      details: "Database reset to official institutional catalog for all 4 vocational departments."
    }
  ];

  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 14);
  defaultDate.setHours(23, 59, 0, 0);
  appState.deadline = defaultDate.toISOString().slice(0, 16);

  saveData();
  displayStudents();
  displaySubjects();
  displayRegistrations();
  refreshStudentDropdown();
  updateDashboardKPIs();
  renderAdminHub();
  generateReport();
  showNotification("System restored to official institutional curriculum defaults!", "success");
}

// ==========================================================================
// 13. INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load data
  loadData();

  // 2. Initialize UI components
  displayStudents();
  displaySubjects();
  displayRegistrations();
  refreshStudentDropdown();
  updateDashboardKPIs();
  generateReport();
  renderAdminHub();

  // 3. Setup Deadline Input default value
  const deadlineInput = document.getElementById("deadlineDatetimeInput");
  if (deadlineInput && appState.deadline) {
    deadlineInput.value = appState.deadline;
  }

  // 4. Start Countdown Timer (Every second)
  updateCountdown();
  countdownTimerInterval = setInterval(updateCountdown, 1000);

  // 5. System Nav Tab Switchers
  document.querySelectorAll(".system-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchSystemTab(btn.dataset.tab);
      if (btn.dataset.tab === "admin") {
        renderAdminHub();
      }
    });
  });

  // 6. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById("mobileNavToggle");
  const navLinks = document.getElementById("navLinksMenu");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // 7. Student Search & Course/Semester Filter
  const studentSearch = document.getElementById("studentSearchInput");
  const studentFilter = document.getElementById("studentSemesterFilter");
  const studentCourseFilter = document.getElementById("studentCourseFilter");
  if (studentSearch) studentSearch.addEventListener("input", displayStudents);
  if (studentFilter) studentFilter.addEventListener("change", displayStudents);
  if (studentCourseFilter) studentCourseFilter.addEventListener("change", displayStudents);

  // 8. Add Student Form Submit
  const studentForm = document.getElementById("studentForm");
  if (studentForm) {
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const mode = document.getElementById("studentFormMode").value;
      const originalId = document.getElementById("studentFormId").value;
      const accomEl = document.getElementById("stdInputAccommodation");

      const studentData = {
        id: document.getElementById("stdInputId").value,
        name: document.getElementById("stdInputName").value,
        course: document.getElementById("stdInputCourse").value,
        semester: document.getElementById("stdInputSemester").value,
        email: document.getElementById("stdInputEmail").value,
        accommodation: accomEl ? accomEl.value : "Standard (None Required)"
      };

      let success = false;
      if (mode === "add") {
        success = addStudent(studentData);
      } else {
        success = updateStudent(originalId, studentData);
      }

      if (success) {
        closeModal("studentModal");
      }
    });
  }

  // 9. Subject Filter Tabs & Course Dropdown in Subject view
  document.querySelectorAll(".subject-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".subject-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      displaySubjects(btn.dataset.semester);
    });
  });

  const subjectCourseFilter = document.getElementById("subjectCourseFilter");
  if (subjectCourseFilter) {
    subjectCourseFilter.addEventListener("change", () => {
      const activeBtn = document.querySelector(".subject-filter-btn.active");
      const activeSem = activeBtn ? activeBtn.dataset.semester : "ALL";
      displaySubjects(activeSem);
    });
  }

  // 10. Registration Form Student Select
  const regSelect = document.getElementById("regStudentSelect");
  if (regSelect) {
    regSelect.addEventListener("change", (e) => {
      onRegistrationStudentSelect(e.target.value);
    });
  }

  // 11. Registration Proceed to Confirmation
  const proceedBtn = document.getElementById("proceedToConfirmBtn");
  if (proceedBtn) {
    proceedBtn.addEventListener("click", prepareRegistrationConfirmation);
  }

  // 12. Final Confirm Registration in Modal
  const confirmRegBtn = document.getElementById("btnConfirmRegistrationFinal");
  if (confirmRegBtn) {
    confirmRegBtn.addEventListener("click", saveRegistration);
  }

  // 13. Registration Table Search & Filter
  const regSearch = document.getElementById("regSearchInput");
  const regStatus = document.getElementById("regStatusFilter");
  if (regSearch) regSearch.addEventListener("input", displayRegistrations);
  if (regStatus) regStatus.addEventListener("change", displayRegistrations);

  // 14. Deadline Update Form
  const deadlineForm = document.getElementById("deadlineForm");
  if (deadlineForm) {
    deadlineForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("deadlineDatetimeInput").value;
      updateDeadline(val);
      logAudit("Deadline Updated", `New deadline set to: ${val}`);
      renderAdminHub();
    });
  }

  // 15. Email Reminders UI
  const emailSelect = document.getElementById("emailStudentSelect");
  if (emailSelect) {
    emailSelect.addEventListener("change", renderSelectedEmailPreview);
  }

  const sendSingleBtn = document.getElementById("btnSendSingleReminder");
  if (sendSingleBtn) {
    sendSingleBtn.addEventListener("click", simulateSendEmailReminder);
  }

  const sendAllBtn = document.getElementById("btnSendAllReminders");
  if (sendAllBtn) {
    sendAllBtn.addEventListener("click", simulateSendAllReminders);
  }

  // 16. Reports Actions
  const btnExportCsv = document.getElementById("btnExportCsv");
  if (btnExportCsv) {
    btnExportCsv.addEventListener("click", exportFullRegistryCSV);
  }

  const btnPrintReport = document.getElementById("btnPrintReport");
  if (btnPrintReport) {
    btnPrintReport.addEventListener("click", () => window.print());
  }

  // 17. Contact Form Simulation
  const contactForm = document.getElementById("institutionalContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("Thank you. Your inquiry has been submitted to the Danhiko Registry Office.", "success");
      contactForm.reset();
    });
  }

  // 18. Receipt Selector Dropdown Change
  const receiptDropdown = document.getElementById("receiptSelectorDropdown");
  if (receiptDropdown) {
    receiptDropdown.addEventListener("change", (e) => {
      if (e.target.value) {
        viewReceipt(e.target.value, false);
      }
    });
  }

  if (appState.registrations.length > 0) {
    viewReceipt(appState.registrations[0].registrationId, false);
  }

  // 19. Quick navigation helper buttons
  document.querySelectorAll("[data-nav-tab]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = el.dataset.navTab;
      const portal = document.getElementById("exam-registration-portal");
      if (portal) {
        portal.scrollIntoView({ behavior: "smooth" });
      }
      switchSystemTab(targetTab);
    });
  });

  // 20. Admin Hub Event Listeners
  const addSubForm = document.getElementById("addSubjectForm");
  if (addSubForm) {
    addSubForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const subData = {
        code: document.getElementById("newSubCode").value,
        name: document.getElementById("newSubName").value,
        course: document.getElementById("newSubCourse").value,
        semester: document.getElementById("newSubSemester").value,
        fee: document.getElementById("newSubFee").value,
        assessmentType: document.getElementById("newSubAssessmentType").value,
        elective: document.getElementById("newSubElective").checked
      };
      if (addSubject(subData)) {
        closeModal("addSubjectModal");
      }
    });
  }

  const editFeeForm = document.getElementById("editFeeForm");
  if (editFeeForm) {
    editFeeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const subId = document.getElementById("editFeeSubjectId").value;
      const newFee = document.getElementById("editFeeAmount").value;
      if (updateSubjectFee(subId, newFee)) {
        closeModal("editFeeModal");
      }
    });
  }

  const adminSettingsForm = document.getElementById("adminSettingsForm");
  if (adminSettingsForm) {
    adminSettingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const procFee = parseFloat(document.getElementById("settingProcessingFee").value) || 5.00;
      const lateFee = parseFloat(document.getElementById("settingLateFee").value) || 10.00;
      const sessName = document.getElementById("settingSessionName").value.trim() || "November 2026 National Examinations";
      
      appState.processingFee = procFee;
      appState.lateFee = lateFee;
      appState.sessionName = sessName;
      PROCESSING_FEE = procFee;
      LATE_SURCHARGE = lateFee;
      EXAMINATION_SESSION = sessName;

      saveData();
      logAudit("Settings Updated", `Processing Fee: $${procFee.toFixed(2)}, Late Fee: $${lateFee.toFixed(2)}, Session: ${sessName}`);
      renderAdminHub();
      showNotification("Institutional Registry Settings updated and saved successfully.", "success");
    });
  }

  const adminModSearch = document.getElementById("adminModuleSearchInput");
  if (adminModSearch) {
    adminModSearch.addEventListener("input", renderAdminHub);
  }

  const adminModCourse = document.getElementById("adminModuleCourseFilter");
  if (adminModCourse) {
    adminModCourse.addEventListener("change", renderAdminHub);
  }

  const adminExportBtn = document.getElementById("adminExportCsvBtn");
  if (adminExportBtn) {
    adminExportBtn.addEventListener("click", exportFullRegistryCSV);
  }

  const btnResetDemo = document.getElementById("btnResetDemoData");
  if (btnResetDemo) {
    btnResetDemo.addEventListener("click", resetSystemDefaults);
  }

  // 21. Close modals on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
        backdrop.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  });

  // 22. Deep link URL query or hash tab switcher for multi-page support
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedTab = urlParams.get("tab") || (window.location.hash ? window.location.hash.replace("#", "") : null);
    if (requestedTab && document.getElementById(`tab_${requestedTab}`)) {
      switchSystemTab(requestedTab);
      if (requestedTab === "admin") {
        renderAdminHub();
      }
    }
  } catch (err) {
    console.warn("Tab switch url parsing error:", err);
  }
});
