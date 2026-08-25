import apollo from "../assets/hospitals/apollo.png";
import fortis from "../assets/hospitals/fortis.png";
import max from "../assets/hospitals/max.png";
import agarwals from "../assets/hospitals/agarwals.png";
import centreforsight from "../assets/hospitals/centreforsight.png";
import hcg from "../assets/hospitals/hcg.png";
import aig from "../assets/hospitals/aig.png";
import jupitar from "../assets/hospitals/jupitar.png";
import jaslok from "../assets/hospitals/jaslok.png";
import gems from "../assets/hospitals/gems.png";
import sankara from "../assets/hospitals/sankara.png";
import art from "../assets/hospitals/art.png";
import artemis from "../assets/hospitals/artemis.png";
import indira from "../assets/hospitals/indira.png";
import kims from "../assets/hospitals/kims.png";
import manipal from "../assets/hospitals/manipal.png";
import mgm from "../assets/hospitals/mgm.png";
import medanta from "../assets/hospitals/medanta.png";
import netaji from "../assets/hospitals/netaji.png";
import yashoda from "../assets/hospitals/yashoda.png";
import wockhardt from "../assets/hospitals/wockhardt.png";
import rainbow from "../assets/hospitals/rainbow.png";
import sightavenue from "../assets/hospitals/sightavenue.png";
// import  from

import imgOberoi from "../assets/doctors/I_P_S_Oberoi.png";
import imgAtulMishra from "../assets/doctors/Atul_Mishra.png";
import imgRajuVaishya from "../assets/doctors/Prof_Raju_Vaishya.png";
import imgSimonThomas from "../assets/doctors/Simon_Thomas.png";
import imgKesavan from "../assets/doctors/Kesavan_A_R.png";
import imgKaushalMalhan from "../assets/doctors/Kaushal_Malhan.png";
import imgSanjayGupta from "../assets/doctors/Sanjay_Gupta.png";
import imgMaheshGupta from "../assets/doctors/Mahesh_Gupta.png";
import imgMalathi from "../assets/doctors/Malathi_Sathiyasekaran.png";
import imgVipulroy from "../assets/doctors/Vipluroy_Dayanand_Rathod.png";
import imgAjayKumar from "../assets/doctors/Ajay_Kumar.png";
import imgParulSharma from "../assets/doctors/Parul_Maheshwari_Sharma.png";
import imgVishalArora from "../assets/doctors/Vishal_Arora.png";
import imgAartiNangia from "../assets/doctors/Aarti_Nangia.png";
import imgAnitaSethi from "../assets/doctors/Anita_Sethi.png";
import imgKalpana from "../assets/doctors/Kalpana_R.png";
import imgAtulSharma from "../assets/doctors/Atul_Sharma.png";
import imgDKBhargava from "../assets/doctors/D_K_Bhargava.png";
import imgSKGupta from "../assets/doctors/S_K_Gupta.png";
import imgSumanto from "../assets/doctors/Sumanto_Mukhopadhyay.png";
import imgRameshB from "../assets/doctors/Ramesh_B.png";
import imgAjayKaul from "../assets/doctors/Ajay_Kaul.png";
import imgSanjeev from "../assets/doctors/Sanjeev_Gera.png";
import imgSanjeevGera from "../assets/doctors/Sanjeev_Gera.png";
import imgAbhayKumar from "../assets/doctors/Abhay_Kumar.png";
import imgSrivathsan from "../assets/doctors/R_Srivathsan.png";
import imgShanmuga from "../assets/doctors/Shanmugasundaram_Rajaian.png";
import imgSVKotwal from "../assets/doctors/S_V_Kotwal.png";
import imgPiyushVarshney from "../assets/doctors/Piyush_Varshney.png";
import imgSumitSingh from "../assets/doctors/Sumit_Singh.png";
import imgJyotiSharma from "../assets/doctors/Jyoti_Bala_Sharma.png";
import imgSureshRawat from "../assets/doctors/Suresh_Kr_Rawat.png";
import imgRajeshAhlawat from "../assets/doctors/Rajesh_Ahlawat.png";
import imgAvanishArora from "../assets/doctors/Avanish_Arora.png";
export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  city: string;
  experience: string;
  image: string | { src: string; height: number; width: number; blurDataURL?: string };
  designation: string;
  qualifications: string[];
  training?: string[];
  fieldOfExpertise?: string[];
  specialityInterest?: string[];
  awards?: string[];
  experienceDetails?: string[];
  about?: string;
  clinicalFocus?: string[];
  procedures?: string[];
  fellowships?: string[];
  workExperience?: string[];
};

export type Hospital = {
  name: string;
  location: string;
  city: string;
  image: string | { src: string; height: number; width: number; blurDataURL?: string };
  logo: string | { src: string; height: number; width: number; blurDataURL?: string };
  description: string;
  specialities: string[];
  accreditation: string;
};

