export type FaqItem = { q: string; a: string };
export type FaqCategory = { category: string; items: FaqItem[] };

export const faqs: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is intellectual property and why does it matter?",
        a: "Intellectual property (IP) refers to creations of the mind — inventions, brand names, product designs, creative works and plant varieties. IP rights give creators and businesses a legally enforceable monopoly over their creations, preventing competitors from copying or profiting from what you built. Without registered IP protection, a competitor can legally imitate your product, trade off your brand reputation, or use your invention — often with no recourse available to you.",
      },
      {
        q: "Do you offer a free initial consultation?",
        a: "Yes. Wallington Dummer offers a complimentary initial consultation for all new clients. This gives you the opportunity to discuss your situation with one of our attorneys, understand your options, and receive an honest assessment of whether and how IP protection applies to your circumstances — at no cost and with no obligation.",
      },
      {
        q: "How do I know which type of IP protection I need?",
        a: "The right form of protection depends on what you're trying to protect. Patents cover inventions and technical processes. Trade marks protect brand names, logos and other brand identifiers. Design registration protects the visual appearance of products. Copyright protects creative works automatically. Plant Breeder's Rights protect new plant varieties. In many cases, a combination of protections is appropriate — for example, a new product might warrant both a patent (for how it works) and a design registration (for how it looks). We will advise you on the best strategy for your specific situation.",
      },
      {
        q: "Can you help with IP protection outside Australia?",
        a: "Yes. We regularly assist clients with international IP protection through direct national filings, the Patent Cooperation Treaty (PCT) for patents, the Madrid Protocol for trade marks, and the Hague Agreement for designs. We also work with a trusted global network of foreign IP attorneys to coordinate filings in jurisdictions outside our direct practice areas.",
      },
    ],
  },
  {
    category: "Patents",
    items: [
      {
        q: "What can be patented?",
        a: "Any product, device, substance, method or process that is new, involves an inventive step, and is capable of industrial application may be patentable. This includes physical products, mechanical devices, chemical compounds, software-implemented inventions, and manufacturing processes. Abstract ideas, mathematical formulas, artistic works, and naturally occurring substances cannot be patented.",
      },
      {
        q: "What is the difference between a provisional and a complete patent application?",
        a: "A provisional application is a lower-cost first filing that establishes an official priority date for your invention. It gives you 12 months to refine and develop your invention before filing a complete (standard) application — without losing your place in line. A complete application is the full substantive filing that is examined and, if granted, becomes an enforceable patent. Filing a provisional first is often the best approach when your invention is still being developed or when you need time to assess commercial viability before committing to the full filing costs.",
      },
      {
        q: "How long does it take to get a patent in Australia?",
        a: "The timeline varies. An innovation patent (now replaced by the standard patent for new filings) could be certified relatively quickly. A standard patent typically takes 2–4 years from the complete filing date to grant, depending on the complexity of the technology and the pace of examination. International prosecution timelines vary by country. We will give you a realistic timeline estimate based on your specific circumstances.",
      },
      {
        q: "How long does patent protection last?",
        a: "A standard patent in Australia provides protection for up to 20 years from the filing date of the complete application, subject to payment of annual renewal fees. Pharmaceutical patents may be eligible for an extension of up to 5 years in some circumstances. Without payment of renewal fees, the patent will lapse before the 20-year term.",
      },
      {
        q: "Can I talk about my invention publicly before filing?",
        a: "We strongly advise against it. In Australia and most other countries, public disclosure of your invention before filing a patent application can destroy your ability to obtain patent protection. If you must disclose for business reasons — for example, to attract investment — file at least a provisional application first, and use confidentiality agreements where possible.",
      },
    ],
  },
  {
    category: "Trade Marks",
    items: [
      {
        q: "What can be registered as a trade mark?",
        a: "A trade mark can be a word, phrase, logo, letter, number, colour, sound, scent, shape, or any combination of these — provided it is capable of distinguishing your goods or services from those of others. Well-known examples include the McDonald's golden arches, the Nike swoosh, and Tiffany blue. Purely descriptive or generic terms are difficult to register and should be avoided when selecting a new brand name.",
      },
      {
        q: "What is the difference between ™ and ®?",
        a: "™ (trade mark) can be used by anyone to indicate a claim over a sign being used as a trade mark — no registration is required. ® (registered trade mark) may only be used once a trade mark has been officially registered with IP Australia. Using ® on an unregistered mark is an offence. Registration gives you the exclusive right to use the mark in relation to your registered goods and services, and the legal standing to take action against infringement.",
      },
      {
        q: "How long does trade mark registration take in Australia?",
        a: "IP Australia typically examines applications within 3–4 months of filing. If accepted, the application is advertised for a 2-month opposition period. Assuming no opposition, registration is usually completed within 6–9 months from filing. Complex matters or oppositions can extend this timeline considerably.",
      },
      {
        q: "Do I need to register my trade mark in every country?",
        a: "Trade mark rights are territorial — registration in Australia does not protect you in other countries. If you operate or plan to operate internationally, you should register in each key market. We can assist with international filing via the Madrid Protocol, which allows you to file a single application designating multiple member countries, significantly reducing cost and administrative complexity.",
      },
      {
        q: "How long does trade mark protection last?",
        a: "A registered trade mark in Australia lasts for 10 years from the filing date and can be renewed indefinitely in 10-year increments, provided it remains in use. Unlike patents, trade marks can theoretically be protected forever — making early registration and consistent use particularly valuable.",
      },
    ],
  },
  {
    category: "Designs & Plant Breeder's Rights",
    items: [
      {
        q: "What does design registration protect?",
        a: "Design registration protects the visual appearance of a product — its shape, configuration, pattern and ornamentation. It does not protect how the product works (that's a patent) or the brand name used to sell it (that's a trade mark). Design registration is valuable wherever the aesthetic appeal of a product is a key commercial driver, such as consumer goods, furniture, packaging and fashion.",
      },
      {
        q: "Can I register a design if I've already shown the product publicly?",
        a: "In Australia, a design must be registered before it is publicly used or disclosed. However, there is a 12-month grace period from the date of first disclosure during which you can still apply. This is a narrow window — if you have already publicly shown your product, contact us as soon as possible to determine whether registration is still available.",
      },
      {
        q: "What are Plant Breeder's Rights and who are they for?",
        a: "Plant Breeder's Rights (PBR) are exclusive rights granted to protect new plant varieties that are distinct, uniform and stable. They are relevant to plant breeders and horticulturalists who have developed new varieties of crops, ornamental plants, turf, or trees. PBR allows the rights holder to control commercial production and sale of the variety, and to collect royalties from licensed growers.",
      },
    ],
  },
  {
    category: "Working with Us",
    items: [
      {
        q: "How does the process work when I first contact you?",
        a: "We begin with a complimentary initial consultation — by phone, video or in person — to understand your situation and goals. From there, we provide a clear written assessment of your IP options, recommended strategy, and cost estimate. Once you decide to proceed, we handle everything: drafting, filing, prosecution, and ongoing portfolio management. We also provide an electronic tracking system so you always know the status of your applications and upcoming deadlines.",
      },
      {
        q: "Do you offer fixed-fee pricing?",
        a: "Yes. We offer flat-fee pricing for standard IP applications, including patent provisional filings, trade mark applications, and design registrations. This means you know your costs upfront, with no surprise invoices. More complex matters — such as litigation, oppositions or large international portfolios — are typically handled on an hourly or agreed-scope basis, which we will discuss with you clearly before commencing work.",
      },
      {
        q: "Where are your offices?",
        a: "Our office is located at Suite 1005, 66 Hunter Street, Sydney NSW 2000. We can be reached by phone on (02) 9221 1040 or by email at mail2@wallington-dummer.com.",
      },
      {
        q: "What industries do you work with?",
        a: "We work with clients across a wide range of industries including technology, engineering, manufacturing, pharmaceuticals, life sciences, food and beverage, retail, fashion, agriculture, and professional services. Our team's diverse technical backgrounds — spanning electrical engineering, chemistry, and law — allow us to provide precise, informed advice regardless of the complexity of the technology involved.",
      },
      {
        q: "Can you help if my IP has already been infringed?",
        a: "Yes. If you believe your IP rights are being infringed, we can advise you on your options, which may include sending a cease and desist letter, filing opposition proceedings, or commencing legal action. We can also help you assess whether a competitor's IP creates a risk for your own business and advise accordingly.",
      },
    ],
  },
];
