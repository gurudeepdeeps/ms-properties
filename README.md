# 🏡 M S Properties - Corporate Website

[![Website Status](https://img.shields.io/badge/Status-Active-success.svg)](https://github.com/gurudeepdeeps/ms-properties)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

A modern, fully responsive corporate website built for **M S Properties**, one of the top real estate companies in Bangalore. The website is designed to showcase the company's premium residential plots, highlight their expertise, feature client testimonials, and capture new leads through integrated contact forms.

---

## ✨ Key Features

- **📱 Fully Responsive Design**: Optimized for seamless viewing across desktops, tablets, and mobile devices.
- **🎨 Modern UI/UX**: Clean aesthetics with a professional navy blue and gold color scheme (`#1a2a3a` & `#d4af37`).
- **🚀 Performance Optimized**: Lightweight vanilla HTML, CSS, and JS architecture for blazing-fast load times.
- **✉️ Working Contact Forms**: Integrated with [EmailJS](https://www.emailjs.com/) to capture leads directly to the support inbox without requiring a backend server.
- **🗺️ Interactive Maps**: Embedded Google Maps for easy location tracking of the main office.
- **⚡ Smooth Animations**: Scroll-triggered reveal animations utilizing the `IntersectionObserver` API.

## 📂 Project Structure

```text
ms-properties/
├── index.html            # Main Landing Page
├── about.html            # Company Information & Directors
├── contact.html          # Contact Page with Form & Map
├── gallery.html          # Image Gallery
├── investments.html      # Investment Opportunities
├── projects.html         # Main Projects Listing Page
├── testimonials.html     # Client Reviews
│
├── projects/             # Individual Project Pages
│   ├── lake-view.html
│   ├── hoysala-nagara.html
│   ├── orchids.html
│   └── vistara.html
│
├── css/
│   └── style.css         # Global Stylesheet
│
├── js/
│   └── main.js           # Core Interactions & EmailJS Logic
│
└── images/               # Project Assets & Logos
```

## 🛠️ Built With

- **HTML5**: Semantic markup for structure and SEO optimization.
- **CSS3**: Custom styling, CSS root variables for theming, Flexbox/Grid for layouts, and media queries for responsiveness.
- **JavaScript (ES6+)**: Vanilla JS for DOM manipulation, mobile menu toggling, smooth scrolling, and form handling.
- **[FontAwesome](https://fontawesome.com/)**: For scalable vector icons.
- **[EmailJS](https://www.emailjs.com/)**: Client-side email delivery system for contact forms.

## 🚀 Getting Started Locally

To run this project on your local machine, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurudeepdeeps/ms-properties.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd ms-properties
   ```

3. **Serve the files:**
   Since this is a static website, you can serve it using any local server.
   *Using Node/npx:*
   ```bash
   npx serve .
   ```
   *Using Python:*
   ```bash
   python -m http.server 3000
   ```

4. **View in browser:**
   Open `http://localhost:3000` in your web browser.

## 📧 EmailJS Setup (Contact Forms)

The contact forms are configured to send emails using EmailJS. To finish the live setup:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add a new **Email Service** (e.g., Gmail) to get your `Service ID`.
3. Create an **Email Template** using the variables `{{user_name}}`, `{{user_email}}`, `{{user_phone}}`, and `{{{message}}}`. Get your `Template ID`.
4. Go to **Account > API Keys** to get your `Public Key`.
5. Open `js/main.js` and update the IDs on line ~156:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
   ```
6. Open `index.html` and `contact.html`, and update your public key in the script tags at the bottom of the files.

## ©️ License

&copy; 2026 M S Properties. All rights reserved. Designed by **Xpensive Media**.



continue editing from Projects page