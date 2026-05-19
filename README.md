# Premium Enterprise-Grade Cybersecurity Portfolio Platform

## 🚀 Overview

A sophisticated 3D cybersecurity portfolio platform built with cutting-edge technologies, featuring:

- **Enterprise-Grade SaaS Dashboard** with real-time metrics
- **3D Cyberpunk Aesthetics** using Three.js & React Three Fiber
- **Interactive SOC-style Interface** with threat visualizations
- **Fully Dynamic CMS** for content management
- **Military-grade UI** with glassmorphism and neon effects
- **60FPS Animations** with GPU acceleration

## 📋 Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Advanced animations
- **Three.js + React Three Fiber** - 3D graphics
- **GSAP** - Timeline animations
- **ShadCN UI** - Component library
- **Zustand** - State management
- **React Query** - Data fetching

### Backend
- **Node.js**
- **Express.js / Next API Routes**
- **PostgreSQL**
- **Prisma ORM**

### Authentication & Security
- **NextAuth.js**
- **JWT** with session protection
- **Bcryptjs** for password hashing
- **Helmet.js** for security headers
- **CSRF Protection**
- **Rate Limiting**

### Deployment
- **Vercel** (Frontend)
- **Railway / Render** (Backend + Database)
- **Cloudflare CDN + WAF**

## 📁 Project Structure

```
portfolio-me/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── projects/
│   │   │   ├── experience/
│   │   │   └── skills/
│   │   └── secure-control-center/
│   ├── components/
│   │   ├── 3d/
│   │   ├── animations/
│   │   ├── dashboard/
│   │   ├── cyber-ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   ├── store/
│   │   ├── useAuthStore.ts
│   │   └── useThemeStore.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RootSecX/portfolio-me.git
   cd portfolio-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Update .env.local with your database and configuration
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Portfolio: http://localhost:3000
   - Admin Panel: http://localhost:3000/secure-control-center

## 🔐 Authentication

Default admin credentials (change in production):
- Email: `admin@portfolio.com`
- Password: `admin123`

## 🎨 Color Palette

### Dark Theme
- Background: `#050816`
- Secondary: `#0B1220`
- Neon Blue: `#00D9FF`
- Cyber Green: `#00FFB2`
- Purple Accent: `#7C3AED`
- Warning Red: `#FF3B5C`

## 📦 Core Features

### Portfolio Sections
1. **Hero Section** - Animated terminal intro with rotating roles
2. **About** - 3D profile card with interactive stats
3. **Projects** - Detailed modal view with threat simulations
4. **Experience** - Interactive timeline with animations
5. **Skills** - Galaxy visualization with orbiting tech icons
6. **Certifications** - 3D animated vault display
7. **Contact** - Cyberpunk command panel

### Admin CMS Features
- CRUD operations for all content
- Project management with metrics
- Experience and education tracking
- Skill and certification management
- Theme customization
- Animation intensity control
- SEO configuration
- Analytics dashboard

## 🛡️ Security Features

- ✅ CSP Headers
- ✅ CSRF Protection
- ✅ XSS Prevention
- ✅ Input Sanitization
- ✅ Secure Cookies (HttpOnly)
- ✅ Rate Limiting
- ✅ JWT Authentication
- ✅ Session Management
- ✅ Audit Logging

## 📊 Database Schema

- `users` - Admin authentication
- `projects` - Portfolio projects
- `experiences` - Work experience
- `education` - Educational background
- `skills` - Technical skills
- `certifications` - Professional certifications
- `settings` - Site configuration
- `analytics` - Visitor analytics
- `activity_logs` - Admin audit logs

## 🚀 Deployment

### Vercel (Frontend)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Railway/Render (Backend)
1. Create PostgreSQL database
2. Deploy Node.js app
3. Set DATABASE_URL
4. Run migrations

## 📈 Performance

- Lazy loading for components
- Image optimization
- Code splitting
- SSR optimization
- GPU-accelerated animations
- CDN integration
- Caching strategies

## 📝 License

MIT License - feel free to use this portfolio platform for your own projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit PRs.

## 📧 Contact

For questions or support, reach out to: contact@example.com

---

**Built with ❤️ for cybersecurity professionals**
