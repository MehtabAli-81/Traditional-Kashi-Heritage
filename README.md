# Nasarpor Kashi Heritage storefront

A responsive Next.js App Router storefront for the handmade Kashi pottery business described in the attached E-Commerce assignment. The site uses static product data and browser-local cart/checkout behavior; it is a student-ready demo rather than a live order-processing service.

## Run locally

```bash
npm install
npm run dev
```

To create the static site in `out/`:

```bash
npm run build
```

To also copy the finished static site (`index.html`, page folders, `_next/`, and image assets) into the repository root for branch-based GitHub Pages hosting, use `npm run build:pages`. The sync script replaces only previously generated export entries and refuses to overwrite source folders.

The Next.js configuration uses `output: "export"` and trailing slashes so the site can be hosted as static files. The exported pages include the catalog, product detail routes, policies, and client-side cart/checkout demo.

## Push to GitHub and deploy with GitHub Pages

GitHub is the source-code repository; it does not run a Next.js server. This project is configured for static export and branch-root Pages hosting. Push the generated root-level `index.html` and asset folders to `main`, then select **Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)`**. The included GitHub Actions workflow checks that the generated static output matches the source; it does not publish an Actions artifact.

For branch-based Pages hosting from the repository root, select **Settings → Pages → Deploy from a branch → `main` → `/(root)`**. Build the checked-in static files for the actual repository name before committing. For the requested URL base `/E-Commerce-Assignment/`:

```bash
npm ci
NEXT_PUBLIC_BASE_PATH=/E-Commerce-Assignment npm run build:pages
```

The root `index.html` is the compiled storefront entry point; its CSS, scripts, and local images use relative references and resolve from `/E-Commerce-Assignment/`. `README.md` remains documentation and is not the served homepage. Commit the generated root files and source changes to `main` and push them. For a different repository name, replace the base path with `/<that-repository-name>`; for a user/organization `*.github.io` site, use an empty base path. If you later add server APIs, user accounts, durable order storage, or payment processing, use a Next.js-capable host and connect a production commerce backend rather than static hosting.

## Assignment-derived content and demo data

The assignment names Nasarpor Kashi Heritage and describes authentic handmade blue-and-white Kashi pottery from Nasarpur, Sindh, Pakistan; direct artisan partnerships; quality inspection; protective packaging; customization; and the initial categories of vases, wall plates, tiles, serving bowls, and custom nameplates. The document contains two usable product photographs (cups/jug and serving bowls), plus duplicates. Those source photographs are preserved in `public/images/assignment-cups-and-jug.jpeg` and `public/images/assignment-serving-bowls.jpeg`.

The assignment does not supply a SKU catalogue, current stock, delivery prices/times, merchant contact details, payment credentials, or a connected Shopify/payment provider. All displayed per-item prices and the tile sold-out state are illustrative and clearly presented as demo data. The one Rs. 1,600 selling price is an illustrative unit-economics example in the assignment, not a verified price for a specific product. Verify catalogue, prices, availability, support contacts, delivery fees, and payment instructions with the artisans before launch.

The demo accepts shipping/contact form entries only in the current browser flow, does not send them to a merchant, does not create a persisted business order, and does not charge or verify payments. Payment choices mirror the assignment's planned COD, Easypaisa, JazzCash, and bank-transfer options; no card gateway is connected. Connect Shopify or another commerce backend and set up real payment, notification, privacy, and order-management flows before accepting live purchases.

Generated category imagery uses the project-managed `/manus-storage/` URLs when available and falls back to the two bundled assignment photos on hosts that cannot serve Manus storage. Replace these with locally bundled final product images for an independent production host.
