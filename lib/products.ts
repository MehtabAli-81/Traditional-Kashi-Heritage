export type ProductCategory = "Vases" | "Wall plates" | "Tiles" | "Serving" | "Custom nameplates";
export type Availability = "sample-available" | "sample-out-of-stock";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  priceNote?: string;
  image: string;
  fallbackImage: string;
  shortDescription: string;
  description: string;
  story: string;
  tags: string[];
  availability: Availability;
  featured: boolean;
  customizable?: boolean;
};

export const products: Product[] = [
  {
    id: "blue-blossom-vase",
    slug: "blue-blossom-vase",
    name: "Blue Blossom Vase",
    category: "Vases",
    price: 3400,
    image: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-2.webp",
    fallbackImage: "/images/assignment-cups-and-jug.jpeg",
    shortDescription: "A hand-painted statement piece for a quiet corner or a welcoming table.",
    description: "An illustrative listing for a decorative Kashi vase in the Nasarpur tradition. Blue floral brushwork sits against a glazed white ground, with the small variations that make artisan-made pottery feel personal.",
    story: "The assignment describes Kashi pottery through blue-and-white patterns, hand-painted floral motifs, and a strong cultural identity. Each piece shown here is a representative catalog concept; confirm the exact item and finish with an artisan before purchase.",
    tags: ["Hand-painted", "Illustrative listing"],
    availability: "sample-available",
    featured: true,
  },
  {
    id: "garden-wall-plate",
    slug: "garden-wall-plate",
    name: "Garden Wall Plate",
    category: "Wall plates",
    price: 2500,
    image: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-3.webp",
    fallbackImage: "/images/assignment-serving-bowls.jpeg",
    shortDescription: "Blue-and-white cultural décor, painted by hand and made to be displayed.",
    description: "A representative Kashi wall-plate listing inspired by the assignment's blue-and-white floral craft. The displayed photo is illustrative rather than a record of current stock.",
    story: "The assignment identifies wall plates as a core category for cultural home décor. Pattern, dimensions, and availability should be confirmed with the maker for a real order.",
    tags: ["Home décor", "Illustrative listing"],
    availability: "sample-available",
    featured: true,
  },
  {
    id: "cobalt-floral-tile",
    slug: "cobalt-floral-tile",
    name: "Cobalt Floral Tile",
    category: "Tiles",
    price: 1800,
    priceNote: "example price per tile",
    image: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-4.webp",
    fallbackImage: "/images/assignment-serving-bowls.jpeg",
    shortDescription: "A decorative accent for a considered surface or a small collection.",
    description: "A representative Kashi tile concept for accent surfaces in homes and mosques, one of the assignment's planned expansion categories. The sold-out label is a demonstration state only; there is no live inventory connection.",
    story: "Tiles are listed as an expansion category in the assignment. Pattern, dimensions, order quantity, and availability are not specified there and must be agreed with the artisan before a real purchase.",
    tags: ["Expansion collection", "Demo out-of-stock state"],
    availability: "sample-out-of-stock",
    featured: false,
  },
  {
    id: "hand-painted-serving-bowl",
    slug: "hand-painted-serving-bowl",
    name: "Hand-painted Serving Bowl",
    category: "Serving",
    price: 1600,
    image: "/images/assignment-serving-bowls.jpeg",
    fallbackImage: "/images/assignment-serving-bowls.jpeg",
    shortDescription: "A serving piece with vivid floral motifs, pictured in the assignment.",
    description: "This product card uses the serving-bowl photograph embedded in the assignment. The document's Rs. 1,600 figure is an illustrative selling-price example in its unit-economics table, not a verified price for this specific bowl; the displayed price remains a sample.",
    story: "The assignment presents serving bowls as a core handmade dining and gifting category, and includes this bowl set as a visual example of Kashi pottery.",
    tags: ["Assignment photo", "Serving & gifting"],
    availability: "sample-available",
    featured: true,
  },
  {
    id: "custom-floral-nameplate",
    slug: "custom-floral-nameplate",
    name: "Custom Floral Nameplate",
    category: "Custom nameplates",
    price: 3200,
    image: "/manus-storage/async-images/X6ZwvZkCEsEZ6UDpQzQLz5/image-5.webp",
    fallbackImage: "/images/assignment-cups-and-jug.jpeg",
    shortDescription: "A personal gift, made to order with a name, message, logo, or special pattern.",
    description: "A representative custom-nameplate concept inspired by the assignment's premium personalized-gift category. Personalization is handled as an example add-on here and must be quoted with the artisan for a real order.",
    story: "The assignment describes custom names, logos, messages, and special patterns, with an additional Rs. 300–500 or a quoted amount for customization. This demo uses Rs. 400 as an illustrative example within that range.",
    tags: ["Made to order", "Customizable"],
    availability: "sample-available",
    featured: true,
    customizable: true,
  },
  {
    id: "blue-flower-jug-cup-set",
    slug: "blue-flower-jug-cup-set",
    name: "Blue Flower Jug & Cup Set",
    category: "Serving",
    price: 4800,
    image: "/images/assignment-cups-and-jug.jpeg",
    fallbackImage: "/images/assignment-cups-and-jug.jpeg",
    shortDescription: "A hand-painted jug and cup group shown in the assignment's opening figure.",
    description: "A representative catalog listing based on the cups-and-jug image embedded in the assignment. This is not a confirmed ready-to-ship set; ask the artisan to confirm what is available and the final price.",
    story: "The assignment features hand-painted Kashi cups and a jug as a visual example. This demo item keeps that source image in the product catalog without claiming current inventory.",
    tags: ["Assignment photo", "Illustrative listing"],
    availability: "sample-available",
    featured: false,
  },
];

export const categories: ProductCategory[] = ["Vases", "Wall plates", "Tiles", "Serving", "Custom nameplates"];
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const featuredProducts = products.filter((product) => product.featured);

export function formatPrice(amount: number) {
  return `Rs. ${new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(amount)}`;
}

export function isAvailable(product: Product) {
  return product.availability === "sample-available";
}
