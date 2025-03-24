# CDA Contracting Website

A modern, SEO-optimized website for a contracting business in Coeur d'Alene, Idaho. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Image gallery with project photos
- Contact form for customer inquiries
- SEO optimized for local search
- Fast loading and performance optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

### Starting Production Server

To start the production server:

```bash
npm run start
# or
yarn start
```

## Deployment

This website is configured for deployment on Cloudflare Pages. To deploy:

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variables: None required

## Project Structure

```
├── public/
│   └── photos/      # Project photos (automatically copied from parent directory)
├── src/
│   ├── app/         # Next.js app directory
│   │   ├── page.tsx # Homepage
│   │   ├── gallery/ # Gallery page
│   │   └── contact/ # Contact page
│   └── components/  # React components
├── copy-photos.js   # Script to copy photos to public directory
└── next.config.mjs  # Next.js configuration
```

## Customization

- Update contact information in `src/app/contact/page.tsx`
- Modify the photo gallery in `src/app/gallery/page.tsx`
- Adjust styles in the Tailwind classes or modify `tailwind.config.js`
- Update SEO metadata in each page's metadata export

## License

This project is private and confidential. All rights reserved.
