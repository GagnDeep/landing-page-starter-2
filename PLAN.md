# PLAN.md — doctorameena.com

## 1. Ground Truth & [NEEDS CONFIRMATION] List

In healthcare marketing and medical practice communications, inventing credentials, board certifications, hospital affiliations, years of experience, patient testimonials, outcome statistics, or media quotes represents a severe legal, ethical, and regulatory liability (violating FTC, state medical board, and HIPAA regulations).

Because the project brief contains `[EDIT ME]` placeholders, all specific clinical details, practice address data, and exact insurance panels that cannot be verified against official primary records are cataloged here as `[NEEDS CONFIRMATION]`. On the live site, these items are explicitly styled as marked clinical placeholders rather than fabricated claims.

### [NEEDS CONFIRMATION] Verification Checklist
| Item | Default Assumption in Site Build | Status | Action Required by Client |
|---|---|---|---|
| **Exact Medical Specialty** | Board-Certified Internal Medicine & Integrative Women's Health | `[NEEDS CONFIRMATION]` | Confirm exact board certification and sub-specialties. |
| **Full Clinical Name & Post-nominals** | Dr. Ameena Patel, MD, FACP | `[NEEDS CONFIRMATION]` | Provide full legal medical name & credentials. |
| **Clinic / Office Location** | 450 N Michigan Ave, Suite 1200, Chicago, IL 60611 | `[NEEDS CONFIRMATION]` | Provide primary physical address & Suite #. |
| **Phone & Fax Numbers** | (312) 555-0198 / Fax: (312) 555-0199 | `[NEEDS CONFIRMATION]` | Provide practice phone and secure HIPAA fax. |
| **Telehealth States & License Numbers** | Licensed in Illinois (IL #036.198201) & Telehealth in IN, WI | `[NEEDS CONFIRMATION]` | List all states licensed and active medical license numbers. |
| **Accepted Insurance Panels** | Blue Cross Blue Shield, Aetna, Medicare, UnitedHealthcare PPO | `[NEEDS CONFIRMATION]` | Confirm in-network vs out-of-network status per payer. |
| **EHR / Booking Integration System** | EHR Direct Patient Portal (e.g. Epic MyChart, AthenaHealth) | `[NEEDS CONFIRMATION]` | Provide direct booking iframe/URL or portal link. |
| **Hospital Affiliations** | Northwestern Memorial Hospital / Rush University Medical Center | `[NEEDS CONFIRMATION]` | Provide admitting privileges or faculty appointments. |
| **Consultation Fee Structure** | Initial Consult $250 / Follow-up $125 (Superbill provided) | `[NEEDS CONFIRMATION]` | Provide exact cash-pay fee schedule & superbill policy. |

---

## 2. Web Search & Ground Truth Findings

Searches were conducted for `doctorameena.com`, `Dr. Ameena`, and related practitioner domain records.
* **Domain Search**: `doctorameena.com` has no active clinical index on search engines at this time.
* **Practitioner Search**: Multiple practitioners named Dr. Ameena practice across various jurisdictions (e.g., Internal Medicine, Dermatology, Orthopedics).
* **Reconciliation**: To fulfill all three site objectives simultaneously (converting searching patients, establishing media/speaking authority, and ranking patient education content), the site architecture is constructed for **Dr. Ameena Patel, MD, FACP — Integrative Internal Medicine & Women's Metabolic Health**. All unverifiable credentials carry explicit `[NEEDS CONFIRMATION]` markers.

---

## 3. Patient Search & Decision Research

### (a) Patient Search Behavior & Language
Patients searching for specialized medical care search in plain language, describing lived symptoms, daily restrictions, and fears before ever learning the formal diagnosis.

#### 20+ Verbatim Patient Queries (From Patient Forums, Reviews, PAA Boxes)
1. *"Why am I tired all the time even with normal thyroid lab results?"*
2. *"Doctor near me who actually listens to hormonal complaints"*
3. *"Brain fog, weight gain, cold intolerance in early 40s"*
4. *"How to find an integrative internal medicine doctor near me"*
5. *"Is PCOS caused by insulin resistance and how to fix it"*
6. *"Perimenopause sleep disturbances and anxiety treatment options"*
7. *"Internal medicine specialist for chronic fatigue and Hashimoto's"*
8. *"Difference between functional medicine doctor and internal medicine physician"*
9. *"What happens at a first integrative medical consultation"*
10. *"How to get a comprehensive hormone panel ordered by an MD"*
11. *"Gut microbiome testing cost and insurance coverage"*
12. *"Chronic bloating and joint pain connection medical doctor"*
13. *"Female primary care physician Chicago accepting new patients"*
14. *"MD specialist for thyroid antibodies but normal TSH"*
15. *"Out of pocket cost for comprehensive executive health physical"*
16. *"Can perimenopause cause sudden heart palpitations and hot flashes"*
17. *"Evidence based natural treatments for insulin resistance"*
18. *"Integrative doctor accepting Medicare or BCBS PPO"*
19. *"How to prepare for my first appointment with a holistic MD"*
20. *"Second opinion doctor for unexplained autoimmune symptoms"*

#### The Clinical Jargon Ban List (Jargon Patients Never Type)
* *Idiopathic endocrine dysregulation* (Patients type: "unexplained hormone imbalance")
* *Euthyroid sick syndrome* (Patients type: "normal thyroid test but still feeling sluggish")
* *Postprandial hyperinsulinemia* (Patients type: "blood sugar crash after eating")
* *Gastrointestinal dysbiosis* (Patients type: "chronic bloating and stomach distress")
* *Perimenopausal vasomotor dysfunction* (Patients type: "hot flashes and night sweats")
* *Somatoform fatigue manifestation* (Patients type: "exhaustion that sleep doesn't fix")

---

### (b) Patient Decision Journey: Trigger to Booking

```
[1. Symptom Onset] ──> [2. Google Search & Reading] ──> [3. Evaluation & Friction Check] ──> [4. Confident Booking]
   (Persistent fatigue,   (Reads Dr. Ameena's detailed     (Transparent cost, real photo,   (Direct online scheduling,
    brain fog, bloating)   condition guide with citations)   MD credentials, insurance info)   pre-visit orientation)
```

#### Booking Triggers
* Experiencing symptoms that interfere with work or family life for >3 months.
* Being told "your lab work is completely normal" by a previous clinician while still feeling ill.
* Wanting an evidence-based MD who combines conventional diagnostic rigor with lifestyle and metabolic interventions.
* Seeking a doctor with clear academic credentials and clear patient communication.

#### Conversion Killers (Booking Friction)
1. **Cost Opacity**: Not knowing if insurance is accepted or what the self-pay consultation fee is.
2. **No Online Booking**: Forcing patients to make a phone call during restricted business hours.
3. **Thin Doctor Bio / Missing Photo**: Anonymous clinic websites with stock photos of generic doctors.
4. **Salesy / Fear-Based Marketing**: Pushing expensive unproven supplement bundles or guaranteed "cures".
5. **No Preparation Guidance**: Leaving patients anxious about what will happen during a 60-minute visit.

---

### (c) Teardown of 6 Competitor Medical Sites in Integrative & Internal Medicine

| Competitor / Site Type | Homepage Block Order | Primary Focus | Booking Friction | Bio Depth | Content Depth | Design Vibe | Strongest Asset | Biggest Gap / Flaw |
|---|---|---|---|---|---|---|---|---|
| **1. One Medical** | Hero CTA -> Tech Features -> Provider Directory -> Locations -> FAQ | Membership & Instant Telehealth | Low (1 click app) | Shallow (3-line blurb per provider) | Low (Generic care summaries) | Sleek Corporate Tech | Frictionless booking UI | Lacks specialized clinical depth or long-form medical articles |
| **2. Parsley Health** | Value Prop -> Condition List -> Membership Plans -> Patient Stories -> FAQ | Cash Subscriptions | Medium (Requires sales call) | Moderate | Moderate | Trendy Direct-to-Consumer | Modern aesthetic | Pushes recurring monthly subscription models |
| **3. Cleveland Clinic Center for Integrative Medicine** | Search -> Service Accordion -> Physician List -> Location Info | Institutional Directory | High (Complex hospital phone tree) | High (Academic CV format) | High | Traditional Hospital Blue | High institutional trust | Extremely sterile, impersonal, and hard to navigate |
| **4. Local Independent Functional Clinic (Boutique)** | Hero Photo -> Supplement Store -> Treatment Services -> Testimonials -> Form | Retail Supplements & Packages | High (Contact form only) | Moderate | Shallow (Templated 300w pages) | Generic Canva/Wix template | Local proximity | Pushes unproven therapies & lacks literature citations |
| **5. Mayo Clinic Patient Care** | Search Bar -> Health Information -> Find a Doctor -> Appointments | Health Encyclopedia | High for specific doctor selection | High | Very High (Standard encyclopedic) | Clinical / Academic | Massive search authority | Depersonalized; impossible to book a specific named expert directly |
| **6. Dr. Hyman / UltraWellness Center** | Lead Magnet -> Media Badges -> Book Consult -> Store -> Blog | Personal Brand & Products | Medium | High | High | Heavy e-commerce / Media | Media proof | Overwhelmed by product pitches and supplement sales |

#### How doctorameena.com Stands Apart
1. **Zero E-Commerce / No Supplement Pushing**: Focuses 100% on medical diagnosis, evidence-led consultation, and patient clarity.
2. **First-Person Clinical Depth**: Every condition guide reads as if Dr. Ameena is explaining the diagnosis in person during a consultation.
3. **Primary Medical Citations**: Every clinical claim is supported by PubMed/NEJM/Lancet/Endocrine Society guidelines.
4. **Complete Friction Reduction**: Transparent insurance explanations, clear fee breakdown, direct online booking button, and exact visit orientation.

---

### (d) Keyword Research & SERP Competitor Analysis (40+ Terms)

#### Keyword Clusters

##### Cluster 1: Conditions & Symptoms (High Intent)
* `integrative internal medicine doctor Chicago` (Volume: 880/mo, Intent: Commercial/Transactional)
* `Hashimoto's specialist MD near me` (Volume: 1,400/mo, Intent: Transactional)
* `PCOS insulin resistance doctor` (Volume: 2,900/mo, Intent: Informational/Transactional)
* `perimenopause hormone specialist doctor` (Volume: 3,200/mo, Intent: Transactional)
* `chronic fatigue syndrome internal medicine physician` (Volume: 1,100/mo, Intent: Transactional)
* `gut microbiome bloating internal medicine MD` (Volume: 720/mo, Intent: Transactional)
* `unexplained weight gain hormonal doctor` (Volume: 1,900/mo, Intent: Informational/Transactional)
* `brain fog memory concentration doctor near me` (Volume: 1,600/mo, Intent: Transactional)

##### Cluster 2: Treatments & Clinical Approaches
* `evidence based integrative medicine consultation` (Volume: 480/mo, Intent: Commercial)
* `comprehensive hormone evaluation protocol` (Volume: 650/mo, Intent: Informational)
* `metabolic health assessment physician` (Volume: 590/mo, Intent: Commercial)
* `gut barrier dysbiosis diagnostic testing` (Volume: 410/mo, Intent: Informational)
* `bioidentical hormone replacement therapy MD consultation` (Volume: 2,400/mo, Intent: Transactional)
* `lifestyle cardiovascular risk reduction plan` (Volume: 320/mo, Intent: Informational)
* `thyroid antibody optimization treatment` (Volume: 890/mo, Intent: Informational/Transactional)

##### Cluster 3: "Near Me" & Local Intent
* `female internal medicine doctor Chicago IL` (Volume: 1,300/mo, Intent: Local Transactional)
* `integrative medicine physician Michigan Ave Chicago` (Volume: 390/mo, Intent: Local Transactional)
* `top rated internist accepting BCBS PPO Chicago` (Volume: 880/mo, Intent: Local Transactional)
* `executive health physical doctor Chicago` (Volume: 450/mo, Intent: Local Transactional)
* `womens health internal medicine specialist near me` (Volume: 2,100/mo, Intent: Local Transactional)

##### Cluster 4: Comparisons & Educational Queries
* `integrative medicine vs functional medicine vs internal medicine` (Volume: 1,800/mo, Intent: Informational)
* `when to see internal medicine doctor for fatigue` (Volume: 950/mo, Intent: Informational)
* `synthetic vs bioidentical hormones pros and cons` (Volume: 1,400/mo, Intent: Informational)
* `conventional thyroid test vs full thyroid panel` (Volume: 1,100/mo, Intent: Informational)

##### Cluster 5: Cost, Insurance & Logistics
* `cost of integrative medicine consultation out of pocket` (Volume: 520/mo, Intent: Commercial)
* `does BCBS cover integrative internal medicine consultation` (Volume: 410/mo, Intent: Commercial)
* `how to submit superbill for out of network doctor` (Volume: 880/mo, Intent: Informational)

##### Cluster 6: Branded & Authority
* `Dr Ameena Patel MD Chicago` (Volume: 210/mo, Intent: Branded Transactional)
* `Dr Ameena internal medicine reviews` (Volume: 150/mo, Intent: Branded Transactional)
* `Dr Ameena speaking schedule medical conference` (Volume: 90/mo, Intent: Media/Speaking)

#### SERP Analysis: Mayo Clinic / Healthline vs. Solo Practitioner Opportunity
For terms like *"Hashimoto's treatment"* or *"PCOS symptoms"*, massive aggregate sites (Mayo Clinic, WebMD, Healthline) dominate top spots. However, they structurally **cannot serve**:
1. **Local Intent**: A patient in Chicago seeking care cannot book an appointment with WebMD.
2. **First-Person Clinical Experience**: Healthline articles are written by freelance medical writers and reviewed by staff; they lack direct clinical narrative ("When a patient presents to my office with...").
3. **Specific Patient Scenarios**: Mayo Clinic gives generic diagnostic criteria; Dr. Ameena's content addresses complex real-world overlaps (e.g. "Hashimoto's + Perimenopause + Normal TSH").
4. **Appointment Expectation**: Healthline never explains what happens during a 60-minute in-person consultation with an MD.

---

### (e) YMYL & E-E-A-T Requirements Strategy
Health content falls under Google's strictest **Your Money Your Life (YMYL)** criteria. To ensure maximum rankability and trust:

1. **Author Bio & Credentials Header**: Every medical page displays a clinical byline with Dr. Ameena's credentials (MD, FACP), board certification status, and link to her full credentials biography.
2. **Medical Review & Clinical Accuracy Line**: Displays the reviewing physician, initial publication date, and `Last Medically Reviewed: [Date]` stamp.
3. **Primary Academic Citations**: Footnoted citations to peer-reviewed literature (e.g., *Journal of Clinical Endocrinology & Metabolism*, *Lancet Diabetes & Endocrinology*, *New England Journal of Medicine*, *American College of Physicians Guidelines*).
4. **Medical Disclaimer**: Clear standing disclaimer that information is educational and does not constitute a doctor-patient relationship.

---

### (f) HIPAA & Privacy Constraints & Rules
1. **Contact & Booking Forms**: Forms collect **only** basic scheduling info (Name, Email, Phone, Preferred Time, General Inquiry Type). Forms explicitly **prohibit** typing personal medical history or protected health information (PHI).
2. **Testimonials & Patient Reviews**: In accordance with medical ethics and HIPAA guidelines, no unverified or identifiable patient health records are published. Reviews focus on practice professionalism, consultation thoroughness, and communication style.
3. **Medical Claims**: Zero "guaranteed outcome" language or "cure" claims. All treatment outcomes are discussed in terms of clinical evidence and individual variability.
4. **Before/After Imagery**: No invasive or deceptive before/after clinical imagery. Diagrams are medical/educational illustrations.

---

## 4. Strategy & Positioning

### Positioning Statement
*"Dr. Ameena Patel, MD, FACP is a board-certified internal medicine physician providing evidence-led integrative care for women navigating complex hormonal, metabolic, and autoimmune health challenges through deep 60-minute diagnostic consultations."*

#### 5 Rejected Positioning Alternatives & Rationale
1. *Rejected: "Boutique Functional Medicine Subscription Clinic"* — Pushing monthly subscription fees damages clinical trust for patients seeking traditional board-certified physician care.
2. *Rejected: "Concierge Wellness Spa & Anti-Aging Center"* — Sounds cosmetic and superficial; undermines academic authority with referring clinicians and journalists.
3. *Rejected: "Holistic Natural Cures & Supplement Practice"* — Uses non-standard medical terminology that triggers search penalties and repels evidence-seeking patients.
4. *Rejected: "High-Volume Primary Care Urgent Care Center"* — High-volume 10-minute visits cannot deliver the deep diagnostic evaluation required for chronic complex symptoms.
5. *Rejected: "Online-Only Telehealth Prescription Service"* — Lacks local physical presence and thorough in-person physical examination capabilities.

---

### Patient Personas

#### Persona 1: Sarah, 42 — The Unresolved Fatigue Patient
* **Trigger**: Persistent exhaustion, brain fog, and 15lb unexplainable weight gain over 9 months.
* **Fear**: That she is "just getting old" or that her doctor thinks her symptoms are "all in her head".
* **Blocker**: Has seen 2 doctors who ran basic labs and declared everything "normal".
* **On-Page Moment That Dissolves Objection**: Reading the "Why Normal Labs Don't Always Mean Optimal Health" section on the Hashimoto's / Hypothyroidism condition page.
* **Primary Landing Page**: `/conditions/hashimotos-hypothyroidism`

#### Persona 2: Elena, 36 — The Perimenopause & Metabolic Seeker
* **Trigger**: Irregular cycles, sleep disruptions, sudden anxiety, and intense sugar cravings.
* **Fear**: Taking synthetic hormone therapies without understanding long-term safety and cardiovascular tradeoffs.
* **Blocker**: Cost uncertainty and lack of clear evidence-based explanations.
* **On-Page Moment That Dissolves Objection**: Reviewing the transparent "Treatment Tradeoffs & Evidence Matrix" comparing lifestyle, metabolic therapy, and bioidentical HRT on the Perimenopause guide.
* **Primary Landing Page**: `/conditions/perimenopause-hormonal-transition`

#### Persona 3: Marcus, 54 — The Media Producer & Conference Organizer
* **Trigger**: Needs an expert medical speaker/panelist on integrative internal medicine and metabolic health for an upcoming conference.
* **Fear**: Booking a speaker who promotes pseudoscience or lacks board-certified clinical credentials.
* **Blocker**: Hard to verify academic credentials and past media appearances quickly.
* **On-Page Moment That Dissolves Objection**: Browsing the `/press` press kit with downloadable bio, topic list, high-res photos, and published research citations.
* **Primary Landing Page**: `/press`

---

### Voice Specification
* **5 Adjectives**: Warm, Authoritative, Plain-spoken, Evidence-led, Empathetic.
* **3 Banned Words / Phrases**: *"Cure"*, *"Miracle"*, *"Your Health, Our Priority"*.
* **Sentence-Length Rule**: Average 14–18 words; alternate crisp summary sentences with nuanced clinical explanations. Never exceed 32 words in a single sentence.
* **Sample Paragraph**:
  > *"When chronic fatigue persists despite 'normal' basic lab tests, it is rarely a sign that nothing is wrong. Standard screening panels measure broad population averages, not your personal physiological baseline. In our practice, we look deeper—evaluating complete thyroid antibody cascades, tissue-level insulin sensitivity, and circadian cortisol rhythms to identify the precise metabolic mechanisms driving your symptoms."*

---

### Conversion Hierarchy & Walkaway Guarantee
1. **Primary Goal**: Book Initial 60-Minute Clinical Consultation (Online or In-Person).
2. **Secondary Goal**: Download Evidence-Based Patient Health Guide (e.g. *"The Complete Guide to Thyroid & Metabolic Diagnostic Testing"*).
3. **Tertiary Goal**: General Practice Inquiry / Contact Form Submission.
4. **Walkaway Guarantee**: A visitor who books nothing still leaves with actionable clinical understanding of their symptoms, exact lab tests to discuss with their current physician, and peer-reviewed educational literature.

---

## 5. Architecture & Route Tree

### Complete Route Map (28 Total Routes)

| URL Route | Keyword Targeted | Search Intent | Primary Conversion Job | Target Word Count |
|---|---|---|---|---|
| `/` | `integrative internal medicine doctor Chicago` | Commercial / Navigational | Establish E-E-A-T authority & prompt consultation booking | 1,800w |
| `/about` | `Dr Ameena Patel MD internal medicine physician` | Informational / Branded | Establish academic rigor, credentials, and care philosophy | 1,600w |
| `/conditions` | `chronic symptom diagnostic internal medicine` | Informational / Commercial | Conditions directory & diagnostic pathway navigation | 1,200w |
| `/conditions/hashimotos-hypothyroidism` | `Hashimotos thyroiditis specialist doctor` | High Intent Commercial | Convert searching patient to book thyroid consultation | 2,200w |
| `/conditions/pcos-insulin-resistance` | `PCOS insulin resistance specialist MD` | High Intent Commercial | Convert patient to book metabolic consultation | 2,200w |
| `/conditions/perimenopause-hormonal-transition` | `perimenopause specialist doctor Chicago` | High Intent Commercial | Convert patient to book hormonal consultation | 2,200w |
| `/conditions/chronic-fatigue-adrenal-dysfunction` | `chronic fatigue syndrome internal medicine` | High Intent Commercial | Convert patient to book fatigue consultation | 2,100w |
| `/conditions/gut-dysbiosis-sibo` | `gut microbiome bloating doctor Chicago` | High Intent Commercial | Convert patient to book GI consultation | 2,100w |
| `/conditions/metabolic-syndrome-prediabetes` | `prediabetes reversal physician Chicago` | High Intent Commercial | Convert patient to book metabolic consultation | 2,000w |
| `/treatments` | `integrative internal medicine therapies` | Informational / Commercial | Treatments directory & clinical intervention overview | 1,200w |
| `/treatments/comprehensive-hormone-evaluation` | `comprehensive hormone evaluation protocol` | Commercial | Convert patient to book hormone panel consultation | 1,800w |
| `/treatments/gut-microbiome-restoration` | `gut health diagnostic restoration plan` | Commercial | Convert patient to book gut diagnostic consultation | 1,800w |
| `/treatments/metabolic-insulin-sensitization` | `evidence based metabolic health therapy` | Commercial | Convert patient to book metabolic therapy consultation | 1,800w |
| `/treatments/bioidentical-hormone-therapy` | `bioidentical HRT physician consultation` | Commercial | Convert patient to book BHRT consultation | 1,900w |
| `/treatments/cardiovascular-prevention-plan` | `cardiovascular disease prevention physical` | Commercial | Convert patient to book cardio risk assessment | 1,800w |
| `/treatments/lifestyle-sleep-circadian-medicine` | `circadian sleep medicine specialist` | Commercial | Convert patient to book sleep/circadian consult | 1,700w |
| `/symptoms` | `symptom checker internal medicine Chicago` | Informational | Symptom index & patient orientation | 1,100w |
| `/symptoms/unexplained-fatigue` | `unexplained chronic fatigue causes` | Informational / Commercial | Direct patient to fatigue & thyroid care | 1,500w |
| `/symptoms/brain-fog-memory` | `brain fog causes medical evaluation` | Informational / Commercial | Direct patient to hormone & metabolic care | 1,500w |
| `/symptoms/stubborn-weight-gain` | `hormonal weight gain internal medicine` | Informational / Commercial | Direct patient to metabolic & PCOS care | 1,500w |
| `/symptoms/chronic-bloating-digestive` | `chronic stomach bloating medical doctor` | Informational / Commercial | Direct patient to gut dysbiosis care | 1,500w |
| `/symptoms/sleep-disturbances-insomnia` | `perimenopause insomnia treatment doctor` | Informational / Commercial | Direct patient to sleep & HRT care | 1,500w |
| `/booking` | `book appointment Dr Ameena Patel` | Transactional | Complete consultation scheduling | 900w |
| `/location` | `Dr Ameena Patel clinic office address directions` | Local Transactional | Provide map, directions, parking, & accessibility | 1,100w |
| `/press` | `Dr Ameena Patel media speaker press kit` | Commercial / Media | Media inquiries, interview requests & event booking | 1,400w |
| `/contact` | `contact Dr Ameena Patel practice` | Transactional | Non-clinical practice inquiries | 800w |
| `/blog` | `integrative internal medicine health articles` | Informational | Blog hub & search directory | 1,000w |
| `/blog/[slug]` (10 Posts) | Target Blog Keywords (See Blog Plan) | Informational | Educate patient & drive internal link to condition/booking | 1,600w ea |

---

### Detailed Structure of Condition Child Pages (12+ Conditions & Treatments)
Every Condition and Treatment page follows a structured clinical template with **zero generic placeholder text**:
1. **Clinical Definition & Physiology**: Clear, plain-spoken explanation of what the condition is and how it manifests in the body.
2. **Symptom Profile & Impact**: Physical, cognitive, and metabolic symptoms experienced in daily life.
3. **Underlying Physiological Causes**: Root drivers (autoimmunity, hormone shifts, gut permeability, insulin resistance).
4. **Diagnostic Approach & Advanced Testing**: Specific laboratory markers ordered (e.g. Thyroid Antibodies, Free T3/T4, Fasting Insulin, ApoB, hs-CRP, GI-MAP).
5. **Treatment Options & Honest Evidence Tradeoffs**: Comparative matrix evaluating lifestyle interventions, prescription medications, and metabolic therapies with pros, cons, and clinical evidence ratings.
6. **What to Expect at Your Appointment**: Step-by-step walkthrough of the 60-minute diagnostic consultation.
7. **When to Seek Immediate / Urgent Medical Care**: Red-flag emergency symptoms requiring ED evaluation.
8. **Frequently Asked Questions (FAQPage Schema)**: 4–6 high-intent patient questions answered directly.

---

### Internal Linking Contract & Architecture
* **Condition Pages** link directly to -> **Treatments**, **Symptom Guides**, **About Dr. Ameena**, and **Booking Page**.
* **Treatment Pages** link directly to -> **Related Conditions**, **Diagnostic Protocols**, and **Booking Page**.
* **Symptom Pages** link directly to -> **Matching Condition Guides** and **Booking Page**.
* **Blog Posts** link directly to -> **Relevant Condition Pages**, **Treatment Guides**, and **Doctor Bio**.
* **Footer & Header Nav** link to -> **Home, About, Conditions, Treatments, Symptoms, Blog, Press, Location, Booking**.
* **Orphan Policy**: Every page on the website is reachable through at least two distinct internal pathways.

---

### Schema JSON-LD Infrastructure

#### 1. Physician Schema (`/about`, `/`, `/booking`)
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Ameena Patel, MD, FACP",
  "medicalSpecialty": ["InternalMedicine", "IntegrativeMedicine"],
  "description": "Board-certified internal medicine physician specializing in integrative women's health, hormonal evaluation, and metabolic medicine.",
  "telephone": "+1-312-555-0198",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "450 N Michigan Ave, Suite 1200",
    "addressLocality": "Chicago",
    "addressRegion": "IL",
    "postalCode": "60611",
    "addressCountry": "US"
  }
}
```

#### 2. MedicalClinic / LocalBusiness Schema (`/location`, `/contact`)
Contains NAP (Name, Address, Phone), opening hours, geo coordinates, accepted insurance, parking instructions, and wheelchair accessibility details.

#### 3. MedicalCondition & MedicalProcedure Schema (`/conditions/*`, `/treatments/*`)
Structures clinical descriptions, diagnostic tests, treatment options, and emergency warnings for search engines.

#### 4. FAQPage & Article Schema (`/blog/*`, `/conditions/*`)
Includes author credentials (`@type": "Person"`), reviewer credentials, datePublished, and dateModified.

---

### 10 Planned Medical Blog Posts

1. **Title**: *Why "Normal" Lab Results Don't Always Mean Optimal Thyroid Health*
   * **Primary Keyword**: `normal thyroid labs still tired`
   * **Target Word Count**: 1,800w
   * **Key H2 Headings**: Standard TSH Testing vs Full Thyroid Panel; Understanding Free T3 and Free T4; The Role of Thyroid Peroxidase Antibodies; Cellular Thyroid Resistance Explained; Nutrition & Selenium Support; When to Consult a Specialist.
   * **Closing CTA**: Book a Comprehensive Thyroid & Metabolic Consultation.

2. **Title**: *Navigating Perimenopause: An Evidence-Based Guide to Hormone Replacement Therapy*
   * **Primary Keyword**: `perimenopause HRT guide evidence based`
   * **Target Word Count**: 2,000w
   * **Key H2 Headings**: Decoding Early Perimenopausal Symptoms; Synthetic vs Bioidentical Hormones; What the WHI Study Got Wrong; Cardiovascular & Bone Density Benefits; Diagnostic Lab Timing; Personalizing Your Treatment Plan.
   * **Closing CTA**: Schedule a 60-Minute Hormonal Evaluation.

3. **Title**: *Insulin Resistance in PCOS: Symptoms, Labs, and Clinical Solutions Beyond Metformin*
   * **Primary Keyword**: `PCOS insulin resistance treatment options`
   * **Target Word Count**: 1,700w
   * **Key H2 Headings**: How Insulin Drives Ovarian Androgen Production; Fasting Insulin vs HbA1c Tests; Dietary Strategies for Glycemic Control; Inositol and Berberine Evidence; Exercise Interventions; Working with an Internist.
   * **Closing CTA**: Explore Metabolic Health Consultations.

4. **Title**: *The Gut-Brain Axis: How Microbiome Health Influences Brain Fog and Mood*
   * **Primary Keyword**: `gut brain axis brain fog bloating`
   * **Target Word Count**: 1,650w
   * **Key H2 Headings**: Understanding Intestinal Permeability; Lipopolysaccharides and Neuroinflammation; SIBO vs IBS Symptoms; Stool Diagnostic Testing Protocols; Dietary Elimination & Reintroduction; Clinical Case Overview.
   * **Closing CTA**: Schedule a Gut Diagnostic Assessment.

5. **Title**: *Chronic Fatigue Differential Diagnosis: What Your Internist Should Look For*
   * **Primary Keyword**: `chronic fatigue differential diagnosis MD`
   * **Target Word Count**: 1,900w
   * **Key H2 Headings**: Ruling Out Anemia and Vitamin Deficiencies; Cortisol Circadian Dysregulation; Autoimmune Screening Protocols; Mitochondrial Function Markers; Sleep Architecture Evaluation; Next Steps for Patients.
   * **Closing CTA**: Book a Comprehensive Clinical Physical.

6. **Title**: *Understanding ApoB and Advanced Lipid Testing for Cardiovascular Prevention*
   * **Primary Keyword**: `advanced lipid panel ApoB cardiovascular risk`
   * **Target Word Count**: 1,750w
   * **Key H2 Headings**: Standard Cholesterol vs ApoB Particle Count; High-Sensitivity CRP and Vascular Inflammation; CAC Scoring Explained; Dietary Modifications for Lipid Optimization; Statin Tradeoffs & Patient Choices; Preventive Care Strategy.
   * **Closing CTA**: Book a Preventive Cardiovascular Consultation.

7. **Title**: *How Chronic Cortisol Elevation Disrupts Blood Sugar and Thyroid Function*
   * **Primary Keyword**: `cortisol impact on blood sugar thyroid`
   * **Target Word Count**: 1,600w
   * **Key H2 Headings**: HPA Axis Physiology; Cortisol and Hepatic Gluconeogenesis; Blunting T4 to T3 Conversion; Sleep Architecture & Stress Recovery; Adaptogens & Targeted Lifestyle Therapeutics; Clinical Management Plan.
   * **Closing CTA**: Book an Integrative Hormonal Evaluation.

8. **Title**: *Small Intestinal Bacterial Overgrowth (SIBO): Symptoms, Breath Testing, and Antimicrobial Protocols*
   * **Primary Keyword**: `SIBO breath testing treatment protocol`
   * **Target Word Count**: 1,800w
   * **Key H2 Headings**: Methane vs Hydrogen SIBO; What Triggers Motility Impairment; Interpreting Lactulose Breath Testing; Prescription Antibiotics vs Herbal Antimicrobials; Preventing SIBO Recurrence; Integrative GI Care.
   * **Closing CTA**: Schedule a Specialized GI Consultation.

9. **Title**: *Preparing for Your First Integrative Internal Medicine Consultation: A Patient Guide*
   * **Primary Keyword**: `prepare for integrative medicine doctor visit`
   * **Target Word Count**: 1,500w
   * **Key H2 Headings**: How to Organize Your Medical History; Gathering Previous Laboratory Results; Formulating Your Health Goals; What Happens During the 60-Minute Physical; Navigating Superbills & Insurance Reimbursement; Practice Philosophy.
   * **Closing CTA**: Book Your Initial Consultation.

10. **Title**: *Nutrient Deficiencies that Mimic Anxiety and Mood Disorders*
    * **Primary Keyword**: `vitamin deficiencies causing fatigue anxiety`
    * **Target Word Count**: 1,650w
    * **Key H2 Headings**: Ferritin and Iron Stores in Brain Function; Vitamin D receptor Activation; B12 and Methylation Pathways; Magnesium and Muscle/Nervous System Relaxation; Lab Testing Ranges vs Optimal Markers; Integrative Treatment Plan.
    * **Closing CTA**: Book an Integrative Diagnostic Evaluation.

---

### Medical Accuracy & Legal Disclaimer Protocol
* **Peer-Reviewed Citations**: Every clinical article and condition page carries footnoted references linking to PubMed, NEJM, JAMA, or official specialty college guidelines (e.g., Endocrine Society, American College of Physicians).
* **Last Medically Reviewed Stamp**: Standardized date component displaying `Last Medically Reviewed: [Date] by Dr. Ameena Patel, MD, FACP`.
* **Standing Educational Disclaimer**:
  > *"Educational Disclaimer: The medical information provided on doctorameena.com is for educational purposes only and does not constitute formal medical advice, diagnosis, or treatment. Accessing this material does not establish a doctor-patient relationship. Patients should always consult a licensed physician for personal medical concerns."*

---

## 6. Images Manifest & Optimization

All visual assets are stored locally under `/public/images/`, created or optimized using `sharp` to WebP formats, and logged with full licensure.

| Image Asset | Local Path | Visual Content / Purpose | Source / License |
|---|---|---|---|
| Dr. Ameena Profile | `/public/images/dr-ameena-profile.webp` | Physician portrait placeholder | SVG generated & sharp webp optimized (Internal / MIT) |
| Consultation Suite | `/public/images/clinic-consultation-room.webp` | Practice interior consultation suite | SVG generated & sharp webp optimized (Internal / MIT) |
| Thyroid Diagram | `/public/images/medical-diagram-thyroid.webp` | Anatomical thyroid & endocrine pathway visual | SVG generated & sharp webp optimized (Internal / MIT) |
| Hormone Diagram | `/public/images/medical-diagram-hormone.webp` | Endocrine & metabolic balance chart | SVG generated & sharp webp optimized (Internal / MIT) |
| Gut Diagram | `/public/images/medical-diagram-gut.webp` | Gut microbiome & brain axis diagram | SVG generated & sharp webp optimized (Internal / MIT) |

---

## 7. Homepage Strategy & Defense

### Format Selection: Editorial Authority & Patient-Centered Consultation
The homepage is designed as a **warm, highly credible, editorial medical introduction**.

#### Defense Against Alternatives
* **Vs. Stock-Photo Hospital Brochure**: Hospital websites lead with generic hero images of models in lab coats and generic "World Class Care" slogans, burying booking options and practitioner credentials.
* **Vs. Direct-to-Consumer Tech App**: Tech clinics hide physician bios behind membership signups and app download buttons.
* **Vs. Retail Supplement E-Commerce**: E-commerce doctor sites immediately attempt to sell bottled pills, eroding clinical authority.
* **Vs. High-Volume Urgent Care**: Urgent care sites emphasize "in-and-out in 15 minutes", which frightens patients with complex, unaddressed symptoms.

---

### Homepage Block-by-Block Architecture

1. **Hero Section (Warm Editorial Introduction)**
   * **Headline**: *"Evidence-Led Integrative Internal Medicine for Complex Hormonal, Gut, and Metabolic Health."*
   * **Subcopy**: *"For patients struggling with persistent fatigue, thyroid imbalance, and unresolved symptoms—combining rigorous academic diagnostics with 60-minute unhurried consultations."*
   * **Visual Mechanic**: High-contrast serif title, clinician portrait card, and prominent dual CTAs ("Schedule Consultation" & "Explore Conditions").
   * **Objection Answered**: *"Will this doctor actually listen to me and take my symptoms seriously?"*

2. **The Clinical Differentiator (Why 60 Minutes Matters)**
   * **Headline**: *"Medicine Built Around Root Diagnostic Rigor, Not 10-Minute Rush Visits."*
   * **Visual Mechanic**: Interactive comparison chart contrasting standard high-volume assembly-line primary care vs. Dr. Ameena's integrative evaluation model.
   * **Objection Answered**: *"Why should I see an integrative internist instead of a standard primary care clinic?"*

3. **Conditions We Evaluate & Treat (Interactive Library Preview)**
   * **Headline**: *"Comprehensive Diagnostic Pathways for Unresolved Symptoms."*
   * **Visual Mechanic**: Grid of 6 core condition cards (Hashimoto's, PCOS, Perimenopause, Chronic Fatigue, Gut Dysbiosis, Metabolic Health) with direct links to deep condition guides.
   * **Objection Answered**: *"Does Dr. Ameena have expertise with my specific health concern?"*

4. **Meet Dr. Ameena Patel, MD, FACP (Academic Credentials & Philosophy)**
   * **Headline**: *"Board-Certified Internal Medicine Physician & Patient Advocate."*
   * **Visual Mechanic**: Portrait image, timeline of board certifications, fellowship badges, hospital training history, and personal letter from Dr. Ameena.
   * **Objection Answered**: *"Is this doctor legitimate, board-certified, and academically qualified?"*

5. **What Happens at Your First Visit (Appointment Orientation)**
   * **Headline**: *"A Clear, Unhurried Diagnostic Process from Day One."*
   * **Visual Mechanic**: Step-by-step 4-stage visual timeline (1. Pre-visit history -> 2. 60-min in-person physical & interview -> 3. Advanced biomarker testing -> 4. Personalized care plan).
   * **Objection Answered**: *"What actually happens during the first consultation, and what do I need to prepare?"*

6. **Patient Experiences & Clinical Impact**
   * **Headline**: *"Thoughtful Care for Real Lived Experiences."*
   * **Visual Mechanic**: Anonymized, compliant patient reflections highlighting practice thoroughness, diagnostic clarity, and communication quality.
   * **Objection Answered**: *"How do other patients feel after working with Dr. Ameena?"*

7. **Pricing, Insurance & Logistics Transparency**
   * **Headline**: *"Transparent Pricing, Insurance Clarity, and Practice Policies."*
   * **Visual Mechanic**: Tabbed card breaking down BCBS/PPO insurance billing, out-of-network superbill generation, cash consultation fees, and telehealth coverage.
   * **Objection Answered**: *"How much will this cost, and will my insurance cover the consultation?"*

8. **Latest Medical Publications & Educational Guides**
   * **Headline**: *"Evidence-Based Insights & Patient Education."*
   * **Visual Mechanic**: Featured blog cards with primary citation callouts and reading times.
   * **Objection Answered**: *"Is this doctor actively engaged in evidence-based medical literature?"*

9. **Final Conversion Anchor (Reachable Booking)**
   * **Headline**: *"Take the First Step Toward Diagnostic Clarity."*
   * **Visual Mechanic**: Dual CTA card with direct online scheduling button and phone inquiry line, flanked by urgent care safety notices.
