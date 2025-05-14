# 🍎 Apple Clone

A fully responsive and multi-page clone of Apple's website built with React. This project showcases various modern front-end development skills 
including component structuring, routing, API integration, and dynamic content rendering from a database.


## 📚 Features

- ✅ **Reusable Components**: Header and Footer are consistent across all pages.
- ✅ **Shared Routing**: Each navigation link (iPhone, Mac, TV, Support, etc.) routes to a dedicated page using React Router.
- ✅ **Main Section Switching**: The main content changes dynamically based on the selected route.
- ✅ **YouTube Video Integration**: Embedded video using the YouTube API.
- ✅ **Product Data Integration**: iPhone product details are fetched from a database and displayed dynamically.
- ✅ **Responsive Design**: Mobile-first layout using Bootstrap and custom CSS.
- ✅ **Clean UI with Bootstrap**: Styled using Bootstrap components along with custom CSS for a polished appearance.

---

## 🛠️ Tech Stack

- **React** (with JSX)
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Bootstrap**
- **React Router DOM**
- **REST API Integration**
- **Database (for iPhone product data)**

---

## 📂 Folder Structure (Simplified)

apple_clone/
├── client-side/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   │   └── footer.jsx
│   │   │   ├── header/
│   │   │   │   └── header.jsx
│   │   │   ├── mainsection/
│   │   │   │   ├── alert/
│   │   │   │   │   └── alert.jsx
│   │   │   │   ├── section1.jsx
│   │   │   │   ├── section2.jsx
│   │   │   │   ├── section3.jsx
│   │   │   │   ├── section4.jsx
│   │   │   │   ├── section5.jsx
│   │   │   │   ├── section6.jsx
│   │   │   │   └── main.jsx
│   │   │   ├── pages/
│   │   │   │   ├── 404.jsx
│   │   │   │   ├── ipad.jsx
│   │   │   │   ├── iphone.jsx
│   │   │   │   ├── mac.jsx
│   │   │   │   ├── music.jsx
│   │   │   │   ├── search.jsx
│   │   │   │   ├── sharedlayouts.jsx
│   │   │   │   ├── singlepage.jsx
│   │   │   │   ├── support.jsx
│   │   │   │   ├── tv.jsx
│   │   │   │   └── watch.jsx
│   │   │   ├── youtubeVideos/
│   │   │   │   ├── youtubeVideos.jsx
│   │   │   │   └── youtubeVideos.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── server-side/
│   └── MysqlPractice/
│       ├── css/
│       │   └── style.css
│       ├── node_modules/
│       ├── app.js
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       └── README.md
└── README.md


Project Overview
This Apple Clone project consists of two main parts: Client-Side and Server-Side.

Client-Side: Built with React, this is the front-end of the project, where the user interface is developed. It includes components like the header, 
footer, and various product pages, such as iPhone, Mac, and TV. It also integrates YouTube videos using an API and handles routing between pages.

Server-Side: The backend of the project, responsible for handling server logic and fetching data from a MySQL database. The server-side includes 
files like app.js and configuration for managing product data and interactions.


📥 API & Data
YouTube Video is loaded via the YouTube Embed API.

iPhone product data is fetched from a connected database using API endpoints.


🙌 Credits
Inspired by Apple's official site for UI structure.   https://www.apple.com/

YouTube API used for video embedding.    https://developers.google.com/youtube/v3

some  images used in this project are sourced from Unsplash, a platform offering high-quality, free-to-use photos.     https://unsplash.com/

👤 Author
Fuad Delil
Front-End Developer | React Enthusiast
🌍 Addis Ababa, Ethiopia
📧 mahidelill111@gmail.com