export const doctors: Doctor[] = [
  {
    id: "dr-i-p-s-oberoi",
    name: "Dr. I P S Oberoi",
    specialization: "Orthopaedics",
    hospital: "Artemis Hospitals",
    city: "Gurgaon",
    experience: "15 Years",
    image: imgOberoi,
    designation:
      "Chairperson - Orthopaedics Program & Chief - Robotic Joint Replacement & Arthroscopy Surgery",
    qualifications: ["MS (Orth.)", "MCh Orth. (Liverpool, U.K.)"],
    training: [
      "Trained in joint replacement and adult reconstructive trauma surgery from Klinik and Poliklinik fur Unfall-Hand & Wiederherstellungschirurgie, Universitatsklinikum, Munster Germany",
      "Surgical training in knee reconstructive surgery - Henriettenstiftung, Hannover, Germany",
      "Joint replacement training - Nuffield Hospital, Exeter, U.K., and Joint Replacement unit, Queen Elizabeth Hospital, Exeter, U.K.",
      "Trained in knee Arthroscopy and reconstruction - Sporthopaedicum, Straubing, Germany and Rosebank clinic, Johannesburg, South Africa",
      "Trained in shoulder surgery - Center Hospitalier, St Gregoire, Rhein, France and Cape shoulder clinic, Cape Town, South Africa",
    ],
    about:
      "Extensive experience across leading institutions, ensuring world-class expertise and patient-centric care.",
    clinicalFocus: [
      "Robotic Knee Replacement (incl. Robotic)",
      "Joint Replacement",
      "Advanced Arthroscopic Surgery",
      "Sports Injury Management",
      "Personalized Care & Faster Recovery",
    ],
  },
  {
    id: "dr-atul-mishra",
    name: "Dr. Atul Mishra",
    specialization: "Orthopaedics",
    hospital: "Fortis Escorts",
    city: "Delhi",
    experience: "27 Years",
    image: imgAtulMishra,
    designation: "Chairman - Orthopaedics & Joint Replacement",
    qualifications: ["MBBS", "MS (Orthopaedics)", "Fellowship Orthopaedic Sports Traumatology"],
    clinicalFocus: [
      "Knee Replacement",
      "Hip Joint Replacement",
      "Robotic and Computer navigated Joint reconstruction",
      "Joint Replacement",
    ],
  },
  {
    id: "dr-raju-vaishya",
    name: "Dr. Prof Raju Vaishya",
    specialization: "Orthopaedics",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "40 Years",
    image: imgRajuVaishya,
    designation: "Senior Consultant Orthopedic and Joint Replacement",
    qualifications: [
      "MBBS",
      "MS (Orth)",
      "MCh (Liverpool)",
      "FRCS (London)",
      "FACS (USA)",
      "PG DHA",
    ],
    clinicalFocus: [
      "Knee & Hip Surgery",
      "Total Joint Replacement (incl. Robotic)",
      "Arthroscopic Surgery",
    ],
  },
  {
    id: "dr-simon-thomas",
    name: "Dr. Simon Thomas",
    specialization: "Orthopaedics",
    hospital: "Max Super Speciality",
    city: "Delhi",
    experience: "20 Years",
    image: imgSimonThomas,
    designation: "Director - Robotic Joint Replacements & Orthopaedics",
    qualifications: ["MBBS", "MS (Orthopaedics)"],
    clinicalFocus: [
      "Advanced Robotic & World-Class Joint Replacement Solutions",
      "Knee Replacement",
      "Hip Joint Replacement",
      "Robotic-Assisted Precision Surgery (More Accuracy | Less Pain | Better Recovery)",
    ],
  },
  {
    id: "dr-kesavan-a-r",
    name: "Dr. Kesavan A R",
    specialization: "Orthopaedics",
    hospital: "MGM Healthcare",
    city: "Chennai",
    experience: "25 Years",
    image: imgKesavan,
    designation:
      "Clinical Lead & Senior Consultant - Trauma and Orthopaedics, Department of Orthopaedics",
    qualifications: ["MBBS", "MS"],
    about:
      "Extensive experience across leading institutions, including Fortis Healthcare, ensuring world-class expertise and patient-centric care.",
    clinicalFocus: [
      "Tissue Preserving Knee Replacement (incl. Robotic)",
      "Advanced Arthroscopic Surgery",
      "Personalized Care & Faster Recovery",
    ],
  },
  {
    id: "dr-kaushal-malhan",
    name: "Dr. Kaushal Malhan",
    specialization: "Orthopaedics",
    hospital: "Fortis Escorts",
    city: "Mumbai",
    experience: "25 Years",
    image: imgKaushalMalhan,
    designation: "Director Orthopaedics | Fortis Mulund",
    qualifications: [
      "MS (Orthopaedics)",
      "D Orth",
      "FRCS (General Surgery) UK",
      "FRCS (Trauma & Orthopaedics) UK",
      "Diploma (Sports Medicine)",
    ],
    about:
      "Extensive experience across leading institutions, including Fortis Healthcare, ensuring world-class expertise and patient-centric care.",
    awards: [
      "LIMCA BOOK OF WORLD RECORDS, 2011 - For Tissue Preserving Total Knee Replacement Technique",
    ],
    clinicalFocus: [
      "Tissue Preserving Knee Replacement (incl. Robotic)",
      "Advanced Arthroscopic Surgery",
      "Personalized Care",
      "Trusted Expertise & Proven Results",
    ],
  },
  {
    id: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    specialization: "Orthopaedics",
    hospital: "Medanta – The Medicity",
    city: "Gurgaon",
    experience: "25 Years",
    image: imgSanjayGupta,
    designation: "Director Orthopaedics | Medanta Noida",
    qualifications: [
      "FRCS (Trauma and Orthopaedics) Intercollegiate Speciality Board UK",
      "MCh (Orthopaedics) University of Liverpool UK",
      "MRCS Royal College of Surgeons of Edinburgh UK",
      "MS (Orthopaedics) SN Medical College Agra U.P",
      "MBBS BRD Medical School Gorakhpur U.P.",
    ],
    about:
      "Extensive experience across leading institutions, including Medanta, ensuring world-class expertise and patient-centric care.",
    clinicalFocus: [
      "Tissue Preserving Knee Replacement (incl. Robotic)",
      "Advanced Arthroscopic Surgery",
      "Personalized Care",
      "Trusted Expertise & Proven Results",
    ],
  },
  {
    id: "dr-mahesh-gupta",
    name: "Dr. Mahesh Gupta",
    specialization: "Gastroenterology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "20 Years",
    image: imgMaheshGupta,
    designation: "Director Gastroenterology | Fortis Noida",
    qualifications: ["MBBS", "MD", "DM (Gastroenterology)"],
    about:
      "Areas of expertise include advanced endoscopic procedures such as ERCP and EUS, along with a keen interest in GI oncology.",
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "GI Oncology Expertise",
      "Comprehensive Digestive Care",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-malathi-sathiyasekaran",
    name: "Dr. Malathi Sathiyasekaran",
    specialization: "Gastroenterology",
    hospital: "MGM Healthcare",
    city: "Chennai",
    experience: "40 Years",
    image: imgMalathi,
    designation:
      "Senior Consultant - Gastroenterology & Hepatology & Paediatric Gastroenterology | MGM Chennai",
    qualifications: [
      "1974 MBBS (Bachelor of Medicine and Bachelor of Surgery) - Kilpauk Medical College, Chennai, Tamil Nadu",
      "1978 DCH (Diploma in Child Health) - Christian Medical College, Vellore, Tamil Nadu",
      "1981 MD (Doctor of Medicine) in Paediatrics - Madras Medical College, Chennai, Tamil Nadu",
      "1986 DM (Doctor of Medicine) in Gastroenterology - Madras Medical College, Chennai, Tamil Nadu",
    ],
    about:
      "Compassionate care. Advanced expertise. Better digestive health for a better life. Comprehensive Care for All Digestive & Liver Disorders.",
    awards: [
      "2008: Excellence in Service on International Women's Day - Board for Women's Concerns, CSI Diocese of Madras",
      "2010: St John's Ambulance Best Doctor Award - Governor of Tamil Nadu",
      "2012: Outstanding Achievement Award on International Women's Day - The Tamilnadu Dr. MGR Medical University",
    ],
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "Paediatric Gastroenterology",
      "Liver & Pancreas Disorders",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-vipulroy-dayanand-rathod",
    name: "Dr. Vipulroy Dayanand Rathod",
    specialization: "Gastroenterology",
    hospital: "Fortis Escorts",
    city: "Mumbai",
    experience: "31 Years",
    image: imgVipulroy,
    designation: "Director Gastroenterology | Fortis Mulund",
    qualifications: ["MBBS", "MS", "Fellow of Advanced Endoscopy"],
    about:
      "Compassionate care. Advanced expertise. Better digestive health for a better life. Comprehensive Care for All Digestive & Liver Disorders.",
    awards: ["Have recognition immediate Past president of Society of GI Endoscopy of India"],
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "Motility & Functional GI Disorders",
      "Liver & Pancreas Disorders",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-ajay-kumar",
    name: "Dr. Ajay Kumar",
    specialization: "Gastroenterology",
    hospital: "Max Super Speciality",
    city: "Delhi",
    experience: "40 Years",
    image: imgAjayKumar,
    designation:
      "Chairman - Gastroenterology & Hepatology - Pan Max and HOD - BLK Institute for Digestive & Liver Diseases",
    qualifications: ["MBBS", "MD (Medicine)", "DM (Gastroenterology)", "MAMS", "FRCP (Glasgow)"],
    fellowships: ["Therapeutic endoscopy at University Hospital, Hamburg"],
    about:
      "Compassionate care. Advanced expertise. Better digestive health for a better life. Comprehensive Care for Digestive & Liver Health.",
    awards: [
      "Conferred prestigious Dr BC Roy award by President of India for the year 2008",
      "Has been in Editorial board of Gastrointestinal Endoscopy - the official journal of American Society of GI Endoscopy",
      "Recipient of J Mitra Olympus award for the endoscopist of the year 2007 by Indian society of Gastroenterology",
      "Has delivered many orations including Prof. Mehta oration API, SISCO Pentax oration SGEI, Prof. K.L. Wig memorial oration Delhi state API",
    ],
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "Liver & Pancreas Disorders",
      "Inflammatory Bowel Diseases",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-parul-sharma",
    name: "Dr. Parul Maheshwari Sharma",
    specialization: "Ophthalmology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "25+ Years",
    image: imgParulSharma,
    designation: "Director Ophthalmology | Fortis Gurgaon",
    qualifications: ["MBBS", "MS", "DNB", "MNAMS", "FICO"],
    about:
      "Dr. Sharma specializes in a wide range of eye conditions, including cataract surgery, glaucoma management, and refractive surgeries. Her thorough diagnostic approach, advanced technology, and personalized care make her one of the most trusted Eye Specialists in Gurgaon.",
    clinicalFocus: [
      "Cataract Surgery",
      "Glaucoma Management",
      "LASIK & Refractive Surgery",
      "Diabetic Eye Care",
      "Comprehensive Eye Care",
    ],
  },
  {
    id: "dr-vishal-arora",
    name: "Dr. Vishal Arora",
    specialization: "Ophthalmology",
    hospital: "Artemis Hospitals",
    city: "Gurgaon",
    experience: "14+ Years",
    image: imgVishalArora,
    designation: "Head - Ophthalmology",
    qualifications: [
      "MBBS - Pt. B D Sharma Post Graduate Institute of Medical Sciences, Rohtak (2003 - 2009)",
      "M.D. Ophthalmology - All India Institute of Medical Sciences, New Delhi (2009 - 2012)",
    ],
    fellowships: [
      "Phacoemulsification and Refractive Surgery - Narayana Nethralaya, Bangalore (2013 - 2014)",
    ],
    specialityInterest: [
      "Dry Eye: Meibography, Lipiview and Lipiflow",
      "Corneal topographic evaluation (Orbscan, Pentacam, Galilei, Sirius)",
      "Corneal pachymetry, Specular microscopy",
      "Epithelial profiling",
      "Ultrasound Biomicroscopy, Anterior Segment OCT",
      "Biometry work up & Refractive surgery work up",
      "Aberrometry (iTrace, Zywave II, OPD 3, iDesign)",
    ],
    clinicalFocus: [
      "Cataract Surgery",
      "LASIK & Refractive Surgery",
      "Keratoconus Management",
      "Dry Eye Management",
      "Advanced Diagnostic & Imaging Technology",
    ],
  },
  {
    id: "dr-aarti-nangia",
    name: "Dr. Aarti Nangia",
    specialization: "Ophthalmology",
    hospital: "Max Super Speciality",
    city: "Delhi",
    experience: "30+ Years",
    image: imgAartiNangia,
    designation:
      "Principal Director - Ophthalmology | Max Super Speciality Hospital, Panchsheel Park",
    qualifications: [
      "Under graduate and postgraduate from reputed Gandhi Eye Institute, AMU, Aligarh",
      "Phaco refractive surgeon over 26 years experience, also in FEMTO cataracts/femto lasik and smile surgery",
      "Certified lasik surgeon from Mumbai, by Dr Rupal Shaw (2008), practising refractive surgeries for over 15 years",
      "Certified squint surgery observer from Sankara Nethralaya, Chennai, 2010",
      "Worked with the famous strabismologist at CFS, Prof Prem Prakash for more than 8 years and practicing squint surgeries over 20 years",
    ],
    awards: [
      "Best Max Hospitals Doctor Award, 2008",
      "WOS Leadership Awards, 2012",
      "WOS Inspirations Award, 2021",
      "Organising Secretary 2022 Nov Women Ophthalmologist Worldwide with Women Ophthalmologist Society Global Conclave",
      "Felicitation for Live Surgery in WOW WOS '22",
    ],
    clinicalFocus: [
      "Cataract Surgery",
      "Refractive Surgery (LASIK, SMILE)",
      "Squint Surgery",
      "FEMTO Cataract & Lasik",
      "Comprehensive Eye Care",
    ],
  },
  {
    id: "dr-anita-sethi",
    name: "Dr. Anita Sethi",
    specialization: "Ophthalmology",
    hospital: "Max Super Speciality",
    city: "Delhi",
    experience: "36+ Years",
    image: imgAnitaSethi,
    designation: "Principal Director & HOD (Max Panchsheel Park) - Cataract, Lasik and Oculoplasty",
    qualifications: [
      "MBBS - Maulana Azad Medical College, New Delhi (1983-1988)",
      "MD Ophthalmology - Dr R P Centre for Ophthalmic Sciences, AIIMS, New Delhi (1990-1992)",
      "DNB Ophthalmology - National Board of Examinations (1992)",
      "FRCS - Royal College of Surgeons, Edinburgh (1997)",
    ],
    workExperience: [
      "Currently working at Max Healthcare",
      "Director & HOD Ophthalmology, Fortis Memorial Research Institute, Gurgaon (2015 till 2024)",
      "HOD Ophthalmology, Artemis Hospital, Gurugram (2007-2015)",
      "Lead Consultant Ophthalmology, Apollo Spectra Hospitals",
      "Consultant Ophthalmologist, Sir Ganga Ram Hospital, New Delhi",
      "Oculoplasty Consultant, Centre for Sight, New Delhi",
      "Registrar, Oculoplasty and Ocular Oncology Unit, Dr R P Centre for Ophthalmic Sciences, AIIMS, New Delhi",
    ],
    clinicalFocus: [
      "Cataract Surgery",
      "LASIK Surgery",
      "Oculoplasty Services",
      "Comprehensive Eye Care",
      "Patient-Centric Care",
    ],
  },
  {
    id: "dr-kalpana-r",
    name: "Dr. Kalpana R",
    specialization: "Ophthalmology",
    hospital: "SIMS Hospital",
    city: "Chennai",
    experience: "24+ Years",
    image: imgKalpana,
    designation: "Senior Consultant - Ophthalmology | SIMS Chennai",
    qualifications: ["MBBS", "DO (Ophthalmology)", "DNB (Ophthalmology)"],
    fellowships: [
      "Alcon Phacoemulsification Fellowship - Advanced Training in Microincision Cataract Surgery",
      "DNB (Ophthalmology) - Voluntary Health Services (VHS), Adyar, Chennai",
    ],
    about: "24+ Years of Uninterrupted Clinical Practice in Ophthalmology in Chennai.",
    awards: [
      "Alcon Phacoemulsification Fellowship - Advanced Surgical Training in Cataract Surgery",
      "Member - All India Ophthalmological Society (AIOS)",
      "Over 1,00,000 Ophthalmic Surgeries Performed with Nil Major Complications",
    ],
    clinicalFocus: [
      "Cataract Surgery",
      "Phacoemulsification Surgery",
      "Comprehensive Eye Care",
      "Patient-Centric Approach",
    ],
  },
  {
    id: "dr-atul-sharma-gastro",
    name: "Dr. Atul Sharma",
    specialization: "Gastroenterology",
    hospital: "Artemis Hospitals",
    city: "Gurgaon",
    experience: "17 Years",
    image: imgAtulSharma,
    designation: "Chief - Motility and Third Space and Gastroenterology | Artemis Gurugram",
    qualifications: [
      "DM: Gastroenterology & Hepatology, SGPGIMS, Lucknow",
      "M.D.: Medicine, Sher-i-Kashmir Institute of Medical Sciences (SKIMS)",
      "M.B.B.S., GMC Jammu",
      "FAIGE: Gastroenterology Fellowship, Baldota Institute of Digestive Sciences, Mumbai",
    ],
    about:
      "Specialized care for complex digestive disorders with a focus on motility, third space and advanced gastrointestinal treatments.",
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "Motility & Functional GI Disorders",
      "Liver & Pancreas Disorders",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-d-k-bhargava",
    name: "Dr. D K Bhargava",
    specialization: "Gastroenterology",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "40 Years",
    image: imgDKBhargava,
    designation: "Senior Consultant Gastroenterology | Apollo Delhi",
    qualifications: ["MBBS", "MD", "PhD", "FACG", "AGAF"],
    about:
      "Comprehensive care for all digestive disorders with advanced endoscopic techniques and a patient-first approach.",
    awards: [
      "Padma Shri Award, conferred by the President of India",
      "Dr. B. C. Roy National Award, conferred by the President of India",
    ],
    clinicalFocus: [
      "Advanced Endoscopic Procedures (ERCP, EUS)",
      "Motility & Functional GI Disorders",
      "Liver & Pancreas Disorders",
      "Personalized Care & Better Outcomes",
    ],
  },
  {
    id: "dr-s-k-gupta",
    name: "Dr. S K Gupta",
    specialization: "Cardiology",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "38+ Years",
    image: imgSKGupta,
    designation: "Senior Consultant Cardiology | Apollo Hospitals, New Delhi",
    qualifications: ["MD", "DM", "DIP.NB Cardiology", "MNAMS", "FICA (USA)"],
    workExperience: [
      "Fellow, Indian College of Cardiology",
      "Fellow, Interventional College of Angiography",
      "Member, Cardiology Society of India",
      "Working as an interventional cardiologist for last 30 years",
      "Working in Indraprastha Apollo Hospitals, New Delhi",
    ],
    about:
      "Committed to providing advanced, compassionate and personalized cardiac care with excellence. Angiographies - 10000+, Angioplasty - 7000+.",
    clinicalFocus: [
      "Pacemakers, EPS",
      "Cardiac catheterization in congenital & valvular heart disease",
      "Valvuloplasty",
      "PDA & ASD closures",
      "Interventional Cardiology",
    ],
  },
  {
    id: "dr-sumanto-mukhopadhyay",
    name: "Dr. Sumanto Mukhopadhyay",
    specialization: "Cardiology",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "15+ Years",
    image: imgSumanto,
    designation: "Cardiology Specialist | Apollo Hospitals",
    qualifications: ["MBBS", "MD (Internal Medicine)", "DM (Cardiology)", "MRCP (London)"],
    about:
      "Committed to providing advanced, compassionate and personalized cardiac care with excellence.",
    clinicalFocus: [
      "Heart arrhythmia",
      "Cardiac Arrhythmias",
      "Expert Cardiac Care",
      "Advanced Technology",
      "Patient Centered Care",
    ],
  },
  {
    id: "dr-ramesh-b",
    name: "Dr. Ramesh B",
    specialization: "Cardiology",
    hospital: "Apollo Hospitals",
    city: "Bangalore",
    experience: "32+ Years",
    image: imgRameshB,
    designation: "Senior Consultant Cardiology | Apollo Bangalore",
    qualifications: ["MBBS", "MD (Gen Med)", "DM (Cardiology)"],
    about:
      "Dr. Ramesh has immense experience in Clinical and Interventional Cardiology. He has to his credit of performing more than 5000 angioplasties, 500 Device closures for Atrial Septal defect and over 7000 Balloon Mitral Valvotomies.",
    workExperience: [
      "Highly experienced Cardiologist in Pacemaker implantations.",
      "Probably the only doctor in India, for having performed 132 Percutaneous Transluminal Septal Myocardial Ablation for Hypertrophic Obstructive Cardiomyopathy, which is the largest number in the country.",
    ],
    clinicalFocus: [
      "Clinical and Interventional Cardiology",
      "Angioplasties & Device Closures",
      "Balloon Mitral Valvotomies",
      "Pacemaker Implantations",
    ],
  },
  {
    id: "dr-ajay-kaul",
    name: "Dr. Ajay Kaul",
    specialization: "Cardiology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "30+ Years",
    image: imgAjayKaul,
    designation: "Chairman Cardiac Science | Fortis Noida",
    qualifications: ["MBBS", "MS (General Surgery)", "M.Ch (Cardiothoracic Surgery)"],
    fellowships: [
      "Fellowship in Heart & Lung Transplant - Hannover Medical School, Germany",
      "Fellowship in Minimally Invasive Cardiac Surgery - Leipzig Heart Centre, Germany",
    ],
    about:
      "With decades of experience and advanced training from renowned institutions in Germany, Dr. Ajay Kaul is committed to providing world-class cardiac care with precision, innovation and compassion.",
    clinicalFocus: [
      "Coronary Artery Bypass Surgery (CABG)",
      "Valve Repair & Replacement",
      "Minimally Invasive Cardiac Surgery",
      "Heart & Lung Transplant",
      "Complex Cardiac Surgeries",
      "Patient-Centered Cardiac Care",
    ],
  },
  {
    id: "dr-sanjeev-gera",
    name: "Dr. Sanjeev Gera",
    specialization: "Cardiology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "20+ Years",
    image: imgSanjeev,
    designation: "Senior Director & HOD Cardiology | Fortis Noida",
    qualifications: [
      "MBBS",
      "MD (Medicine)",
      "DNB - Cardiology (Escorts Heart Centre, ND)",
      "FESC",
      "MACC",
    ],
    fellowships: ["CRT-D Fellowship", "Imaging IVUS Fellowship", "Medtronic TAVR Fellowship"],
    about:
      "With years of experience, international training, and a patient-first approach, Dr. Sanjeev Gera is dedicated to providing comprehensive cardiac care with compassion, precision, and advanced technology.",
    clinicalFocus: [
      "Interventional Cardiology",
      "Coronary Angiography & Angioplasty",
      "Complex Coronary Interventions",
      "Heart Failure Management",
      "Cardiac Device Implantation (CRT-D)",
      "Structural Heart Disease",
      "TAVR (Transcatheter Aortic Valve Replacement)",
      "Advanced Cardiac Imaging (IVUS)",
      "Preventive Cardiology",
    ],
  },
  {
    id: "dr-abhay-kumar",
    name: "Dr. Abhay Kumar",
    specialization: "Urology",
    hospital: "Manipal Hospital",
    city: "Delhi",
    experience: "15+ Years",
    image: imgAbhayKumar,
    designation: "Consultant & HOD - Uro-Oncology & Robotic Surgery | Manipal Hospitals",
    qualifications: ["MBBS", "MS", "DNB (Urology)", "SR (Uro-Oncology, TMH - Mumbai)"],
    about: "Expert care using open, laparoscopic, and robotic techniques for a healthier tomorrow.",
    clinicalFocus: [
      "Bladder Cancer Treatment",
      "Uro-Oncology (Kidney, Prostate, Bladder Cancers)",
      "Neo-Bladder Surgery (Complex reconstructive surgery)",
      "Robotic Surgery",
      "Hematuria Management",
      "Benign Prostatic Hyperplasia (BEP)",
      "Laser Prostate Surgery",
      "Kidney Surgery & Partial Nephrectomy",
      "Comprehensive Urological Care",
    ],
  },
  {
    id: "dr-r-srivathsan",
    name: "Dr. R. Srivathsan",
    specialization: "Urology",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "15+ Years",
    image: imgSrivathsan,
    designation: "Consultant Urology, Uro-Oncology & Robotic Surgery | Apollo Hospitals",
    qualifications: [
      "Master of Surgery in General Surgery from Maulana Azad Medical College, New Delhi (2010)",
      "Master of Surgery in Urology from Kilpauk Medical College, Chennai (2014)",
      "Diplomate of National Board in Urology (2015)",
    ],
    fellowships: [
      "Clinical Observership from Royal Free and Royal London Hospital, NHS Barts, London (2017)",
      "Vattikuti fellow in Robotic Uro-Oncology from Kokilaben Dhirubhai Ambani hospital (2018)",
    ],
    about: "Expert Care. Advanced Technology. Better Outcomes.",
    clinicalFocus: [
      "Robotic and Minimally Invasive Urology",
      "Endo-urology",
      "Reconstructive Urology",
      "Robotic Uro-Oncology",
    ],
  },
  {
    id: "dr-shanmugasundaram",
    name: "Dr. Shanmugasundaram Rajaian",
    specialization: "Urology",
    hospital: "SIMS Hospital",
    city: "Chennai",
    experience: "27+ Years",
    image: imgShanmuga,
    designation: "Senior Consultant | SIMS Chennai",
    qualifications: [
      "MBBS",
      "MS (Surgery)",
      "M.Ch (Urology)",
      "DNB (Urology)",
      "MNAMS",
      "MRCSEd",
      "FRCS (Urology) Edinburgh",
    ],
    about: "Advanced expertise. Compassionate care. Better urology health, better life.",
    awards: [
      "Performed over 1250 laparoscopic donor nephrectomies",
      "Conducted more than 225 Renal Transplantation Procedures",
      "Published over 47 national and international journals",
    ],
    clinicalFocus: [
      "Renal Transplantation - Living & Deceased Donor",
      "Laparoscopic Donor Nephrectomy & Cadaveric Graft Harvesting",
      "Vascular & Urological Complication Management",
      "Reconstructive Urology (Complex Urethroplasty)",
      "Vesicovaginal Fistula, Rectourethral Fistula & Urogenital Fistula Repair",
      "Uro-Oncology (Bladder, Kidney, Penile & Genitourinary Tumors)",
      "Radical Cystectomy, Nephrectomy & Nephron-Sparing Surgery",
      "Endourology (PCNL, Ureteroscopy & Stone Management)",
      "Extracorporeal Shock Wave Lithotripsy (ESWL)",
      "Laparoscopic Urology",
      "Transurethral Resection (TURP & TURBT)",
      "Dialysis Vascular Access Surgery",
    ],
  },
  {
    id: "dr-s-v-kotwal",
    name: "Dr. (Col) S. V. Kotwal",
    specialization: "Urology",
    hospital: "Artemis Hospitals",
    city: "Gurgaon",
    experience: "31+ Years",
    image: imgSVKotwal,
    designation: "Chairperson Emeritus and DNB Teacher - Urology | Artemis Gurugram",
    qualifications: [
      "M.B.B.S. from Grant Medical College, Bombay University",
      "M.S. (Gen. Surgery) from Armed Forces Medical College, Pune",
      "M.Ch. (Urology) from All India Institute of Medical Sciences",
    ],
    about: "Delivering comprehensive urological care with precision, innovation and compassion.",
    clinicalFocus: [
      "Trans-urethral Surgery",
      "PCNL",
      "URS",
      "Pediatric Urology",
      "Urological Oncology",
      "Female Urology",
      "Renal Transplantation",
      "Micro Surgery for Infertility",
    ],
  },
  {
    id: "dr-piyush-varshney",
    name: "Dr. Piyush Varshney",
    specialization: "Urology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "26+ Years",
    image: imgPiyushVarshney,
    designation: "Director Urology | Fortis Noida",
    qualifications: [
      "MBBS",
      "MS",
      "M.Ch. (UROLOGY)",
      "Trained in WHO GCP - Good Clinical Practice",
    ],
    about: "Delivering comprehensive urological care with precision, innovation and compassion.",
    awards: [
      "Winner Third Prize - Research Paper Competition - at SRS Annual Meet, LTMGH (2010). Title: 'Suprapubic Cystostomy using Optical Urethrotome in Female Patients'",
    ],
    clinicalFocus: [
      "Minimally Invasive Urology",
      "Kidney Stones Management",
      "Prostate Disorders",
      "Bladder Disorders",
      "Uro-Oncology",
      "Kidney & Organ Transplant",
      "Male Infertility & Andrology",
    ],
  },
  {
    id: "dr-sumit-singh",
    name: "Dr. Sumit Singh",
    specialization: "Neurology",
    hospital: "Artemis Hospitals",
    city: "Gurgaon",
    experience: "20+ Years",
    image: imgSumitSingh,
    designation: "Director Neurology | Artemis Hospitals",
    qualifications: [
      "MBBS - MLB Medical College, Jhansi",
      "MD (Medicine) - LLRM Medical College, Meerut",
      "DM (Neurology) - All India Institute of Medical Sciences, Delhi",
    ],
    about:
      "Expert care for a healthier tomorrow with personalized treatment and evidence-based approach.",
    procedures: [
      "Botox for Headache, Trigeminal Neuralgia, Movement Disorders and Spasticity",
      "Plasma Exchange",
      "Injections for Carpal Tunnel",
    ],
    clinicalFocus: [
      "Parkinson's disease",
      "Writer's Cramp",
      "Spasmodic Torticollis",
      "Blepharospasm",
      "Hemifacial Spasm",
      "Spasticity",
      "Multiple sclerosis",
      "Myasthenia Gravis",
      "Neuropathies",
      "Headache",
    ],
  },
  {
    id: "dr-jyoti-sharma",
    name: "Dr. Jyoti Bala Sharma",
    specialization: "Neurology",
    hospital: "Fortis Escorts",
    city: "Gurgaon",
    experience: "20+ Years",
    image: imgJyotiSharma,
    designation: "Director Neurology | Fortis Noida",
    qualifications: [
      "MBBS",
      "MD",
      "DM (Neurology) from G.B. Pant Institute of Post Graduate Medical Education and Research (GIPMER), New Delhi",
    ],
    about:
      "She has vast experience of thrombolytic therapy (clot busting therapy) for stroke, Botox Injection therapy, carpal tunnel injection therapy and Neuroelectrophysiology (EMG and NCV). Her immense patience helps in a big way in patient satisfaction and also helps in medical excellence.",
    clinicalFocus: [
      "Movement Disorders (Parkinson's, Tremors, Dystonia)",
      "Headache Management (Migraine, Tension, Cluster Headaches)",
      "Stroke Care & Thrombolysis",
      "Botox Injection Therapy",
      "Carpal Tunnel Injection Therapy",
      "Neuroelectrophysiology (EMG & NCV)",
      "Comprehensive Neurological Care",
    ],
  },
  {
    id: "dr-suresh-rawat",
    name: "Dr. Suresh Kr. Rawat",
    specialization: "Urology",
    hospital: "Apollo Hospitals",
    city: "Delhi",
    experience: "42+ Years",
    image: imgSureshRawat,
    designation: "Senior Consultant Urology | Apollo Delhi",
    qualifications: ["MBBS", "MS", "MCH", "DNB"],
    about:
      "Decades of experience in treating complex urological conditions with precision, innovation and compassion.",
    awards: ["Performed complex and rare urological surgeries successfully"],
    clinicalFocus: [
      "Kidney Stones Management",
      "Prostate Disorders",
      "Bladder Disorders",
      "Uro-Oncology",
      "Male Infertility & Andrology",
      "Kidney Transplant",
    ],
  },
  {
    id: "dr-rajesh-ahlawat",
    name: "Dr. (Prof.) Rajesh Ahlawat",
    specialization: "Urology",
    hospital: "Medanta – The Medicity",
    city: "Gurgaon",
    experience: "41+ Years",
    image: imgRajeshAhlawat,
    designation:
      "Group Chairman - Urology & Chairman - Centre of Excellence of Prostate & Urological Cancers & Male Health",
    qualifications: [
      "MCh (Urology) - All India Institute of Medical Sciences, New Delhi (1986)",
      "MNAMS (General Surgery) - DNB Board, New Delhi (1981)",
      "MS (General Surgery) - King Georges Medical College, Lucknow University (1980)",
      "MBBS - King Georges Medical College, Lucknow University (1976)",
    ],
    about:
      "Decades of experience in treating complex urological conditions with precision, innovation and compassion.",
    awards: [
      "Performed World's First Robotic Kidney Transplant (RKT) with Regional Hypothermia",
      "President's Gold Medal by USI",
      "Lifetime Achievement Award by NZ-USI",
      "PB Berry Scholarship in UK",
      "Kashi Ram Dhawan Gold Medal",
      "Chakraborty Fellowship by I-AUA",
    ],
    clinicalFocus: [
      "Urological Cancer (Uro-Oncology)",
      "Urological Reconstructive Surgery",
      "Robotic Kidney Transplant",
      "Endo-urology",
      "Laparoscopic and Robotic Surgery",
    ],
  },
  {
    id: "dr-avanish-arora",
    name: "Dr. Avanish Arora",
    specialization: "Urology",
    hospital: "Nanavati Max Super Speciality Hospital",
    city: "Mumbai",
    experience: "26+ Years",
    image: imgAvanishArora,
    designation:
      "Principal Director, Urology & Uro-Oncology Centre for Urology | Nanavati Max Super Speciality Hospital, Mumbai",
    qualifications: [
      "M.B.B.S. - Seth GSMC & KEM Hospital, Mumbai",
      "M.S. - Tata Memorial Hospital, Mumbai",
      "DNB (Diplomate of National Board) Gen Surgery",
      "M.Ch (Master of Chirurgiae) GenitoUrinary Surgery - Bombay Hospital Institute of Medical Sciences, Mumbai",
      "DNB GenitoUrinary Surgery",
      "MRCS (Edin, UK)",
    ],
    fellowships: [
      "Fellowship in Advanced Laparoscopic and Robotic Urology, Guildford, UK",
      "Training in Laparoscopic and Robotic Urology, IUPUI, Indianapolis, USA",
      "Fellowship in Endourology, Mumbai",
      "Hargobind Foundation Fellowship",
      "Birla Smarak Foundation Fellowship",
      "Eagle Travelling Fellowship (USI)",
    ],
    about:
      "Delivering comprehensive urological care with precision, innovation and compassion. Leading edge in robotic surgery and AI integration.",
    clinicalFocus: [
      "Laparoscopic and Robotic Urology",
      "Endourology",
      "Lasers & Transplants",
      "Artificial Intelligence in Urology",
    ],
  },
];

