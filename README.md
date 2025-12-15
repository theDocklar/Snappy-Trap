# Snappy Trap - Next.js Static Website

A static website for Snappy Trap, converted from Figma design to Next.js.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build a static export:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready to be deployed to any static hosting service.

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components
- `public/images/` - Image assets from Figma
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration (set to static export)

## Features

- ✅ Fully responsive design
- ✅ Static site generation
- ✅ Tailwind CSS styling
- ✅ Montserrat font family
- ✅ Product showcase cards
- ✅ Newsletter subscription form
- ✅ Footer with company information
- ✅ Social media icons

## Deployment

The static export can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply upload the `out` directory after running `npm run build`.

