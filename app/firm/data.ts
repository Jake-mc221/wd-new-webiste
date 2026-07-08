export type TeamMember = {
  name: string;
  slug: string;
  title: string;
  role: string;
  credentials: string;
  initials: string;
  photo: string;
  linkedin?: string;
  location: string;
  phone: string;
  email: string;
  leadBio: string;
  bio: string[];
  expertise: string[];
  qualifications: string[];
  memberships: string[];
};

export const team: TeamMember[] = [
  {
    name: "Peter Dummer",
    slug: "peter-dummer",
    title: "Principal",
    role: "Patent & Trade Mark Attorney",
    credentials: "BE(Elec), FIPTA",
    initials: "PD",
    photo: "/peter-new.jpg",
    linkedin: "https://www.linkedin.com/in/peter-dummer-wallington/",
    location: "Sydney",
    phone: "(02) 9221 1040",
    email: "PDummer@wallington-dummer.com",
    leadBio:
      "Peter is one of Australia's most experienced patent and trade mark attorneys, with over 25 years of practice spanning industry, private practice and complex international IP strategy.",
    bio: [
      "Peter combines a strong technical background in electrical and electronic engineering — developed through industry roles at CSR, BHP Engineering and the University of New South Wales — with deep expertise in patent drafting, prosecution and portfolio strategy. He advises clients across computer science, software, hardware and a broad range of engineering disciplines.",
      "Peter is best known for drafting the Uniloc patent for software registration, which became the subject of a landmark damages award against Microsoft in the United States — one of the most significant software patent cases in recent history.",
      "He advises clients ranging from individual inventors and start-ups to multinational corporations, providing practical, commercially focused guidance on how to protect and leverage their IP assets in Australia, New Zealand and internationally.",
    ],
    expertise: [
      "Patents",
      "Trade Marks",
      "Patent Strategy",
      "Due Diligence",
      "IP Portfolio Management",
      "Electrical Engineering",
      "Electronic Engineering",
      "Computer Science",
      "Software Patents",
      "Patent Drafting & Prosecution",
    ],
    qualifications: [
      "Bachelor of Engineering (Electrical), University of New South Wales",
      "Registered Australian Patent & Trade Mark Attorney",
      "Registered New Zealand Patent Attorney",
  
    ],
    memberships: [
      "Fellow, Institute of Patent and Trade Mark Attorneys of Australia (FIPTA)",
      "International Trade Mark Association (INTA)",
      "FICPI (Fédération Internationale des Conseils en Propriété Intellectuelle)",
      "AIPPI (Australian Group of AIPPI)",
      "Intellectual Property Society of Australia and New Zealand (IPSANZ)",
      "IPTA (International Trademark Association)"
    ],
  },
  {
    name: "Jennifer Song",
    slug: "jennifer-song",
    title: "Senior Associate",
    role: "Intellectual Property Lawyer",
    credentials: "BA/LLB, GradDipLP",
    initials: "JS",
    photo: "/jen-new.jpg",
    linkedin: "https://www.linkedin.com/in/jennifer-song-ip/",
    location: "Sydney",
    phone: "(02) 9221 1040",
    email: "JSong@wallington-dummer.com",
    leadBio:
      "Jennifer leads the trade marks practice at Wallington-Dummer. She has more than 15 years' experience in trade marks.",
    bio: [
      "Jennifer works with clients at every stage of brand development — from initial availability searches and trade mark filings through to complex multi-jurisdictional portfolio management and enforcement. She has a particular focus on helping businesses develop robust trade mark and IP strategies that align with their commercial goals. Her practice covers trade mark registration and prosecution, licensing, IP ownership transfers, domain name disputes and Australian Consumer Law advice. Jennifer's clients are drawn from a diverse range of industries, including fashion, engineering, FMCG, information technology, hospitality and leisure. Jennifer also advises on brand protection, trade mark registrability and enforcement and acts in opposition and non-use proceedings before the Trade Marks Office.",
      "Jennifer maintains strong and long-standing relationships with overseas and foreign associates. Jennifer frequently collaborates with these overseas colleagues to file, prosecute and enforce trade mark rights in Australia and in international jurisdictions.",
      "Before joining Wallington-Dummer more than 10 years ago, Jennifer was an Intellectual Property Lawyer under the National Service Line Leader of the IP Team at a large national firm.",
      "Jennifer is admitted to practise in both NSW and Victoria and is a registered practitioner of the High Court of Australia.",
    ],
    expertise: [
      "Trade Marks",
      "Brand Protection",
      "Trade Mark Prosecution",
      "Domain Name Disputes",
      "IP Enforcement",
      "Australian Consumer Law",
      "Global Trade Mark Portfolio Management",
      "Trade Mark Searches"
    ],
    qualifications: [
      "Bachelor of Arts and Bachelor of Laws (BA/LLB), Monash University, Melbourne",
      "Graduate Diploma in Legal Practice (GradDipLP), Australian National University, Canberra",
      "Registered Practitioner of the High Court of Australia",
      "Registered Legal Practitioner of NSW",
    ],
    memberships: [
      "Law Society of NSW",
      "Admitted, Supreme Court of Victoria",
      "Intellectual Property Society of Australia and New Zealand (IPSANZ)",
      "International Trade Mark Association (INTA)",
      "IPTA (International Trademark Association)",
    ],
  },
  {
    name: "Sharon Yu",
    slug: "sharon-yu",
    title: "Lawyer",
    role: "IP Lawyer & Patent and Trade Mark Attorney",
    credentials: "BAdvSci(Hons)(Chem)/LLB, MIPLaw",
    initials: "SY",
    photo: "/sharon-new.jpg",
    linkedin: "https://www.linkedin.com/in/sharon-yu-ip/",
    location: "Sydney",
    phone: "(02) 9221 1040",
    email: "syu@wallington-dummer.com",
    leadBio:
      "Sharon is an intellectual property lawyer and registered trade mark attorney with a background in chemistry, bringing both scientific and legal expertise to her IP practice.",
    bio: [
      "Sharon assists clients in obtaining trade mark registrations and patents in Australia and overseas, and has experience in drafting and reviewing patent licensing agreements. Her scientific background in chemistry gives her particular depth in life sciences, pharmaceutical and chemical patent matters.",
      "Prior to joining Wallington-Dummer, Sharon spent 4.5 years as a foreign attorney at a leading Japanese intellectual property law firm, where she rose to lead the foreign trade marks team. This experience has given her strong insight into international IP strategy, particularly across the Asia-Pacific region.",
      "Sharon's combined legal and scientific training allows her to advise clients with technical precision and commercial clarity — from start-ups seeking their first patent to established companies managing complex multi-jurisdictional IP portfolios.",
    ],
    expertise: [
      "Patents",
      "Trade Marks",
      "Patent Licensing",
      "Chemistry & Life Sciences",
      "Pharmaceutical Patents",
      "IP Strategy",
      "Asia-Pacific IP",
      "Patent Prosecution",
      "Trade Mark Registration",
    ],
    qualifications: [
      "Master of Intellectual Property Law (MIPLaw), The University of Melbourne",
      "Bachelor of Advanced Science (Honours Class 1, Chemistry) and Bachelor of Laws (BAdvSci(Hons)/LLB), University of New South Wales",
      "Graduate Diploma of Legal Practice (GDLP), The College of Law (NSW)",
      "Registered Australian Trade Mark Attorney",
      "Registered Legal Practitioner of NSW",
    ],
    memberships: [
      "Institute of Patent and Trade Mark Attorneys of Australia (IPTA)",
      "Intellectual Property Society of Australia and New Zealand (IPSANZ)",
    ],
  },
];
