const clinicConfig = {
  // ========== CLINIC INFO ==========
  name: "Smile N Shine",
  tagline: "Trusted Dental Care in Thakur Village, Kandivali East",
  description: "Professional dental treatments for teeth whitening, dental hygiene, root canal therapy, crowns, bridges, and preventive oral care at Smile N Shine, Kandivali East.",
  yearEstablished: 2012,
  
  // ========== CONTACT ==========
  contact: {
    phone: "+91 70212 20660",
    emergency: "+91 98765 43211",
    email: "smilenshine@dentistinkandivali.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hi, I would like to book an dental appointment at Smile N Shine.",
    address: "Shop 68, Sarova Complex, Samta Nagar, Thakur Village, Opp. Alpine Tower Back Gate, Kandivali East, Mumbai, Maharashtra 400101.",
    mapEmbedUrl: "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjg2ryFjryVAxUAAAAAHQAAAAAQBg..i&rlz=1C1GCEA_enIN1129IN1129&pvq=Cg0vZy8xMW1iZjdjems0IhMKDXNtaWxlIG4gc2hpbmUQAhgD&lqi=Cg1zbWlsZSBuIHNoaW5lSKT019Ops4CACFobEAAQARACGAAYARgCIg1zbWlsZSBuIHNoaW5lkgENZGVudGFsX2NsaW5pYw&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7b778c1b6fcc9:0xdeabb5978f450d32",
  },

  // ========== WORKING HOURS ==========
  workingHours: [
    { day: "Monday", time: "10:00 AM – 9:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "9:30 AM – 2:00 PM, 2:30 PM – 9:00 PM" },
    { day: "Thursday", time: "10:00 AM – 9:00 PM" },
    { day: "Friday", time: "10:00 AM – 9:00 PM" },
    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 6:00 PM" },
  ],

  // ========== SOCIAL LINKS ==========
  social: {
    facebook: "https://facebook.com/smilenshine",
    instagram: "https://instagram.com/smilenshine",
    twitter: "https://twitter.com/smilenshine",
    youtube: "https://youtube.com/@smilenshine",
  },

  // ========== NAVIGATION ==========
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  // ========== HERO ==========
  hero: {
    headline: "Trusted Dental Care in Thakur Village, Kandivali East",
    subheadline: "Professional dental treatments for teeth whitening, dental hygiene, root canal therapy, crowns, bridges, and preventive oral care at Smile N Shine, Kandivali East.",
    image: "/images/hero.jpg",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "Our Services",
    badge: "14+ Years of Excellence",
  },

  // ========== TRUST BADGES ==========
  trustBadges: [
    { icon: "Award", label: "Experienced Doctors", value: "14+ Years" },
    { icon: "Clock", label: "Same Day Appointments", value: "Available" },
    { icon: "Monitor", label: "Modern Equipment", value: "Latest Tech" },
    { icon: "Heart", label: "Patient-Centered Care", value: "5000+ Patients" },
  ],

  // ========== ABOUT ==========
  about: {
    overline: "About Us",
    title: "Caring for Mumbai, One Family at a Time",
    description: "Established in 2012, Smile N Shine has been a cornerstone of dental care in Kandivali East. We believe that quality dental care should be accessible, affordable, and delivered with genuine compassion.",
    mission: "To provide accessible, high-quality dental care that treats every patient with dignity, respect, and personalized attention.",
    vision: "To be the most trusted neighborhood dental clinic in Mumbai, known for clinical excellence and compassionate care.",
    image: "/images/about.jpg",
    stats: [
      { value: "14+", label: "Years Experience" },
      { value: "5000+", label: "Happy Patients" },
      { value: "15+", label: "Dental Services" },
      { value: "98%", label: "Patient Satisfaction" },
    ],
  },

  // ========== DOCTOR ==========
  doctor: {
    name: "Dr. Kunal Mehta",
    qualification: "B.D.S",
    specializations: ["Smile Design", "Implant Surgery", "Cosmetic Dentistry"],
    experience: "14+ Years",
    image: "/images/doctor.jpg",
    bio: "Dr. Kunal Mehta is a highly experienced dentist dedicated to providing comprehensive dental care. With over 14+ years of clinical practice, he specializes in preventive dentistry, root canal treatment, dental crowns and bridges, teeth whitening, smile care, and overall oral health management.",
    certifications: [
  "Registered Dental Practitioner",
  "Experienced Dental Care Provider",
  "Root Canal & Restorative Dentistry",
  "Cosmetic Dentistry",
  "Preventive Oral Healthcare",
    ],
    timings: {
      morning: "9:00 AM - 1:00 PM",
      evening: "5:00 PM - 9:00 PM",
    },
  },

  // ========== SERVICES ==========
services: [
  {
    icon: "Stethoscope",
    title: "Dental Consultation",
    description:
      "Complete dental checkup and consultation for tooth pain, cavities, gum issues, sensitivity, and overall oral health.",
  },
  {
    icon: "Activity",
    title: "Dental Hygiene",
    description:
      "Professional teeth cleaning, scaling, polishing, and preventive care to maintain healthy teeth and gums.",
  },
  {
    icon: "Sparkles",
    title: "Teeth Whitening",
    description:
      "Safe and effective teeth whitening treatment to improve smile brightness and remove stains.",
  },
  {
    icon: "HeartPulse",
    title: "Root Canal Therapy",
    description:
      "Root canal treatment for infected or painful teeth with careful diagnosis and patient-focused dental care.",
  },
  {
    icon: "ClipboardCheck",
    title: "Dental Crowns & Bridges",
    description:
      "Crowns and bridges to restore damaged, weak, or missing teeth and improve chewing and smile appearance.",
  },
  {
    icon: "ShieldCheck",
    title: "Custom Sport Guards",
    description:
      "Custom-made dental guards designed to protect teeth during sports and physical activities.",
  },
  {
    icon: "Syringe",
    title: "Tooth Pain Treatment",
    description:
      "Diagnosis and treatment for toothache, swelling, sensitivity, cavities, and dental infections.",
  },
  {
    icon: "ShieldCheck",
    title: "Preventive Dental Care",
    description:
      "Regular dental checkups, oral hygiene guidance, and preventive treatments to protect long-term dental health.",
  },
],

  // ========== WHY CHOOSE US ==========
  whyChooseUs: [
    {
      icon: "UserCheck",
      title: "Experienced Medical Team",
      description: "Our doctors bring decades of combined experience in treating a wide range of health conditions.",
    },
    {
      icon: "MapPin",
      title: "Convenient Location",
      description: "Located on Thakur Village, Kandivali East \u2014 easily accessible by metro, bus, and auto-rickshaw.",
    },
    {
      icon: "IndianRupee",
      title: "Affordable Consultation",
      description: "Quality healthcare that doesn't strain your wallet. Transparent pricing with no hidden charges.",
    },
    {
      icon: "HeartHandshake",
      title: "Personalized Care",
      description: "Every patient receives individual attention. We listen, understand, and create tailored treatment plans.",
    },
    {
      icon: "Timer",
      title: "Minimal Waiting Time",
      description: "We respect your time. Our efficient scheduling ensures you're seen promptly without long waits.",
    },
  ],

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      name: "Priya Mehta",
      rating: 5,
      review: "Dr. Mehta has been our family dentist for 5 years. His patience and thoroughness is remarkable. He takes time to explain everything clearly. Highly recommended!",
      initials: "PM",
    },
    {
      name: "Rajesh Patel",
      rating: 5,
      review: "Managing my diabetes was overwhelming until I visited Mumbai Care Clinic. Dr. Mehta's approach to diabetes management has truly transformed my health. My sugar levels are now well controlled.",
      initials: "RP",
    },
    {
      name: "Sunita Deshmukh",
      rating: 5,
      review: "The clinic is clean, well-maintained, and the staff is incredibly courteous. I never have to wait more than 10 minutes. Best clinic in Andheri West!",
      initials: "SD",
    },
    {
      name: "Amit Joshi",
      rating: 4,
      review: "Brought my elderly father here for a health checkup. The staff was very caring and patient with him. The comprehensive checkup package is excellent value for money.",
      initials: "AJ",
    },
  ],

  // ========== HEALTH TIPS ==========
  healthTips: [
  {
    title: "Daily Oral Hygiene Tips",
    excerpt:
      "Learn simple habits like brushing twice a day, flossing regularly, and rinsing properly to keep your teeth and gums healthy.",
    category: "Oral Care",
    icon: "Activity",
  },
  {
    title: "Preventing Cavities",
    excerpt:
      "Understand how regular dental checkups, proper brushing, reduced sugar intake, and fluoride care can help prevent tooth decay.",
    category: "Dental Health",
    icon: "ShieldCheck",
  },
  {
    title: "When to Visit a Dentist",
    excerpt:
      "Do not ignore tooth pain, bleeding gums, sensitivity, swelling, or bad breath. Early dental care can prevent bigger problems.",
    category: "Dental Advice",
    icon: "HeartPulse",
  },
  {
    title: "Teeth Whitening & Smile Care",
    excerpt:
      "Discover safe ways to maintain a bright smile and why professional teeth whitening is better than using random home remedies.",
    category: "Smile Care",
    icon: "Sparkles",
  },
],

  // ========== GALLERY ==========
  gallery: [
    { src: "/images/reception.jpg", alt: "Reception Area", caption: "Welcome Reception" },
    { src: "/images/hero.jpg", alt: "Consultation Room", caption: "Consultation Room" },
    { src: "/images/clinic-gallery-1.jpg", alt: "Modern Equipment", caption: "Modern Equipment" },
    { src: "/images/about.jpg", alt: "Waiting Area", caption: "Comfortable Waiting Area" },
    { src: "/images/clinic-gallery-2.jpg", alt: "Patient Care", caption: "Patient Care" },
    { src: "/images/clinic-gallery-3.jpg", alt: "Clinic Corridor", caption: "Clinic Corridor" },
    { src: "/images/clinic-gallery-4.jpg", alt: "Lobby Area", caption: "Lobby & Lounge" },
    { src: "/images/doctor.jpg", alt: "Our Doctor", caption: "Dr. Kunal Mehta" },
  ],

  // ========== APPOINTMENT SERVICES ==========
  appointmentServices: [
    "General Consultation",
    "Diabetes Care",
    "Blood Pressure Management",
    "Health Checkup",
    "Vaccination",
    "Preventive Care",
    "Senior Citizen Care",
    "Other",
  ],

  // ========== TIME SLOTS ==========
  timeSlots: [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  ],
};

export default clinicConfig;
