export type ImageSlot =
  | 'heroVideoPoster'
  | 'featuredCollection'
  | 'customStitchingBanner'
  | 'lookbook1'
  | 'lookbook2'
  | 'lookbook3'
  | 'lookbook4'
  | 'categoryEthnic'
  | 'categoryWestern'
  | 'categoryFusion'
  | 'categoryAccessories'
  | 'founderPortrait'
  | 'aboutHero'
  | 'aboutGallery1'
  | 'aboutGallery2'
  | 'aboutGallery3'
  | 'blogFeatured'
  | 'blogPost1'
  | 'blogPost2'
  | 'blogPost3';

const baseQueryParams = '?q=80&auto=format&fit=crop';
const heroParams = '?w=1920' + baseQueryParams.replace('?', '&');
const standardParams = '?w=1200' + baseQueryParams.replace('?', '&');
const squareParams = '?w=800&h=800' + baseQueryParams.replace('?', '&');
const portraitParams = '?w=800&h=1200' + baseQueryParams.replace('?', '&');

export const siteImages: Record<ImageSlot, string> = {
  // Home Page
  heroVideoPoster: `https://images.unsplash.com/photo-1550614000-4b95d4ebfaad${heroParams}`, // Aesthetic fabric/fashion
  featuredCollection: `https://images.unsplash.com/photo-1610652492500-ded49ceeb378${portraitParams}`, // Trendy dress
  customStitchingBanner: `https://images.unsplash.com/photo-1556905055-8f358a7a47b2${heroParams}`, // Tailor working

  // Lookbook
  lookbook1: `https://images.unsplash.com/photo-1583391733958-d25e07fac0ec${portraitParams}`,
  lookbook2: `https://images.unsplash.com/photo-1605763240000-7e93b172d754${squareParams}`,
  lookbook3: `https://images.unsplash.com/photo-1595777457583-95e059d581b8${portraitParams}`,
  lookbook4: `https://images.unsplash.com/photo-1584273143981-41c073dfe8f8${squareParams}`,

  // Categories
  categoryEthnic: `https://images.unsplash.com/photo-1610030469983-98e550d6193c${squareParams}`,
  categoryWestern: `https://images.unsplash.com/photo-1434389678232-075ea751411c${squareParams}`,
  categoryFusion: `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f${squareParams}`,
  categoryAccessories: `https://images.unsplash.com/photo-1509319117193-57bab727e09d${squareParams}`,

  // About
  founderPortrait: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2${portraitParams}`,
  aboutHero: `https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5${heroParams}`,
  aboutGallery1: `https://images.unsplash.com/photo-1441984904996-e0b6ba687e04${standardParams}`,
  aboutGallery2: `https://images.unsplash.com/photo-1537832816519-689ad163238b${standardParams}`,
  aboutGallery3: `https://images.unsplash.com/photo-1600185365483-26d7a4cc7519${standardParams}`,

  // Blog
  blogFeatured: `https://images.unsplash.com/photo-1511556820780-d912e42b4980${standardParams}`,
  blogPost1: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633${standardParams}`,
  blogPost2: `https://images.unsplash.com/photo-1616422285623-aa30eb070974${standardParams}`,
  blogPost3: `https://images.unsplash.com/photo-1532453288672-3a27e9be9efd${standardParams}`,
};
