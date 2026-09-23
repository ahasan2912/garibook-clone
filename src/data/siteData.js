export const DOWNLOAD_APP_URL =
  "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page";

export const SMART_DRIVER_URL =
  "https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps";

export const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Earn With Garibook", href: "#smart-driver" },
  { label: "Garibook Business", href: "/business" },
  { label: "Garibook Club", href: "/club" },
  { label: "Campaign", href: "#" },
  { label: "Blogs", href: "/blogs" },
];

export const HERO = {
  title: "City to City",
  titles: [
    "Assurance of Effortless <span>Travel</span>",
    "Luxury <span>Trips</span> with Comfort",
    "Your <span>Journey</span> Starts Here ...",
  ],
  descriptions: [
    {
      plain: "Assurance of Effortless ",
      highlight: "Travel",
      suffix: "",
    },
    {
      plain: "Luxury ",
      highlight: "Trips",
      suffix: " with Comfort",
    },
    {
      plain: "Your ",
      highlight: "Journey",
      suffix: " Starts Here ...",
    },
  ],
  description:
    "Choose your city, pick your car and enjoy the journey with Garibook's best drivers.",
  button: { label: "Download App", url: DOWNLOAD_APP_URL, variant: "warning" },
};

export const STATS_TITLE = "From Everyday Rides to Meaningful Journeys";

export const STATS = [
  { label: "Trip Requests", value: 300000, suffix: "+" },
  { label: "Total Customers", value: 850000, suffix: "+" },
  { label: "Active Drivers", value: 35000, suffix: "+" },
  { label: "District Covered", value: 64, suffix: "" },
];

export const CAR_TYPES = [
  { label: "Sedan / Toyota Axio", seats: 4 },
  { label: "X-Cruiser / Toyota Noah", seats: 7 },
  { label: "Toyota X-Cruiser", seats: 6 },
  { label: "Toyota Premio", seats: 4 },
  { label: "Hiace / Micro Bus", seats: 13 },
  { label: "Pickup", seats: 3 },
];

export const AIRPORTS = [
  "Hazrat Shahjalal International Airport, Dhaka",
  "Shah Amanat International Airport, Chattogram",
  "Osmani International Airport, Sylhet",
  "Cox's Bazar Airport, Cox's Bazar",
  "Jashore Airport, Jashore",
  "Saidpur Airport, Nilphamari",
  "Rajshahi Airport, Rajshahi",
  "Barisal Airport, Barisal",
];

export const SERVICES_TABS = ["Rides", "Garibook Business", "Garibook Club", "VMS"];

export const SERVICES = {
  rides: {
    title: "Every Ride   One Platform",
    description:
      "Choose your ride and go wherever you want, whenever you want. Garibook brings every ride you need into a single platform.",
    cards: [
      {
        title: "Intercity Car Rental",
        description: "Travel between cities with comfort and confidence.",
        image: "/assets/images/cars/intercity_car_rental.svg",
      },
      {
        title: "Ride share",
        description: "Go anywhere in the city, quickly and easily.",
        image: "/assets/images/cars/rideshare.svg",
      },
      {
        title: "Airport Rental",
        description:
          "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        image: "/assets/images/cars/airport_rental.svg",
      },
      {
        title: "Hourly Rental",
        description: "Rent a car by the hour, tailored to your needs.",
        image: "/assets/images/cars/hourly_rental.svg",
      },
    ],
  },
  business: {
    title: "Modern Car Rentals   for Business",
    description:
      "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",
    link: "/business",
    image: "/assets/images/services/busines.jpeg",
  },
  club: {
    title: "Turn Your Car into Earnings with Garibook Club",
    description:
      "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",
    link: "/club",
    image: "/assets/images/services/garibook_club.jpg",
  },
  vms: {
    title: "Vehicle Management System - VMS",
    description:
      "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",
    link: "/vehicle-management-system",
    image: "/assets/images/vms/Frame_1000001473.png",
  },
};

