export const categoryLabels = {
  all: 'All',
  yarn: 'Yarn Works',
  printed: 'Printed Works',
  mystery: 'Mystery Boxes',
  other: 'Other Handicrafts',
}

const samplePhotos = (slug) =>
  Array.from({ length: 15 }, (_, index) =>
    `https://picsum.photos/seed/${slug}-${index + 1}/1200/1200`
  )

export const products = [
  {
    id: 'rose-crochet-bouquet',
    category: 'yarn',
    name: 'Crochet Rose Bouquet',
    shortDescription: 'A long-lasting bouquet of hand-crocheted roses.',
    fullDescription:
      'A handcrafted bouquet made from soft cotton yarn, wrapped and arranged as a gift-ready keepsake. Great for birthdays, anniversaries, and decor.',
    price: '₱1,250',
    status: 'available',
    featured: true,
    photos: samplePhotos('rose-crochet-bouquet'),
  },
  {
    id: 'sunset-graphic-print',
    category: 'printed',
    name: 'Sunset Dreams Print',
    shortDescription: 'Graphic art print on premium photo paper.',
    fullDescription:
      'A vibrant original digital artwork printed on glossy photo paper with rich colors and crisp details. Perfect for framing in cozy rooms and creative spaces.',
    price: '₱350',
    status: 'available',
    featured: true,
    photos: samplePhotos('sunset-graphic-print'),
  },
  {
    id: 'mini-surprise-box',
    category: 'mystery',
    name: 'Mini Mystery Box',
    shortDescription: 'A surprise bundle of curated handmade mini items.',
    fullDescription:
      'Each box includes a surprise selection of mini crafts, stickers, and printable treats. Every box is uniquely assembled and wrapped by hand.',
    price: '₱499',
    status: 'available',
    featured: true,
    photos: samplePhotos('mini-surprise-box'),
  },
  {
    id: 'lavender-keychain',
    category: 'yarn',
    name: 'Lavender Yarn Keychain',
    shortDescription: 'Cute pocket-sized accessory with sturdy clasp.',
    fullDescription:
      'Hand-crocheted keychain finished with a secure metal clasp. Light, durable, and ideal for adding handmade charm to bags and keys.',
    price: '₱180',
    status: 'sold',
    featured: false,
    photos: samplePhotos('lavender-keychain'),
  },
  {
    id: 'botanical-wall-print',
    category: 'printed',
    name: 'Botanical Wall Print',
    shortDescription: 'Elegant floral-themed graphic design print.',
    fullDescription:
      'A clean botanical design printed on premium photo paper. Suitable for gallery walls, desks, and gift bundles.',
    price: '₱420',
    status: 'available',
    featured: false,
    photos: samplePhotos('botanical-wall-print'),
  },
  {
    id: 'hand-painted-tag-set',
    category: 'other',
    name: 'Hand-Painted Gift Tag Set',
    shortDescription: 'Set of reusable artisan gift tags.',
    fullDescription:
      'A set of six hand-painted tags with floral details and twine. Great for gifts, scrapbooks, and keepsake packaging.',
    price: '₱240',
    status: 'available',
    featured: false,
    photos: samplePhotos('hand-painted-tag-set'),
  },
]

export const catalogCategories = ['all', 'yarn', 'printed', 'mystery', 'other']