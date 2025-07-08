# 🌌 MUT Tech Club Website

[![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Strapi](https://img.shields.io/badge/Strapi-2E7EB8?style=flat&logo=strapi&logoColor=white)](https://strapi.io/) [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**Welcome to the epicenter of tech innovation** at Murang'a University of Technology! 🚀 The **MUT Tech Club Website** is your portal to explore events, showcase projects, read blogs, and join a thriving community of coders, designers, and dreamers. Let’s build the future together! 💡

🔗 **Live Site**: [tech-cub-v2.vercel.app](https://tech-cub-v2.vercel.app)

---

## 📌 Quick Links
- [About Us](#about-us)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Guide](#setup-guide)
- [Contribute](#contribute)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Connect](#connect)

---

## 🌟 About Us
The **MUT Tech Club** is where passion meets innovation at Murang'a University of Technology. 🌍 We’re a community of students who code, design, and create through hackathons, workshops, and projects. Ready to unleash your tech potential? Join us! 🎉

---

## ✨ What’s Inside?
- 🖥️ **Stunning Landing Page**: Reflects our vision to inspire.
- 🛠️ **Services**: Workshops, tech talks, and hackathons galore.
- 📅 **Events**: Never miss our next big meetup.
- 💡 **Projects**: Showcasing our members’ genius creations.
- 📝 **Blog**: Your source for tech trends and club updates.
- 📩 **Join Us**: Sign up with our easy membership form.
- 📱 **Responsive**: Flawless on any device.
- 🔍 **SEO-Ready**: Built to be discovered.

---

## 🛠️ Tech Stack
Powered by modern tools:
- **Frontend**: [Next.js](https://nextjs.org/) ⚡ — Lightning-fast React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 🎨 — Sleek, utility-first design
- **Backend**: [Strapi](https://strapi.io/) 📊 — Headless CMS for content
- **Hosting**: [Vercel](https://vercel.com/) 🚀 — Seamless deployment
- **Forms**: Formspree (or specify your service)

---

## 🚀 Setup Guide

### 🛠️ What You Need
- **Node.js** (v18.x+) 🟢
- **npm** or **yarn** 📦
- **Git** 🗃️

### 🎬 Steps to Launch
1. **Clone the repo**:
   ```bash
   git clone https://github.com/MurangaUniversityOfTechnology/MUT-Tech-Club-Website.git
   cd tech-club-blog
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Strapi backend**:
   - Navigate to `/backend` (if applicable):
     ```bash
     cd backend
     npm install
     # or
     yarn install
     ```
   - Create a `.env` file in `/backend`:
     ```
     
     HOST=0.0.0.0
     PORT=1337
     APP_KEYS=your_secure_app_keys
     API_TOKEN_SALT=your_secure_api_token_salt
     ADMIN_JWT_SECRET=your_secure_admin_jwt_secret
     TRANSFER_TOKEN_SALT=your_secure_transfer_token_salt
     JWT_SECRET=your_secure_jwt_secret
     ENCRYPTION_KEY=your_secure_encryption_key
        
     ```
     Follow [Strapi Docs](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html) to generate secure keys.

4. **Run the backend**:
   ```bash
   npm run develop
   # or
   yarn develop
   ```
   Visit `http://localhost:1337/admin` for the Strapi dashboard.

5. **Run the frontend**:
   From the root folder in a new terminal:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Check out the site at `http://localhost:3000`! 🎉

### 🔧 Environment Variables
In the root folder, create `.env.local`:
```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```
Adjust the URL for a deployed Strapi backend.

---

## 🤝 Contribute
We’re pumped to see your ideas! 💖 Help shape the MUT Tech Club Website by:
1. Forking the repo 🍴
2. Creating a branch: `git checkout -b feature/your-epic-feature`
3. Committing: `git commit -m "Add something amazing"`
4. Pushing: `git push origin feature/your-epic-feature`
5. Submitting a Pull Request 📬

### 💡 Contribution Ideas
- ✍️ Write captivating blog posts
- 🎨 Redesign UI/UX elements
- 📅 Update event listings
- 🚀 Add new project showcases
- ⚡ Optimize performance

Follow our [Code of Conduct](#code-of-conduct) and comment your code clearly.

---

## 📜 Code of Conduct
We’re all about inclusivity and respect. 🌈 Please:
- Be kind and supportive
- Avoid harmful language
- Share constructive feedback
- Report issues via [GitHub Issues or contact email]

Violations may result in removal from the project.

---

## 📄 License
Licensed under the [MIT License](LICENSE). See the file for details.

---

## 📩 Connect
Got ideas or questions? Let’s talk!
- 🌐 **Website**: [tech-cub-v2.vercel.app](https://tech-cub-v2.vercel.app)
- 🗃️ **GitHub**: [MurangaUniversityOfTechnology](https://github.com/MurangaUniversityOfTechnology)
- 📧 **Email**: Contact via MUT’s official channels

**Join the MUT Tech Club and let’s create magic!** ✨