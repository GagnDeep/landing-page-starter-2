import { z } from "zod"

// Base schema for all content, enforcing source and verification dates
const VerificationSchema = z.object({
  source: z.string(),
  verificationDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
})

export const DataPointSchema = z.object({
  value: z.union([z.string(), z.number()]),
  verification: VerificationSchema,
})

export type DataPoint = z.infer<typeof DataPointSchema>

export const VendorSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  category: z.enum(["pos", "payroll", "reservations", "online-ordering"]),
  monthlyCost: DataPointSchema,
  transactionFee: DataPointSchema,
  contractTerm: DataPointSchema,
  payoutBounty: DataPointSchema,
})

export type Vendor = z.infer<typeof VendorSchema>

export const ContentPageSchema = z.object({
  title: z.string(),
  description: z.string(),
  wordCountFloor: z.number(),
  content: z.string(),
})

export type ContentPage = z.infer<typeof ContentPageSchema>

export function validateVendor(data: unknown): Vendor {
  return VendorSchema.parse(data)
}
