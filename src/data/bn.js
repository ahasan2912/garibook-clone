// Bangla (বাংলা) copy for the Garibook homepage.
// Text values are taken from the reference site's own `/locales/bn.json`
// dictionary where available; remaining strings are translated to match.

import { NEWS, BLOG_POSTS } from "./siteData";

export const BN_MESSAGES = {
  "About Us": "আমাদের সম্পর্কে",
  "Earn With Garibook": "গাড়িবুক এ আয় করুন",
  "Garibook Business": "গাড়িবুক বিজনেস",
  "Garibook Club": "গাড়িবুক ক্লাব",
  Campaign: "ক্যাম্পেইন",
  Blogs: "ব্লগস",
  login: "লগইন",
  Login: "লগইন",
  Seats: "সিট",
  "Download App": "অ্যাপ ডাউনলোড করুন",
  "Car Rental": "কার রেন্টাল",
  "Airport Rental": "এয়ারপোর্ট রেন্টাল",
  "Choose a Car": "একটি গাড়ি নির্বাচন করুন",
  "Select Car Type": "গাড়ি নির্বাচন করুন",
  "Pickup Location": "পিকআপ লোকেশন",
  "Enter Pickup Location": "পিকআপ লোকেশন লেখুন",
  "Drop-off Location": "ড্রপ-অফ লোকেশন",
  "Enter Drop-off Location": "ড্রপ-অফ লোকেশন লেখুন",
  "Pickup Date & Time": "পিকআপ তারিখ ও সময়",
  "MM/DD/YYYY 00:00 PM": "MM/DD/YYYY 00:00 PM",
  "One Way": "ওয়ানওয়ে",
  "Round Way": "যাওয়া-আসা",
  Hourly: "ঘণ্টায়",
  "Round Trip": "যাওয়া-আসা",
  Continue: "চালিয়ে যান",
  "Pickup Airport": "পিকআপ এয়ারপোর্ট",
  "Select Airport": "এয়ারপোর্ট নির্বাচন করুন",
  "Our Services": "আমাদের সেবাসমূহ",
  Rides: "রাইড",
  VMS: "VMS",
  "Learn More": "আরো দেখুন",
  "Read Article": "আর্টিকেল পড়ুন",
  "Show All Blogs": "সব ব্লগ দেখুন",
  "Visit Website": "ওয়েবসাইট দেখুন",
  "Terms & Conditions": "শর্তাবলী",
  "Privacy Policy": "গোপনীয়তার নীতি",
  "Download Our": "আমাদের ডাউনলোড করুন",
  "Garibook Mobile App": "গাড়িবুক মোবাইল অ্যাপ",
  "Trade license number:": "ট্রেড লাইসেন্স নম্বর:",
  "Every Ride": "সব রাইড",
  "One Platform": "এক প্ল্যাটফর্ম",
};

