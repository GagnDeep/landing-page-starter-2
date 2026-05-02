export type ImageKey =
  | 'hero'
  | 'bridalLehenga'
  | 'groomSherwani'
  | 'cottonSuits'
  | 'boutiqueInterior'
  | 'artisanEmbroidery'
  | 'testimonial1'
  | 'testimonial2'
  | 'testimonial3'
  | 'blogPlaceholder';

export const ImageRegistry: Record<ImageKey, string> = {
  hero: 'https://images.unsplash.com/photo-1583391733958-6c68b81dbdf2?w=1200&q=80&auto=format&fit=crop',
  bridalLehenga: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80&auto=format&fit=crop',
  groomSherwani: 'https://images.unsplash.com/photo-1592887640244-a1dbcd22b27d?w=1200&q=80&auto=format&fit=crop',
  cottonSuits: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1200&q=80&auto=format&fit=crop',
  boutiqueInterior: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80&auto=format&fit=crop',
  artisanEmbroidery: 'https://images.unsplash.com/photo-1584988291665-27a4d33a6949?w=1200&q=80&auto=format&fit=crop',
  testimonial1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop',
  testimonial2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop',
  testimonial3: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop',
  blogPlaceholder: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1200&q=80&auto=format&fit=crop',
};

export const getImage = (key: ImageKey): string => ImageRegistry[key];