export const hospitals: Hospital[] = [
  {
    name: "Apollo Hospital",
    location: "Delhi, Kolkata, Chennai, Bangalore, Mumbai",
    city: "Chennai",
    image: apollo,
    logo: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&auto=format&fit=crop&q=70",
    description:
      "Asia's largest integrated healthcare group with world-class facilities and JCI accreditation.",
    specialities: ["Cardiology", "Oncology", "Transplants", "Neurosurgery", "Urology"],
    accreditation: "JCI",
  },
  {
    name: "Fortis Hospital",
    location: "Noida, Delhi, Kolkata, Mumbai",
    city: "Delhi",
    image: fortis,
    logo: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=200&auto=format&fit=crop&q=70",
    description:
      "Renowned super-speciality hospital network known for advanced cardiac, orthopaedic, and gastroenterology care.",
    specialities: [
      "Cardiology",
      "Orthopaedics",
      "Robotics",
      "Nephrology",
      "Gastroenterology",
      "Neurology",
      "Urology",
    ],
    accreditation: "NABH",
  },
  {
    name: "Max Super Speciality Hospital",
    location: "Delhi NCR",
    city: "Delhi",
    image: max,
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&auto=format&fit=crop&q=70",
    description:
      "Award-winning tertiary care network with state-of-the-art robotic surgery, oncology, and transplant programs.",
    specialities: [
      "Urology",
      "Transplants",
      "Oncology",
      "Neurology",
      "Ophthalmology",
      "Gastroenterology",
    ],
    accreditation: "JCI",
  },
  {
    name: "Medanta Hospital",
    location: "Delhi, Gurugram",
    city: "Gurgaon",
    image: medanta,
    logo: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=200&auto=format&fit=crop&q=70",
    description:
      "One of India's largest multi-super speciality institutes with 1600+ beds across 40+ specialities.",
    specialities: [
      "Bone Marrow",
      "Liver Transplant",
      "Cardiology",
      "Oncology",
      "Orthopaedics",
      "Urology",
    ],
    accreditation: "JCI",
  },
  {
    name: "Manipal Hospital",
    location: "Delhi, Kolkata, Bangalore, Hyderabad",
    city: "Bangalore",
    image: manipal,
    logo: "https://images.unsplash.com/photo-1580281657527-47e005dbe197?w=200&auto=format&fit=crop&q=70",
    description:
      "Trusted for advanced tertiary care with a global reputation in transplants, urology and cancer care.",
    specialities: ["Oncology", "Gastroenterology", "Orthopaedics", "IVF", "Urology"],
    accreditation: "NABH",
  },
  {
    name: "Artemis Hospital",
    location: "Delhi, Gurugram",
    city: "Gurgaon",
    image: artemis,
    logo: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=200&auto=format&fit=crop&q=70",
    description:
      "A state-of-the-art multi-speciality hospital known for advanced research and top quality care in joint replacements and neurology.",
    specialities: ["Orthopaedics", "Ophthalmology", "Gastroenterology", "Urology", "Neurology"],
    accreditation: "JCI",
  },
  {
    name: "MGM Healthcare",
    location: "MGM, Chennai",
    city: "Chennai",
    image: mgm,
    logo: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&auto=format&fit=crop&q=70",
    description:
      "A futuristic multi-super speciality hospital in Chennai with premier healthcare infrastructure and JCI accreditation.",
    specialities: ["Orthopaedics", "Gastroenterology", "Transplants", "Pediatrics"],
    accreditation: "JCI",
  },
  {
    name: "SIMS Hospital",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    image: kims,
    logo: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&auto=format&fit=crop&q=70",
    description:
      "SIMS Hospital – SRM Institutes for Medical Science, Vadapalani, Chennai is renowned for comprehensive multi-speciality tertiary care.",
    specialities: ["Ophthalmology", "Urology", "Orthopaedics", "Transplants"],
    accreditation: "NABH",
  },
  {
    name: "Wockhardt Hospitals",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    image: wockhardt,
    logo: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=200&auto=format&fit=crop&q=70",
    description:
      "Wockhardt Hospitals, Mumbai is famous for high-success cardiac care, neurology and critical care services.",
    specialities: ["Cardiology", "Neurology", "Orthopaedics", "Critical Care"],
    accreditation: "NABH",
  },
  {
    name: "Rainbow Childrens Hospital",
    location: "Delhi, Hyderabad",
    city: "Hyderabad",
    image: rainbow,
    logo: "https://images.unsplash.com/photo-1580281657527-47e005dbe197?w=200&auto=format&fit=crop&q=70",
    description:
      "India's leading pediatric and obstetrics healthcare chain with high-end neonatal and children intensive care.",
    specialities: ["Pediatrics", "Gynecology", "Neonatal Care", "Surgeries"],
    accreditation: "NABH",
  },
  {
    name: "KIMS Hospitals",
    location: "Kerala",
    city: "Kerala",
    image: kims,
    logo: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&auto=format&fit=crop&q=70",
    description:
      "KIMS Hospitals, Kerala is one of the largest healthcare networks in Southern India providing top quality medical services.",
    specialities: ["Cardiology", "Oncology", "Neurology", "Urology"],
    accreditation: "JCI",
  },
  {
    name: "Netaji Subhas Chandra Bose Cancer Hospital",
    location: "Kolkata, West Bengal",
    city: "Kolkata",
    image: netaji,
    logo: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=200&auto=format&fit=crop&q=70",
    description:
      "Premier cancer research and treatment institution in Kolkata offering advanced radiotherapy, chemo and surgical oncology.",
    specialities: ["Oncology", "Radiotherapy", "Chemotherapy", "Surgical Oncology"],
    accreditation: "NABH",
  },
  {
    name: "Dr Agarwal’s Eye Hospital",
    location: "Chennai, Delhi",
    city: "Chennai",
    image: agarwals,
    logo: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&auto=format&fit=crop&q=70",
    description:
      "A pioneer in eye care, serving patients globally with cutting-edge micro-surgical eye treatments.",
    specialities: ["Ophthalmology", "Cataract", "Refractive Surgery", "Cornea"],
    accreditation: "NABH",
  },
  {
    name: "Centre for sight",
    location: "Delhi NCR",
    city: "Delhi",
    image: centreforsight,
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&auto=format&fit=crop&q=70",
    description:
      "Centre for sight (Delhi) is a leading eye care hospital chain in India specializing in laser vision correction.",
    specialities: ["Ophthalmology", "Lasik", "Cataract", "Glaucoma"],
    accreditation: "NABH",
  },
  {
    name: "The Sight Avenue",
    location: "Delhi NCR",
    city: "Delhi",
    image: sightavenue,
    logo: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=200&auto=format&fit=crop&q=70",
    description:
      "The Sight Avenue(Delhi) is offering state of the art diagnostics and customized ophthalmic treatments.",
    specialities: ["Ophthalmology", "Cataract", "LASIK", "Retina Care"],
    accreditation: "NABH",
  },
  {
    name: "ART infertility Centre",
    location: "Delhi, Chennai",
    city: "Delhi",
    image: art,
    logo: "https://images.unsplash.com/photo-1580281657527-47e005dbe197?w=200&auto=format&fit=crop&q=70",
    description:
      "World-class human reproductive facility offering highly advanced IVF, ICSI, and genetic testing options.",
    specialities: ["IVF", "Infertility", "Reproductive Medicine"],
    accreditation: "JCI",
  },
  {
    name: "Indira Infertility Centre",
    location: "Delhi, Mumbai",
    city: "Mumbai",
    image: indira,
    logo: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&auto=format&fit=crop&q=70",
    description:
      "India's largest fertility specialist network trusted by millions for high-success rate IVF treatments.",
    specialities: ["IVF", "Infertility", "IUI", "ICSI"],
    accreditation: "NABH",
  },
  {
    name: "HCG Cancer Hospital",
    location: "Bangalore, Mumbai",
    city: "Bangalore",
    image: hcg,
    logo: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=200&auto=format&fit=crop&q=70",
    description:
      "Specialized cancer hospital chain in India leading the fight against cancer with custom radiotherapy.",
    specialities: ["Oncology", "Surgical Oncology", "Radiotherapy", "Bone Marrow Transplant"],
    accreditation: "NABH",
  },
  {
    name: "AIG Hyderabad",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    image: aig,
    logo: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&auto=format&fit=crop&q=70",
    description:
      "Global destination for gastroenterology and liver disease treatment with a massive 800+ bed capacity.",
    specialities: ["Gastroenterology", "Hepatology", "Liver Transplant", "Endoscopy"],
    accreditation: "JCI",
  },
  {
    name: "Jupiter Hospital Mumbai",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    image: jupitar,
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&auto=format&fit=crop&q=70",
    description:
      "Premium hospital facility in Mumbai providing reliable multi-speciality medical service and diagnostics.",
    specialities: ["Cardiology", "Neurology", "Orthopaedics"],
    accreditation: "NABH",
  },
  {
    name: "Jaslok Mumbai",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    image: jaslok,
    logo: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=200&auto=format&fit=crop&q=70",
    description:
      "One of the oldest and most trusted private tertiary care hospitals in Western India with global recognition.",
    specialities: ["Urology", "Oncology", "Cardiology", "Neurosurgery"],
    accreditation: "NABH",
  },
  {
    name: "GEMs Hospital Chennai",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    image: gems,
    logo: "https://images.unsplash.com/photo-1580281657527-47e005dbe197?w=200&auto=format&fit=crop&q=70",
    description:
      "A premier center for gastroenterology and laparoscopic surgery offering high end diagnostics.",
    specialities: ["Gastroenterology", "Laparoscopy", "Organ Transplant"],
    accreditation: "NABH",
  },
  {
    name: "Sankara Netralaya Kolkata",
    location: "Kolkata, West Bengal",
    city: "Kolkata",
    image: sankara,
    logo: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&auto=format&fit=crop&q=70",
    description:
      "Iconic charitable ophthalmic hospital offering standard and advanced eye care in Kolkata.",
    specialities: ["Ophthalmology", "Cataract", "Cornea", "Vitreo-Retinal"],
    accreditation: "NABH",
  },
];

