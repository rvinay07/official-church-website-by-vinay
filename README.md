# Agape A.G. Church Guntakal — Official Website

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](README.md#copyright--ownership)

Official web application of **Agape Assemblies of God (A.G.) Church, Guntakal, Andhra Pradesh, India**. Dedicated to praising God, preaching His living Word, and praying for people and families across the world.

---

## Church Overview

- **Sanctuary Address**: D-No : 20-279, Near Housing Board Colony, Old Guntakal, Guntakal - 515803, Andhra Pradesh, India.
- **Founded**: 1985 by Rev. A.P. Solomon Vijay Raj & Dr. Rajkumari.
- **Associate Pastor**: Rev. A.P. Benedict Vijay Raj.
- **Official Helpline**: +91 98484 88414 / +91 95333 62164
- **Official Email**: `agapegtl@gmail.com`

---

## Key Features

- **Sunday Services & Dynamic Countdown**: Real-time timer targeting the next Sunday worship service (7:30 AM First Service, 11:00 AM Second Service, 5:00 PM Youth Bible Study, 6:30 PM Bilingual Evening Service).
- **Weekly & Monthly Programs**:
  - *Men's Meeting*: Every Thursday • 7:00 PM – 8:30 PM
  - *Intercessory Fasting Prayer*: Every Friday • 10:00 AM – 1:00 PM
  - *Sisters Meeting (Women's Fellowship)*: Every Saturday • 11:00 AM – 1:00 PM
  - *Chosen Generation Youth Gathering*: Every Month 2nd Saturday • 9:30 AM – 1:00 PM
  - *All Night Prayer*: Every Month Last Friday • 10:00 PM – 2:00 AM
- **Children's Church (Sunday School)**: Bible classes, action songs, and memory verses during Sunday morning services.
- **40-Year Church History & Photo Archive**: High-resolution gallery documenting church milestones from 1985 to present.
- **Online Prayer Request Submission**: Route prayer needs directly to pastoral care via WhatsApp or Email with privacy options.
- **Online Tithes & Giving Portal**: UPI ID, QR code, and verified bank transfer details.
- **Media Ministry & Volunteer Portal**: Encouraging believers and youth to serve the Lord with their God-given talents across live sound mixing, camera operation, song projection, video editing, and photography.
- **Digital Media & Broadcast Hub**: Embedded YouTube sermons, choir worship, and live streams.
- **Fully Responsive & Accessible**: Optimized for mobile phones, tablets, and desktops.

---

## Tech Stack

- **Framework**: React 18 (SPA)
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Static build ready for Vercel, Netlify, Cloudflare Pages, or Firebase Hosting.

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- npm or pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/rvinay07/official-church-website-by-vinay.git
cd official-church-website-by-vinay

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open browser
http://localhost:3000
```

### Production Build

```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
├── about/                  # Public assets: pastoral portraits & historical archive
├── homepage/               # Public assets: hero images & section previews
├── ministries/             # Public assets: ministry badges & banners
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Modals, Countdown)
│   ├── data/               # Centralized data model (churchData.js)
│   ├── views/              # View pages (Home, Services, Ministries, Pastors, Prayer, Give, etc.)
│   ├── App.jsx             # Root application & routing
│   ├── index.css           # Global Tailwind CSS styles
│   └── main.jsx            # React entrypoint
├── index.html              # HTML5 entrypoint with SEO metadata & Google Fonts
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Custom theme colors & typography
└── package.json            # Project dependencies & npm scripts
```

---

## Copyright & Ownership

Copyright &copy; 1985&ndash;2026 Agape A.G Church Guntakal. All rights reserved.

All website source code, HTML, CSS, JavaScript, church photographs, media assets, branding, and text content belong to Agape A.G Church Guntakal. Unauthorized commercial reproduction, redistribution, or modification is prohibited.
