// servicesData.js
import { Wifi, Server, Shield, Search, Cloudy, ClipboardList  } from "lucide-react";

export const services = [
  {
    title: "Web and App Development",
    description:
      "Custom websites and apps built for performance, usability, and scalability. Perfect for businesses looking to enhance engagement and streamline operations.",
    icon: Wifi,
    bgColor: "bg-blue-100",
    hoverBgColor: "group-hover:bg-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "AI & Data Analytics",
    description:
      "Unlock smarter decisions with AI-powered insights and data analytics. From machine learning to visualization, we turn data into business growth and efficiency.",
    icon: Server,
    bgColor: "bg-orange-100",
    hoverBgColor: "group-hover:bg-orange-200",
    iconColor: "text-orange-600",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your data and systems with robust, end-to-end security solutions. We help businesses stay secure, compliant, and resilient in a rapidly evolving digital world.",
    icon: Shield,
    bgColor: "bg-green-100",
    hoverBgColor: "group-hover:bg-green-200",
    iconColor: "text-green-600",
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "Boost your online presence with targeted SEO and marketing strategies. We help you attract the right audience, grow brand visibility, and drive engagement.",
    icon: Search,
    bgColor: "bg-orange-100",
    hoverBgColor: "group-hover:bg-orange-200",
    iconColor: "text-orange-600",
  },
  {
    title: "Cloud Computing and Infrastructure",
    description:
      "Optimize performance and scalability with secure cloud solutions. We help businesses leverage AWS, GCP, and Azure to drive agility, reliability, and cost-efficiency.",
    icon: Cloudy,
    bgColor: "bg-green-100",
    hoverBgColor: "group-hover:bg-green-200",
    iconColor: "text-green-600",
  },
  {
    title: "Project Management & Communication",
    description:
      "We ensure every project stays on track with clear communication, agile workflows, and dedicated management from start to finish.",
    icon: ClipboardList ,
    bgColor: "bg-blue-100",
    hoverBgColor: "group-hover:bg-blue-200",
    iconColor: "text-blue-600",
  },
];

export const servicePackages = [
  {
    name: "Basic Package",
    idealFor: "Small businesses and nonprofits seeking essential services on a budget.",
    includedServices: [
      "Basic website development",
      "Foundational SEO",
      "Initial cybersecurity assessments"
    ],
    pricingModel: "Flat fee or hourly rate for predictable costs.",
    benefits: "Provides clients with essential solutions at an affordable rate, supporting their immediate technology needs."
  },
  {
    name: "Standard Package",
    idealFor: "Mid-sized companies and startups aiming to expand their digital presence.",
    includedServices: [
      "Full-stack development",
      "Basic AI features (e.g., chatbots)",
      "Intermediate cybersecurity measures",
      "Deeper SEO strategies"
    ],
    pricingModel: "Project-based or monthly retainer, allowing for flexible billing as projects evolve.",
    benefits: "Offers a balance of affordability and comprehensive solutions, helping clients grow strategically without overextending."
  },
  {
    name: "Premium Package",
    idealFor: "Enterprises and organizations requiring advanced, customized solutions with continuous support.",
    includedServices: [
      "Comprehensive AI and machine learning solutions",
      "Big data analytics",
      "Cloud management",
      "Advanced cybersecurity"
    ],
    pricingModel: "Custom pricing based on complexity, with high-tier retainers for ongoing support.",
    benefits: "This package maximizes service value for high-demand clients, establishing a long-term partnership with comprehensive support."
  }
];
