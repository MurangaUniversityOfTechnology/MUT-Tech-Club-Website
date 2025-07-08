# 🚀 MUT Tech Club Website

Welcome to the vibrant home of the **MUT Tech Club** at Murang'a University of Technology! 🌟 Our website is your go-to hub for tech events, innovative projects, insightful blogs, and joining a passionate community of tech enthusiasts. Ready to dive into the world of coding, design, and innovation? Let’s get started! 💻

**Live Website**: [tech-cub-v2.vercel.app](https://tech-cub-v2.vercel.app)

---

## 📚 Table of Contents
- [About Us](#about-us)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Get Started](#get-started)
- [Contribute](#contribute)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contact Us](#contact-us)

---

## 🌟 About Us
The **MUT Tech Club** is where tech dreams come to life at Murang'a University of Technology! 🚀 We’re a dynamic community of students who love coding, designing, and pushing the boundaries of innovation. Through hackathons, workshops, and collaborative projects, we’re building the next generation of tech leaders. Join us to create, learn, and inspire! 💡

---

## ✨ Features
Our website is packed with awesome features:
- 🖥️ **Dynamic Landing Page**: Showcasing our mission to innovate and inspire.
- 🛠️ **Services**: Discover our workshops, tech talks, and epic hackathons.
- 📅 **Upcoming Events**: Stay in the loop with our meetups and activities.
- 🚀 **Projects Showcase**: Check out the cool projects our members are building.
- 📝 **Blog**: Read up on trending tech and club updates.
- 📩 **Membership Form**: Join our community with a quick sign-up.
- 📱 **Responsive Design**: Looks great on phones, tablets, and desktops.
- 🔍 **SEO Optimized**: Easy to find on search engines.

---

## 🛠️ Tech Stack
We’re building with cutting-edge tools:
- **Frontend**:![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Backend**: Strapi 📊
- **Deployment**: Vercel 🚀
- **Forms**: Formspree (or your preferred form service)

---

## 🚀 Get Started

### Prerequisites
Before you dive in, make sure you have:
- **Node.js** (v18.x or higher) 🟢
- **npm** or **yarn** 📦
- **Git** 🗃️

### Installation
1. **Clone the repo**:
   ```bash
   git clone https://github.com/MurangaUniversityOfTechnology/MUT-Tech-Club-Website.git
   cd MUT-Tech-Club-Website
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the Strapi backend**:
   - Navigate to the backend folder (e.g., `/backend`):
     ```bash
     cd backend
     npm install
     # or
     yarn install
     ```
   - Create a `.env` file in the backend folder:
     ```
     HOST=0.0.0.0
     PORT=1337
     APP_KEYS=your_secure_app_key
     API_TOKEN_SALT=your_api_token_salt
     ADMIN_JWT_SECRET=your_admin_jwt_secret
     JWT_SECRET=your_jwt_secret
     DATABASE_URL=your_database_url
     ```
     Generate secure values for the keys (check [Strapi Docs](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html)).

4. **Run the backend**:
   ```bash
   npm run develop
   # or
   yarn develop
   ```
   Access the Strapi admin panel at `http://localhost:1337/admin`.

5. **Run the frontend**:
   In a new terminal, from the root folder:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit `http://localhost:3000` to see the site in action! 🎉

### Environment Variables
For the frontend, create a `.env.local` file in the root folder:
```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```
Update the URL if deploying to a different Strapi backend.

---

## 🤝 Contribute
We love contributions! 💖 Help us make the MUT Tech Club Website even better by:
1. Forking the repo 🍴
2. Creating a new branch: `git checkout -b feature/your-awesome-feature`
3. Committing your changes: `git commit -m "Add something cool"`
4. Pushing to your branch: `git push origin feature/your-awesome-feature`
5. Opening a Pull Request on GitHub 📬

### Ideas to Contribute
- ✍️ Write engaging blog posts
- 🎨 Enhance UI/UX designs
- 📅 Add upcoming events
- 🚀 Showcase new club projects
- ⚡ Optimize code for performance

Please follow our [Code of Conduct](#code-of-conduct) and add clear comments to your code.

---

## 📜 Code of Conduct
We’re committed to a welcoming and inclusive community. Please:
- 🌈 Be respectful and kind in all interactions.
- 🚫 Avoid harmful or discriminatory language.
- 💬 Offer constructive feedback.
- 🚨 Report any issues to [GitHub Issues or contact email].

Violations may lead to removal from the project.

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📩 Contact Us
Got questions or ideas? Reach out!
- **Website**: [tech-cub-v2.vercel.app](https://tech-cub-v2.vercel.app)
- **GitHub**: [MurangaUniversityOfTechnology](https://github.com/MurangaUniversityOfTechnology)
- **Email**: Connect via MUT’s official channels

Let’s build something amazing together! 🚀






