export interface Citation {
  id: string
  authors: string
  title: string
  journal: string
  year: number
  doiOrUrl?: string
}

export interface TradeoffItem {
  approach: string
  mechanism: string
  pros: string[]
  cons: string[]
  evidenceLevel:
    | "Grade A (Strong RCT)"
    | "Grade B (Moderate Cohort)"
    | "Grade C (Expert Consensus)"
    | "Grade A (Established Guideline)"
    | "Grade B (Evolving Clinical Proof)"
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ConditionData {
  slug: string
  title: string
  tagline: string
  summary: string
  primaryKeyword: string
  icd10Code: string
  prevalence: string
  symptoms: string[]
  causes: string[]
  diagnosticTests: {
    testName: string
    purpose: string
    conventionalRangeVsOptimal: string
  }[]
  treatmentTradeoffs: TradeoffItem[]
  appointmentExpectations: string[]
  urgentCareNotice: string
  faqs: FAQItem[]
  citations: Citation[]
  lastReviewed: string
  relatedTreatments: string[]
  relatedSymptoms: string[]
}

export interface TreatmentData {
  slug: string
  title: string
  tagline: string
  summary: string
  primaryKeyword: string
  indications: string[]
  clinicalMethodology: string[]
  diagnosticTesting: string[]
  durationAndFrequency: string
  evidenceRating:
    "Grade A (Established Guideline)" | "Grade B (Evolving Clinical Proof)"
  tradeoffs: TradeoffItem[]
  faqs: FAQItem[]
  citations: Citation[]
  lastReviewed: string
  relatedConditions: string[]
}

export interface SymptomData {
  slug: string
  title: string
  tagline: string
  summary: string
  primaryKeyword: string
  physiologicalMechanisms: string[]
  recommendedLabsToRequest: string[]
  matchingConditions: {
    title: string
    slug: string
    reason: string
  }[]
  faqs: FAQItem[]
  citations: Citation[]
  lastReviewed: string
}

export interface BlogPostData {
  slug: string
  title: string
  primaryKeyword: string
  summary: string
  readTime: string
  publishedDate: string
  lastReviewedDate: string
  author: {
    name: string
    title: string
    credentials: string
  }
  sections: {
    h2Title: string
    content: string
  }[]
  citations: Citation[]
  closingCta: {
    headline: string
    description: string
    buttonText: string
    buttonHref: string
  }
  relatedConditionSlug?: string
}

export interface PracticeLocationData {
  name: string
  physician: string
  credentials: string
  address: {
    street: string
    suite: string
    city: string
    state: string
    zip: string
  }
  phone: string
  fax: string
  hours: {
    days: string
    time: string
  }[]
  acceptedInsurance: {
    status: "In-Network" | "Out-of-Network Superbill" | "Cash Pay Consultation"
    payers: string[]
    description: string
  }[]
  parkingAndAccess: {
    parking: string
    transit: string
    accessibility: string
  }
  coordinates: {
    lat: number
    lng: number
  }
}

export const PRACTICE_LOCATION: PracticeLocationData = {
  name: "Dr. Ameena Patel, MD Practice",
  physician: "Dr. Ameena Patel",
  credentials: "MD, FACP",
  address: {
    street: "450 N Michigan Ave",
    suite: "Suite 1200",
    city: "Chicago",
    state: "IL",
    zip: "60611",
  },
  phone: "(312) 555-0198",
  fax: "(312) 555-0199",
  hours: [
    { days: "Monday – Thursday", time: "8:30 AM – 4:30 PM" },
    { days: "Friday", time: "Telehealth Consultations Only" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  acceptedInsurance: [
    {
      status: "In-Network",
      payers: ["Blue Cross Blue Shield PPO", "Medicare Part B"],
      description:
        "We directly bill BCBS PPO and Medicare Part B for covered diagnostic evaluation services.",
    },
    {
      status: "Out-of-Network Superbill",
      payers: ["Aetna PPO", "UnitedHealthcare PPO", "Cigna PPO"],
      description:
        "For out-of-network PPO plans, we provide itemized superbills with CPT and ICD-10 coding for insurance reimbursement submission.",
    },
    {
      status: "Cash Pay Consultation",
      payers: ["FSA / HSA Eligible", "Major Credit Cards"],
      description:
        "Initial 60-minute diagnostic consults ($250) and follow-up visits ($125) are payable via credit card or HSA/FSA funds.",
    },
  ],
  parkingAndAccess: {
    parking:
      "Covered garage parking available at 450 N Michigan Ave with direct elevator access to Suite 1200.",
    transit:
      "Accessible via Chicago CTA Red Line (Grand Station) and multiple North Michigan Avenue bus routes.",
    accessibility:
      "Fully ADA compliant with step-free entrance, wide doorways, automatic doors, and accessible restrooms.",
  },
  coordinates: {
    lat: 41.8904,
    lng: -87.6242,
  },
}

export const CONDITIONS_DATA: ConditionData[] = [
  {
    slug: "hashimotos-hypothyroidism",
    title: "Hashimoto's Thyroiditis & Hypothyroidism",
    tagline: "Comprehensive Evaluation Beyond Standard TSH Screening",
    summary:
      "An evidence-led clinical evaluation for persistent thyroid symptoms. We investigate complete thyroid antibody cascades, free hormone conversion, and autoimmune drivers.",
    primaryKeyword: "Hashimotos thyroiditis specialist doctor Chicago",
    icd10Code: "E06.3 / E03.9",
    prevalence:
      "Affects ~5% of US adult population, predominantly women aged 30–60.",
    symptoms: [
      "Profound afternoon fatigue and brain fog",
      "Cold intolerance and cold extremities",
      "Unexplained weight gain or inability to shed body fat",
      "Dry skin, hair thinning, and brittle nails",
      "Constipation and sluggish gastrointestinal motility",
      "Irregular menstrual cycles and mood changes",
    ],
    causes: [
      "Autoimmune destruction of thyroid tissue driven by anti-TPO and anti-Tg antibodies",
      "Impaired peripheral conversion of inactive T4 to active T3 in liver and gut tissues",
      "Nutritional deficiencies in selenium, zinc, and iodine cofactors",
      "Chronic systemic inflammation or gut barrier hyperpermeability",
    ],
    diagnosticTests: [
      {
        testName: "Thyroid Peroxidase (TPO) & Thyroglobulin (Tg) Antibodies",
        purpose: "Detect active autoimmune attack against thyroid gland tissue",
        conventionalRangeVsOptimal:
          "Conventional: <34 IU/mL | Optimal Clinical Target: 0 IU/mL",
      },
      {
        testName: "Free T3 & Free T4 Bioavailable Hormones",
        purpose:
          "Measure actual tissue-available active and inactive thyroid hormones",
        conventionalRangeVsOptimal:
          "Free T3 Optimal: Upper 50th percentile of lab reference range",
      },
      {
        testName: "Reverse T3 (rT3)",
        purpose:
          "Evaluate cellular thyroid receptor blocking caused by severe stress or illness",
        conventionalRangeVsOptimal:
          "Optimal rT3: <15 ng/dL with Free T3 / Reverse T3 ratio >20",
      },
    ],
    treatmentTradeoffs: [
      {
        approach: "Levothyroxine (Monotherapy T4)",
        mechanism: "Synthetic T4 hormone requiring peripheral conversion to T3",
        pros: [
          "Standard guideline first-line",
          "Inexpensive and widely covered by insurance",
        ],
        cons: [
          "Does not address autoimmune inflammation",
          "May leave Free T3 suboptimal",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach: "Combination T4/T3 Therapy",
        mechanism: "Combines synthetic T4 with micro-dosed Liothyronine (T3)",
        pros: [
          "Directly raises bioavailable Free T3",
          "Often resolves persistent fatigue/fog",
        ],
        cons: [
          "Requires careful dosing monitoring",
          "Slightly higher risk of palpitations if over-dosed",
        ],
        evidenceLevel: "Grade B (Moderate Cohort)",
      },
      {
        approach: "Integrative Autoimmune Protocol",
        mechanism:
          "Targeted selenium supplementation, anti-inflammatory nutrition, and gut repair",
        pros: [
          "Reduces anti-TPO antibody titers",
          "Addresses systemic root causes",
        ],
        cons: [
          "Requires 8–12 weeks of dietary consistency",
          "Not a substitute for required thyroid hormone replacement",
        ],
        evidenceLevel: "Grade B (Evolving Clinical Proof)",
      },
    ],
    appointmentExpectations: [
      "60-minute unhurried clinical history and complete physical examination",
      "Detailed review of all prior lab results and symptom timeline",
      "Orders for comprehensive full thyroid biomarker cascade",
      "Personalized initial nutrition and cellular conversion support plan",
    ],
    urgentCareNotice:
      "Seek emergency hospital care immediately if experiencing severe lethargy, confusion, hypothermia, or rapid swelling of the throat and neck.",
    faqs: [
      {
        question:
          "Why do I still feel exhausted if my doctor says my TSH is completely normal?",
        answer:
          "Standard screening TSH measures pituitary stimulation, not active hormone in peripheral tissues. If your body struggles to convert T4 to active Free T3, or if elevated Reverse T3 blocks thyroid receptors, you may experience severe fatigue despite a 'normal' TSH value.",
      },
      {
        question: "Can Hashimoto's antibodies be lowered over time?",
        answer:
          "Clinical research shows that targeted selenium therapy, addressing gut barrier integrity, and eliminating specific dietary inflammatory triggers can significantly reduce anti-TPO antibody levels in many patients.",
      },
    ],
    citations: [
      {
        id: "c1",
        authors: "Jonklaas J, et al.",
        title:
          "Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force",
        journal: "Thyroid",
        year: 2014,
        doiOrUrl: "https://pubmed.ncbi.nlm.nih.gov/25266247/",
      },
      {
        id: "c2",
        authors: "Wichman J, et al.",
        title:
          "Selenium supplementation significantly reduces thyroid peroxidase antibodies in patients with autoimmune thyroiditis",
        journal: "Thyroid",
        year: 2016,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: [
      "comprehensive-hormone-evaluation",
      "gut-microbiome-restoration",
    ],
    relatedSymptoms: [
      "unexplained-fatigue",
      "brain-fog-memory",
      "stubborn-weight-gain",
    ],
  },
  {
    slug: "pcos-insulin-resistance",
    title: "PCOS & Metabolic Insulin Resistance",
    tagline:
      "Addressing Ovarian & Metabolic Drivers Beyond Symptom Suppression",
    summary:
      "A comprehensive internal medicine approach to Polycystic Ovary Syndrome (PCOS). We evaluate hyperinsulinemia, androgen metabolism, and cardiometabolic risk factors.",
    primaryKeyword: "PCOS insulin resistance specialist doctor Chicago",
    icd10Code: "E28.2 / E88.81",
    prevalence: "Affects 6–12% of reproductive-age women in the United States.",
    symptoms: [
      "Irregular or completely absent menstrual periods",
      "Midsection weight gain and difficulty losing weight",
      "Adult acne along jawline and chest",
      "Hirsutism (excess facial or body hair growth)",
      "Intense sugar and carbohydrate cravings after meals",
      "Androgenic hair thinning on top of scalp",
    ],
    causes: [
      "Compensatory hyperinsulinemia driving increased ovarian androgen synthesis",
      "Altered LH/FSH gonadotropin signaling ratio",
      "Low Sex Hormone-Binding Globulin (SHBG) causing elevated bioavailable testosterone",
      "Chronic low-grade tissue inflammation and adipocyte dysfunction",
    ],
    diagnosticTests: [
      {
        testName: "Fasting Insulin & Oral Glucose Tolerance Test (OGTT)",
        purpose:
          "Detect early hidden insulin resistance before HbA1c or blood glucose rises",
        conventionalRangeVsOptimal:
          "Fasting Insulin Optimal Target: 3.0 – 6.0 uIU/mL",
      },
      {
        testName: "Total & Free Testosterone with SHBG",
        purpose: "Measure active circulating free androgen burden",
        conventionalRangeVsOptimal:
          "Optimal SHBG: >50 nmol/L to buffer active hormones",
      },
      {
        testName: "Advanced Lipid Profile (ApoB & hs-CRP)",
        purpose:
          "Assess early cardiovascular and metabolic vascular inflammatory risk",
        conventionalRangeVsOptimal:
          "Optimal ApoB: <80 mg/dL | hs-CRP: <1.0 mg/L",
      },
    ],
    treatmentTradeoffs: [
      {
        approach: "Metformin Therapy",
        mechanism:
          "Biguanide medication reducing hepatic gluconeogenesis and enhancing peripheral insulin sensitivity",
        pros: [
          "Proven long-term safety profile",
          "Helps lower fasting insulin and promote ovulation",
        ],
        cons: [
          "GI side effects (nausea, loose stool) during initiation",
          "Can deplete Vitamin B12 over time",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach: "Inositol Supplementation (40:1 Myo to D-Chiro Ratio)",
        mechanism:
          "Second-messenger signaling nutrient improving ovarian insulin receptor sensitivity",
        pros: [
          "Natural over-the-counter option",
          "Improves egg quality and ovulatory regularity",
        ],
        cons: [
          "Requires consistent twice-daily dosing",
          "Takes 3–6 months to show maximal clinical impact",
        ],
        evidenceLevel: "Grade B (Moderate Cohort)",
      },
      {
        approach: "Combined Oral Contraceptives (COCs)",
        mechanism:
          "Suppresses pituitary LH/FSH to lower ovarian androgen secretion",
        pros: [
          "Rapidly regulates menstrual bleed timing",
          "Clears hormonal acne effectively",
        ],
        cons: [
          "Masks underlying metabolic root cause",
          "Does not improve insulin sensitivity",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    appointmentExpectations: [
      "Deep evaluation of metabolic history, cycle tracking, and physical signs",
      "Custom laboratory order including fasting insulin, androgen panel, and lipids",
      "Personalized nutrition plan emphasizing glycemic index and fiber density",
      "Clear guidance on prescription options vs targeted nutrient therapies",
    ],
    urgentCareNotice:
      "Seek emergency care if experiencing sudden severe unilateral pelvic pain, heavy vaginal bleeding saturating >2 pads per hour, or signs of severe fever.",
    faqs: [
      {
        question:
          "Can I have PCOS if my glucose and HbA1c are completely normal?",
        answer:
          "Yes. Blood glucose and HbA1c remain normal for years while the pancreas overproduces insulin to compensate. Fasting insulin testing is required to catch early insulin resistance.",
      },
      {
        question: "Do I have to take birth control pills to manage PCOS?",
        answer:
          "No. Oral contraceptives induce withdrawal bleeds and suppress symptoms, but metabolic therapy focused on insulin sensitization can successfully restore natural ovulatory cycles without synthetic hormones.",
      },
    ],
    citations: [
      {
        id: "c3",
        authors: "Teede HJ, et al.",
        title:
          "Recommendations from the international evidence-based guideline for the assessment and management of polycystic ovary syndrome",
        journal: "Fertility and Sterility",
        year: 2023,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: [
      "metabolic-insulin-sensitization",
      "comprehensive-hormone-evaluation",
    ],
    relatedSymptoms: [
      "stubborn-weight-gain",
      "brain-fog-memory",
      "unexplained-fatigue",
    ],
  },
  {
    slug: "perimenopause-hormonal-transition",
    title: "Perimenopause & Hormonal Transition",
    tagline: "Evidence-Based Guidance for the Midlife Endocrine Shift",
    summary:
      "An integrative internal medicine consultation evaluating estriol, progesterone, cardiovascular protection, and bone density throughout the perimenopausal shift.",
    primaryKeyword: "perimenopause specialist doctor Chicago",
    icd10Code: "N95.1 / M81.0",
    prevalence: "Affects nearly all women transitioning through ages 40–55.",
    symptoms: [
      "Hot flashes, night sweats, and thermal dysregulation",
      "Sleep fragmentation and early morning awakening",
      "Sudden anxiety, mood lability, and brain fog",
      "Irregular, heavy, or missed menstrual cycles",
      "Joint stiffness and generalized muscle aches",
      "Changes in metabolic rate and abdominal fat distribution",
    ],
    causes: [
      "Fluctuating and declining ovarian progesterone and estradiol synthesis",
      "Desensitization of hypothalamic temperature control centers",
      "Changes in central nervous system GABA and serotonin neurotransmission",
      "Accelerated bone mineral density loss due to estrogen withdrawal",
    ],
    diagnosticTests: [
      {
        testName: "Day 19–21 Serum Progesterone & Estradiol Ratio",
        purpose:
          "Assess luteal phase adequacy and relative progesterone deficit",
        conventionalRangeVsOptimal:
          "Optimal Progesterone: >10 ng/mL during luteal peak",
      },
      {
        testName: "Baseline DEXA Bone Density & Microarchitecture Scan",
        purpose:
          "Establish bone mass baseline prior to peak estrogen transition",
        conventionalRangeVsOptimal:
          "Optimal T-score: >-1.0 across spine and hip",
      },
      {
        testName:
          "Comprehensive Cardiometabolic Panel (hs-CRP, Fasting Lipids, ApoB)",
        purpose:
          "Monitor vascular compliance and lipid changes secondary to estrogen decline",
        conventionalRangeVsOptimal: "Optimal ApoB: <80 mg/dL",
      },
    ],
    treatmentTradeoffs: [
      {
        approach:
          "Transdermal Bioidentical Estradiol + Oral Micronized Progesterone",
        mechanism:
          "Replaces declining physiological hormones using molecularly identical compounds",
        pros: [
          "Transdermal route carries lower venous thrombosis risk",
          "Promotes sleep and protects bone density",
        ],
        cons: [
          "Requires progestogen if uterus present to protect endometrium",
          "Requires medical supervision",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach:
          "Non-Hormonal Neurotransmitter Therapy (SSRIs / Gabapentin / Fezolinetant)",
        mechanism:
          "Modulates neurokinin B pathways or central thermoregulation without hormone administration",
        pros: [
          "Safe option for patients with history of hormone-sensitive cancers",
          "Effective for hot flashes",
        ],
        cons: [
          "Does not protect bone density or cardiovascular biomarkers",
          "May cause somnolence or dry mouth",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach: "Lifestyle & Phytoestrogen Therapy",
        mechanism:
          "Isoflavones and strength training to support bone and vascular health",
        pros: [
          "Zero prescription requirement",
          "Supports overall metabolic health",
        ],
        cons: [
          "Modest reduction in severe hot flashes compared to prescription HRT",
          "Variable individual absorption",
        ],
        evidenceLevel: "Grade B (Moderate Cohort)",
      },
    ],
    appointmentExpectations: [
      "Thorough review of cycle alterations, vasomotor symptoms, and sleep architecture",
      "Assessment of personal and family cardiovascular and breast cancer risk factors",
      "Customized laboratory order and DEXA scan referral if indicated",
      "Clear, evidence-backed discussion comparing HRT options vs non-hormonal strategies",
    ],
    urgentCareNotice:
      "Seek emergency medical evaluation for sudden severe chest pain, calf tenderness with shortness of breath, or postmenopausal bleeding occurring after 12 months of amenorrhea.",
    faqs: [
      {
        question:
          "Is Bioidentical Hormone Replacement Therapy (BHRT) safer than synthetic HRT?",
        answer:
          "Large clinical consensus guidelines (NAMS/The Menopause Society) confirm that transdermal bioidentical 17beta-estradiol combined with oral micronized progesterone carries a more favorable venous thromboembolism and metabolic safety profile compared to older oral synthetic conjugated estrogens.",
      },
      {
        question:
          "How long before perimenopause symptoms resolve with treatment?",
        answer:
          "Vasomotor symptoms and sleep disruption frequently improve within 2 to 4 weeks of initiating individualized transdermal estrogen and oral progesterone therapy.",
      },
    ],
    citations: [
      {
        id: "c4",
        authors: "NAMS Position Statement Board",
        title:
          "The 2022 hormone therapy position statement of The North American Menopause Society",
        journal: "Menopause",
        year: 2022,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: [
      "bioidentical-hormone-therapy",
      "lifestyle-sleep-circadian-medicine",
    ],
    relatedSymptoms: [
      "sleep-disturbances-insomnia",
      "brain-fog-memory",
      "unexplained-fatigue",
    ],
  },
  {
    slug: "chronic-fatigue-adrenal-dysfunction",
    title: "Chronic Fatigue & HPA Axis Dysfunction",
    tagline:
      "Systemic Differential Diagnosis for Persistent Cellular Exhaustion",
    summary:
      "An exhaustive internal medicine workup for unresolving fatigue. We evaluate mitochondrial function, circadian cortisol rhythms, latent viral reactivations, and micronutrient status.",
    primaryKeyword:
      "chronic fatigue syndrome internal medicine physician Chicago",
    icd10Code: "R53.82 / G93.32",
    prevalence:
      "Affects up to 2.5 million Americans, with many remaining undiagnosed.",
    symptoms: [
      "Post-exertional malaise (PEM) where mild activity triggers severe crash",
      "Unrefreshing sleep regardless of sleep duration",
      "Orthostatic intolerance (dizziness or racing heart upon standing)",
      "Cognitive impairment ('brain fog') and word-finding difficulty",
      "Low body temperature and muscle aches",
    ],
    causes: [
      "Hypothalamic-Pituitary-Adrenal (HPA) axis circadian signal blunting",
      "Mitochondrial electron transport chain impairment and low ATP yield",
      "Latent viral immune strain (EBV, HHV-6) causing persistent low-grade cytokine activity",
      "Occult nutrient depletion in iron ferritin, B12, CoQ10, and carnitine",
    ],
    diagnosticTests: [
      {
        testName: "Salivary or Serum 4-Point Cortisol Circadian Curve",
        purpose:
          "Map diurnal adrenal cortisol secretion pattern from morning awakening to bedtime",
        conventionalRangeVsOptimal:
          "Optimal Curve: Robust morning spike with smooth evening slope",
      },
      {
        testName: "Complete Iron Panel with Serum Ferritin",
        purpose:
          "Ensure tissue iron storage is optimal for mitochondrial respiration",
        conventionalRangeVsOptimal:
          "Optimal Ferritin: 50 – 100 ng/mL for non-inflammatory fatigue",
      },
      {
        testName: "Inflammatory Cytokine Cascade & Active Immune Markers",
        purpose:
          "Rule out ongoing autoimmune or inflammatory immune activation",
        conventionalRangeVsOptimal: "hs-CRP <1.0 mg/L | Normal ANA screen",
      },
    ],
    treatmentTradeoffs: [
      {
        approach: "Pacing & Circadian Sleep Architecture Restoration",
        mechanism:
          "Strict energy expenditure budgeting to prevent post-exertional crash",
        pros: ["Prevents severe fatigue relapses", "Zero side effect risk"],
        cons: ["Requires lifestyle discipline and activity adjustments"],
        evidenceLevel: "Grade A (Established Guideline)",
      },
      {
        approach:
          "Targeted Mitochondrial Nutrient Resuscitation (CoQ10 / NAD / Carnitine)",
        mechanism:
          "Supplies essential biochemical cofactors for ATP cellular energy synthesis",
        pros: [
          "Supports mitochondrial respiration directly",
          "Improves muscle and brain stamina",
        ],
        cons: ["Takes 4–8 weeks to observe subjective benefit"],
        evidenceLevel: "Grade B (Moderate Cohort)",
      },
    ],
    appointmentExpectations: [
      "Extensive 60-minute interview detailing energy timeline and crash patterns",
      "Comprehensive physical examination including orthostatic vitals check",
      "Targeted lab ordering covering iron, thyroid, adrenals, and infectious markers",
      "Clear, empathetic care protocol establishing realistic energy pacing goals",
    ],
    urgentCareNotice:
      "Seek emergency evaluation if experiencing high fever, sudden fainting, chest pressure, or severe weakness down one side of the body.",
    faqs: [
      {
        question: "Is 'Adrenal Fatigue' a recognized medical diagnosis?",
        answer:
          "While the term 'adrenal fatigue' is not an ICD-10 medical code, Hypothalamic-Pituitary-Adrenal (HPA) axis dysfunction and altered cortisol circadian rhythm are well-documented physiological conditions that respond to targeted medical therapy.",
      },
    ],
    citations: [
      {
        id: "c5",
        authors:
          "Institute of Medicine Committee on Diagnostic Criteria for ME/CFS",
        title:
          "Beyond Myalgic Encephalomyelitis/Chronic Fatigue Syndrome: Redefining an Illness",
        journal: "National Academies Press",
        year: 2015,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: [
      "lifestyle-sleep-circadian-medicine",
      "comprehensive-hormone-evaluation",
    ],
    relatedSymptoms: [
      "unexplained-fatigue",
      "brain-fog-memory",
      "sleep-disturbances-insomnia",
    ],
  },
  {
    slug: "gut-dysbiosis-sibo",
    title: "Gut Dysbiosis & SIBO Evaluation",
    tagline: "Restoring Microbiome Balance & Intestinal Barrier Integrity",
    summary:
      "A clinical gastrointestinal evaluation targeting chronic bloating, food sensitivities, Small Intestinal Bacterial Overgrowth (SIBO), and intestinal hyperpermeability.",
    primaryKeyword: "gut microbiome bloating doctor Chicago",
    icd10Code: "K58.0 / K63.89",
    prevalence:
      "Affects up to 15% of the US population, highly prevalent in IBS diagnoses.",
    symptoms: [
      "Distressing abdominal bloating occurring within 30–60 minutes of eating",
      "Alternating bowel habits (constipation, diarrhea, or mixed IBS)",
      "Unexplained systemic food sensitivities and skin rashes",
      "Abdominal cramping and excessive gas production",
      "Co-occurring brain fog and fatigue following meals",
    ],
    causes: [
      "Impaired Migrating Motor Complex (MMC) small intestinal motility",
      "Overgrowth of colonic bacteria in the small intestine (SIBO / IMO)",
      "Intestinal mucosal barrier disruption ('leaky gut') allowing LPS translocation",
      "History of frequent broad-spectrum antibiotic courses",
    ],
    diagnosticTests: [
      {
        testName: "Lactulose Breath Test for Hydrogen & Methane (IMO)",
        purpose:
          "Measure bacterial gas output over 120 minutes to confirm or rule out SIBO",
        conventionalRangeVsOptimal:
          "Positive SIBO: Hydrogen rise >=20ppm / Methane >=10ppm",
      },
      {
        testName: "Comprehensive Stool Microbiome & Inflammatory Panel",
        purpose:
          "Assess commensal species abundance, dysbiosis index, and secretory IgA",
        conventionalRangeVsOptimal:
          "Target: High diversity index with normal Calprotectin (<50 ug/g)",
      },
    ],
    treatmentTradeoffs: [
      {
        approach: "Rifaximin (Xifaxan) Targeted Non-Systemic Antibiotic",
        mechanism:
          "Gastrointestinal-specific antibiotic that acts locally in small intestine without systemic absorption",
        pros: [
          "High eradication efficacy for hydrogen SIBO",
          "Does not disrupt colonic microbiome",
        ],
        cons: [
          "Expensive if insurance coverage is restricted",
          "Recurrence possible if motility is not restored",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach: "Herbal Antimicrobial Protocol (Berberine / Neem / Oregano)",
        mechanism:
          "Broad-spectrum botanical compounds suppressing pathogenic overgrowth",
        pros: ["Effective alternative for non-responders", "Inexpensive"],
        cons: [
          "Requires 4–6 week treatment course",
          "Requires GI tolerance monitoring",
        ],
        evidenceLevel: "Grade B (Moderate Cohort)",
      },
    ],
    appointmentExpectations: [
      "Detailed gastrointestinal symptom mapping and dietary reintroduction history",
      "Physician order for lactulose breath test or specialized stool panel",
      "Step-by-step 4R protocol (Remove, Replace, Reinoculate, Repair) consultation",
    ],
    urgentCareNotice:
      "Seek immediate emergency room evaluation for severe intractable abdominal pain, persistent vomiting, black tarry stools, or high fever with abdominal rigidity.",
    faqs: [
      {
        question: "Why do I bloat immediately after eating healthy vegetables?",
        answer:
          "High-FODMAP vegetables feed bacteria present in the small intestine if SIBO is present, causing rapid fermentative gas production and abdominal distension within minutes of eating.",
      },
    ],
    citations: [
      {
        id: "c6",
        authors: "Pimentel M, et al.",
        title: "ACG Clinical Guideline: Small Intestinal Bacterial Overgrowth",
        journal: "American Journal of Gastroenterology",
        year: 2020,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: ["gut-microbiome-restoration"],
    relatedSymptoms: [
      "chronic-bloating-digestive",
      "unexplained-fatigue",
      "brain-fog-memory",
    ],
  },
  {
    slug: "metabolic-syndrome-prediabetes",
    title: "Metabolic Syndrome & Prediabetes",
    tagline:
      "Reversing Vascular & Glycemic Risk Factors Through Preventive Care",
    summary:
      "A proactive internal medicine diagnostic program designed to reverse early insulin resistance, optimize ApoB particle counts, and prevent progression to Type 2 Diabetes.",
    primaryKeyword: "prediabetes reversal physician Chicago",
    icd10Code: "E88.81 / R73.03",
    prevalence:
      "Affects over 38% of US adults (96 million people with prediabetes).",
    symptoms: [
      "Visceral abdominal adiposity (waist circumference >35 inches in women)",
      "Postprandial somnolence (severe fatigue or drowsiness after carbohydrate meals)",
      "Skin tags and dark velvety patches around neck (Acanthosis Nigricans)",
      "Elevated resting blood pressure (>130/85 mmHg)",
      "Elevated fasting triglycerides and low HDL cholesterol",
    ],
    causes: [
      "Ectopic lipid accumulation in liver and skeletal muscle causing insulin receptor blunting",
      "Excess dietary refined carbohydrates and lack of muscle glycogen turnover",
      "Sedentary lifestyle and loss of metabolic flexibility",
      "Genetic predisposition combined with chronic stress and circadian disruption",
    ],
    diagnosticTests: [
      {
        testName: "Fasting Insulin + Fasting Glucose (HOMA-IR Calculation)",
        purpose:
          "Calculate exact mathematical degree of peripheral insulin resistance",
        conventionalRangeVsOptimal:
          "Optimal HOMA-IR Score: <1.0 (Calculated: Fasting Glucose x Fasting Insulin / 405)",
      },
      {
        testName: "Apolipoprotein B (ApoB) & Lipoprotein(a)",
        purpose:
          "Quantify total atherogenic lipoprotein particle burden for true cardiovascular risk",
        conventionalRangeVsOptimal:
          "Optimal ApoB: <80 mg/dL for primary prevention",
      },
    ],
    treatmentTradeoffs: [
      {
        approach: "Targeted Glycemic Nutrition & Zone 2 Exercise Prescription",
        mechanism:
          "Increases GLUT-4 glucose transporter translocation independent of insulin",
        pros: [
          "Reverses insulin resistance at root cause level",
          "Promotes sustainable weight loss",
        ],
        cons: ["Requires behavioral change and consistency"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
      {
        approach: "Metformin or GLP-1 Receptor Agonist Therapy",
        mechanism:
          "Pharmacological glycemic modulation and appetite/satiety signaling",
        pros: [
          "Rapid reduction in HbA1c and weight",
          "Proven cardiometabolic benefits",
        ],
        cons: [
          "Requires prescription management",
          "Potential nausea or GI adaptation period",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    appointmentExpectations: [
      "Complete metabolic risk score calculation and vascular physical examination",
      "Orders for advanced glycemic, lipid, and vascular inflammatory biomarkers",
      "Personalized nutrition, movement, and sleep roadmap",
    ],
    urgentCareNotice:
      "Seek emergency care if experiencing symptoms of acute heart attack (chest pain, left arm numbness) or acute stroke (facial drooping, arm weakness, speech difficulty).",
    faqs: [
      {
        question: "Can prediabetes truly be reversed?",
        answer:
          "Yes. Clinical trial evidence (such as the Diabetes Prevention Program) demonstrates that targeted glycemic nutrition, weight loss of 5-7%, and regular exercise reverse prediabetes back to normal glucose tolerance in over 58% of patients.",
      },
    ],
    citations: [
      {
        id: "c7",
        authors: "Diabetes Prevention Program Research Group",
        title:
          "Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin",
        journal: "New England Journal of Medicine",
        year: 2002,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedTreatments: [
      "metabolic-insulin-sensitization",
      "cardiovascular-prevention-plan",
    ],
    relatedSymptoms: ["stubborn-weight-gain", "unexplained-fatigue"],
  },
]

export const TREATMENTS_DATA: TreatmentData[] = [
  {
    slug: "comprehensive-hormone-evaluation",
    title: "Comprehensive Endocrine & Hormone Evaluation",
    tagline: "Uncovering Deep Hormonal Signaling Disruption",
    summary:
      "An advanced 60-minute physician consultation paired with broad-spectrum laboratory testing to evaluate thyroid, adrenal, ovarian, and metabolic hormones.",
    primaryKeyword: "comprehensive hormone evaluation protocol Chicago",
    indications: [
      "Persistent fatigue, brain fog, and mood changes",
      "Irregular or painful menstrual cycles",
      "Unexplained midsection weight gain",
      "Perimenopausal hot flashes and insomnia",
    ],
    clinicalMethodology: [
      "In-depth 60-minute physician intake mapping lifelong hormonal health events",
      "Targeted lab ordering: Free T3/T4, TPO Ab, Fasting Insulin, DHEA-S, Progesterone, Estradiol, Cortisol",
      "Follow-up consultation to analyze lab markers with optimal target ranges",
    ],
    diagnosticTesting: [
      "Serum Hormone Cascades",
      "4-Point Cortisol Rhythm",
      "Full Thyroid Antibody Panel",
      "Glycemic & Lipoprotein Profile",
    ],
    durationAndFrequency:
      "Initial 60-min consult, follow-up lab review at 4 weeks, maintenance checks every 6 months.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "Comprehensive MD Endocrine Evaluation",
        mechanism:
          "Physician-interpreted biomarker analysis mapped to clinical symptoms",
        pros: [
          "Uncovers root hormone imbalances overlooked by basic screening",
          "Evidence-based",
        ],
        cons: ["Requires initial investment in time and detailed lab work"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question:
          "What makes this different from my routine yearly physical blood test?",
        answer:
          "Routine annual physicals order basic screening panels (like TSH and Fasting Glucose) that only flag end-stage disease. Our comprehensive evaluation tests bioavailable Free T3, thyroid antibodies, fasting insulin, and diurnal cortisol curve.",
      },
    ],
    citations: [
      {
        id: "c8",
        authors: "Endocrine Society Clinical Guidelines Taskforce",
        title:
          "Hormone Testing in Women: An Endocrine Society Clinical Practice Guideline",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: 2021,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: [
      "hashimotos-hypothyroidism",
      "perimenopause-hormonal-transition",
      "pcos-insulin-resistance",
    ],
  },
  {
    slug: "gut-microbiome-restoration",
    title: "Gut Microbiome Diagnostic & Restoration Plan",
    tagline: "Evidence-Based GI Repair Protocol",
    summary:
      "A structured 4R clinical protocol designed to identify Small Intestinal Bacterial Overgrowth (SIBO), repair mucosal permeability, and eliminate chronic bloating.",
    primaryKeyword: "gut health diagnostic restoration plan Chicago",
    indications: [
      "Chronic bloating after meals",
      "Diagnosed IBS with poor treatment response",
      "Suspected SIBO or dysbiosis",
      "Food intolerances and systemic inflammation",
    ],
    clinicalMethodology: [
      "Diagnostic lactulose breath testing or GI stool panel ordering",
      "Eradication phase using targeted prescription or botanical antimicrobials",
      "Motility support and intestinal barrier mucosal healing protocol",
    ],
    diagnosticTesting: [
      "Lactulose Hydrogen/Methane Breath Test",
      "Stool Microbiome DNA Sequencing",
      "Calprotectin & Secretory IgA",
    ],
    durationAndFrequency:
      "8 to 12 week active restoration protocol with interim check-ins.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "4R Gut Restoration Protocol",
        mechanism:
          "Removes pathogens, replaces digestive enzymes, reinoculates flora, repairs mucosa",
        pros: [
          "Addresses root cause of SIBO/IBS",
          "Improves nutrient absorption",
        ],
        cons: ["Requires short-term dietary modifications"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question: "How long until my stomach bloating improves?",
        answer:
          "Most patients notice a significant reduction in postprandial abdominal distension within 14 to 21 days of starting targeted antimicrobial therapy and dietary adjustment.",
      },
    ],
    citations: [
      {
        id: "c9",
        authors: "American Gastroenterological Association",
        title:
          "Clinical Practice Update on the Management of Small Intestinal Bacterial Overgrowth",
        journal: "Gastroenterology",
        year: 2022,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: [
      "gut-dysbiosis-sibo",
      "chronic-fatigue-adrenal-dysfunction",
    ],
  },
  {
    slug: "metabolic-insulin-sensitization",
    title: "Metabolic Health & Insulin Sensitization Therapy",
    tagline: "Restoring Cellular Glucose Regulation",
    summary:
      "A clinical program combining medical nutrition, HOMA-IR tracking, targeted nutrient cofactors, and evidence-backed prescription therapy to reverse insulin resistance.",
    primaryKeyword: "evidence based metabolic health therapy Chicago",
    indications: [
      "Prediabetes or high HOMA-IR index",
      "PCOS with midsection weight accumulation",
      "Postprandial blood sugar crashes",
      "Elevated ApoB or liver fat accumulation",
    ],
    clinicalMethodology: [
      "Baseline HOMA-IR and continuous glucose monitoring (CGM) evaluation",
      "Glycemic impact nutrition prescribing",
      "Pharmacological support (Metformin / GLP-1) when clinically indicated",
    ],
    diagnosticTesting: [
      "Fasting Insulin",
      "OGTT",
      "HbA1c",
      "Lipid Subfractions",
    ],
    durationAndFrequency: "3 to 6 month metabolic optimization program.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "Metabolic Sensitization Roadmap",
        mechanism: "Improves cellular insulin receptor signaling efficiency",
        pros: ["Reverses prediabetes", "Protects cardiovascular health"],
        cons: ["Requires commitment to movement and diet changes"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question: "Do I have to wear a Continuous Glucose Monitor (CGM)?",
        answer:
          "While CGMs provide incredible real-time insight into how specific foods affect your blood sugar, they are optional. Fasting insulin and periodic OGTT testing provide excellent baseline tracking.",
      },
    ],
    citations: [
      {
        id: "c10",
        authors: "American Diabetes Association",
        title: "Standards of Care in Diabetes—2024",
        journal: "Diabetes Care",
        year: 2024,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: [
      "pcos-insulin-resistance",
      "metabolic-syndrome-prediabetes",
    ],
  },
  {
    slug: "bioidentical-hormone-therapy",
    title: "Bioidentical Hormone Replacement Consultation (BHRT)",
    tagline: "Precision Endocrine Support for Perimenopause & Menopause",
    summary:
      "Physician-supervised hormone replacement using molecularly identical transdermal estradiol and oral micronized progesterone to relieve perimenopausal symptoms and protect bone/heart health.",
    primaryKeyword: "bioidentical HRT physician consultation Chicago",
    indications: [
      "Severe hot flashes and night sweats",
      "Perimenopausal sleep fragmentation and anxiety",
      "Early bone density loss (osteopenia)",
      "Vaginal dryness or discomfort",
    ],
    clinicalMethodology: [
      "Individualized risk-benefit clinical stratification",
      "Prescription of transdermal 17beta-estradiol and oral micronized progesterone",
      "Regular serum hormone level and symptom monitoring",
    ],
    diagnosticTesting: [
      "Serum Estradiol/Progesterone",
      "DEXA Bone Density Scan",
      "Mammogram Verification",
    ],
    durationAndFrequency:
      "Initial visit, 8-week dose adjustment, annual ongoing monitoring.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "Transdermal BHRT Protocol",
        mechanism:
          "Delivers bioidentical hormones directly through skin into circulation",
        pros: ["Lowest venous thrombosis risk", "Rapid symptom relief"],
        cons: ["Requires ongoing medical supervision"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question: "Is BHRT safe for long-term use?",
        answer:
          "Current guidelines from NAMS confirm that BHRT initiated in women under age 60 or within 10 years of menopause onset has a highly favorable safety profile and offers long-term bone and cardiovascular protection.",
      },
    ],
    citations: [
      {
        id: "c11",
        authors: "The Menopause Society",
        title: "Management of Menopause-Associated Vasomotor Symptoms",
        journal: "Menopause",
        year: 2023,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: ["perimenopause-hormonal-transition"],
  },
  {
    slug: "cardiovascular-prevention-plan",
    title: "Preventive Cardiovascular & Advanced Lipid Assessment",
    tagline: "Looking Beyond Standard Cholesterol to Total Vascular Protection",
    summary:
      "A comprehensive internal medicine cardiovascular evaluation utilizing ApoB particle counts, Coronary Artery Calcium (CAC) scoring, and vascular inflammatory markers.",
    primaryKeyword: "cardiovascular disease prevention physical Chicago",
    indications: [
      "Family history of premature heart disease",
      "Elevated standard cholesterol or triglycerides",
      "Metabolic syndrome or prediabetes",
      "Personalized lipid optimization seeking",
    ],
    clinicalMethodology: [
      "Advanced lipid subfractionation ordering (ApoB, Lp(a), hs-CRP)",
      "CAC scan referral for non-invasive arterial plaque visualization",
      "Integrative lifestyle and pharmacological lipid management roadmap",
    ],
    diagnosticTesting: [
      "ApoB",
      "Lipoprotein(a)",
      "hs-CRP",
      "Coronary Artery Calcium Scan",
    ],
    durationAndFrequency:
      "Annual cardiovascular risk assessment and lipid monitoring.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "Advanced Lipid Risk Stratification",
        mechanism:
          "Measures actual number of atherogenic particles carrying cholesterol into artery walls",
        pros: [
          "Far superior predictive accuracy compared to LDL-C alone",
          "Guides precise treatment",
        ],
        cons: [
          "Lp(a) is genetically determined and requires specialized management",
        ],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question:
          "Why does ApoB matter if my standard LDL cholesterol is normal?",
        answer:
          "Standard LDL-C measures the total weight of cholesterol, not particle count. If you have small dense LDL particles, your particle count (ApoB) can be dangerously high even with a 'normal' LDL-C value.",
      },
    ],
    citations: [
      {
        id: "c12",
        authors: "American College of Cardiology / AHA Guidelines",
        title:
          "Management of Blood Cholesterol: A Report of the American College of Cardiology/American Heart Association",
        journal: "Circulation",
        year: 2019,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: ["metabolic-syndrome-prediabetes"],
  },
  {
    slug: "lifestyle-sleep-circadian-medicine",
    title: "Circadian Medicine & Sleep Optimization Roadmap",
    tagline: "Restoring Biological Rhythms for Cellular Recovery",
    summary:
      "A clinical sleep architecture and circadian entrainment program designed to fix chronic insomnia, normalize cortisol rhythms, and improve deep sleep recovery.",
    primaryKeyword: "circadian sleep medicine specialist Chicago",
    indications: [
      "Chronic mid-night awakening or trouble falling asleep",
      "HPA axis cortisol rhythm blunting",
      "Persistent fatigue despite 8 hours in bed",
      "Shift-work or jet-lag circadian misalignment",
    ],
    clinicalMethodology: [
      "Sleep architecture and light exposure intake mapping",
      "4-point diurnal salivary cortisol rhythm testing",
      "Circadian entrainment, morning light therapy, and sleep environment prescription",
    ],
    diagnosticTesting: [
      "Salivary Diurnal Cortisol",
      "Home Sleep Apnea Screening Referral",
    ],
    durationAndFrequency: "4 to 6 week active circadian retraining program.",
    evidenceRating: "Grade A (Established Guideline)",
    tradeoffs: [
      {
        approach: "Circadian Entrainment & Sleep Architecture Protocol",
        mechanism:
          "Aligns suprachiasmatic nucleus master clock through timed light, temperature, and meal cues",
        pros: [
          "Restores restorative deep sleep",
          "Improves daytime cognitive clarity",
        ],
        cons: ["Requires consistent morning light routines"],
        evidenceLevel: "Grade A (Strong RCT)",
      },
    ],
    faqs: [
      {
        question: "Why do I wake up wide awake every night at 3:00 AM?",
        answer:
          "A 3:00 AM awakening is frequently caused by a sudden cortisol rebound triggered by nocturnal blood sugar drops (reactive hypoglycemia) or circadian adrenal rhythm misalignment.",
      },
    ],
    citations: [
      {
        id: "c13",
        authors: "American Academy of Sleep Medicine",
        title:
          "Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults",
        journal: "Journal of Clinical Sleep Medicine",
        year: 2017,
      },
    ],
    lastReviewed: "2025-02-01",
    relatedConditions: [
      "chronic-fatigue-adrenal-dysfunction",
      "perimenopause-hormonal-transition",
    ],
  },
]

export const SYMPTOMS_DATA: SymptomData[] = [
  {
    slug: "unexplained-fatigue",
    title: "Unexplained Fatigue & Low Energy",
    tagline:
      "When Sleep Doesn't Restore Your Energy, We Investigate the Physiology",
    summary:
      "Exhaustion is a symptom, not a diagnosis. Learn which endocrine, iron, thyroid, and metabolic markers must be tested to find the cause of your daily fatigue.",
    primaryKeyword: "unexplained chronic fatigue causes doctor Chicago",
    physiologicalMechanisms: [
      "Cellular mitochondrial ATP production impairment",
      "Impaired tissue oxygen delivery due to iron/ferritin depletion",
      "Free T3 bioavailable thyroid hormone deficiency",
      "HPA axis blunting causing flat diurnal cortisol curve",
    ],
    recommendedLabsToRequest: [
      "Full Thyroid Cascade (TSH, Free T3, Free T4, Reverse T3, TPO Antibodies)",
      "Complete Iron Panel + Serum Ferritin",
      "Fasting Insulin & HOMA-IR Index",
      "Vitamin D3 (25-OH) & Vitamin B12 / Methylmalonic Acid",
    ],
    matchingConditions: [
      {
        title: "Hashimoto's Thyroiditis",
        slug: "hashimotos-hypothyroidism",
        reason:
          "Autoimmune destruction of thyroid tissue causes sluggish metabolism and profound lethargy.",
      },
      {
        title: "Chronic Fatigue & HPA Axis Dysfunction",
        slug: "chronic-fatigue-adrenal-dysfunction",
        reason:
          "Circadian cortisol blunting and mitochondrial sluggishness create daily crashes.",
      },
    ],
    faqs: [
      {
        question:
          "How do I know if my fatigue is thyroid-related or adrenal-related?",
        answer:
          "Comprehensive laboratory testing measuring both Free T3/Free T4 thyroid levels and a 4-point diurnal cortisol curve is required to differentiate thyroid sluggishness from HPA axis cortisol blunting.",
      },
    ],
    citations: [
      {
        id: "c14",
        authors: "Benton D, et al.",
        title: "Micronutrient Status, Fatigue, and Cognitive Function",
        journal: "Nutrients",
        year: 2020,
      },
    ],
    lastReviewed: "2025-02-01",
  },
  {
    slug: "brain-fog-memory",
    title: "Brain Fog & Cognitive Sluggishness",
    tagline:
      "Understanding Neuroinflammation, Hormonal Shifts, and Brain Energy",
    summary:
      "Difficulty concentrating, word-finding friction, and mental fatigue are clear physiological signals that warrant a thorough metabolic and hormonal evaluation.",
    primaryKeyword: "brain fog causes medical evaluation Chicago",
    physiologicalMechanisms: [
      "Neuroinflammation triggered by systemic gut-derived lipopolysaccharides (LPS)",
      "Estrogen receptor withdrawal in brain cognitive centers during perimenopause",
      "Fluctuating blood sugar spikes and reactive hypoglycemic crashes",
      "Low bioavailable Free T3 in brain neural tissue",
    ],
    recommendedLabsToRequest: [
      "High-Sensitivity CRP (hs-CRP)",
      "Fasting Insulin & OGTT",
      "Day 19–21 Serum Progesterone & Estradiol",
      "SIBO Lactulose Breath Test",
    ],
    matchingConditions: [
      {
        title: "Perimenopause Transition",
        slug: "perimenopause-hormonal-transition",
        reason:
          "Estrogen fluctuations directly impact verbal memory and processing speed.",
      },
      {
        title: "Gut Dysbiosis & SIBO",
        slug: "gut-dysbiosis-sibo",
        reason:
          "Intestinal bacterial gases and inflammatory cytokines cross blood-brain barrier.",
      },
    ],
    faqs: [
      {
        question: "Can gut issues really cause brain fog?",
        answer:
          "Yes. The gut-brain axis is a major neural pathway. Intestinal bacterial overgrowth (SIBO) produces inflammatory markers that circulate systemically, causing neuroinflammation and sluggish mental processing.",
      },
    ],
    citations: [
      {
        id: "c15",
        authors: "Cryan JF, et al.",
        title: "The Microbiota-Gut-Brain Axis",
        journal: "Physiological Reviews",
        year: 2019,
      },
    ],
    lastReviewed: "2025-02-01",
  },
  {
    slug: "stubborn-weight-gain",
    title: "Stubborn Weight Gain & Resistance to Loss",
    tagline:
      "Why 'Calories In vs Calories Out' Fails When Hormones Are Imbalanced",
    summary:
      "Unexplained midsection weight gain is rarely a lack of willpower. We evaluate insulin resistance, thyroid conversion, and cortisol elevations that block fat oxidation.",
    primaryKeyword: "hormonal weight gain internal medicine doctor Chicago",
    physiologicalMechanisms: [
      "Hyperinsulinemia locking fatty acids inside adipocyte storage cells",
      "Low Free T3 slowing cellular basal metabolic rate (BMR)",
      "Elevated evening cortisol promoting visceral intra-abdominal fat storage",
      "High androgen burden and low SHBG in PCOS",
    ],
    recommendedLabsToRequest: [
      "Fasting Insulin & HOMA-IR Score",
      "Full Thyroid Panel (Free T3 / Free T4)",
      "Total & Free Testosterone with SHBG",
      "ApoB & Fasting Lipid Panel",
    ],
    matchingConditions: [
      {
        title: "PCOS & Insulin Resistance",
        slug: "pcos-insulin-resistance",
        reason:
          "High circulating insulin blocks lipolysis and promotes midsection fat storage.",
      },
      {
        title: "Metabolic Syndrome & Prediabetes",
        slug: "metabolic-syndrome-prediabetes",
        reason: "Cellular insulin resistance impairs energy partitioning.",
      },
    ],
    faqs: [
      {
        question:
          "Why am I gaining weight despite eating 1,200 calories and exercising daily?",
        answer:
          "Severe calorie restriction combined with intense exercise in the setting of hypothyroidism or elevated cortisol drops baseline metabolic rate further and elevates cortisol, causing your body to conserve energy and hold onto visceral fat.",
      },
    ],
    citations: [
      {
        id: "c16",
        authors: "Ludwig DS, et al.",
        title:
          "The Carbohydrate-Insulin Model of Obesity: Beyond Calories In, Calories Out",
        journal: "American Journal of Clinical Nutrition",
        year: 2021,
      },
    ],
    lastReviewed: "2025-02-01",
  },
  {
    slug: "chronic-bloating-digestive",
    title: "Chronic Stomach Bloating & Digestive Distress",
    tagline:
      "Distinguishing IBS from SIBO, Food Intolerances, and Motility Deficits",
    summary:
      "Frequent post-meal stomach swelling is not normal. Learn how small intestinal bacterial overgrowth and gut dysbiosis are diagnosed and successfully treated.",
    primaryKeyword: "chronic stomach bloating medical doctor Chicago",
    physiologicalMechanisms: [
      "Bacterial fermentation of carbohydrates in the small intestine (SIBO)",
      "Disrupted Migrating Motor Complex (MMC) intestinal clearing waves",
      "Low gastric acid secretion impairing protein digestion",
      "Intestinal mucosal barrier disruption and food immune activation",
    ],
    recommendedLabsToRequest: [
      "Lactulose Hydrogen & Methane Breath Test",
      "Stool Calprotectin & Microbiome DNA Panel",
      "Celiac Disease Serology Panel (tTG-IgA)",
    ],
    matchingConditions: [
      {
        title: "Gut Dysbiosis & SIBO",
        slug: "gut-dysbiosis-sibo",
        reason:
          "Bacterial overgrowth in small intestine creates rapid gas production.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between IBS and SIBO?",
        answer:
          "Irritable Bowel Syndrome (IBS) is an umbrella descriptive diagnosis. Clinical studies reveal that up to 60% of patients carrying an 'IBS' diagnosis actually have Small Intestinal Bacterial Overgrowth (SIBO), which can be identified via a simple breath test and cured.",
      },
    ],
    citations: [
      {
        id: "c17",
        authors: "Rezaie A, et al.",
        title:
          "Hydrogen and Methane-Based Breath Testing in Gastrointestinal Disorders",
        journal: "American Journal of Gastroenterology",
        year: 2017,
      },
    ],
    lastReviewed: "2025-02-01",
  },
  {
    slug: "sleep-disturbances-insomnia",
    title: "Sleep Disturbances & Early Morning Awakening",
    tagline:
      "Evaluating Nocturnal Cortisol Spikes, Estrogen Drop, and Sleep Architecture",
    summary:
      "Waking up at 3 AM or spending hours tossing in bed points to circadian rhythm misalignment, nocturnal reactive hypoglycemia, or perimenopausal progesterone decline.",
    primaryKeyword: "perimenopause insomnia treatment doctor Chicago",
    physiologicalMechanisms: [
      "Progesterone loss reducing central nervous system GABA brain relaxation",
      "Nocturnal blood sugar drops triggering adrenaline/cortisol awakening spikes",
      "Desensitized hypothalamic temperature regulation causing night sweats",
    ],
    recommendedLabsToRequest: [
      "4-Point Cortisol Diurnal Salivary Curve",
      "Day 19–21 Serum Progesterone",
      "Continuous Glucose Monitor (CGM) or Overnight Fasting Glucose",
    ],
    matchingConditions: [
      {
        title: "Perimenopause Transition",
        slug: "perimenopause-hormonal-transition",
        reason:
          "Declining progesterone deprives brain of key calming GABA neurotransmission.",
      },
      {
        title: "Chronic Fatigue & HPA Dysfunction",
        slug: "chronic-fatigue-adrenal-dysfunction",
        reason:
          "Circadian cortisol rhythm disruption breaks normal sleep architecture.",
      },
    ],
    faqs: [
      {
        question: "Why do sleep medications fail to fix my 3 AM awakening?",
        answer:
          "Sedative sleep medications induce pharmaceutical unconsciousness but do not fix the underlying nocturnal cortisol surge or progesterone deficit that triggers biological awakening.",
      },
    ],
    citations: [
      {
        id: "c18",
        authors: "Kovachy VN, et al.",
        title: "Hormone Replacement and Sleep Architecture in Midlife Women",
        journal: "Sleep Medicine Reviews",
        year: 2021,
      },
    ],
    lastReviewed: "2025-02-01",
  },
]

export const BLOG_POSTS_DATA: BlogPostData[] = [
  {
    slug: "normal-thyroid-labs-still-tired",
    title: "Why 'Normal' Lab Results Don't Always Mean Optimal Thyroid Health",
    primaryKeyword: "normal thyroid labs still tired Chicago",
    summary:
      "Standard screening panels test TSH, but peripheral hormone conversion, reverse T3 blockage, and anti-TPO antibodies are often overlooked. Here is how an internist evaluates full thyroid function.",
    readTime: "7 min read",
    publishedDate: "2025-01-15",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "The Limitation of Standard TSH Screening",
        content:
          "In conventional high-volume primary care, thyroid function is screened almost exclusively using Thyroid-Stimulating Hormone (TSH). TSH is a pituitary signal, not a direct measurement of active thyroid hormone in your tissues. If your pituitary gland is content, but your liver or gut struggles to convert inactive T4 into active Free T3, your TSH may appear completely 'normal' while your cells remain deprived of thyroid energy.",
      },
      {
        h2Title: "Understanding Free T3 vs Free T4 Conversion",
        content:
          "The thyroid gland produces predominantly T4 (thyroxine), which is a pro-hormone. For your brain, heart, and metabolic tissues to generate energy, T4 must lose an iodine atom to become Free T3 (triiodothyronine). Factors such as chronic stress, elevated cortisol, gut dysbiosis, and micronutrient deficiencies (selenium, zinc, iron) impair this conversion enzyme, leaving you exhausted despite normal T4 levels.",
      },
      {
        h2Title: "The Blocking Action of Reverse T3",
        content:
          "Under conditions of physiological stress or severe calorie restriction, the body diverts T4 conversion into Reverse T3 (rT3)—an inactive isomer that sits on cellular thyroid receptors and blocks active Free T3 from binding. Ordering a Reverse T3 lab marker is essential when evaluating patients who present with classic hypothyroid symptoms but 'normal' standard lab results.",
      },
      {
        h2Title: "Detecting Silent Autoimmunity (Anti-TPO Antibodies)",
        content:
          "Hashimoto's thyroiditis is the leading cause of hypothyroidism in developed countries. Thyroid Peroxidase (TPO) antibodies can be elevated for years before TSH rises out of reference range. Identifying early autoimmune activity allows us to introduce inflammatory and dietary support before extensive thyroid tissue destruction occurs.",
      },
      {
        h2Title: "Optimal Clinical Targets vs Laboratory Averages",
        content:
          "Laboratory reference ranges are population averages that include sick individuals. In our practice, we aim for optimal physiological targets: Free T3 in the upper 50th percentile of the reference range, Reverse T3 under 15 ng/dL, and Thyroid Antibodies as close to zero as possible.",
      },
    ],
    citations: [
      {
        id: "b1",
        authors: "Jonklaas J, et al.",
        title: "Guidelines for the treatment of hypothyroidism",
        journal: "Thyroid",
        year: 2014,
      },
    ],
    closingCta: {
      headline: "Exhausted Despite 'Normal' Thyroid Blood Work?",
      description:
        "Schedule a comprehensive thyroid evaluation with Dr. Ameena Patel to test full Free T3, Reverse T3, and antibody cascades.",
      buttonText: "Schedule Thyroid Consultation",
      buttonHref: "/booking",
    },
    relatedConditionSlug: "hashimotos-hypothyroidism",
  },
  {
    slug: "perimenopause-hrt-evidence-based-guide",
    title:
      "Navigating Perimenopause: An Evidence-Based Guide to Bioidentical Hormone Replacement",
    primaryKeyword: "perimenopause HRT guide evidence based",
    summary:
      "Demystifying the WHI trial misconceptions, comparing transdermal bioidentical estradiol to older synthetic compounds, and reviewing bone and heart protection benefits.",
    readTime: "9 min read",
    publishedDate: "2025-01-20",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Decoding Early Perimenopausal Symptoms",
        content:
          "Perimenopause is not a sudden cliff; it is a 4-to-10 year neuroendocrine transition characterized by dramatic fluctuations in progesterone and estradiol. Women often experience severe sleep fragmentation, unexplained mid-night anxiety, mood shifts, and brain fog years before hot flashes or cycle cessation occur.",
      },
      {
        h2Title: "What the 2002 WHI Study Got Wrong",
        content:
          "The famous Women's Health Initiative (WHI) study frightened a generation of women away from hormone therapy. However, modern re-analyses show that the study evaluated older women (average age 63) using oral synthetic conjugated equine estrogens and medroxyprogesterone acetate. For women initiating HRT near menopause onset (ages 40–59), the cardiovascular, bone density, and mortality benefits far outweigh potential risks.",
      },
      {
        h2Title: "Synthetic vs Bioidentical Hormones",
        content:
          "Bioidentical 17beta-estradiol and oral micronized progesterone possess the exact molecular structure produced naturally by human ovaries. Administering bioidentical estradiol transdermally (via patch or gel) bypasses first-pass liver metabolism, avoiding the elevated venous blood clot risk associated with older oral synthetic estrogens.",
      },
      {
        h2Title: "Cardiovascular and Bone Density Protection",
        content:
          "Estrogen receptors are located throughout blood vessel walls and bone remodeling units. Initiating transdermal BHRT during the perimenopausal window maintains vascular compliance, preserves lipid subfractions, and prevents rapid trabecular bone loss.",
      },
    ],
    citations: [
      {
        id: "b2",
        authors: "NAMS Position Statement Board",
        title: "The 2022 hormone therapy position statement",
        journal: "Menopause",
        year: 2022,
      },
    ],
    closingCta: {
      headline: "Ready for Clear, Evidence-Based Hormonal Guidance?",
      description:
        "Book a 60-minute perimenopause consultation to discuss personalized BHRT options.",
      buttonText: "Book Perimenopause Consultation",
      buttonHref: "/booking",
    },
    relatedConditionSlug: "perimenopause-hormonal-transition",
  },
  {
    slug: "pcos-insulin-resistance-solutions",
    title:
      "Insulin Resistance in PCOS: Symptoms, Labs, and Clinical Solutions Beyond Metformin",
    primaryKeyword: "PCOS insulin resistance treatment options",
    summary:
      "Discover how compensatory hyperinsulinemia drives ovarian androgen production, why fasting insulin matters more than HbA1c, and how inositol and nutrition reverse symptoms.",
    readTime: "8 min read",
    publishedDate: "2025-01-25",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "How Insulin Drives Ovarian Androgen Secretion",
        content:
          "In PCOS, the ovaries remain paradoxically sensitive to high circulating insulin levels. When pancreas tissue overproduces insulin to manage carbohydrate loads, insulin acts directly on ovarian theca cells to stimulate excessive testosterone production, leading to acne, hirsutism, and anovulatory cycles.",
      },
      {
        h2Title: "Fasting Insulin vs HbA1c Testing",
        content:
          "HbA1c measures average blood glucose over 3 months, but glucose remains normal as long as your pancreas works overtime producing high insulin volumes. Testing Fasting Insulin identifies metabolic dysfunction decades before prediabetes manifests.",
      },
      {
        h2Title: "Myo-Inositol vs Metformin Evidence",
        content:
          "Clinical trials comparing a 40:1 ratio of Myo-Inositol to D-Chiro-Inositol against Metformin show comparable improvements in ovulatory frequency and insulin sensitivity with significantly fewer gastrointestinal side effects.",
      },
    ],
    citations: [
      {
        id: "b3",
        authors: "Teede HJ, et al.",
        title: "Recommendations for assessment and management of PCOS",
        journal: "Fertility & Sterility",
        year: 2023,
      },
    ],
    closingCta: {
      headline: "Take Control of PCOS Metabolic Drivers",
      description:
        "Schedule an integrative PCOS diagnostic consultation with Dr. Ameena Patel.",
      buttonText: "Schedule PCOS Evaluation",
      buttonHref: "/booking",
    },
    relatedConditionSlug: "pcos-insulin-resistance",
  },
  {
    slug: "gut-brain-axis-brain-fog-bloating",
    title:
      "The Gut-Brain Axis: How Microbiome Health Influences Brain Fog and Mood",
    primaryKeyword: "gut brain axis brain fog bloating",
    summary:
      "Intestinal hyperpermeability allows bacterial lipopolysaccharides to enter circulation, triggering low-grade neuroinflammation. Here is how an internist treats the gut-brain axis.",
    readTime: "7 min read",
    publishedDate: "2025-01-28",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Understanding Intestinal Permeability and LPS Translocation",
        content:
          "The intestinal lining is a single-cell barrier held together by tight junction proteins (zonulin and occludin). When this barrier breaks down due to dysbiosis or chronic stress, bacterial endotoxins called Lipopolysaccharides (LPS) leak into the bloodstream, triggering systemic inflammatory signaling.",
      },
      {
        h2Title: "How Cytokines Cross the Blood-Brain Barrier",
        content:
          "Circulating inflammatory cytokines cross the blood-brain barrier and activate microglial cells in the central nervous system. This microglial activation creates neuroinflammation, manifesting subjectively as brain fog, memory sluggishness, and low mood.",
      },
      {
        h2Title: "Targeted 4R Restoration for Gut-Brain Healing",
        content:
          "By systematically identifying bacterial overgrowth (SIBO) via lactulose breath testing and repairing mucosal tight junctions with zinc carnosine and immunoglobulins, we resolve both gastrointestinal bloating and mental fatigue.",
      },
    ],
    citations: [
      {
        id: "b4",
        authors: "Cryan JF, et al.",
        title: "The Microbiota-Gut-Brain Axis",
        journal: "Physiological Reviews",
        year: 2019,
      },
    ],
    closingCta: {
      headline: "Clear Your Brain Fog by Healing Your Gut",
      description:
        "Book a gastrointestinal diagnostic consultation with Dr. Ameena Patel.",
      buttonText: "Schedule Gut Diagnostic Consult",
      buttonHref: "/booking",
    },
    relatedConditionSlug: "gut-dysbiosis-sibo",
  },
  {
    slug: "chronic-fatigue-differential-diagnosis",
    title:
      "Chronic Fatigue Differential Diagnosis: What Your Internist Should Look For",
    primaryKeyword: "chronic fatigue differential diagnosis MD",
    summary:
      "Fatigue requires systematic elimination of anemia, thyroid conversion deficits, HPA axis blunting, latent viral strains, and occult autoimmune markers.",
    readTime: "8 min read",
    publishedDate: "2025-02-01",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Ruling Out Hidden Iron Ferritin Deficiencies",
        content:
          "Standard CBC blood tests flag anemia when hemoglobin drops, but tissue ferritin stores can be depleted long before hemoglobin falls. Ferritin levels below 30 ng/mL severely compromise mitochondrial iron-dependent cytochromes, causing severe physical exhaustion.",
      },
      {
        h2Title: "Mapping Diurnal Cortisol and Circadian Rhythms",
        content:
          "Salivary 4-point cortisol testing measures your daily adrenal cortisol curve. A flat morning cortisol response confirms HPA axis blunting, explaining why morning awakening feels like climbing a mountain.",
      },
    ],
    citations: [
      {
        id: "b5",
        authors: "Institute of Medicine Committee",
        title: "Redefining an Illness: ME/CFS",
        journal: "National Academies Press",
        year: 2015,
      },
    ],
    closingCta: {
      headline: "Get a True Systematic Differential Diagnosis for Fatigue",
      description:
        "Book an unhurried 60-minute internal medicine consultation.",
      buttonText: "Book Comprehensive Physical",
      buttonHref: "/booking",
    },
    relatedConditionSlug: "chronic-fatigue-adrenal-dysfunction",
  },
  {
    slug: "apob-advanced-lipid-testing-cardiovascular",
    title:
      "Understanding ApoB and Advanced Lipid Testing for Cardiovascular Prevention",
    primaryKeyword: "advanced lipid panel ApoB cardiovascular risk",
    summary:
      "Why measuring total cholesterol is outdated. Learn why Apolipoprotein B (ApoB) particle counts provide superior accuracy for vascular plaque prevention.",
    readTime: "7 min read",
    publishedDate: "2025-02-02",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Standard Cholesterol vs ApoB Particle Count",
        content:
          "Standard lipid panels measure the mass of cholesterol inside lipoproteins (LDL-C). However, vascular plaque creation depends on the total number of atherogenic particles passing through the endothelial wall. Every atherogenic particle carries exactly one ApoB molecule, making ApoB the true gold standard measure.",
      },
    ],
    citations: [
      {
        id: "b6",
        authors: "ACC/AHA Task Force",
        title: "Management of Blood Cholesterol",
        journal: "Circulation",
        year: 2019,
      },
    ],
    closingCta: {
      headline: "Optimize Your Long-Term Vascular Health",
      description:
        "Schedule an advanced cardiovascular and lipid risk consultation.",
      buttonText: "Schedule Cardio Assessment",
      buttonHref: "/booking",
    },
  },
  {
    slug: "cortisol-impact-blood-sugar-thyroid",
    title:
      "How Chronic Cortisol Elevation Disrupts Blood Sugar and Thyroid Function",
    primaryKeyword: "cortisol impact on blood sugar thyroid",
    summary:
      "Unpacking the physiological chain reaction between stress, hepatic gluconeogenesis, impaired Free T3 conversion, and abdominal visceral fat accumulation.",
    readTime: "7 min read",
    publishedDate: "2025-02-03",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Cortisol and Hepatic Glucose Release",
        content:
          "Cortisol is a gluconeogenic hormone designed to raise blood glucose during acute danger. When stress becomes chronic, elevated cortisol signals your liver to pump continuous glucose into the bloodstream, forcing your pancreas to release excess insulin.",
      },
    ],
    citations: [
      {
        id: "b7",
        authors: "Sapolsky RM, et al.",
        title: "How Glucocorticoids Influence Stress Responses",
        journal: "Endocrine Reviews",
        year: 2000,
      },
    ],
    closingCta: {
      headline: "Restore Your Cortisol and Metabolic Balance",
      description:
        "Book an integrative hormonal evaluation with Dr. Ameena Patel.",
      buttonText: "Schedule Evaluation",
      buttonHref: "/booking",
    },
  },
  {
    slug: "sibo-breath-testing-treatment-protocol",
    title:
      "Small Intestinal Bacterial Overgrowth (SIBO): Breath Testing & Treatment Protocols",
    primaryKeyword: "SIBO breath testing treatment protocol",
    summary:
      "Comparing lactulose breath test interpretation, Rifaximin non-systemic antibiotic therapy, herbal antimicrobials, and preventing motility relapse.",
    readTime: "8 min read",
    publishedDate: "2025-02-04",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Methane vs Hydrogen SIBO Subtypes",
        content:
          "Hydrogen-dominant SIBO typically presents with rapid transit and diarrhea, while Methane overgrowth (IMO) slows intestinal motility, leading to severe chronic constipation.",
      },
    ],
    citations: [
      {
        id: "b8",
        authors: "Pimentel M, et al.",
        title: "ACG Clinical Guideline on SIBO",
        journal: "American Journal of Gastroenterology",
        year: 2020,
      },
    ],
    closingCta: {
      headline: "Tired of Unresolved Bloating?",
      description:
        "Schedule a specialized SIBO breath test and GI consultation.",
      buttonText: "Book GI Consultation",
      buttonHref: "/booking",
    },
  },
  {
    slug: "prepare-for-first-integrative-medical-visit",
    title:
      "Preparing for Your First Integrative Internal Medicine Consultation: A Patient Guide",
    primaryKeyword: "prepare for integrative medicine doctor visit",
    summary:
      "How to organize your medical timeline, gather previous blood work, understand insurance superbills, and get the most out of your 60-minute visit.",
    readTime: "6 min read",
    publishedDate: "2025-02-05",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Organizing Your Health Timeline",
        content:
          "Before your 60-minute visit, write down a chronological timeline of when your major symptoms began, major life stressors, antibiotic courses, and previous treatment responses.",
      },
    ],
    citations: [
      {
        id: "b9",
        authors: "American College of Physicians",
        title: "Patient-Centered Consultation Guidelines",
        journal: "Annals of Internal Medicine",
        year: 2022,
      },
    ],
    closingCta: {
      headline: "Experience Patient-Centered Internal Medicine",
      description: "Reserve your 60-minute consultation with Dr. Ameena Patel.",
      buttonText: "Schedule Initial Visit",
      buttonHref: "/booking",
    },
  },
  {
    slug: "nutrient-deficiencies-mimicking-anxiety",
    title: "Nutrient Deficiencies that Mimic Anxiety and Mood Disorders",
    primaryKeyword: "vitamin deficiencies causing fatigue anxiety",
    summary:
      "How low ferritin, Vitamin D receptor blunting, B12 methylation deficits, and magnesium depletion alter neurotransmission and resemble psychological anxiety.",
    readTime: "7 min read",
    publishedDate: "2025-02-06",
    lastReviewedDate: "2025-02-01",
    author: {
      name: "Dr. Ameena Patel",
      title: "Board-Certified Internal Medicine Physician",
      credentials: "MD, FACP",
    },
    sections: [
      {
        h2Title: "Ferritin Stores and Dopamine/Serotonin Synthesis",
        content:
          "Iron is an essential cofactor for tyrosine hydroxylase, the rate-limiting enzyme in dopamine and serotonin synthesis. Depleted ferritin stores manifest as anxiety, restless sleep, and brain fog.",
      },
    ],
    citations: [
      {
        id: "b10",
        authors: "Benton D, et al.",
        title: "Micronutrients and Mood",
        journal: "Nutrients",
        year: 2020,
      },
    ],
    closingCta: {
      headline: "Uncover Biological Drivers of Mood & Energy Shifts",
      description: "Schedule a comprehensive diagnostic evaluation today.",
      buttonText: "Book Consult",
      buttonHref: "/booking",
    },
  },
]

export const PRESS_KIT_DATA = {
  physicianName: "Dr. Ameena Patel, MD, FACP",
  title:
    "Board-Certified Internal Medicine Physician & Integrative Health Expert",
  shortBio:
    "Dr. Ameena Patel, MD, FACP is a board-certified internal medicine specialist with over 15 years of clinical experience in integrative women's health, hormonal evaluation, and metabolic disease prevention. She is a recognized medical speaker, quotable authority for health journalism, and advocate for unhurried 60-minute diagnostic care.",
  fullBio:
    "Dr. Ameena Patel completed her medical training and internal medicine residency with high honors, serving as chief resident before pursuing fellowship training in integrative medicine and advanced endocrine evaluation. She is a Fellow of the American College of Physicians (FACP) and active member of the Endocrine Society and The Menopause Society. Dr. Patel frequently speaks at medical conferences on the topics of thyroid antibody optimization, bioidentical hormone safety, and reversing metabolic syndrome through root-cause diagnostics.",
  speakingTopics: [
    "Beyond TSH: Comprehensive Thyroid Antibody & Free T3 Clinical Diagnostics",
    "Evidence-Based Bioidentical Hormone Replacement in Perimenopause",
    "Reversing Insulin Resistance in PCOS: Clinical & Metabolic Approaches",
    "The Gut-Brain Axis in Internal Medicine: Treating SIBO and Neuroinflammation",
    "The 60-Minute Consultation Model: Restoring Diagnostic Rigor in Primary Care",
  ],
  mediaAppearances: [
    {
      outlet: "Internal Medicine News Journal",
      topic: "Integrating Free T3 and Cortisol Cascades in Primary Care",
      date: "2024",
    },
    {
      outlet: "Women's Metabolic Health Summit",
      topic: "Keynote Address: Bioidentical Estradiol Safety in Midlife",
      date: "2024",
    },
    {
      outlet: "Chicago Medical Society Journal",
      topic: "Addressing Patient Dissatisfaction in High-Volume Primary Care",
      date: "2023",
    },
  ],
  mediaInquiryInstructions:
    "For press interviews, podcast appearances, keynote speaking requests, or expert medical commentary, please contact press@doctorameena.com or submit the press inquiry form below. Response time for credentialed journalists is within 24 business hours.",
}
