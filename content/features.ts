import { SEO, NoticeBar } from './home';

export interface ServiceDetail {
  title: string;
  description: string;
  iconType: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  details: ServiceDetail[];
}

export interface FeaturesContent {
  seo: SEO;
  noticeBar: NoticeBar;
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: string;
  categories: ServiceCategory[];
  difference: {
    headline: string;
    body: string;
  };
  vendorTeaser: {
    headline: string;
    description: string;
  };
  secondaryCta: {
    headline: string;
    button: {
      label: string;
      href: string;
    };
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: "Services & Expertise | Blinking Eye Events",
    description: "Explore our comprehensive event planning services, including bespoke weddings, corporate galas, and private celebrations. Full-service management in Chandigarh.",
  },
  noticeBar: {
    message: "Now accepting inquiries for the upcoming winter wedding season.",
    linkText: "Inquire Now",
    linkHref: "/contact",
  },
  hero: {
    headline: "Our Expertise",
    subheadline: "Comprehensive event management, executed with unparalleled grace.",
  },
  intro: "From the initial concept to the final, flawless execution, we offer a spectrum of services designed to elevate your celebration.",
  categories: [
    {
      id: "weddings",
      title: "Bespoke Weddings",
      description: "A wedding is the ultimate expression of your personal story. We handle the complexities so you can focus on the romance.",
      details: [
        {
          title: "Venue Sourcing & Negotiation",
          description: "Curating a list of premium locations and managing contracts to ensure your setting is as perfect as your vision.",
          iconType: "MapPin",
        },
        {
          title: "Design & Styling",
          description: "Developing cohesive visual themes, from floral architecture and lighting to bespoke stationery and tablescapes.",
          iconType: "Palette",
        },
        {
          title: "Guest Management & Hospitality",
          description: "Seamless coordination of RSVPs, accommodation block bookings, and transportation for your honored guests.",
          iconType: "Users",
        },
        {
          title: "Day-of Coordination",
          description: "Complete onsite management by our senior team to ensure the timeline flows flawlessly and discreetly.",
          iconType: "Clock",
        },
      ],
    },
    {
      id: "corporate",
      title: "Corporate Galas & Retreats",
      description: "Professional events that reflect your brand's prestige and engage your audience profoundly.",
      details: [
        {
          title: "Brand Integration",
          description: "Weaving your corporate identity elegantly into the event design without feeling overtly commercial.",
          iconType: "Briefcase",
        },
        {
          title: "Logistics & AV Production",
          description: "Managing complex technical requirements, staging, and entertainment to ensure high-impact presentations.",
          iconType: "Mic",
        },
        {
          title: "VIP & Speaker Handling",
          description: "Dedicated liaisons for key executives, speakers, and high-profile attendees.",
          iconType: "Star",
        },
      ],
    },
    {
      id: "private",
      title: "Private Celebrations",
      description: "Intimate gatherings requiring the highest level of discretion and bespoke detailing.",
      details: [
        {
          title: "Intimate Gatherings",
          description: "Curated dinner parties and small-scale events focused on culinary excellence and deep connection.",
          iconType: "GlassWater",
        },
        {
          title: "Milestone Birthdays",
          description: "Transformative, themed celebrations that honor significant life moments with spectacular flair.",
          iconType: "Gift",
        },
      ],
    },
  ],
  difference: {
    headline: "The Blinking Eye Difference",
    body: "What separates us is our dual capability: the creative vision to design breathtaking environments, and the operational rigor to execute them flawlessly. We do not just design events; we engineer experiences. Our approach is preemptive, managing variables before they become challenges.",
  },
  vendorTeaser: {
    headline: "An Exclusive Network",
    description: "Years in the industry have allowed us to cultivate deep relationships with the region's finest caterers, decorators, photographers, and entertainers. When you work with us, you gain access to our trusted inner circle.",
  },
  secondaryCta: {
    headline: "Ready to Discuss Your Event?",
    button: {
      label: "Inquire About Our Services",
      href: "/contact",
    },
  },
};
