// src/i18n/translations.js

import { products } from "../data/products";

export const translations = {
  EN: {
    /* ===== HEADER (UNCHANGED) ===== */
    nav: {
      company: "Company",
      products: "Products",
      business: "Business",
      about: "About Us",
      sourcing: "Sourcing",
      supply: "Supply Chain",
      packaging: "Packaging",
      quality: "Quality Standards",
      allProducts: "All Products",
      millets: "Millets Collection",
      spices: "Spices & More",
      recipes: "Recipes",
      franchise: "Franchise",
      bulk: "Bulk Orders",
      contact: "Contact",
      partner: "Partner With Us",
    },

    /* ===== HERO ===== */
    home: {
      hero: {
        eyebrow: "FROM THE HILLS OF ARAKU",
        titleMain: "Ancient Grains",
        titleAccent: "Rooted in Tradition",
        subtitle:
          "Climate-resilient millets cultivated by indigenous farmers, guided by generations of wisdom and delivered with modern care.",
        stats: {
          farmers: "Farmer Families",
          varieties: "Native Varieties",
          organic: "Natural Practices",
        },
        actions: {
          explore: "Explore Our Range",
          partner: "Partner With Us",
        },
      },
      origin: {
        eyebrow: "Our Origin Story",

        titleMain: "Rooted in Araku.",
        titleAccent: "Sustained by Trust.",

        description:
          "AT Millets began in the highlands of Araku Valley, where ancient grains have been cultivated for generations. We work directly with indigenous farmers, building long-term partnerships that respect land, people, and tradition.",

        pillars: {
          direct: {
            title: "Direct Sourcing",
            desc: "No middlemen. Transparent procurement at fair prices.",
          },
          partnership: {
            title: "Partnerships",
            desc: "Long-term collaboration with indigenous farming communities.",
          },
          knowledge: {
            title: "Indigenous Knowledge",
            desc: "Traditional farming wisdom preserved, not replaced.",
          },
        },

        badge: "Empowering 1000+ farmer families since 2020",

        visual: {
          title: "Araku Valley",
          sub: "Andhra Pradesh",
          coords: "18°19'N 82°52'E",
        },
      },
      values: {
        eyebrow: "Our Philosophy",
        titleMain: "Principles That",
        titleAccent: "Guide Every Decision",
        subtitle:
          "At AT Millets, our values are not written statements — they shape how we source, process, and grow responsibly.",

        integrity: {
          title: "Integrity at Origin",
          desc: "We work directly with farmers, ensuring transparency, fair pricing, and relationships built on trust.",
        },

        land: {
          title: "Respect for the Land",
          desc: "Indigenous farming wisdom is preserved to protect soil health, biodiversity, and ecological balance.",
        },

        purity: {
          title: "Purity Without Compromise",
          desc: "No shortcuts or additives — every grain retains its natural nutrition and authenticity.",
        },

        growth: {
          title: "Growth with Responsibility",
          desc: "As we scale, our commitment deepens toward communities, consumers, and future generations.",
        },

        closing:
          "These values define who we are — today, tomorrow, and for generations to come.",
        badge: "Built on Trust · Grown with Purpose",
      },
      impact: {
        eyebrow: "Impact Metrics",
        title: "Transforming Agriculture",
        titleAccent: "Through Data-Driven Growth",
        subtitle:
          "Real-time insights into our agricultural impact across regions, crops, and farming communities.",

        charts: {
          timeline: "Timeline",
          regions: "Regions",
          crops: "Crops",
          financials: "Financials",
        },

        stats: {
          farmers: "Total Farmers",
          regions: "Active Regions",
          production: "Total Production",
          yield: "Average Yield",
        },

        metrics: {
          farmers: "Farmers",
          production: "Production (Tons)",
          revenue: "Revenue",
        },

        timeline: {
          title: "Growth Timeline",
          subtitle: "Track our progress over time",
        },

        regions: {
          title: "Regional Distribution",
          subtitle: "Farmers across sourcing regions",
        },

        crops: {
          title: "Crop Production Analysis",
          subtitle: "Area versus yield comparison",
        },

        financials: {
          title: "Financial Overview",
          subtitle: "Monthly income, expenses and profit",
        },

        insights: {
          growth: {
            title: "Growth Rate",
            desc: "Year-over-year farmer adoption",
          },
          sustainability: {
            title: "Sustainability",
            desc: "Natural farming practices adopted",
          },
          technology: {
            title: "Technology",
            desc: "Farmers using digital tools",
          },
        },
      },
      narrative: {
        eyebrow: "Our Journey",
        title: "From Soil to Shelf",
        titleAccent: "A Story of Care",

        slides: {
          farmers: {
            step: "Step 01",
            label: "Farmers",
            title: "Rooted With Farmers",
            text: "We work directly with farmers, building relationships based on trust, respect, and fair pricing.",
          },

          cultivation: {
            step: "Step 02",
            label: "Cultivation",
            title: "Natural Cultivation",
            text: "Millets are grown using traditional, climate-resilient farming methods passed down through generations.",
          },

          processing: {
            step: "Step 03",
            label: "Processing",
            title: "Careful Processing",
            text: "Each grain is gently cleaned and processed to preserve nutrition and natural character.",
          },

          quality: {
            step: "Step 04",
            label: "Quality",
            title: "Quality Assurance",
            text: "Strict quality checks ensure purity, safety, and consistency in every batch we produce.",
          },

          delivery: {
            step: "Step 05",
            label: "Delivery",
            title: "Delivered With Care",
            text: "From our facilities to your home, every order is handled with transparency and care.",
          },
        },
      },
      trust: {
        eyebrow: "Quality & Trust",
        title: "Certified.",
        titleAccent: "Transparent. Responsible.",
        subtitle:
          "Every step — from sourcing to packaging — follows strict quality, safety, and ethical standards.",

        items: {
          organic: {
            title: "Natural & Responsible Practices",
            text: "Our products follow clean, sustainable processes that respect soil health and biodiversity.",
          },
          testing: {
            title: "Lab Tested Quality",
            text: "Every batch is tested to ensure purity, safety, and nutritional integrity.",
          },
          fair: {
            title: "Fair Farmer Partnerships",
            text: "Transparent sourcing with fair pricing and long-term farmer relationships.",
          },
          compliance: {
            title: "Regulatory Compliance",
            text: "Fully compliant with national food safety and quality regulations.",
          },
        },

        badges: {
          title: "Certifications & Standards",
          fssai: "FSSAI Certified",
          organic: "Natural Practices",
          lab: "Lab Tested",
          gmp: "Good Manufacturing Practices",
          trace: "Traceable Supply Chain",
        },

        footer:
          "Trust built over time — through accountability, quality, and respect.",
      },
    },
    about: {
      background: {
        eyebrow: "Company Background",
        titleMain: "Rooted in Araku.",
        titleAccent: "Built on Trust.",
        paragraph1:
          "AT Millets was founded in the highlands of Araku Valley, where millet cultivation has been part of everyday life for generations.",
        paragraph2:
          "What began as a local initiative has grown into a purpose-driven enterprise — connecting indigenous farmers with conscious consumers while preserving traditional farming wisdom.",
        highlight: "We don’t just source from Araku — we belong to it.",
        imageAlt: "Araku Valley farming landscape",
        imageLabel: "Araku Valley",
      },
      visionMission: {
        eyebrow: "Vision & Mission",
        titleMain: "Purpose That Guides Us",
        titleAccent: "Every Step Forward",

        vision: {
          title: "Our Vision",
          text: "To create a sustainable food ecosystem where traditional wisdom, ethical farming, and conscious consumption come together for a healthier future.",
        },

        mission: {
          title: "Our Mission",
          text: "To empower farmers, preserve indigenous agricultural practices, and deliver pure, traceable millets and natural foods to every household.",
        },
      },
      whyAraku: {
        eyebrow: "Why It Matters",
        titleMain: "Why Araku",
        titleAccent: "& Millets",
        subtitle:
          "Our choice of region and grain is intentional — rooted in ecology, nutrition, and generations of wisdom.",

        araku: {
          title: "The Araku Advantage",
          text: "Nestled in the Eastern Ghats, Araku Valley offers mineral-rich soil, high-altitude climate, and a legacy of farming untouched by industrial practices.",
        },

        millets: {
          title: "Power of Millets",
          text: "Millets are ancient grains packed with fiber, minerals, and sustained energy — naturally resilient, nutritious, and ideal for modern lifestyles.",
        },

        sustainability: {
          title: "Naturally Sustainable",
          text: "Millets grown in Araku require less water, no chemical dependence, and support biodiversity — making them a climate-smart food choice.",
        },
        imageAlt: "Araku Valley hills and farmlands",
      },
      sustainability: {
        eyebrow: "Our Responsibility",
        titleMain: "Committed to",
        titleAccent: "Sustainable Living",
        description:
          "Sustainability is not an initiative for us — it is the foundation of every decision we make, from seed to shelf.",

        pillars: {
          soil: {
            title: "Soil First Farming",
            text: "We promote crop diversity and natural farming methods that restore soil health and preserve fertility.",
          },
          water: {
            title: "Responsible Water Use",
            text: "Rain-fed agriculture and mindful irrigation practices help conserve water and protect ecosystems.",
          },
          community: {
            title: "Community-Centric Growth",
            text: "Sustainability also means secure livelihoods, fair practices, and long-term empowerment of farming communities.",
          },
        },

        images: {
          soil: "Soil health and natural farming practices",
          water: "Water conservation in agriculture",
          farmers: "Sustainable farming by indigenous communities",
        },
      },
    },
    tribal: {
      hero: {
        eyebrow: "Sourcing",
        titleMain: "Sourced With Respect.",
        titleAccent: "Rooted in Araku.",
        subtitle:
          "Our sourcing begins in the heartlands of Araku Valley, where generations of indigenous farmers cultivate millets in harmony with nature.",
        imageAlt: "Farmers of Araku Valley",
      },
      direct: {
        eyebrow: "Direct Sourcing",
        titleMain: "Straight From",
        titleAccent: "Araku Farmers",
        paragraph1:
          "We source our millets directly from the farmers in Araku Valley, eliminating middlemen and ensuring transparency at every step.",
        paragraph2:
          "By working closely with farming communities, we build long-term partnerships rooted in trust, dignity, and shared growth.",
        points: {
          noMiddlemen: "No intermediaries or exploitative agents",
          fairPricing: "Fair and transparent pricing for farmers",
          longTerm: "Long-term relationships with farming families",
        },
        imageAlt: "Direct sourcing from farmers",
      },
      ethical: {
        eyebrow: "ETHICAL PROCUREMENT",
        titleMain: "Fair, Transparent &",
        titleAccent: "Responsible Practices",
        subtitle:
          "Our procurement model is built on fairness, transparency, and long-term trust with farming communities.",
        items: {
          direct: {
            title: "Direct Procurement",
            text: "We source directly from farmers without intermediaries, ensuring complete transparency and control.",
          },
          fair: {
            title: "Fair Trade Pricing",
            text: "Prices are mutually agreed, respecting farmers’ effort, seasonal risks, and sustainable practices.",
          },
          payments: {
            title: "Timely Payments",
            text: "Farmers receive prompt and secure payments, strengthening financial stability and confidence.",
          },
          transparency: {
            title: "Ethical Transparency",
            text: "Every step—from sourcing to processing—is traceable, ethical, and accountable.",
          },
        },
      },
      empowerment: {
        eyebrow: "FARMER EMPOWERMENT",
        titleMain: "Empowering Farmers",
        titleAccent: "Beyond Fair Trade",
        paragraph1:
          "True sustainability begins with empowering the people who grow our food. We believe farmers are partners, not suppliers.",
        paragraph2:
          "Through education, stable income, and long-term collaboration, we help farmers build secure and dignified livelihoods.",
        imageAlt: "Farmers engaged in sustainable agriculture",
        items: {
          community: {
            title: "Community Strengthening",
            text: "We work closely with farming communities to build trust and collective growth.",
          },
          training: {
            title: "Knowledge & Training",
            text: "Farmers receive guidance on sustainable practices, quality standards, and crop improvement.",
          },
          income: {
            title: "Income Stability",
            text: "Guaranteed procurement and fair pricing ensure predictable and stable earnings.",
          },
          fairtrade: {
            title: "Fair Trade Commitment",
            text: "Our model respects dignity, transparency, and ethical partnerships at every level.",
          },
        },
      },
      environment: {
        eyebrow: "Environmental Responsibility",
        titleMain: "Protecting Nature,",
        titleAccent: "Preserving Tomorrow",
        paragraph:
          "Our sourcing practices are designed to work in harmony with nature, ensuring long-term ecological balance while supporting tribal livelihoods.",
        imageAlt: "Sustainable farming and environmental responsibility",

        items: {
          organic: {
            title: "Chemical-Free Farming",
            text: "We promote natural farming practices that protect soil health and biodiversity.",
          },
          water: {
            title: "Water Conservation",
            text: "Traditional water-efficient farming methods reduce dependency on excessive irrigation.",
          },
          packaging: {
            title: "Eco-Friendly Packaging",
            text: "We continuously move toward recyclable and minimal packaging solutions.",
          },
          biodiversity: {
            title: "Biodiversity Protection",
            text: "Indigenous crop varieties help preserve ecological balance and resilience.",
          },
        },
      },
    },
    supply: {
      intro: {
        eyebrow: "Supply Chain Model",
        titleMain: "From Source to Shelf,",
        titleAccent: "Built on Precision",
        subtitle:
          "Our supply chain is designed to ensure transparency, hygiene, and consistency — from farmers to finished products.",

        points: {
          procurement: {
            title: "Structured Procurement",
            text: "Raw materials are sourced directly and systematically from verified farming communities.",
          },
          processing: {
            title: "Controlled Processing",
            text: "District-wise processing centers ensure specialization, hygiene, and quality control at every stage.",
          },
          distribution: {
            title: "Centralized Warehousing",
            text: "Products are stored and dispatched from controlled central warehouses to maintain freshness and consistency.",
          },
        },
      },
      flow: {
        titleMain: "How Our Supply Chain Works",
        titleAccent: "Step by Step",
        subtitle:
          "Each stage of our supply chain is carefully monitored to ensure safety, consistency, and quality.",

        imageAlt: "AT Millets supply chain process",

        procurement: {
          title: "Raw Material Procurement",
          text: "Millets and raw produce are directly procured from trusted farmers.",
        },
        processing: {
          title: "Specialized Processing",
          text: "District-level facilities process grains under strict hygiene controls.",
        },
        packaging: {
          title: "Safe Packaging",
          text: "Processed products are hygienically packed to preserve freshness.",
        },
        warehousing: {
          title: "Central Warehousing",
          text: "Finished goods are stored in controlled warehouses before distribution.",
        },
      },
      quality: {
        titleMain: "Quality, Hygiene & Control",
        titleAccent: "Built Into Every Step",
        subtitle:
          "Our processing systems are designed to maintain safety, purity, and consistency across every batch.",

        hygiene: {
          title: "Strict Hygiene Standards",
          text: "Controlled environments and sanitation protocols are followed at every processing stage.",
        },
        testing: {
          title: "Batch-Level Testing",
          text: "Regular quality checks ensure grains meet internal and regulatory standards.",
        },
        controls: {
          title: "Process Controls",
          text: "Documented SOPs and monitored workflows reduce variability and risk.",
        },
        consistency: {
          title: "Consistent Output",
          text: "Standardized methods ensure uniform quality across regions and seasons.",
        },
      },
    },
    products: {
      page: {
        title: "Our Products",
        subtitle:
          "Authentic millets, pulses, spices, and natural foods sourced directly from farmers.",
      },
      empty: {
        title: "No Products Found",
        subtitle:
          "Try adjusting your filters or explore other categories to find what you're looking for.",
        reset: "Clear Filters",
      },
      search: {
        placeholder: "Search products, categories...",
        clear: "Clear search",
      },
      filters: {
        filter: "Filters",
        all: "All Products",
        category: "Category",
        packSize: "Pack Size",
        type: "Product Type",

        "millets-grains": "Millets & Grains",
        "pulses-legumes": "Pulses & Legumes",
        "spices-essentials": "Spices & Essentials",
        "instant-mixes": "Instant Mixes",
        snacks: "Snacks",
        "health-products": "Health Products",
        "natural-products": "Natural Products",
      },
      types: {
        raw: "Raw Grain",
        flour: "Flour / Powder",
        readyToCook: "Ready to Cook",
        readyToEat: "Ready to Eat",
      },
      productsFound: "Products Found",
      card: {
        viewDetails: "View Details →",
        explore: "Explore →",
      },
      nutrition: {
        title: "Nutrition Facts",
        serving: "Serving Size: 100g",
        note: "Percent Daily Values are based on a 2,000 calorie diet.",
      },
      details: {
        description: "Description",
        nutrition: "Nutrition Information",
        benefits: "Health Benefits",
        sourcing: "Sourcing Information",
        processing: "Processing Details",
        additional: "Additional Information",
        shelfLife: "Shelf Life",
        storage: "Storage Instructions",
        packSizes: "Available Pack Sizes",
        certifications: "Certifications",
        notFound: "Product not found",
        back: "Back to Products",
      },
    },
    business: {
      hero: {
        eyebrow: "Business Opportunity",
        titleMain: "Partner in a",
        titleAccent: "Proven Natural Food Model",
        subtitle:
          "We offer a structured business opportunity built on trust, demand, and ethically sourced natural products.",

        highlights: [
          "Farm Fresh & Natural Products",
          "Ethically Sourced from Araku",
          "Millet-Based & Health-Focused",
        ],

        description:
          "Become an entrepreneur by partnering with AT Millets. Our business model combines traditional wisdom, strong brand presence, and consistent product demand to help you build a sustainable and rewarding venture across Telangana, Andhra Pradesh, and Rayalaseema.",
      },

      why: {
        eyebrow: "Why Partner With Us",
        title: "A Brand Built on Trust & Demand",

        points: [
          "Trusted and growing natural food brand",
          "Direct sourcing from Araku farmers",
          "High and consistent market demand",
          "Attractive and sustainable margins",
          "Defined regional business support",
          "Reliable product supply and logistics",
        ],
      },

      whatYouGet: {
        eyebrow: "What You Get",
        title: "Complete Business Support",

        points: [
          "Store setup guidance & branding support",
          "Continuous product supply",
          "Marketing and promotional assistance",
          "Professional staff training",
          "24/7 operational & technical support",
          "Ongoing business guidance",
        ],
      },

      store: {
        eyebrow: "Retail Experience",
        title: "A Store That Reflects Quality & Trust",
        description:
          "Our store format is designed to deliver a premium yet approachable retail experience, reflecting purity, authenticity, and trust — the core values of AT Millets.",
      },

      earnings: {
        eyebrow: "Earning Potential",
        title: "A Sustainable Income Opportunity",
        note: "Earnings depend on location, operations, and market conditions. Our partners benefit from a model designed for steady and long-term growth.",
      },

      contacts: {
        title: "For Business Enquiry",

        regions: {
          telangana: {
            title: "Telangana",
            people: [
              "Krishna– 9885558222",
              "Kavitha– 8897265146",
              "Raghuram– 9989087740",
            ],
          },

          rayalaseema: {
            title: "Rayalaseema",
            people: ["Raghavendra – 8686202093", "Gopal – 9346508834"],
          },

          andhra: {
            title: "Andhra Pradesh",
            people: ["Mohan – 9652152467", "Ismail– 9542252286"],
          },
        },
      },
    },
  },

  TE: {
    nav: {
      company: "కంపెనీ",
      products: "ఉత్పత్తులు",
      business: "వ్యాపారం",
      about: "మా గురించి",
      sourcing: "రైతుల సేకరణ",
      supply: "సరఫరా వ్యవస్థ",
      packaging: "ప్యాకేజింగ్",
      quality: "నాణ్యత ప్రమాణాలు",
      allProducts: "అన్ని ఉత్పత్తులు",
      millets: "మిల్లెట్స్ సేకరణ",
      spices: "మసాలాలు & మరిన్ని",
      recipes: "వంటకాలు",
      franchise: "ఫ్రాంచైజ్",
      bulk: "బల్క్ ఆర్డర్లు",
      contact: "సంప్రదించండి",
      partner: "మాతో భాగస్వామ్యం అవ్వండి",
    },

    home: {
      hero: {
        eyebrow: "అరకు కొండల నుండి",
        titleMain: "ప్రాచీన ధాన్యాలు",
        titleAccent: "సాంప్రదాయానికి వేరులు",
        subtitle:
          "తరం తరాల జ్ఞానంతో సాగు చేయబడిన వాతావరణానుకూల మిల్లెట్లు, ఆదివాసీ రైతుల చేత పెరిగినవి.",
        stats: {
          farmers: "రైతు కుటుంబాలు",
          varieties: "స్థానిక రకాలు",
          organic: "సేంద్రీయ విధానాలు",
        },
        actions: {
          explore: "ఉత్పత్తులను చూడండి",
          partner: "మాతో భాగస్వామ్యం",
        },
      },
      origin: {
        eyebrow: "మా ఆరంభ కథ",

        titleMain: "ఆరకులో వేర్లు.",
        titleAccent: "నమ్మకంతో కొనసాగింపు.",

        description:
          "ఆరకు లోయ రైతుల ప్రాంతాల్లో తరతరాలుగా సాగు చేస్తున్న పురాతన ధాన్యాలతో AT మిల్లెట్స్ ప్రారంభమైంది. భూమి, ప్రజలు, సంప్రదాయాలకు గౌరవం ఇస్తూ మేము నేరుగా రైతులతో భాగస్వామ్యం చేస్తాము.",

        pillars: {
          direct: {
            title: "నేరుగా సేకరణ",
            desc: "మధ్యవర్తులు లేరు. న్యాయమైన ధరలతో పారదర్శక కొనుగోలు.",
          },
          partnership: {
            title: "భాగస్వామ్యం",
            desc: "రైతు వ్యవసాయ సముదాయాలతో దీర్ఘకాలిక భాగస్వామ్యం.",
          },
          knowledge: {
            title: "స్థానిక జ్ఞానం",
            desc: "తరతరాల వ్యవసాయ జ్ఞానాన్ని కాపాడటం.",
          },
        },

        badge: "2020 నుండి 1000+ రైతుల కుటుంబాలకు సాధికారత",

        visual: {
          title: "ఆరకు లోయ",
          sub: "ఆంధ్రప్రదేశ్",
          coords: "18°19'N 82°52'E",
        },
      },
      values: {
        eyebrow: "మా తత్వం",
        titleMain: "ప్రతి నిర్ణయాన్ని",
        titleAccent: "నడిపించే సూత్రాలు",
        subtitle:
          "AT మిల్లెట్స్‌లో మా విలువలు మాటలు మాత్రమే కావు — అవే మా సాగు, ప్రాసెసింగ్, అభివృద్ధికి దిశ చూపిస్తాయి.",

        integrity: {
          title: "మూలంలో నిజాయితీ",
          desc: "రైతులతో నేరుగా పని చేస్తూ పారదర్శకత, న్యాయమైన ధరలు, విశ్వాసాన్ని నిర్ధారిస్తాము.",
        },

        land: {
          title: "భూమికి గౌరవం",
          desc: "మట్టి ఆరోగ్యం, జీవ వైవిధ్యాన్ని కాపాడే సాంప్రదాయ సాగు పద్ధతులను పరిరక్షిస్తాము.",
        },

        purity: {
          title: "స్వచ్ఛతలో రాజీ లేదు",
          desc: "ఏ కలపకలు లేవు — ప్రతి గింజ సహజ పోషక విలువలను కలిగి ఉంటుంది.",
        },

        growth: {
          title: "బాధ్యతతో వృద్ధి",
          desc: "మా వృద్ధితో పాటు సమాజం, వినియోగదారులు, భవిష్యత్తుపట్ల బాధ్యత పెరుగుతుంది.",
        },

        closing: "ఈ విలువలే మాకు గుర్తింపు — నేడు మరియు రాబోయే తరాలకు.",
        badge: "నమ్మకంతో నిర్మితం · లక్ష్యంతో పెరిగింది",
      },
      impact: {
        eyebrow: "ప్రభావ సూచికలు",
        title: "వ్యవసాయ మార్పు",
        titleAccent: "డేటా ఆధారిత వృద్ధితో",
        subtitle:
          "ప్రాంతాలు, పంటలు మరియు రైతు సముదాయాలపై మా వ్యవసాయ ప్రభావానికి సంబంధించిన ప్రత్యక్ష సమాచారం.",

        charts: {
          timeline: "కాలక్రమం",
          regions: "ప్రాంతాలు",
          crops: "పంటలు",
          financials: "ఆర్థిక వివరాలు",
        },

        stats: {
          farmers: "మొత్తం రైతులు",
          regions: "క్రియాశీల ప్రాంతాలు",
          production: "మొత్తం ఉత్పత్తి",
          yield: "సగటు దిగుబడి",
        },

        metrics: {
          farmers: "రైతులు",
          production: "ఉత్పత్తి (టన్నులు)",
          revenue: "ఆదాయం",
        },

        timeline: {
          title: "వృద్ధి కాలక్రమం",
          subtitle: "కాలానుగుణంగా మా పురోగతి",
        },

        regions: {
          title: "ప్రాంతాల పంపిణీ",
          subtitle: "ప్రాంతాల వారీగా రైతులు",
        },

        crops: {
          title: "పంట ఉత్పత్తి విశ్లేషణ",
          subtitle: "విస్తీర్ణం మరియు దిగుబడి పోలిక",
        },

        financials: {
          title: "ఆర్థిక అవలోకనం",
          subtitle: "నెలవారీ ఆదాయం, ఖర్చులు మరియు లాభం",
        },

        insights: {
          growth: {
            title: "వృద్ధి రేటు",
            desc: "ఏటా రైతుల చేరిక",
          },
          sustainability: {
            title: "సుస్థిరత",
            desc: "ఆర్గానిక్ సాగు విధానాలు",
          },
          technology: {
            title: "సాంకేతికత",
            desc: "డిజిటల్ సాధనాలు ఉపయోగిస్తున్న రైతులు",
          },
        },
      },
      narrative: {
        eyebrow: "మా ప్రయాణం",
        title: "భూమి నుండి",
        titleAccent: "మీ ఇంటి వరకు",

        slides: {
          farmers: {
            step: "దశ 01",
            label: "రైతులు",
            title: "రైతులతో కలిసి",
            text: "రైతులతో నేరుగా పనిచేస్తూ నమ్మకం, గౌరవం మరియు న్యాయమైన ధరలను పాటిస్తాము.",
          },

          cultivation: {
            step: "దశ 02",
            label: "సాగు",
            title: "సహజ సాగు",
            text: "తరం తరాలుగా కొనసాగుతున్న వాతావరణ అనుకూల మరియు సహజ సాగు విధానాలు.",
          },

          processing: {
            step: "దశ 03",
            label: "ప్రాసెసింగ్",
            title: "జాగ్రత్తగా ప్రాసెసింగ్",
            text: "పోషక విలువలు కాపాడేలా ప్రతి ధాన్యాన్ని జాగ్రత్తగా శుద్ధి చేస్తాము.",
          },

          quality: {
            step: "దశ 04",
            label: "నాణ్యత",
            title: "నాణ్యత హామీ",
            text: "ప్రతి బ్యాచ్‌లో స్వచ్ఛత మరియు భద్రతను కఠినంగా పరీక్షిస్తాము.",
          },

          delivery: {
            step: "దశ 05",
            label: "డెలివరీ",
            title: "జాగ్రత్తగా డెలివరీ",
            text: "తాజాతనం మరియు పారదర్శకతతో మీ ఇంటికి ఉత్పత్తులను చేరవేస్తాము.",
          },
        },
      },
      trust: {
        eyebrow: "నాణ్యత & నమ్మకం",
        title: "ధృవీకరణ.",
        titleAccent: "పారదర్శకత. బాధ్యత.",
        subtitle:
          "సేకరణ నుంచి ప్యాకేజింగ్ వరకు ప్రతి దశలో కఠినమైన నాణ్యత ప్రమాణాలు పాటిస్తాము.",

        items: {
          organic: {
            title: "ప్రకృతి అనుకూల విధానాలు",
            text: "మట్టి ఆరోగ్యం మరియు జీవ వైవిధ్యాన్ని గౌరవించే శుద్ధమైన ప్రక్రియలు.",
          },
          testing: {
            title: "ల్యాబ్ పరీక్షలు",
            text: "ప్రతి బ్యాచ్ స్వచ్ఛత మరియు భద్రత కోసం పరీక్షించబడుతుంది.",
          },
          fair: {
            title: "న్యాయమైన రైతు భాగస్వామ్యం",
            text: "పారదర్శక కొనుగోలు మరియు దీర్ఘకాలిక రైతు సంబంధాలు.",
          },
          compliance: {
            title: "నియంత్రణ అనుసరణ",
            text: "ఆహార భద్రత మరియు నాణ్యత నియమాలకు పూర్తిగా అనుగుణంగా ఉంటుంది.",
          },
        },

        badges: {
          title: "సర్టిఫికేషన్లు & ప్రమాణాలు",
          fssai: "FSSAI ధృవీకరణ",
          organic: "ఆర్గానిక్ విధానాలు",
          lab: "ల్యాబ్ పరీక్షలు",
          gmp: "మంచి తయారీ విధానాలు",
          trace: "ట్రేసబుల్ సరఫరా శ్రేణి",
        },

        footer: "నాణ్యత, బాధ్యత మరియు నమ్మకం ద్వారా నిర్మితమైన విశ్వాసం.",
      },
    },
    about: {
      background: {
        eyebrow: "మా నేపథ్యం",
        titleMain: "అరకు నుంచి పుట్టింది.",
        titleAccent: "నమ్మకంతో నిర్మితమైంది.",
        paragraph1:
          "అరకు లోయలోని రైతుల ప్రాంతాల్లో, తరతరాలుగా సాగు చేస్తున్న మిల్లెట్స్ నుంచే AT Millets ప్రారంభమైంది.",
        paragraph2:
          "స్థానిక ప్రయత్నంగా ప్రారంభమైన ఈ ప్రయాణం, రైతులను నాణ్యమైన ఆహారాన్ని కోరుకునే వినియోగదారులతో కలిపే ఒక బాధ్యతాయుత వ్యాపారంగా మారింది.",
        highlight:
          "మేము అరకు నుంచి ఉత్పత్తులు తీసుకోవడం మాత్రమే కాదు — అరకు లో భాగమే.",
        imageAlt: "అరకు లోయ రైతుల సాగు దృశ్యం",
        imageLabel: "అరకు లోయ",
      },
      visionMission: {
        eyebrow: "దృష్టి & లక్ష్యం",
        titleMain: "మమ్మల్ని ముందుకు నడిపించే",
        titleAccent: "ఉద్దేశ్యం",

        vision: {
          title: "మా దృష్టి",
          text: "సాంప్రదాయ జ్ఞానం, నైతిక సాగు మరియు జాగ్రత్తైన వినియోగం కలిసి ఒక ఆరోగ్యకరమైన భవిష్యత్తును నిర్మించే ఆహార వ్యవస్థను సృష్టించడం.",
        },

        mission: {
          title: "మా లక్ష్యం",
          text: "రైతులను శక్తివంతం చేయడం, స్థానిక వ్యవసాయ పద్ధతులను కాపాడడం మరియు స్వచ్ఛమైన మిల్లెట్స్‌ను ప్రతి కుటుంబానికి అందించడం.",
        },
      },
      whyAraku: {
        eyebrow: "ఎందుకు ముఖ్యము",
        titleMain: "ఎందుకు అరకు",
        titleAccent: "మరియు మిల్లెట్లు",
        subtitle:
          "మేము ప్రాంతం మరియు ధాన్యాన్ని ఎంచుకోవడం వెనుక పర్యావరణం, పోషణ మరియు తరతరాల జ్ఞానం ఉంది.",

        araku: {
          title: "అరకు ప్రత్యేకత",
          text: "తూర్పు ఘాట్‌లలో ఉన్న అరకు లోయ ఖనిజాలతో నిండిన నేల, ఎత్తైన వాతావరణం మరియు పరిశ్రమల ప్రభావం లేని రైతు వ్యవసాయ సంప్రదాయాన్ని కలిగి ఉంది.",
        },

        millets: {
          title: "మిల్లెట్ల శక్తి",
          text: "మిల్లెట్లు ఫైబర్, ఖనిజాలు మరియు దీర్ఘకాలిక శక్తితో నిండిన పురాతన ధాన్యాలు — ఆరోగ్యానికి, ఆధునిక జీవనశైలికి అనువైనవి.",
        },

        sustainability: {
          title: "సహజంగా సస్టైనబుల్",
          text: "అరకు మిల్లెట్లు తక్కువ నీటితో, రసాయనాల అవసరం లేకుండా పెరిగి, జీవ వైవిధ్యాన్ని కాపాడుతాయి.",
        },
        imageAlt: "అరకు లోయ పర్వతాలు మరియు వ్యవసాయ భూములు",
      },
      sustainability: {
        eyebrow: "మా బాధ్యత",
        titleMain: "స్థిరమైన",
        titleAccent: "జీవనానికి కట్టుబాటు",
        description:
          "స్థిరత్వం మాకు ఒక కార్యక్రమం కాదు — విత్తనం నుంచి వినియోగదారుడి వరకు ప్రతి నిర్ణయంలో అది ఆధారం.",

        pillars: {
          soil: {
            title: "మట్టికి ప్రాధాన్యత",
            text: "భూమి సారాన్ని కాపాడే సహజ సాగు విధానాలు మరియు పంట వైవిధ్యాన్ని మేము ప్రోత్సహిస్తాము.",
          },
          water: {
            title: "నీటి పరిరక్షణ",
            text: "వర్షాధార వ్యవసాయం మరియు బాధ్యతాయుతమైన నీటి వినియోగం ద్వారా పర్యావరణాన్ని రక్షిస్తాము.",
          },
          community: {
            title: "సముదాయ ఆధారిత అభివృద్ధి",
            text: "సుస్థిరత అంటే రైతుల జీవన భద్రత, న్యాయమైన విధానాలు మరియు దీర్ఘకాలిక అభివృద్ధి.",
          },
        },

        images: {
          soil: "మట్టిసారం మరియు సహజ సాగు విధానాలు",
          water: "వ్యవసాయంలో నీటి సంరక్షణ",
          farmers: "రైతుల సుస్థిర సాగు",
        },
      },
    },
    tribal: {
      hero: {
        eyebrow: "రైతు సేకరణ",
        titleMain: "గౌరవంతో సేకరణ.",
        titleAccent: "అరకు నుండి పుట్టింది.",
        subtitle:
          "అరకు లోయలోని రైతులు తరతరాలుగా ప్రకృతితో కలిసి మిల్లెట్స్‌ను సాగు చేస్తూ వస్తున్నారు. మా ప్రయాణం అక్కడే మొదలవుతుంది.",
        imageAlt: "అరకు లోయ రైతులు",
      },
      direct: {
        eyebrow: "నేరుగా సేకరణ",
        titleMain: "నేరుగా",
        titleAccent: "రైతుల నుండి",
        paragraph1:
          "మేము అరకు లోయలోని రైతుల నుండి నేరుగా మిల్లెట్స్‌ను సేకరిస్తాము. మధ్యవర్తులు లేకుండా పారదర్శకతను పాటిస్తాము.",
        paragraph2:
          "రైతులతో నేరుగా కలిసి పనిచేసి, గౌరవం మరియు నమ్మకంపై ఆధారపడ్డ దీర్ఘకాల సంబంధాలను నిర్మిస్తున్నాము.",
        points: {
          noMiddlemen: "మధ్యవర్తులు లేదా దోపిడీ దళాలు లేవు",
          fairPricing: "రైతులకు న్యాయమైన ధరలు",
          longTerm: "రైతు కుటుంబాలతో దీర్ఘకాల బంధం",
        },
        imageAlt: "రైతుల నుండి నేరుగా సేకరణ",
      },
      ethical: {
        eyebrow: "నైతిక కొనుగోలు విధానాలు",
        titleMain: "న్యాయమైన, పారదర్శకమైన",
        titleAccent: "బాధ్యతాయుత ప్రక్రియలు",
        subtitle:
          "మా కొనుగోలు విధానం రైతులతో నమ్మకం, పారదర్శకత మరియు దీర్ఘకాల సంబంధాలపై ఆధారపడి ఉంటుంది.",
        items: {
          direct: {
            title: "నేరుగా కొనుగోలు",
            text: "మధ్యవర్తులు లేకుండా నేరుగా రైతుల నుండి కొనుగోలు చేస్తాము.",
          },
          fair: {
            title: "న్యాయమైన ధరలు",
            text: "రైతుల శ్రమ, ప్రమాదాలు మరియు సుస్థిర వ్యవసాయాన్ని గౌరవిస్తూ ధరలు నిర్ణయిస్తాము.",
          },
          payments: {
            title: "సకాలంలో చెల్లింపులు",
            text: "రైతులకు సురక్షితమైన మరియు సమయానుకూలమైన చెల్లింపులు చేస్తాము.",
          },
          transparency: {
            title: "పారదర్శక విధానం",
            text: "కొనుగోలు నుండి ప్రాసెసింగ్ వరకు ప్రతి దశ నైతికంగా, స్పష్టంగా ఉంటుంది.",
          },
        },
      },
      empowerment: {
        eyebrow: "రైతుల శక్తివంతీకరణ",
        titleMain: "రైతులను శక్తివంతం చేస్తూ",
        titleAccent: "న్యాయమైన వ్యాపారానికి మించి",
        paragraph1:
          "సుస్థిరత రైతుల నుండి ప్రారంభమవుతుంది. మా కోసం రైతులు సరఫరాదారులు కాదు, భాగస్వాములు.",
        paragraph2:
          "విద్య, స్థిరమైన ఆదాయం మరియు దీర్ఘకాల సహకారంతో రైతుల జీవనాన్ని మెరుగుపరుస్తాము.",
        imageAlt: "సుస్థిర వ్యవసాయంలో పాల్గొంటున్న రైతులు",
        items: {
          community: {
            title: "సముదాయ బలోపేతం",
            text: "రైతు సముదాయాలతో కలిసి విశ్వాసం మరియు సమిష్టి అభివృద్ధిని నిర్మిస్తాము.",
          },
          training: {
            title: "శిక్షణ & అవగాహన",
            text: "సుస్థిర వ్యవసాయం మరియు నాణ్యత ప్రమాణాలపై మార్గదర్శనం అందిస్తాము.",
          },
          income: {
            title: "ఆదాయ స్థిరత్వం",
            text: "నిర్ధారిత కొనుగోలు మరియు న్యాయమైన ధరలు ఆదాయ భద్రతను ఇస్తాయి.",
          },
          fairtrade: {
            title: "న్యాయ వాణిజ్య నిబద్ధత",
            text: "ప్రతి దశలో గౌరవం, పారదర్శకత మరియు నైతికతను పాటిస్తాము.",
          },
        },
      },
      environment: {
        eyebrow: "పర్యావరణ బాధ్యత",
        titleMain: "ప్రకృతిని రక్షిస్తూ,",
        titleAccent: "రేపటిని కాపాడుతూ",
        paragraph:
          "మా సోర్సింగ్ విధానాలు ప్రకృతితో సమన్వయంగా పనిచేసేలా రూపకల్పన చేయబడ్డాయి, దీర్ఘకాలిక పర్యావరణ సమతుల్యతను నిర్ధారిస్తాయి.",
        imageAlt: "సుస్థిర వ్యవసాయం మరియు పర్యావరణ సంరక్షణ",

        items: {
          organic: {
            title: "రసాయన రహిత సాగు",
            text: "మేము నేల ఆరోగ్యాన్ని కాపాడే సహజ వ్యవసాయ విధానాలను ప్రోత్సహిస్తాము.",
          },
          water: {
            title: "నీటి సంరక్షణ",
            text: "సాంప్రదాయ నీటి సమర్థవంతమైన పద్ధతులు అధిక సాగునీటి అవసరాన్ని తగ్గిస్తాయి.",
          },
          packaging: {
            title: "పర్యావరణ అనుకూల ప్యాకేజింగ్",
            text: "మేము రీసైకిల్ చేయగల ప్యాకేజింగ్ వైపు ముందుకు సాగుతున్నాము.",
          },
          biodiversity: {
            title: "జైవ వైవిధ్య పరిరక్షణ",
            text: "స్థానిక పంట రకాలు పర్యావరణ సమతుల్యతను కాపాడుతాయి.",
          },
        },
      },
    },
    supply: {
      intro: {
        eyebrow: "సప్లై చైన్ విధానం",
        titleMain: "మూలం నుండి మార్కెట్ వరకు,",
        titleAccent: "నియంత్రిత వ్యవస్థలో",
        subtitle:
          "ట్రైబల్ రైతుల నుండి తుది ఉత్పత్తి వరకు నాణ్యత, పరిశుభ్రత మరియు పారదర్శకతను మా సప్లై చైన్ నిర్ధారిస్తుంది.",

        points: {
          procurement: {
            title: "వ్యవస్థబద్ధమైన సేకరణ",
            text: "ధృవీకరించబడిన ట్రైబల్ రైతుల నుండి నేరుగా ముడి పదార్థాలను సేకరిస్తాము.",
          },
          processing: {
            title: "నియంత్రిత ప్రాసెసింగ్",
            text: "జిల్లా స్థాయి ప్రాసెసింగ్ కేంద్రాలు పరిశుభ్రత మరియు నాణ్యత నియంత్రణను నిర్ధారిస్తాయి.",
          },
          distribution: {
            title: "కేంద్ర గిడ్డంగులు",
            text: "తాజాతనాన్ని నిలబెట్టేందుకు ఉత్పత్తులు కేంద్ర గిడ్డంగుల నుండి పంపిణీ చేయబడతాయి.",
          },
        },
      },
      flow: {
        titleMain: "మా సప్లై చైన్ విధానం",
        titleAccent: "దశల వారీగా",
        subtitle:
          "ప్రతి దశలో నాణ్యత మరియు పరిశుభ్రతను నిర్ధారించే విధంగా మా సప్లై చైన్ పనిచేస్తుంది.",

        imageAlt: "AT మిల్లెట్స్ సప్లై చైన్ ప్రక్రియ",

        procurement: {
          title: "ముడి పదార్థాల సేకరణ",
          text: "నమ్మకమైన ట్రైబల్ రైతుల నుండి నేరుగా మిల్లెట్స్ సేకరిస్తాము.",
        },
        processing: {
          title: "ప్రత్యేక ప్రాసెసింగ్",
          text: "జిల్లా స్థాయి కేంద్రాలలో పరిశుభ్రతతో ప్రాసెసింగ్ జరుగుతుంది.",
        },
        packaging: {
          title: "సురక్షిత ప్యాకేజింగ్",
          text: "తాజాతనాన్ని నిలబెట్టే విధంగా ప్యాకేజింగ్ చేయబడుతుంది.",
        },
        warehousing: {
          title: "కేంద్ర గిడ్డంగులు",
          text: "వితరణకు ముందు ఉత్పత్తులను కేంద్ర గిడ్డంగులలో నిల్వ చేస్తాము.",
        },
      },
      quality: {
        titleMain: "నాణ్యత, పరిశుభ్రత & నియంత్రణ",
        titleAccent: "ప్రతి దశలో నిక్షిప్తం",
        subtitle:
          "ప్రతి బ్యాచ్‌లో భద్రత మరియు నాణ్యతను నిర్ధారించే విధంగా మా ప్రాసెసింగ్ వ్యవస్థలు రూపకల్పన చేయబడ్డాయి.",

        hygiene: {
          title: "కఠిన పరిశుభ్రత ప్రమాణాలు",
          text: "ప్రతి దశలో పరిశుభ్రత మరియు శుభ్రత నియమాలు పాటించబడతాయి.",
        },
        testing: {
          title: "బ్యాచ్ స్థాయి పరీక్షలు",
          text: "నియమిత పరీక్షల ద్వారా నాణ్యతను నిర్ధారిస్తాము.",
        },
        controls: {
          title: "ప్రాసెస్ నియంత్రణలు",
          text: "ప్రామాణిక విధానాలు మార్పులను తగ్గిస్తాయి.",
        },
        consistency: {
          title: "సతత నాణ్యత",
          text: "ప్రాంతం లేదా కాలం మారినా నాణ్యత మారదు.",
        },
      },
    },
    products: {
      page: {
        title: "మా ఉత్పత్తులు",
        subtitle:
          "రైతుల నుండి నేరుగా సేకరించిన మిల్లెట్లు, పప్పులు, మసాలాలు మరియు సహజ ఆహారాలు.",
      },
      empty: {
        title: "ఉత్పత్తులు కనబడలేదు",
        subtitle: "దయచేసి ఫిల్టర్లు మార్చండి లేదా ఇతర విభాగాలను చూడండి.",
        reset: "ఫిల్టర్లు తొలగించండి",
      },
      search: {
        placeholder: "ఉత్పత్తులు లేదా విభాగాలను వెతకండి...",
        clear: "శోధన తొలగించండి",
      },
      nutrition: {
        title: "పోషక విలువలు",
        serving: "సర్వింగ్ పరిమాణం: 100 గ్రాములు",
        note: "రోజువారీ అవసరాల ఆధారంగా విలువలు మారవచ్చు.",
      },
      filters: {
        filter: "ఫిల్టర్లు",
        all: "అన్ని ఉత్పత్తులు",
        category: "వర్గం",
        packSize: "ప్యాక్ పరిమాణం",
        type: "ఉత్పత్తి రకం",

        "millets-grains": "మిల్లెట్లు & ధాన్యాలు",
        "pulses-legumes": "పప్పులు & పప్పుధాన్యాలు",
        "spices-essentials": "మసాలాలు & అవసరాలు",
        "instant-mixes": "తక్షణ వంట మిశ్రమాలు",
        snacks: "స్నాక్స్",
        "health-products": "ఆరోగ్య ఉత్పత్తులు",
        "natural-products": "సహజ ఉత్పత్తులు",
      },
      productsFound: "ఉత్పత్తులు కనుగొనబడ్డాయి",
      types: {
        raw: "ముడి ధాన్యం",
        flour: "పిండి / పొడి",
        readyToCook: "వండేందుకు సిద్ధం",
        readyToEat: "తినేందుకు సిద్ధం",
      },

      card: {
        viewDetails: "వివరాలు చూడండి →",
        explore: "చూడండి →",
      },
      details: {
        description: "వివరణ",
        nutrition: "పోషక సమాచారం",
        benefits: "ఆరోగ్య ప్రయోజనాలు",
        sourcing: "సేకరణ వివరాలు",
        processing: "ప్రాసెసింగ్ విధానం",
        additional: "ఇతర సమాచారం",
        shelfLife: "షెల్ఫ్ లైఫ్",
        storage: "నిల్వ విధానం",
        packSizes: "లభ్యమయ్యే ప్యాక్ పరిమాణాలు",
        certifications: "సర్టిఫికేషన్లు",
        notFound: "ఉత్పత్తి కనబడలేదు",
        back: "ఉత్పత్తులకు తిరిగి వెళ్ళండి",
      },
    },
    business: {
      hero: {
        eyebrow: "వ్యాపార అవకాశం",
        titleMain: "నమ్మకంపై నిర్మితమైన",
        titleAccent: "వ్యాపార భాగస్వామ్యం",
        subtitle:
          "సహజ ఆహార ఉత్పత్తులపై ఆధారపడిన, నమ్మకమైన మరియు డిమాండ్ ఉన్న వ్యాపార అవకాశాన్ని మేము అందిస్తున్నాము.",

        highlights: [
          "తాజా మరియు సహజ ఉత్పత్తులు",
          "అరకు నుండి నైతికంగా సేకరణ",
          "మిల్లెట్ ఆధారిత ఆరోగ్య ఉత్పత్తులు",
        ],

        description:
          "AT మిల్లెట్స్‌తో భాగస్వామిగా మారి ఒక స్థిరమైన వ్యాపారాన్ని నిర్మించండి. తెలంగాణ, ఆంధ్రప్రదేశ్ మరియు రాయలసీమ ప్రాంతాల్లో అభివృద్ధి చెందుతున్న వ్యాపార మోడల్ ఇది.",
      },

      why: {
        eyebrow: "మాతో ఎందుకు భాగస్వామ్యం కావాలి",
        title: "నమ్మకం & డిమాండ్‌తో కూడిన బ్రాండ్",

        points: [
          "నమ్మకమైన సహజ ఆహార బ్రాండ్",
          "అరకు రైతుల నుండి నేరుగా సేకరణ",
          "ఎక్కువ మరియు నిరంతర మార్కెట్ డిమాండ్",
          "స్థిరమైన మరియు ఆకర్షణీయ లాభాలు",
          "ప్రాంతాల వారీగా వ్యాపార మద్దతు",
          "నిరంతర ఉత్పత్తి సరఫరా",
        ],
      },

      whatYouGet: {
        eyebrow: "మీకు లభించేది",
        title: "పూర్తి వ్యాపార మద్దతు",

        points: [
          "స్టోర్ సెటప్ & బ్రాండింగ్ మార్గదర్శనం",
          "నిరంతర ఉత్పత్తి సరఫరా",
          "మార్కెటింగ్ మరియు ప్రమోషన్ మద్దతు",
          "సిబ్బంది శిక్షణ",
          "24/7 సాంకేతిక మరియు ఆపరేషనల్ మద్దతు",
          "నిరంతర వ్యాపార మార్గదర్శనం",
        ],
      },

      store: {
        eyebrow: "రిటైల్ అనుభవం",
        title: "నాణ్యతను ప్రతిబింబించే స్టోర్",
        description:
          "AT మిల్లెట్స్ స్టోర్లు నాణ్యత, స్వచ్ఛత మరియు విశ్వాసాన్ని ప్రతిబింబించేలా రూపకల్పన చేయబడ్డాయి.",
      },

      earnings: {
        eyebrow: "ఆదాయ అవకాశాలు",
        title: "స్థిరమైన ఆదాయ మార్గం",
        note: "ఆదాయం ప్రదేశం, నిర్వహణ మరియు మార్కెట్ పరిస్థితులపై ఆధారపడి ఉంటుంది.",
      },

      contacts: {
        title: "వ్యాపార విచారణ కోసం",

        regions: {
          telangana: {
            title: "తెలంగాణ",
            people: [
              "కృష్ణ – 9885558222",
              "కవిత – 8897265146",
              "రఘురామ్ – 9989087740",
            ],
          },

          rayalaseema: {
            title: "రాయలసీమ",
            people: ["రాఘవేంద్ర – 8686202093", "గోపాల్ – 9346508834"],
          },

          andhra: {
            title: "ఆంధ్రప్రదేశ్",
            people: ["మోహన్ – 9652152467", "ఇస్మాయిల్ – 9542252286"],
          },
        },
      },
    },
  },

  HI: {
    nav: {
      company: "कंपनी",
      products: "उत्पाद",
      business: "व्यवसाय",
      about: "हमारे बारे में",
      sourcing: "किसान सोर्सिंग",
      supply: "आपूर्ति श्रृंखला",
      packaging: "पैकेजिंग",
      quality: "गुणवत्ता मानक",
      allProducts: "सभी उत्पाद",
      millets: "मिलेट्स संग्रह",
      spices: "मसाले और अधिक",
      recipes: "रेसिपी",
      franchise: "फ्रैंचाइज़ी",
      bulk: "थोक ऑर्डर",
      contact: "संपर्क करें",
      partner: "हमारे साथ जुड़ें",
    },
    home: {
      hero: {
        eyebrow: "अराकू की पहाड़ियों से",
        titleMain: "प्राचीन अनाज",
        titleAccent: "परंपरा में निहित",
        subtitle:
          "जलवायु-सहिष्णु मिलेट्स, आदिवासी किसानों द्वारा उगाए गए, पीढ़ियों की बुद्धिमत्ता के साथ।",
        stats: {
          farmers: "किसान परिवार",
          varieties: "स्थानीय किस्में",
          organic: "जैविक प्रक्रियाएँ",
        },
        actions: {
          explore: "हमारी रेंज देखें",
          partner: "हमसे जुड़ें",
        },
      },
      origin: {
        eyebrow: "हमारी उत्पत्ति की कहानी",

        titleMain: "अराकू में निहित।",
        titleAccent: "विश्वास से पोषित।",

        description:
          "AT मिलेट्स की शुरुआत अराकू घाटी के क्षेत्रों से हुई, जहाँ पीढ़ियों से प्राचीन अनाज उगाए जाते रहे हैं। हम भूमि, लोगों और परंपराओं का सम्मान करते हुए सीधे आदिवासी किसानों के साथ काम करते हैं।",

        pillars: {
          direct: {
            title: "सीधा स्रोत",
            desc: "कोई बिचौलिया नहीं। उचित मूल्य पर पारदर्शी खरीद।",
          },
          partnership: {
            title: "साझेदारी",
            desc: "आदिवासी कृषि समुदायों के साथ दीर्घकालिक सहयोग।",
          },
          knowledge: {
            title: "पारंपरिक ज्ञान",
            desc: "पारंपरिक कृषि ज्ञान को संरक्षित किया गया है।",
          },
        },

        badge: "2020 से 1000+ आदिवासी परिवारों को सशक्त बनाना",

        visual: {
          title: "अराकू घाटी",
          sub: "आंध्र प्रदेश",
          coords: "18°19'N 82°52'E",
        },
      },
      values: {
        eyebrow: "हमारा दर्शन",
        titleMain: "वे सिद्धांत",
        titleAccent: "जो हर निर्णय का मार्गदर्शन करते हैं",
        subtitle:
          "AT Millets में हमारे मूल्य केवल शब्द नहीं हैं — वे हमारे स्रोत, प्रक्रिया और विकास को दिशा देते हैं।",

        integrity: {
          title: "मूल में ईमानदारी",
          desc: "हम आदिवासी किसानों के साथ सीधे काम करते हैं, पारदर्शिता और उचित मूल्य सुनिश्चित करते हैं।",
        },

        land: {
          title: "भूमि के प्रति सम्मान",
          desc: "मिट्टी, जैव विविधता और पारिस्थितिक संतुलन की रक्षा करने वाली पारंपरिक खेती को संरक्षित करते हैं।",
        },

        purity: {
          title: "शुद्धता में कोई समझौता नहीं",
          desc: "कोई मिलावट नहीं — हर अनाज अपनी प्राकृतिक पोषण शक्ति बनाए रखता है।",
        },

        growth: {
          title: "जिम्मेदारी के साथ विकास",
          desc: "जैसे-जैसे हम बढ़ते हैं, समाज और भविष्य के प्रति हमारी जिम्मेदारी भी बढ़ती है।",
        },

        closing:
          "ये मूल्य ही हमारी पहचान हैं — आज और आने वाली पीढ़ियों के लिए।",
        badge: "विश्वास पर निर्मित · उद्देश्य के साथ विकसित",
      },
      impact: {
        eyebrow: "प्रभाव मेट्रिक्स",
        title: "कृषि में परिवर्तन",
        titleAccent: "डेटा-आधारित विकास के साथ",
        subtitle:
          "क्षेत्रों, फसलों और किसान समुदायों में हमारे कृषि प्रभाव की वास्तविक समय जानकारी।",

        charts: {
          timeline: "समयरेखा",
          regions: "क्षेत्र",
          crops: "फसलें",
          financials: "वित्तीय",
        },

        stats: {
          farmers: "कुल किसान",
          regions: "सक्रिय क्षेत्र",
          production: "कुल उत्पादन",
          yield: "औसत उपज",
        },

        metrics: {
          farmers: "किसान",
          production: "उत्पादन (टन)",
          revenue: "राजस्व",
        },

        timeline: {
          title: "विकास समयरेखा",
          subtitle: "समय के साथ हमारी प्रगति",
        },

        regions: {
          title: "क्षेत्रीय वितरण",
          subtitle: "क्षेत्रों में किसान",
        },

        crops: {
          title: "फसल उत्पादन विश्लेषण",
          subtitle: "क्षेत्र और उपज की तुलना",
        },

        financials: {
          title: "वित्तीय अवलोकन",
          subtitle: "मासिक आय, खर्च और लाभ",
        },

        insights: {
          growth: {
            title: "विकास दर",
            desc: "वार्षिक किसान वृद्धि",
          },
          sustainability: {
            title: "स्थिरता",
            desc: "जैविक कृषि पद्धतियाँ",
          },
          technology: {
            title: "प्रौद्योगिकी",
            desc: "डिजिटल उपकरणों का उपयोग",
          },
        },
      },
      trust: {
        eyebrow: "गुणवत्ता और विश्वास",
        title: "प्रमाणित.",
        titleAccent: "पारदर्शी. जिम्मेदार.",
        subtitle:
          "स्रोत से पैकेजिंग तक हर चरण में सख्त गुणवत्ता और सुरक्षा मानक अपनाए जाते हैं।",

        items: {
          organic: {
            title: "प्राकृतिक और जिम्मेदार प्रक्रियाएं",
            text: "मिट्टी, जैव विविधता और प्रकृति के सम्मान के साथ उत्पादन।",
          },
          testing: {
            title: "लैब परीक्षण",
            text: "हर बैच को शुद्धता और सुरक्षा के लिए जांचा जाता है।",
          },
          fair: {
            title: "न्यायसंगत किसान साझेदारी",
            text: "पारदर्शी खरीद और दीर्घकालिक किसान संबंध।",
          },
          compliance: {
            title: "नियामक अनुपालन",
            text: "राष्ट्रीय खाद्य सुरक्षा मानकों के अनुरूप।",
          },
        },

        badges: {
          title: "प्रमाणपत्र और मानक",
          fssai: "FSSAI प्रमाणित",
          organic: "जैविक प्रक्रियाएं",
          lab: "लैब परीक्षण",
          gmp: "गुड मैन्युफैक्चरिंग प्रैक्टिस",
          trace: "ट्रेसेबल सप्लाई चेन",
        },

        footer: "गुणवत्ता, जवाबदेही और विश्वास से निर्मित भरोसा।",
      },
      narrative: {
        eyebrow: "हमारी यात्रा",
        title: "मिट्टी से",
        titleAccent: "आपके घर तक",

        slides: {
          farmers: {
            step: "चरण 01",
            label: "किसान",
            title: "किसानों के साथ",
            text: "हम किसानों के साथ सीधे काम करते हैं, विश्वास और निष्पक्ष मूल्य प्रणाली के साथ।",
          },

          cultivation: {
            step: "चरण 02",
            label: "खेती",
            title: "प्राकृतिक खेती",
            text: "पारंपरिक और जलवायु-सहनीय तरीकों से मिलेट्स की खेती की जाती है।",
          },

          processing: {
            step: "चरण 03",
            label: "प्रसंस्करण",
            title: "सावधानीपूर्वक प्रसंस्करण",
            text: "हर अनाज को उसकी पोषण गुणवत्ता बनाए रखते हुए सावधानी से संसाधित किया जाता है।",
          },

          quality: {
            step: "चरण 04",
            label: "गुणवत्ता",
            title: "गुणवत्ता सुनिश्चित",
            text: "हर बैच में शुद्धता, सुरक्षा और निरंतरता सुनिश्चित की जाती है।",
          },

          delivery: {
            step: "चरण 05",
            label: "डिलीवरी",
            title: "सुरक्षित डिलीवरी",
            text: "हम पारदर्शिता और देखभाल के साथ उत्पाद आपके घर तक पहुंचाते हैं।",
          },
        },
      },
    },
    about: {
      background: {
        eyebrow: "कंपनी की पृष्ठभूमि",
        titleMain: "अराकू से जुड़ी हुई।",
        titleAccent: "विश्वास पर आधारित।",
        paragraph1:
          "AT Millets की शुरुआत अराकू घाटी के क्षेत्रों से हुई, जहाँ पीढ़ियों से मोटे अनाज की खेती होती आ रही है।",
        paragraph2:
          "एक स्थानीय पहल के रूप में शुरू हुई यह यात्रा आज एक उद्देश्यपूर्ण व्यवसाय बन चुकी है, जो किसानों और जागरूक उपभोक्ताओं को जोड़ती है।",
        highlight:
          "हम अराकू से केवल उत्पाद नहीं लेते — हम अराकू का हिस्सा हैं।",
        imageAlt: "अराकू घाटी कृषि दृश्य",
        imageLabel: "अराकू घाटी",
      },
      visionMission: {
        eyebrow: "दृष्टि और मिशन",
        titleMain: "वह उद्देश्य",
        titleAccent: "जो हमें आगे बढ़ाता है",

        vision: {
          title: "हमारी दृष्टि",
          text: "एक ऐसा टिकाऊ खाद्य तंत्र बनाना जहाँ पारंपरिक ज्ञान, नैतिक खेती और जागरूक उपभोग एक स्वस्थ भविष्य का निर्माण करें।",
        },

        mission: {
          title: "हमारा मिशन",
          text: "किसानों को सशक्त बनाना, पारंपरिक कृषि पद्धतियों को संरक्षित करना और शुद्ध, ट्रेसेबल खाद्य उत्पाद हर घर तक पहुँचाना।",
        },
      },
      whyAraku: {
        eyebrow: "क्यों महत्वपूर्ण है",
        titleMain: "क्यों अराकू",
        titleAccent: "और मिलेट्स",
        subtitle:
          "हमारा क्षेत्र और अनाज का चयन पर्यावरण, पोषण और पीढ़ियों की समझ पर आधारित है।",

        araku: {
          title: "अराकू की विशेषता",
          text: "पूर्वी घाट में स्थित अराकू घाटी खनिजों से भरपूर मिट्टी, ऊँचाई वाला मौसम और पारंपरिक आदिवासी खेती के लिए जानी जाती है।",
        },

        millets: {
          title: "मिलेट्स की ताकत",
          text: "मिलेट्स प्राचीन अनाज हैं जो फाइबर, खनिज और स्थायी ऊर्जा से भरपूर होते हैं — स्वास्थ्य के लिए आदर्श।",
        },

        sustainability: {
          title: "स्वाभाविक रूप से टिकाऊ",
          text: "अराकू में उगाए गए मिलेट्स कम पानी, बिना रसायनों और जैव विविधता के साथ उगते हैं — एक स्मार्ट खाद्य विकल्प।",
        },
        imageAlt: "अराकू घाटी की पहाड़ियाँ और आदिवासी कृषि भूमि",
      },
      sustainability: {
        eyebrow: "हमारी ज़िम्मेदारी",
        titleMain: "स्थायी",
        titleAccent: "भविष्य के प्रति प्रतिबद्धता",
        description:
          "सस्टेनेबिलिटी हमारे लिए एक पहल नहीं है — यह बीज से लेकर उपभोक्ता तक हर निर्णय की नींव है।",

        pillars: {
          soil: {
            title: "मिट्टी की सेहत पहले",
            text: "हम प्राकृतिक खेती और फसल विविधता को बढ़ावा देते हैं जिससे मिट्टी की उर्वरता बनी रहे।",
          },
          water: {
            title: "जिम्मेदार जल उपयोग",
            text: "वर्षा आधारित खेती और सोच-समझकर सिंचाई से जल संरक्षण किया जाता है।",
          },
          community: {
            title: "समुदाय आधारित विकास",
            text: "स्थिरता का अर्थ है सुरक्षित आजीविका, निष्पक्षता और किसानों का सशक्तिकरण।",
          },
        },

        images: {
          soil: "मिट्टी की सेहत और प्राकृतिक खेती",
          water: "कृषि में जल संरक्षण",
          farmers: "आदिवासी समुदायों द्वारा स्थायी खेती",
        },
      },
    },
    tribal: {
      hero: {
        eyebrow: "किसान सोर्सिंग",
        titleMain: "सम्मान के साथ सोर्स किया गया।",
        titleAccent: "अराकू से जुड़ा हुआ।",
        subtitle:
          "हमारी सोर्सिंग अराकू घाटी के इलाकों से शुरू होती है, जहाँ पीढ़ियों से किसान प्रकृति के साथ तालमेल में मिलेट्स उगाते हैं।",
        imageAlt: "अराकू घाटी के किसान",
      },
      direct: {
        eyebrow: "प्रत्यक्ष सोर्सिंग",
        titleMain: "सीधे",
        titleAccent: "किसानों से",
        paragraph1:
          "हम अराकू घाटी के किसानों से सीधे मिलेट्स की सोर्सिंग करते हैं, जिससे बिचौलियों की भूमिका समाप्त हो जाती है।",
        paragraph2:
          "किसान समुदायों के साथ मिलकर हम विश्वास, सम्मान और दीर्घकालिक साझेदारी बनाते हैं।",
        points: {
          noMiddlemen: "कोई बिचौलिया या शोषण नहीं",
          fairPricing: "किसानों को उचित और पारदर्शी मूल्य",
          longTerm: "किसान परिवारों के साथ दीर्घकालिक संबंध",
        },
        imageAlt: "किसानों से प्रत्यक्ष सोर्सिंग",
      },
      ethical: {
        eyebrow: "नैतिक खरीद प्रक्रिया",
        titleMain: "न्यायपूर्ण, पारदर्शी",
        titleAccent: "और जिम्मेदार प्रणाली",
        subtitle:
          "हमारी खरीद प्रणाली आदिवासी किसानों के साथ विश्वास, पारदर्शिता और दीर्घकालिक संबंधों पर आधारित है।",
        items: {
          direct: {
            title: "सीधी खरीद",
            text: "हम बिना किसी बिचौलिये के सीधे आदिवासी किसानों से उत्पाद खरीदते हैं।",
          },
          fair: {
            title: "न्यायसंगत मूल्य",
            text: "किसानों की मेहनत और जोखिमों को ध्यान में रखते हुए उचित मूल्य तय किए जाते हैं।",
          },
          payments: {
            title: "समय पर भुगतान",
            text: "किसानों को सुरक्षित और समय पर भुगतान सुनिश्चित किया जाता है।",
          },
          transparency: {
            title: "पूर्ण पारदर्शिता",
            text: "खरीद से लेकर प्रसंस्करण तक हर चरण नैतिक और पारदर्शी होता है।",
          },
        },
      },
      empowerment: {
        eyebrow: "किसान सशक्तिकरण",
        titleMain: "किसानों को सशक्त बनाते हुए",
        titleAccent: "सिर्फ़ फेयर ट्रेड से आगे",
        paragraph1:
          "सच्ची स्थिरता किसानों से शुरू होती है। हमारे लिए किसान साझेदार हैं, केवल आपूर्तिकर्ता नहीं।",
        paragraph2:
          "शिक्षा, स्थिर आय और दीर्घकालिक सहयोग के माध्यम से हम किसानों को सशक्त बनाते हैं।",
        imageAlt: "स्थायी कृषि में संलग्न आदिवासी किसान",
        items: {
          community: {
            title: "समुदाय सशक्तिकरण",
            text: "हम किसान समुदायों के साथ मिलकर विश्वास और विकास का निर्माण करते हैं।",
          },
          training: {
            title: "प्रशिक्षण और ज्ञान",
            text: "किसानों को टिकाऊ खेती और गुणवत्ता मानकों पर मार्गदर्शन दिया जाता है।",
          },
          income: {
            title: "आय की स्थिरता",
            text: "निश्चित खरीद और उचित मूल्य किसानों को आर्थिक सुरक्षा देते हैं।",
          },
          fairtrade: {
            title: "फेयर ट्रेड प्रतिबद्धता",
            text: "हर स्तर पर सम्मान, पारदर्शिता और नैतिक साझेदारी सुनिश्चित की जाती है।",
          },
        },
      },
      environment: {
        eyebrow: "पर्यावरणीय जिम्मेदारी",
        titleMain: "प्रकृति की रक्षा,",
        titleAccent: "भविष्य की सुरक्षा",
        paragraph:
          "हमारी सोर्सिंग प्रक्रियाएँ प्रकृति के साथ संतुलन बनाकर बनाई गई हैं, जिससे दीर्घकालिक पर्यावरणीय स्थिरता सुनिश्चित होती है।",
        imageAlt: "सतत कृषि और पर्यावरण संरक्षण",

        items: {
          organic: {
            title: "रसायन मुक्त खेती",
            text: "हम जैविक खेती को बढ़ावा देते हैं जो मिट्टी और जैव विविधता की रक्षा करती है।",
          },
          water: {
            title: "जल संरक्षण",
            text: "पारंपरिक जल-कुशल तकनीकें सिंचाई पर निर्भरता कम करती हैं।",
          },
          packaging: {
            title: "पर्यावरण अनुकूल पैकेजिंग",
            text: "हम पुनर्चक्रण योग्य और न्यूनतम पैकेजिंग की दिशा में आगे बढ़ रहे हैं।",
          },
          biodiversity: {
            title: "जैव विविधता संरक्षण",
            text: "स्थानीय फसलें पारिस्थितिक संतुलन को बनाए रखने में मदद करती हैं।",
          },
        },
      },
    },
    supply: {
      intro: {
        eyebrow: "सप्लाई चेन मॉडल",
        titleMain: "स्रोत से बाज़ार तक,",
        titleAccent: "सटीक प्रणाली के साथ",
        subtitle:
          "हमारी सप्लाई चेन ट्राइबल किसानों से लेकर अंतिम उत्पाद तक गुणवत्ता और पारदर्शिता सुनिश्चित करती है।",

        points: {
          procurement: {
            title: "संरचित खरीद",
            text: "सत्यापित ट्राइबल किसानों से कच्चा माल सीधे और व्यवस्थित रूप से प्राप्त किया जाता है।",
          },
          processing: {
            title: "नियंत्रित प्रोसेसिंग",
            text: "जिला-स्तरीय प्रोसेसिंग केंद्र स्वच्छता और गुणवत्ता नियंत्रण सुनिश्चित करते हैं।",
          },
          distribution: {
            title: "केंद्रीकृत भंडारण",
            text: "उत्पादों को केंद्रीय गोदामों में संग्रहित कर सुरक्षित रूप से वितरित किया जाता है।",
          },
        },
      },
      flow: {
        titleMain: "हमारी सप्लाई चेन प्रक्रिया",
        titleAccent: "चरण दर चरण",
        subtitle:
          "हर चरण में गुणवत्ता और स्वच्छता को सख्ती से बनाए रखा जाता है।",

        imageAlt: "AT मिलेट्स सप्लाई चेन प्रक्रिया",

        procurement: {
          title: "कच्चे माल की खरीद",
          text: "विश्वसनीय ट्राइबल किसानों से सीधे मिलेट्स खरीदे जाते हैं।",
        },
        processing: {
          title: "विशेष प्रोसेसिंग",
          text: "जिला स्तर की यूनिट्स में स्वच्छता के साथ प्रोसेसिंग होती है।",
        },
        packaging: {
          title: "सुरक्षित पैकेजिंग",
          text: "ताजगी बनाए रखने के लिए सुरक्षित पैकेजिंग की जाती है।",
        },
        warehousing: {
          title: "केंद्रीकृत भंडारण",
          text: "वितरण से पहले उत्पादों को नियंत्रित गोदामों में रखा जाता है।",
        },
      },
      quality: {
        titleMain: "गुणवत्ता, स्वच्छता और नियंत्रण",
        titleAccent: "हर चरण में समाहित",
        subtitle:
          "हमारी प्रोसेसिंग प्रणाली हर बैच में सुरक्षा और गुणवत्ता सुनिश्चित करती है।",

        hygiene: {
          title: "कठोर स्वच्छता मानक",
          text: "हर चरण में स्वच्छता और सैनिटेशन प्रोटोकॉल का पालन किया जाता है।",
        },
        testing: {
          title: "बैच स्तर परीक्षण",
          text: "नियमित परीक्षण से गुणवत्ता सुनिश्चित की जाती है।",
        },
        controls: {
          title: "प्रोसेस नियंत्रण",
          text: "मानकीकृत प्रक्रियाएँ जोखिम को कम करती हैं।",
        },
        consistency: {
          title: "समान गुणवत्ता",
          text: "हर क्षेत्र और मौसम में एक समान आउटपुट।",
        },
      },
    },
    products: {
      page: {
        title: "हमारे उत्पाद",
        subtitle:
          "किसानों से सीधे प्राप्त मिलेट्स, दालें, मसाले और प्राकृतिक खाद्य उत्पाद।",
      },
      empty: {
        title: "कोई उत्पाद नहीं मिला",
        subtitle: "कृपया फ़िल्टर बदलें या अन्य श्रेणियाँ देखें।",
        reset: "फ़िल्टर हटाएँ",
      },
      search: {
        placeholder: "उत्पाद या श्रेणी खोजें...",
        clear: "खोज हटाएँ",
      },
      nutrition: {
        title: "पोषण तथ्य",
        serving: "सर्विंग साइज: 100 ग्राम",
        note: "दैनिक पोषण आवश्यकता के अनुसार मान बदल सकते हैं।",
      },
      filters: {
        filter: "फ़िल्टर",
        all: "सभी उत्पाद",
        category: "श्रेणी",
        packSize: "पैक का आकार",
        type: "उत्पाद प्रकार",

        "millets-grains": "मिलेट्स और अनाज",
        "pulses-legumes": "दालें और फलियां",
        "spices-essentials": "मसाले और आवश्यक वस्तुएँ",
        "instant-mixes": "इंस्टेंट मिक्स",
        snacks: "स्नैक्स",
        "health-products": "स्वास्थ्य उत्पाद",
        "natural-products": "प्राकृतिक उत्पाद",
      },
      productsFound: "उत्पाद मिले",
      types: {
        raw: "कच्चा अनाज",
        flour: "आटा / पाउडर",
        readyToCook: "पकाने के लिए तैयार",
        readyToEat: "खाने के लिए तैयार",
      },

      card: {
        viewDetails: "विवरण देखें →",
        explore: "देखें →",
      },
      details: {
        description: "विवरण",
        nutrition: "पोषण जानकारी",
        benefits: "स्वास्थ्य लाभ",
        sourcing: "स्रोत विवरण",
        processing: "प्रसंस्करण विवरण",
        additional: "अतिरिक्त जानकारी",
        shelfLife: "शेल्फ लाइफ",
        storage: "भंडारण निर्देश",
        packSizes: "उपलब्ध पैक आकार",
        certifications: "प्रमाणपत्र",
        notFound: "उत्पाद नहीं मिला",
        back: "उत्पादों पर वापस जाएं",
      },
    },
    business: {
      hero: {
        eyebrow: "व्यवसाय का अवसर",
        titleMain: "विश्वास पर आधारित",
        titleAccent: "व्यावसायिक साझेदारी",
        subtitle:
          "प्राकृतिक खाद्य उत्पादों पर आधारित एक मजबूत और भरोसेमंद व्यवसाय मॉडल।",

        highlights: [
          "ताजे और प्राकृतिक उत्पाद",
          "अराकू से नैतिक सोर्सिंग",
          "मिलेट आधारित स्वास्थ्य उत्पाद",
        ],

        description:
          "AT Millets के साथ जुड़कर एक स्थायी और भरोसेमंद व्यवसाय बनाएं। यह अवसर तेलंगाना, आंध्र प्रदेश और रायलसीमा में उपलब्ध है।",
      },

      why: {
        eyebrow: "हमारे साथ क्यों जुड़ें",
        title: "विश्वास और मांग पर आधारित ब्रांड",

        points: [
          "विश्वसनीय प्राकृतिक खाद्य ब्रांड",
          "अराकू के किसानों से सीधी सोर्सिंग",
          "उच्च और स्थिर बाजार मांग",
          "संतुलित और आकर्षक मार्जिन",
          "क्षेत्रीय व्यावसायिक समर्थन",
          "निरंतर उत्पाद आपूर्ति",
        ],
      },

      whatYouGet: {
        eyebrow: "आपको क्या मिलेगा",
        title: "पूर्ण व्यावसायिक सहयोग",

        points: [
          "स्टोर सेटअप और ब्रांडिंग सहायता",
          "निरंतर उत्पाद आपूर्ति",
          "मार्केटिंग और प्रचार सहयोग",
          "स्टाफ प्रशिक्षण",
          "24/7 तकनीकी और परिचालन सहायता",
          "लगातार व्यवसाय मार्गदर्शन",
        ],
      },

      store: {
        eyebrow: "रिटेल अनुभव",
        title: "गुणवत्ता और विश्वास दर्शाने वाला स्टोर",
        description:
          "AT Millets स्टोर शुद्धता, विश्वसनीयता और प्रीमियम अनुभव को दर्शाने के लिए डिज़ाइन किए गए हैं।",
      },

      earnings: {
        eyebrow: "आय की संभावना",
        title: "एक स्थायी आय मॉडल",
        note: "आय स्थान, संचालन और बाजार परिस्थितियों पर निर्भर करती है।",
      },

      contacts: {
        title: "व्यावसायिक पूछताछ के लिए",

        regions: {
          telangana: {
            title: "तेलंगाना",
            people: [
              "कृष्णा – 9885558222",
              "कविता – 8897265146",
              "रघुराम – 9989087740",
            ],
          },

          rayalaseema: {
            title: "रायलसीमा",
            people: ["राघवेंद्र – 8686202093", "गोपाल – 9346508834"],
          },

          andhra: {
            title: "आंध्र प्रदेश",
            people: ["मोहन – 9652152467", "इस्माइल – 9542252286"],
          },
        },
      },
    },
  },
};