export const treatments = [
  { name: "Vitamin Deficiency", icon: "Pill" },
  { name: "Urinary Problems", icon: "Droplets" },
  { name: "Thyroid Disorders", icon: "Activity" },
  { name: "Throat Cancer", icon: "Stethoscope" },
  { name: "Shoulder Arthroscopy", icon: "Bone" },
  { name: "Prostate Cancer", icon: "ShieldPlus" },
  { name: "Bone Marrow Transplant", icon: "HeartPulse" },
  { name: "PCOS", icon: "Flower2" },
  { name: "Pain Management", icon: "Sparkles" },
  { name: "Piles", icon: "CircleDot" },
  { name: "Ovarian Cyst", icon: "Ribbon" },
  { name: "Abdominal Tumour", icon: "ScanSearch" },
];

export const services = [
  {
    title: "Airport Pickup",
    description: "Complimentary pickup and drop from Indian airports for a stress-free arrival.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=70",
    icon: "Plane",
  },
  {
    title: "Doctor Appointment",
    description: "Priority appointments with India's top specialists across leading hospitals.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&auto=format&fit=crop&q=70",
    icon: "CalendarCheck",
  },
  {
    title: "Treatment Cost Estimation",
    description: "Transparent, itemised cost estimates from multiple hospitals before you travel.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=70",
    icon: "Calculator",
  },
  {
    title: "Train Ticket Assistance",
    description: "Help booking Indian Railways tickets with tatkal and premium options.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=70",
    icon: "TrainFront",
  },
  {
    title: "Flight Booking",
    description: "Discounted medical fares on international routes into Delhi, Kolkata and Chennai.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=70",
    icon: "PlaneTakeoff",
  },
  {
    title: "Medical Visa Support",
    description: "End-to-end guidance on medical visa invitations, MEDX and attendant visas.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=70",
    icon: "FileCheck2",
  },
  {
    title: "Accommodation Guidance",
    description: "Curated stays near hospitals — from budget guest houses to premium suites.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=70",
    icon: "BedDouble",
  },
  {
    title: "Language Assistance",
    description: "Dedicated English and French-speaking coordinators throughout your medical journey.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=70",
    icon: "Languages",
  },
];

