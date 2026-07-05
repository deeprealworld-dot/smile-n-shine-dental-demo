# Mumbai Care Clinic - Landing Page PRD

## Original Problem Statement
Build a premium, modern, trustworthy, and fully responsive landing page for "Mumbai Care Clinic" in Andheri West, Mumbai. Reusable template where all content is controlled via `clinicConfig.js`.

## User Personas
- Families seeking a trusted local physician
- Working professionals needing quick appointments
- Senior citizens requiring regular checkups
- Local residents of Andheri West, Mumbai

## Core Requirements
- 12 sections: Hero, Trust Badges, About, Services, Doctor, Appointment, Why Choose Us, Testimonials, Health Tips, Gallery, Contact, Footer
- Frontend-only appointment form with confirmation popup
- All content in `src/data/clinicConfig.js`
- All images in `public/images/`
- SEO optimized with schema markup
- Mobile-first responsive design
- Framer Motion animations
- Sticky navigation, floating WhatsApp & call buttons

## What's Been Implemented (June 29, 2025)
- [x] All 12 sections fully built with Framer Motion animations
- [x] Sticky glassmorphism header with mobile hamburger menu
- [x] Appointment form with Shadcn Calendar, Select, Dialog components
- [x] Testimonials carousel with AnimatePresence transitions
- [x] Masonry gallery with Framer Motion lightbox
- [x] Google Maps embed in contact section
- [x] Floating WhatsApp + Call buttons
- [x] SEO meta tags + JSON-LD schema markup
- [x] Mobile responsive (tested 390x844)
- [x] All data-testid attributes for testing
- [x] Custom Outfit + Manrope typography
- [x] Brand colors: #0F4C81 primary, #14B8A6 secondary
- [x] **Multi-language support**: English, Hindi, Marathi (June 29, 2025)
  - Language switcher in header (desktop + mobile)
  - All 12 sections fully translated
  - localStorage persistence for language preference
  - Translations in src/i18n/translations.js
  - LanguageProvider context in src/i18n/LanguageContext.js

## Architecture
- React (CRA with CRACO) + Tailwind CSS + Framer Motion
- Shadcn UI components (Dialog, Select, Calendar, Input, Label, Button, Popover, Card)
- Single config file: `src/data/clinicConfig.js`
- Component-based sections in `src/components/sections/`

## Backlog
### P0 (Critical) - None remaining
### P1 (Important)
- Backend appointment storage (MongoDB)
- Email/SMS notification on appointment booking
- Admin panel for managing appointments
### P2 (Nice to have)
- Blog/health tips CMS
- Patient portal
- Online payment integration
- Multi-language support (Hindi/Marathi)
- Google Analytics integration

## Next Tasks
1. Add backend appointment storage if needed
2. Integrate email notifications (e.g., Resend/SendGrid)
3. Add Google Analytics tracking
4. Implement blog section for health tips