export const FREEDOM = {
  title: "Freedom in Every Journey",
  description:
    "From your hand, for your journey. With Garibook you pick exactly who you travel with and how — total control, total freedom.",
  image: "/assets/images/banner/garibook_freedom.webp",
  features: [
    {
      title: "Choose the Car",
      description: "Pick what suits your comfort.",
      icon: "/assets/icon/car.svg",
    },
    {
      title: "Choose the Driver",
      description: "Based on ratings and reviews.",
      icon: "/assets/icon/drive.svg",
    },
    {
      title: "Choose the Fare",
      description: "Select the bid that fits your budget.",
      icon: "/assets/icon/price.svg",
    },
  ],
};

export const PEOPLE_TOGETHER = {
  title: "More Than Miles —",
  titleLine2: "We Bring People Together",
  cards: [
    {
      title: "Airport Rentals",
      image: "/assets/images/services/AirportRental.webp",
    },
    {
      title: "Family Trips",
      image: "/assets/images/services/family_trips.webp",
    },
    {
      title: "Long Tours",
      image: "/assets/images/services/GroupTour.webp",
    },
  ],
};

export const BOOKING_ARRIVAL = {
  title: "From Booking to Arrival    It's All in Your Hands",
  button: { label: "Download App", url: DOWNLOAD_APP_URL, variant: "primary" },
  images: [
    { src: "/assets/images/services/explore.jpeg", alt: "Explore" },
    { src: "/assets/images/services/freedom.jpg", alt: "Freedom" },
    { src: "/assets/images/services/safe_travel.svg", alt: "Safe travel" },
    { src: "/assets/images/services/prefarred_car.jpg", alt: "Preferred car" },
    { src: "/assets/images/services/smooth.jpg", alt: "Smooth journey" },
  ],
};

export const SMART_DRIVER = {
  title: "Be a Smart Driver",
  heading: "0% Commission",
  heading2: "100% Freedom",
  description:
    "Drive on your own terms. Garibook puts a 0% commission policy first — every taka you earn is yours.",
  button: {
    label: "Download Smart Driver App",
    url: SMART_DRIVER_URL,
    variant: "primary",
  },
  image: "/assets/images/app-screen/no_commission_app_screen.png",
};

export const NEWSROOM = {
  title: "We Featured by Top news Platforms",
};

export const NEWS = [
  {
    id: 28,
    locale: "English",
    title: "Replacing ride-hailing commissions with fixed subscriptions",
    url: "https://www.techinasia.com/replacing-ridehailing-commissions-fixed-subscriptions",
    date: "2026-07-16",
    brand: "Tech in Asia",
    image: "/assets/news/news-28.gif",
    brandImage: "/assets/news/brand-28.png",
  },
  {
    id: 1,
    locale: "Bangla",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    url: "https://www.prothomalo.com/bangladesh/9657q54847",
    date: "2024-12-05",
    brand: "Prothom Alo",
    image: "/assets/news/news-1.webp",
    brandImage: "/assets/news/brand-1.png",
  },
  {
    id: 2,
    locale: "English",
    title: 'Digital App to offer "Chander Gari"',
    url: "https://epaper.dhakatribune.com/epaper/details/115797",
    date: "2024-12-04",
    brand: "Dhaka Tribune",
    image: "/assets/news/news-2.jpg",
    brandImage: "/assets/news/brand-2.png",
  },
  {
    id: 281,
    locale: "English",
    title: "Replacing ride-hailing commissions with fixed subscriptions",
    url: "https://www.techinasia.com/replacing-ridehailing-commissions-fixed-subscriptions",
    date: "2026-07-16",
    brand: "Tech in Asia",
    image: "/assets/news/news-28.gif",
    brandImage: "/assets/news/brand-28.png",
  },
  {
    id: 111,
    locale: "Bangla",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    url: "https://www.prothomalo.com/bangladesh/9657q54847",
    date: "2024-12-05",
    brand: "Prothom Alo",
    image: "/assets/news/news-1.webp",
    brandImage: "/assets/news/brand-1.png",
  },
];

export const PASSENGERS = {
  title: "Our Passengers Speak For Us",
  description:
    "Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.",
  slides: [
    {
      id: 8,
      name: "Atif Haider",
      occupation: "Banker",
      videoId: "JsBwaJ_VIcA",
    },
    {
      id: 9,
      name: "Mohammad Habibur Rahman",
      occupation: "Banker",
      videoId: "CsxeEof1T3M",
    },
    {
      id: 10,
      name: "Sadia Afrin",
      occupation: "Service Holder",
      videoId: "8ma9XEGhi5s",
    },
  ],
};