export const whyChooseUs = [
  {
    title: "Multilingual Support Team",
    description: "Dedicated English and French-speaking coordinators available around the clock.",
    icon: "MessagesSquare",
  },
  {
    title: "Expert Doctors",
    description: "Access to 100+ senior specialists at India's most trusted hospitals.",
    icon: "UserRound",
  },
  {
    title: "Hospital Network",
    description: "75+ JCI and NABH accredited partner hospitals across India.",
    icon: "Building2",
  },
  {
    title: "Visa Assistance",
    description: "Complete medical visa invitation letters and documentation help.",
    icon: "FileBadge",
  },
  {
    title: "Airport Pickup",
    description: "Free pickup, drop and local transport for you and your attendant.",
    icon: "CarFront",
  },
  {
    title: "Affordable Treatment",
    description: "Best negotiated rates with fully transparent, itemised billing.",
    icon: "BadgeIndianRupee",
  },
];

export const steps = [
  {
    title: "Share Medical Reports",
    description: "Send your reports via WhatsApp or upload securely on our portal.",
    icon: "FileText",
    code: "RPT",
  },
  {
    title: "Receive Doctor Opinion",
    description: "Get a written second opinion from top Indian specialists within 48 hours.",
    icon: "Stethoscope",
    code: "OPN",
  },
  {
    title: "Get Cost Estimate",
    description: "Receive transparent, itemised treatment estimates from multiple hospitals.",
    icon: "Receipt",
    code: "EST",
  },
  {
    title: "Medical Visa Assistance",
    description: "We prepare your invitation letter and guide you through the visa process.",
    icon: "Stamp",
    code: "VISA",
  },
  {
    title: "Travel to India",
    description: "Airport pickup, SIM card, currency exchange and accommodation handled.",
    icon: "Plane",
    code: "TRV",
  },
  {
    title: "Treatment & Return Home",
    description: "Multilingual support at every step until you are safely back home.",
    icon: "HeartPulse",
    code: "HOME",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "London, United Kingdom",
    treatment: "Cardiac Bypass Surgery",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=70",
    quote:
      "From the moment I sent my reports on WhatsApp until I returned home, MedMyTrip handled everything. My coordinator felt like family throughout the entire journey.",
  },
  {
    name: "Grace Okafor",
    country: "Lagos, Nigeria",
    treatment: "Bone Marrow Transplant",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=70",
    quote:
      "The doctors at Medanta gave my daughter a new life. MedMyTrip arranged everything — visa, stay, translator. Highly recommended.",
  },
  {
    name: "Jean-Baptiste Kouassi",
    country: "Abidjan, Côte d'Ivoire",
    treatment: "Prostate Cancer Treatment",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=70",
    quote:
      "Transparent pricing, no hidden costs and world-class care in Chennai. I am forever grateful for their French-speaking support during a difficult time.",
  },
  {
    name: "Aminata Diallo",
    country: "Dakar, Senegal",
    treatment: "IVF Treatment",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=70",
    quote:
      "After years of struggle we finally became parents thanks to Dr. Ananya and the team. MedMyTrip made a foreign country feel like home.",
  },
  {
    name: "Michael Thompson",
    country: "Toronto, Canada",
    treatment: "Orthopaedic Surgery",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=70",
    quote:
      "I could walk again within weeks. Everything from airport pickup to follow-up was seamless. Truly a bridge between my home country and India.",
  },
];

