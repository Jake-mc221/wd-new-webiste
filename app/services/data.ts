export type Service = {
  name: string;
  slug: string;
  num: string;
  tagline: string;
  image: string;
  summary: string;
  leadText: string;
  overview: string[];
  offerings: string[];
  tips?: string[];
};

export const services: Service[] = [
  {
    name: "Patents",
    slug: "patents",
    num: "01",
    tagline: "Protect your inventions",
    image: "/1.jpg",
    summary:
      "Exclusive rights to your invention — securing the competitive edge behind your most valuable ideas.",
    leadText:
      "A patent gives you a legally enforceable monopoly over your invention, preventing competitors from making, using, or selling it without your permission. It's the cornerstone of any serious IP strategy.",
    overview: [
      "Patents are exclusive rights granted to the owners of an invention. Any product, device, substance, method or process that provides a new way of doing something — or offers a new technical solution to a problem — may be patentable.",
      "Patent protection allows you to generate revenue through manufacturing, licensing or sale of your invention. With over 25 years of experience, Wallington-Dummer has helped clients from individual inventors to multinational corporations secure and leverage their patent portfolios in Australia and worldwide.",
      "Our team combines deep technical expertise across electrical engineering, electronics, computer science and software with a sharp commercial focus — ensuring the protection we secure is not just legally sound, but strategically valuable.",
    ],
    offerings: [
      "Drafting and filing patent specifications",
      "In-house patent drawing services",
      "Responding to Examination Reports & Office Actions",
      "Defending and preparing opposition proceedings",
      "Preparing assignment and licence agreements",
      "Conducting patent watches and searches",
      "Advising on patentability of inventions",
      "International patent filing (PCT & direct national)",
      "Patent portfolio strategy and due diligence",
    ],
    tips: [
      "File early — patent rights are awarded to the first to file, not the first to invent.",
      "Keep your invention confidential until a provisional application is filed.",
      "A provisional application gives you 12 months to refine your invention before filing a complete specification.",
    ],
  },
  {
    name: "Trade Marks",
    slug: "trade-marks",
    num: "02",
    tagline: "Secure your brand identity",
    image: "/2.png",
    summary:
      "Your brand is one of your most valuable assets. We help you own it, protect it and enforce it globally.",
    leadText:
      "A trade mark is a sign that distinguishes your goods or services from those of competitors. Registering it gives you an exclusive, enforceable right to use it — and the power to stop others who try to free-ride on your reputation.",
    overview: [
      "Trade marks can be words, letters, numerals, logos, sounds, colours, shapes and even scents. The most powerful brands in the world — Apple, Google, Tiffany's blue — all built on registered trade mark protection.",
      "Jennifer Song leads our trade mark practice with a specialist focus on helping clients build, protect and enforce brands across Australia and globally. We advise businesses at every stage — from initial clearance before launch, through to registration and maintenance, enforcement and licensing.",
      "We also advise on Australian Consumer Law issues, domain name disputes, and customs recordal to intercept counterfeit goods at the border.",
    ],
    offerings: [
      "Registrability assessments and availability searches",
      "Application preparation and filing (Australia, New Zealand, overseas)",
      "Responding to Examination Reports",
      "Opposition and cancellation proceedings",
      "Assignment and licence agreements",
      "Trade mark watches and monitoring",
      "Infringement advice and enforcement",
      "Customs recordal for counterfeits",
      "Global trade mark portfolio management",
    ],
    tips: [
      "Avoid generic or descriptive terms — they are difficult to register and easy for competitors to use.",
      "Register your trade mark in all key markets before entering into licensing arrangements.",
      "Conduct regular searches to monitor for conflicting marks appearing in your industry.",
    ],
  },
  {
    name: "Designs",
    slug: "designs",
    num: "03",
    tagline: "Protect your product's appearance",
    image: "/3.jpg",
    summary:
      "The look of your product is a commercial asset. Registered design protection stops competitors copying what makes yours distinctive.",
    leadText:
      "Design registration protects the visual appearance of a product — its shape, configuration, pattern and ornamentation. In competitive markets, the way a product looks can be just as valuable as how it works.",
    overview: [
      "Registered designs give you the exclusive right to use a particular visual appearance in relation to a product. Competitors who copy the appearance of your registered design can be stopped — even if their product works differently.",
      "Wallington-Dummer offers in-house design drawing capability and 3D modelling, allowing us to prepare high-quality design representations quickly and cost-effectively. This is particularly valuable for complex industrial products and consumer goods.",
      "We handle designs registration in Australia and New Zealand, and can coordinate international protection through our trusted network of foreign associates.",
    ],
    offerings: [
      "Advising on the registrability of designs",
      "Preparation and filing of design applications",
      "In-house design drawing and 3D modelling",
      "Requesting examination of registered designs",
      "Filing and defending opposition proceedings",
      "Responding to examination reports",
      "Advising on design infringement",
      "International design filing coordination",
    ],
    tips: [
      "Designs must be registered before the product is publicly disclosed — act early.",
      "A registered design does not need to be functional; its purpose is to protect visual appeal.",
      "Consider combining design registration with patent protection for comprehensive coverage.",
    ],
  },
  {
    name: "Plant Breeder's Rights",
    slug: "plant-breeders-rights",
    num: "04",
    tagline: "Protect new plant varieties",
    image: "/4.jpg",
    summary:
      "Exclusive rights for the developers of new and distinct plant varieties — protecting years of research and investment in plant breeding.",
    leadText:
      "Plant Breeder's Rights (PBR) are exclusive rights granted to protect new varieties of plants that are distinguishable, uniform and stable. PBR gives breeders the right to control the production, sale and distribution of their variety.",
    overview: [
      "Plant Breeder's Rights are a specialised form of intellectual property protection developed specifically for the agricultural and horticultural sectors. To qualify, a new variety must be novel, distinct from existing varieties, uniform across individual plants, and stable across successive generations.",
      "PBR protection is particularly valuable for breeders of ornamental plants, food crops, turf varieties, and trees. Once granted, the rights holder can licence the variety to commercial growers, earning royalties on each sale.",
      "Wallington-Dummer assists clients through the entire PBR application process in Australia, and can coordinate international protection through the UPOV (International Union for the Protection of New Varieties of Plants) treaty framework.",
    ],
    offerings: [
      "Advising on PBR eligibility and strategy",
      "Preparation and lodgement of PBR applications in Australia",
      "Preparing assignment and licence agreements",
      "International PBR filing via UPOV member states",
      "Advising on enforcement and infringement",
    ],
    tips: [
      "The variety must not have been commercially sold in Australia for more than one year prior to filing.",
      "PBR and patents can both apply to new plant varieties — consider which best suits your commercial goals.",
      "Maintain detailed breeding records — they will be essential for demonstrating distinctness.",
    ],
  },
];