export const BLOGS = {
  title: "Beyond Destinations",
  description:
    "Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.",
  showAll: "Show All Blogs",
  allUrl: "/blogs",
};

export const BLOG_POSTS = [
  {
    id: 15,
    slug: "garibook-launches-ridesharing-service-in-bangladesh",
    date: "2026-09-14",
    title:
      "Garibook Launches Ridesharing Service in Bangladesh to Make Everyday Travel More Affordable and Accessible",
    subtitle:
      "Garibook Launches Ridesharing Service in Bangladesh to Make Everyday Travel More Affordable and Accessible",
    image: "/assets/blog/blog-15.webp",
  },
  {
    id: 16,
    slug: "রাইড-শেয়ারিংয়ে-বদলে-যাচ্ছে-বাংলাদেশের-শহুরে-পরিবহন-ব্যবস্থা",
    date: "2026-09-15",
    title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
    subtitle:
      "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
    image: "/assets/blog/blog-16.webp",
  },
  {
    id: 14,
    slug: "Why-Families-Prefer-Private-Car-Booking-Over-Public-Transport-in-Bangladesh-1",
    date: "2026-08-25",
    title:
      "Why Families Prefer Private Car Booking Over Public Transport in Bangladesh",
    subtitle: "Personal space makes a big difference during long drives",
    image: "/assets/blog/blog-14.webp",
  },
];

export const DOWNLOAD_APP = {
  heading: "Download",
  heading2: "Garibook Mobile App",
  description: "Download our Customer, Smart Driver and Enterprise App",
  button: { label: "Download App", url: DOWNLOAD_APP_URL, variant: "warning" },
  phoneImage: "/assets/images/app-screen/app-with-logo.png",
};

export const FOOTER = {
  columns: [
    {
      title: "garibook",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Customer Reviews", href: "/passenger-speak" },
        { label: "Career", href: "/" },
        { label: "Newsroom", href: "/newsrooms" },
        { label: "Garibook Map", href: "https://map.garibook.com/", external: true },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Intercity Rental", href: "/" },
        { label: "Airport Pick and Drop", href: "/" },
        { label: "Hourly Rental", href: "/" },
        { label: "Vehicle Management System (VMS)", href: "/vehicle-management-system" },
      ],
    },
    {
      title: "Become Our Partner",
      links: [
        { label: "Become a Smart Driver", href: "/smart-driver" },
        { label: "Become a member of Garibook Club", href: "/club" },
        { label: "Garibook Business for Corporate Travel", href: "/business" },
      ],
    },
  ],
  contact: {
    title: "Contacts",
    email: "support@garibook.com",
    emailHref: "mailto:support@garibook.com",
    address:
      "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212",
    phone: "+88 09 678 11 22 33",
    phoneHref: "tel:09678112233",
  },
  companies: [
    {
      label: "A Product By",
      name: "NRB Solution Ltd.",
      image: "/assets/images/nrb/nrb_no_background.svg",
      imgClass: "w-[95px]",
      href: "https://nrb-solutions.net/",
      external: true,
    },
    {
      label: "Powered By",
      name: "Link 3 Technologies",
      image: "/assets/images/clients/link3-two.png",
      imgClass: "w-[70px]",
      href: "https://www.link3.net/",
      external: true,
    },
  ],
  tradeLicense: "Trade license number:  TRAD/DNCC/013806/2024",
  copyright: "© 2026 Garibook.com",
};

export const enSiteData = {
  DOWNLOAD_APP_URL,
  SMART_DRIVER_URL,
  NAV_LINKS,
  HERO,
  STATS_TITLE,
  STATS,
  CAR_TYPES,
  AIRPORTS,
  SERVICES_TABS,
  SERVICES,
  FREEDOM,
  PEOPLE_TOGETHER,
  BOOKING_ARRIVAL,
  SMART_DRIVER,
  NEWSROOM,
  NEWS,
  PASSENGERS,
  BLOGS,
  BLOG_POSTS,
  DOWNLOAD_APP,
  FOOTER,
};