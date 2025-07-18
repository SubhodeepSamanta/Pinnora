<div align="center">

<img src="public/logo.png" alt="Pinnora Logo" width="140"/>

# 📌 Pinnora – Discover, Create, and Share Visual Stories

> 🎨 A modern, full-stack social platform for sharing, collecting, and exploring creative visual content

[![React](https://img.shields.io/badge/React-2023-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=1e1e1e)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-NextGen-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1e1e1e)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-BackEnd-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=1e1e1e)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-Minimal%20Server-000000?style=for-the-badge&logo=express&logoColor=white&labelColor=1e1e1e)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=1e1e1e)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white&labelColor=1e1e1e)](https://jwt.io/)

[![GitHub stars](https://img.shields.io/github/stars/SubhodeepSamanta/Pinnora?style=social)](https://github.com/SubhodeepSamanta/Pinnora/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SubhodeepSamanta/Pinnora?style=social)](https://github.com/SubhodeepSamanta/Pinnora/network/members)
[![GitHub issues](https://img.shields.io/github/issues/SubhodeepSamanta/Pinnora?style=social)](https://github.com/SubhodeepSamanta/Pinnora/issues)

---

</div>

## ✨ Features

- 🔑 **JWT-based User Authentication**
- ✨ **Create and Share Pins:** Upload images, add descriptions, links, and tags
- 🖼️ **Organize Pins into Boards:** Curate your favorite content and ideas
- ❤️ **Interact:** Like, save, and comment on pins from the community
- 🌎 **Infinite Gallery:** Discover trending, new, and personalized pins with infinite scroll
- 🕵️ **Search and Filter:** Find pins by keyword, tag, user, or board
- 👤 **Personalized Profiles:** Manage your pins, boards, followers, and more
- 🤝 **Follow System:** Connect with creators, follow users, and build your network
- 📊 **Pin Analytics:** See likes, saves, and engagement for your content
- 📱 **Responsive Design:** Enjoy a seamless experience on any device

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm (v9+)
- MongoDB URI
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SubhodeepSamanta/Pinnora.git
cd Pinnora
```

### 2. Backend Setup

```bash
cd Backend
npm install

# Create .env file and add:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
IK_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install

# Create .env file and add:
VITE_API_ENDPOINT=http://localhost:5000
```

### 4. Run the App

```bash
# Backend
cd Backend
npm run dev

# Frontend (new terminal)
cd ../Frontend
npm run dev
```

---

## 📁 Environment Variables

### Backend

| Variable            | Description                 | Example                        |
|---------------------|-----------------------------|--------------------------------|
| `PORT`              | Server port                 | 5000                           |
| `MONGO_URI`         | MongoDB connection string   | mongodb+srv://...              |
| `JWT_SECRET`        | JWT secret key              | your-secret-key                |
| `CLIENT_URL`        | Frontend URL                | http://localhost:5173          |
| `IK_PUBLIC_KEY`     | ImageKit public key         | ...                            |
| `IK_PRIVATE_KEY`    | ImageKit private key        | ...                            |
| `IK_URL_ENDPOINT`   | ImageKit endpoint           | ...                            |

### Frontend

| Variable            | Description                 | Example                        |
|---------------------|-----------------------------|--------------------------------|
| `VITE_API_ENDPOINT` | Backend API endpoint        | http://localhost:5000          |

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Axios
- React Query
- React Router
- Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- ImageKit (image uploads)

---

## 🖼️ Screenshots

<div align="center">

| Home | Pin Details | Dashboard | Board |
|------|-------------|-----------|-------|
| ![Home](screenshots/home.png) | ![Pin](screenshots/pin.png) | ![Dashboard](screenshots/dashboard.png) | ![Board](screenshots/board.png) |

</div>

---

## 💻 Development Scripts

| Command        | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Starts frontend/backend in dev mode |

---

## 🤝 Contributing

We welcome contributions!

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by [SubhodeepSamanta](https://github.com/SubhodeepSamanta)

</div>
