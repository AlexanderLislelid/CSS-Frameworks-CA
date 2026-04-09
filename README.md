# Yap — CSS Frameworks CA

A social media app built as a course assignment at Noroff. The app includes a login/register page, a social feed, and a user profile page styled with Tailwind CSS.

## Features

- Login and registration forms
- Social feed
- User profile page
- Responsive layout with a desktop navbar and mobile bottom navigation

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

## Live Demo

```bash
https://alexanderlislelid.github.io/CSS-Frameworks-CA/
```

## Project Structure

```
├── index.html          # Login / Register page
├── feed/
│   └── index.html      # Social feed
├── profile/
│   └── index.html      # User profile
├── js/
│   ├── auth.js         # Login/register form toggle
│   └── modal.js        # New post modal
├── css/
│   ├── input.css       # Tailwind source
│   └── style.css       # Compiled output
└── assets/
    └── img/            # Logo and images
```

### Installation

```bash
git clone https://github.com/AlexanderLislelid/css-frameworks-ca.git
cd css-frameworks-ca
npm install
```

### Development

Starts Tailwind in watch mode, recompiling `css/style.css` on every change:

```bash
npm run dev
```

Then open `index.html` in your browser (for example with the Live Server extension in VS Code).

### Build for production

Outputs a minified `css/style.css`:

```bash
npm run build
```
