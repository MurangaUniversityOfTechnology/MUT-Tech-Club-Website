# 🌌 MUT Tech Club Website

[![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Strapi](https://img.shields.io/badge/Strapi-2E7EB8?style=flat&logo=strapi&logoColor=white)](https://strapi.io/) [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**Welcome to the epicenter of tech innovation** at Murang'a University of Technology! 🚀 The **MUT Tech Club Website** is your gateway to explore events, showcase projects, read blogs, and join a vibrant community of coders, designers, and innovators. Let’s shape the future together! 💡

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
The **MUT Tech Club** is the heartbeat of tech at Murang'a University of Technology. 🌍 We unite students passionate about coding, design, and innovation through hackathons, workshops, and collaborative projects. Ready to unleash your potential? Join us! 🎉

---

## ✨ What’s Inside?
- 🖥️ **Stunning Landing Page**: Showcases our mission to inspire.
- 🛠️ **Services**: Workshops, tech talks, and epic hackathons.
- 📅 **Events**: Stay updated on upcoming meetups.
- 💡 **Projects**: Discover our members’ brilliant creations.
- 📝 **Blog**: Dive into trending tech and club news.
- 📩 **Join Us**: Sign up with our simple membership form.
- 📱 **Responsive**: Seamless on mobile, tablet, and desktop.
- 🔍 **SEO-Ready**: Built to shine on search engines.

---

## 🛠️ Tech Stack
Powered by cutting-edge tools:
- **Frontend**: [Next.js](https://nextjs.org/) ⚡ — Lightning-fast React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 🎨 — Sleek, utility-first design
- **Backend**: [Strapi](https://strapi.io/) 📊 — Headless CMS for dynamic content
- **Hosting**: [Vercel](https://vercel.com/) 🚀 — Effortless deployment
- **Forms**: Formspree (or specify your service)

---

## 🚀 Setup Guide

### 🛠️ Installing Dependencies
- **Node.js**: Ensure version 18.x or higher is installed. Check with `node -v` and download from [nodejs.org](https://nodejs.org) if needed.
- **npm or yarn**: npm comes with Node.js; install yarn globally with `npm install -g yarn` if preferred. Check with `npm -v` or `yarn -v`.
- **Git**: Required to clone the repository. Install from [git-scm.com](https://git-scm.com) and verify with `git --version`.
- **Install project dependencies**: After cloning, run the following in the root folder:
  ```bash
  npm install
  # or
  yarn install
  ```
  - This installs Strapi, Next.js, and other dependencies listed in `package.json`.

### 🔧 Environment Variables
- **Create .env file**:
  - Copy the example file to create your `.env`:
    ```bash
    cp .env.example .env
    ```
  - Edit `.env` with the following structure (keep all keys secret):
    ```
    # Server Configuration
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=your_secure_app_key1,your_secure_app_key2

    # Authentication
    ADMIN_JWT_SECRET=your_secure_admin_jwt_secret
    API_TOKEN_SALT=your_secure_api_token_salt
    TRANSFER_TOKEN_SALT=your_secure_transfer_token_salt
    JWT_SECRET=your_secure_jwt_secret

    # Security
    ENCRYPTION_KEY=your_secure_encryption_key

    # Flags
    FLAG_NPS=true
    FLAG_PROMOTE_EE=true

    # Database (SQLite default, or configure MySQL/PostgreSQL)
    DATABASE_CLIENT=sqlite
    DATABASE_FILENAME=.tmp/data.db
    # For MySQL:
    # DATABASE_CLIENT=mysql
    # DATABASE_HOST=localhost
    # DATABASE_PORT=3306
    # DATABASE_NAME=strapi
    # DATABASE_USERNAME=strapi
    # DATABASE_PASSWORD=strapi
    # DATABASE_SSL=false
    # For PostgreSQL:
    # DATABASE_CLIENT=postgres
    # DATABASE_URL=your_postgres_connection_string
    # DATABASE_HOST=localhost
    # DATABASE_PORT=5432
    # DATABASE_NAME=strapi
    # DATABASE_USERNAME=strapi
    # DATABASE_PASSWORD=strapi
    # DATABASE_SSL=false
    # DATABASE_SCHEMA=public

    # Email Configuration
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_USERNAME=your_email@example.com
    SMTP_PASSWORD=your_app_password
    ```
  - **Generate secure keys**: Use `openssl rand -base64 32` or an online tool. For `APP_KEYS`, create two comma-separated keys. Example:
    ```bash
    echo "key1=$(openssl rand -base64 32),key2=$(openssl rand -base64 32)"
    ```
  - **Email setup**: Use a Gmail account with an App Password (enable 2FA). Replace `your_email@example.com` and `your_app_password` with your credentials.
  - **Database setup**: SQLite is default (stored in `.tmp/data.db`). For MySQL/PostgreSQL, uncomment and configure the respective section with your database credentials.
  - **Important**: Do **not** use default values. See [Strapi Docs](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html).
  - Ensure `.env` is listed in `.gitignore` (already configured).

### 🎬 Running the Strapi Backend
- **Start the backend**:
  - Run the following command in the root folder:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
  - This starts Strapi in development mode with auto-reload.
  - Access the Strapi admin panel at `http://localhost:1337/admin` and create an admin account on first run (email, password).
- **Check status**: Look for a message like `[2025-07-08 17:38:00.000] info: Server is running on http://0.0.0.0:1337` to confirm it’s working.
- **Production mode**: To build and run for production:
  ```bash
  npm run build
  npm run start
  ```
- **Troubleshooting**:
  - **Port conflict**: If port 1337 is in use, change `PORT` in `.env` (e.g., to `1338`) and restart.
  - **Database errors**: Verify `DATABASE_CLIENT` and credentials in `.env`.
  - **CORS issues**: Ensure Strapi is accessible at the URL specified in `NEXT_PUBLIC_STRAPI_API_URL`.

---

## 🤝 Contribute
We’re thrilled to welcome your contributions! 💖 Help enhance the MUT Tech Club Website:
1. Fork the repo 🍴
2. Create a branch: `git checkout -b feature/your-epic-feature`
3. Commit changes: `git commit -m "Add something awesome"`
4. Push: `git push origin feature/your-epic-feature`
5. Submit a Pull Request 📬

### 💡 Contribution Ideas
- ✍️ Craft engaging blog posts
- 🎨 Improve UI/UX designs
- 📅 Update event listings
- 🚀 Showcase new projects
- ⚡ Optimize code performance

Follow our [Code of Conduct](#code-of-conduct) and add clear code comments.

---

## 📜 Code of Conduct
We foster an inclusive, respectful community. 🌈 Please:
- Be kind and supportive
- Avoid harmful language
- Share constructive feedback
- Report issues via [GitHub Issues or contact email]

Violations may lead to removal from the project.

---

## 📄 License
Licensed under the [MIT License](LICENSE.MIT). See the file for details.

---

## 📩 Connect
Got ideas or questions? Let’s connect!
- 🌐 **Website**: [tech-cub-v2.vercel.app](https://tech-cub-v2.vercel.app)
- 🗃️ **GitHub**: [MurangaUniversityOfTechnology](https://github.com/MurangaUniversityOfTechnology)
- 📧 **Email**: Contact via MUT’s official channels

**Join the MUT Tech Club and let’s create magic!** ✨