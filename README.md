# TIVision - Web Infrastructure Solutions

A Next.js 14 static website for Tonmoy Infrastructure & Vision, offering enterprise-grade hosting, DNS, and website security services.

## Features

- Modern Next.js 14 application with TypeScript
- Static site export for GitHub Pages deployment
- Responsive design with Tailwind CSS
- Dark/light mode theming
- Comprehensive UI component library using Radix UI
- Form handling with React Hook Form and Zod validation
- Animated interactions with Framer Motion

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS with animations
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Font**: Ubuntu from Google Fonts
- **Deployment**: GitHub Pages

## Project Structure

```
.
├── app/                  # Next.js app router pages
│   ├── products/         # Product pages
│   ├── solutions/        # Solution pages
│   ├── resources/        # Knowledge base and docs
│   └── ...               # Other standard pages
├── components/           # Reusable components
│   ├── ui/               # Radix-based UI primitives
│   ├── home/             # Home page sections
│   └── ...               # Other component categories
├── data/                 # JSON data for page content
└── lib/                  # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## Building for Production

1. Build the static export:
   ```bash
   npm run build
   ```
2. Preview production build:
   ```bash
   npm run start
   ```

## Deployment

The site is deployed to GitHub Pages using:
```bash
npm run deploy
```

## Configuration

- Edit `next.config.js` to update GitHub Pages base path
- Update `app/layout.tsx` for global metadata
- Content is managed through JSON files in `data/` directory