export const faqs = [
  {
    q: "What is medical tourism and why do patients choose India?",
    a: "Medical tourism means travelling to another country for treatment. Patients often consider India for its range of specialist hospitals, the availability of English-speaking clinicians, and treatment costs that are frequently lower than in many other countries. Whether it is the right choice depends on your diagnosis, your budget and how far you can travel, so it is worth comparing options before deciding.",
  },
  {
    q: "How does MedMyTrip help me plan my treatment?",
    a: "We act as your coordinator from first enquiry to follow-up. We review the reports you share, help you shortlist suitable hospitals and consultants, obtain indicative cost estimates, and assist with visa documentation, travel and accommodation. While you are in India we stay in contact and help with admission, discharge and onward arrangements.",
  },
  {
    q: "Are the hospitals and doctors verified?",
    a: "For anyone we recommend, we share the consultant qualifications, registration details and the hospital accreditations, so you can check them independently before you commit. If you would prefer a different consultant or want a second opinion, tell us and we will arrange it. You are never obliged to accept the first option we suggest.",
  },
  {
    q: "What is included in a treatment package?",
    a: "It varies by procedure and hospital. A package usually covers the specialist consultation, the procedure itself, the hospital stay and standard post-operative care. Items such as flights, accommodation for accompanying family, and treatment of unrelated conditions are normally separate. We set out what is and is not included in writing before you travel.",
  },
  {
    q: "How do I get a medical visa?",
    a: "A medical visa is applied for separately from a tourist visa. Applications generally require a letter from the treating hospital in India, your medical records or diagnosis, and evidence that you can meet the cost of treatment and stay. We provide the hospital documentation you need and guide you through the steps, but the decision rests with the Indian mission in your country. Requirements and processing times change, so confirm current rules before booking travel.",
  },
  {
    q: "Is there support after I return home?",
    a: "Yes. We can share your discharge summary and reports with your local doctor, help arrange follow-up consultations, and stay reachable for questions during your recovery. If your surgeon recommends a review, we can coordinate it remotely where that is appropriate, or help plan a return visit.",
  },
  {
    q: "Are MedMyTrip services free for patients?",
    a: "Our coordination service is free to patients. You pay the hospital directly for your treatment, and we do not add a margin to hospital charges. If anything we arrange on your behalf carries a separate cost, such as accommodation or an interpreter, we will tell you the amount before you commit to it.",
  },
  {
    q: "How do I pay the hospital?",
    a: "Payment is made directly to the hospital, usually on admission or in stages agreed beforehand. Most hospitals accept international bank transfer and many accept card payment. We confirm the accepted payment methods, the currency and the expected schedule in writing before you travel, so there are no surprises on arrival.",
  },
];

export const contactInfo = {
  whatsappIndia: "917909044706",
  whatsappUrl:
    "https://wa.me/917909044706?text=Hello%20MedMyTrip%2C%20I%20would%20like%20to%20know%20more%20about%20treatment%20in%20India.",
  phone: "+91 7909044706",
  email: "medmytripinfo@gmail.com",
  address: "B-23 Okhla Vihar, New Delhi - 110025",
};
