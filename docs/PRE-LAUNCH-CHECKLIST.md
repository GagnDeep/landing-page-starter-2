# Pre-launch VERIFY Checklist

The following items must be manually verified and replaced with real data by a human editor before final launch:

| Component / File | Field | Source Requirement |
| --- | --- | --- |
| `app/page.tsx` | Metrics Strip | Number of providers tracked |
| `app/page.tsx` | Metrics Strip | Number of policy updates monitored |
| `app/page.tsx` | Metrics Strip | Number of law enforcement cases |
| `components/custody-matrix.tsx` | Footer label | Provide exact date of scan |
| `content/data.ts` (Hub: compare) | Custody and Control | Find general industry standard quote on banking samples, with URL, Date, Version |
| `content/data.ts` (Spoke: 23andMe) | Policy Overview | 23andMe explicit consent policy quote, with URL, Date, Version |
| `content/data.ts` (Money: privacy-picks) | The Top Providers | Provider X sample destruction policy quote, with URL, Date, Version |