export const bnSiteData = {
  DOWNLOAD_APP_URL:
    "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page",
  SMART_DRIVER_URL:
    "https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps",

  NEWS,
  BLOG_POSTS,

  NAV_LINKS: [
    { label: "আমাদের সম্পর্কে", href: "/about-us" },
    { label: "গাড়িবুক এ আয় করুন", href: "/earn-with-garibook" },
    { label: "গাড়িবুক বিজনেস", href: "/business" },
    { label: "গাড়িবুক ক্লাব", href: "/club" },
    { label: "ক্যাম্পেইন", href: "/campaign" },
    { label: "ব্লগস", href: "/blogs" },
  ],

  HERO: {
    title: "শহর থেকে শহরে",
    titles: [
      "বাধাহীন ভ্রমণের <span>নিশ্চয়তা</span>",
      "আরামের সাথে  লাক্সারি ভ্রমণ",
      "আপনার<span> যাত্রা</span> শুরু এখানেই ...",
    ],
    description: "বেস্ট কোয়ালিটির গাড়িতে, ভেরিফাইড ড্রাইভার সাথে গন্তব্যে পৌঁছে যান নিরাপদে",
    button: {
      label: "অ্যাপ ডাউনলোড করুন",
      url: "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page",
      variant: "warning",
    },
  },

  STATS_TITLE: "শহরের ভেতরে কিংবা বাইরে, সারা বাংলাদেশজুড়ে",

  STATS: [
    { label: "ট্রিপ রিকোয়েস্ট", value: 300000, suffix: "+" },
    { label: "মোট কাস্টোমার", value: 850000, suffix: "+" },
    { label: "সচল ড্রাইভার", value: 35000, suffix: "+" },
    { label: "যে সকল জেলায় আমাদের সার্ভিস রয়েছে", value: 64, suffix: "" },
  ],

  CAR_TYPES: [
    { label: "Sedan / Toyota Axio", seats: 4 },
    { label: "X-Cruiser / Toyota Noah", seats: 7 },
    { label: "Toyota X-Cruiser", seats: 6 },
    { label: "Toyota Premio", seats: 4 },
    { label: "Hiace / Micro Bus", seats: 13 },
    { label: "Pickup", seats: 3 },
  ],

  AIRPORTS: [
    "Hazrat Shahjalal International Airport, Dhaka",
    "Shah Amanat International Airport, Chattogram",
    "Osmani International Airport, Sylhet",
    "Cox's Bazar Airport, Cox's Bazar",
    "Jashore Airport, Jashore",
    "Saidpur Airport, Nilphamari",
    "Rajshahi Airport, Rajshahi",
    "Barisal Airport, Barisal",
  ],

  SERVICES_TABS: ["রাইড", "গাড়িবুক বিজনেস", "গাড়িবুক ক্লাব", "VMS"],

  SERVICES: {
    rides: {
      title: "প্রতিটি রাইড, একটি প্ল্যাটফর্ম",
      description:
        "আপনার পছন্দের রাইড বেছে নিন এবং যেকোনো গন্তব্যে যান, যখন খুশি। গাড়িবুক আপনার প্রয়োজনীয় সব রাইড একটি প্ল্যাটফর্মে নিয়ে আসে।",
      cards: [
        {
          title: "ইন্টারসিটি কার রেন্টাল",
          description: "আরাম ও আত্মবিশ্বাসের সাথে শহর থেকে শহরে ভ্রমণ করুন।",
          image: "/assets/images/cars/intercity_car_rental.svg",
        },
        {
          title: "রাইডশেয়ার",
          description: "শহরের ভেতরে যেকোনো প্রয়োজনে দ্রুত ও সহজে চলাফেরা করুন।",
          image: "/assets/images/cars/rideshare.svg",
        },
        {
          title: "এয়ারপোর্ট রেন্টাল",
          description:
            "বিদেশে উড়ে যাওয়া কিংবা বাড়ি ফেরা — যেকোনো ক্ষেত্রে আরামদায়ক ও নিশ্চিন্ত এয়ারপোর্ট ভ্রমণ।",
          image: "/assets/images/cars/airport_rental.svg",
        },
        {
          title: "ঘণ্টা ভিত্তিক রেন্টাল",
          description: "প্রয়োজন অনুযায়ী গাড়ি ভাড়া করুন ঘণ্টা ভিত্তিতে।",
          image: "/assets/images/cars/hourly_rental.svg",
        },
      ],
    },
    business: {
      title: "ব্যবসার জন্য আধুনিক গাড়ি রেন্টাল",
      description:
        "আপনার কর্পোরেট যাতায়াত সহজ করুন, সময়মতো টিম মোবিলিটি নিশ্চিত করুন এবং ভিএমএস-এর মাধ্যমে নিয়ন্ত্রণ নিন।",
      link: "/business",
      image: "/assets/images/services/busines.jpeg",
    },
    club: {
      title: "গাড়িবুক ক্লাবে আপনার গাড়ি থেকে আয় করুন",
      description:
        "গাড়িবুক ক্লাব শুধু একটি কমিউনিটি নয়। গাড়িপ্রেমী এক প্রাণবন্ত নেটওয়ার্কে যোগ দিন — যাদের একটাই আবেগ: খোলা রাস্তা এবং নিজের পছন্দমতো উপার্জন।",
      link: "/club",
      image: "/assets/images/services/garibook_club.jpg",
    },
    vms: {
      title: "ভেহিকেল ম্যানেজমেন্ট সিস্টেম - ভিএমএস",
      description:
        "গাড়িবুক বিজনেস আপনার টিমের যাতায়াত সহজ করে, তেমনই ভেহিকেল ম্যানেজমেন্ট সিস্টেম (ভিএমএস) আপনাদের নিজেদের গাড়ির যত্ন নিতে সাহায্য করে। ভিএমএস গাড়িবুক বিজনেসের সাথে মিলে আপনার গাড়ি সর্বোত্তমভাবে ব্যবহারে সহায়তা করে।",
      link: "/vehicle-management-system",
      image: "/assets/images/vms/Frame_1000001473.png",
    },
  },

  FREEDOM: {
    title: "প্রতিটি যাত্রায় স্বাধীনতা",
    description:
      "আপনার হাতে, আপনার যাত্রার জন্য। গাড়িবুকে আপনি নিজেই বেছে নেন কার সাথে এবং কীভাবে ভ্রমণ করবেন — পূর্ণ নিয়ন্ত্রণ, পূর্ণ স্বাধীনতা।",
    image: "/assets/images/banner/garibook_freedom.webp",
    features: [
      {
        title: "গাড়ি নির্বাচন করুন",
        description: "আপনার আরাম অনুযায়ী বেছে নিন।",
        icon: "/assets/icon/car.svg",
      },
      {
        title: "স্মার্ট ড্রাইভার নির্বাচন করুন",
        description: "রেটিং এবং রিভিউ অনুসারে।",
        icon: "/assets/icon/drive.svg",
      },
      {
        title: "ভাড়া নির্বাচন করুন",
        description: "আপনার পছন্দের ভাড়ায় ট্রিপ কনফার্ম করুন।",
        icon: "/assets/icon/price.svg",
      },
    ],
  },

  PEOPLE_TOGETHER: {
    title: "কেবল দূরত্ব নয় —",
    titleLine2: "আমরা মানুষকে একসাথে নিয়ে আসি",
    cards: [
      { title: "এয়ারপোর্ট রেন্টারস", image: "/assets/images/services/AirportRental.webp" },
      { title: "ফ্যামিলি ট্যুর", image: "/assets/images/services/family_trips.webp" },
      { title: "লং ট্যুর", image: "/assets/images/services/GroupTour.webp" },
    ],
  },

  BOOKING_ARRIVAL: {
    title: "বুকিং থেকে পৌঁছানো — সব আপনার হাতে",
    button: {
      label: "অ্যাপ ডাউনলোড করুন",
      url: "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page",
      variant: "primary",
    },
    images: [
      { src: "/assets/images/services/explore.jpeg", alt: "এক্সপ্লোর" },
      { src: "/assets/images/services/freedom.jpg", alt: "স্বাধীনতা" },
      { src: "/assets/images/services/safe_travel.svg", alt: "নিরাপদ ভ্রমণ" },
      { src: "/assets/images/services/prefarred_car.jpg", alt: "পছন্দের গাড়ি" },
      { src: "/assets/images/services/smooth.jpg", alt: "সহজ যাত্রা" },
    ],
  },

  SMART_DRIVER: {
    title: "স্মার্ট ড্রাইভার হোন",
    heading: "0% কমিশন",
    heading2: "100% স্বাধীনতা",
    description:
      "নিজের নিয়মে ড্রাইভ করুন। গাড়িবুক সবচেয়ে আগে রাখে 0% কমিশন নীতি — আপনার আয়ের প্রতিটি টাকা আপনারই।",
    button: {
      label: "স্মার্ট ড্রাইভার অ্যাপ ডাউনলোড করুন",
      url: "https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps",
      variant: "primary",
    },
    image: "/assets/images/app-screen/no_commission_app_screen.png",
  },

  NEWSROOM: {
    title: "মিডিয়া ফিচারস",
  },

  PASSENGERS: {
    title: "আমাদের যাত্রীরা আমাদের কথা বলেন",
    description:
      "শুরু থেকে শেষ পর্যন্ত আমাদের যাত্রা ছিল নির্বিঘ্ন ও আনন্দদায়ক। বুকিং প্রক্রিয়া ছিল সহজ, আর স্টাফরা ছিলেন অত্যন্ত যত্নশীল — পুরো ভ্রমণে আমরা ছিলাম স্বাচ্ছন্দ্যে।",
    slides: [
      { id: 8, name: "Atif Haider", occupation: "ব্যাংকার", videoId: "JsBwaJ_VIcA" },
      { id: 9, name: "Mohammad Habibur Rahman", occupation: "ব্যাংকার", videoId: "CsxeEof1T3M" },
      { id: 10, name: "Sadia Afrin", occupation: "সার্ভিস হোল্ডার", videoId: "8ma9XEGhi5s" },
    ],
  },

  BLOGS: {
    title: "গন্তব্যের বাইরে",
    description: "গাড়িবুকে খুঁজে নিন আপনার পরবর্তী ভ্রমণের টিপস, গাইড ও অনুপ্রেরণা।",
    showAll: "সব ব্লগ দেখুন",
    allUrl: "/blogs",
  },

  DOWNLOAD_APP: {
    heading: "ডাউনলোড করুন",
    heading2: "গাড়িবুক মোবাইল অ্যাপ",
    description: "আমাদের কাস্টমার, স্মার্ট ড্রাইভার ও এন্টারপ্রাইজ অ্যাপ ডাউনলোড করুন",
    button: {
      label: "অ্যাপ ডাউনলোড করুন",
      url: "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page",
      variant: "warning",
    },
    phoneImage: "/assets/images/app-screen/app-with-logo.png",
  },

  FOOTER: {
    columns: [
      {
        title: "গাড়িবুক",
        links: [
          { label: "আমাদের সম্পর্কে", href: "/about-us" },
          { label: "কাস্টোমার রিভিউ", href: "/passenger-speak" },
          { label: "ক্যারিয়ার", href: "/" },
          { label: "নিউজরুম", href: "/newsrooms" },
          { label: "গাড়িবুক ম্যাপ", href: "https://map.garibook.com/", external: true },
        ],
      },
      {
        title: "সেবাসমূহ",
        links: [
          { label: "ইন্টারসিটি রেন্টাল", href: "/" },
          { label: "এয়ারপোর্ট পিক এন্ড ড্রপ", href: "/" },
          { label: "ঘণ্টা ভিত্তিক রেন্টাল", href: "/" },
          {
            label: "ভেহিকেল ম্যানেজমেন্ট সিস্টেম (VMS)",
            href: "/vehicle-management-system",
          },
        ],
      },
      {
        title: "আমাদের পার্টনার নিবন্ধন করুন",
        links: [
          { label: "স্মার্ট ডাইভার হিসেবে নিবন্ধন করুন", href: "/smart-driver" },
          { label: "গাড়িবুক ক্লাবের সদস্য হিসেবে নিবন্ধন করুন", href: "/club" },
          { label: "কর্পোরেট ট্যুরের জন্য গাড়িবুক বিজনেস", href: "/business" },
        ],
      },
    ],
    contact: {
      title: "যোগাযোগ",
      email: "support@garibook.com",
      emailHref: "mailto:support@garibook.com",
      address:
        "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212",
      phone: "+88 09 678 11 22 33",
      phoneHref: "tel:09678112233",
    },
    companies: [
      {
        label: "একটি প্রোডাক্ট",
        name: "NRB Solution Ltd.",
        image: "/assets/images/nrb/nrb_no_background.svg",
        imgClass: "w-[95px]",
        href: "https://nrb-solutions.net/",
        external: true,
      },
      {
        label: "পাওয়ার্ড বাই",
        name: "Link 3 Technologies",
        image: "/assets/images/clients/link3-two.png",
        imgClass: "w-[70px]",
        href: "https://www.link3.net/",
        external: true,
      },
    ],
    tradeLicense: "ট্রেড লাইসেন্স নম্বর:  TRAD/DNCC/013806/2024",
    copyright: "© 2026 Garibook.com",
  },
};