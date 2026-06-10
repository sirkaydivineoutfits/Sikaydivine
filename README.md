# Sirkay Divine Outfits - Luxury Fashion Website

A complete, modern, and responsive luxury fashion website built for Sirkay Divine Outfits. This project uses vanilla HTML5, CSS3, and JavaScript, making it lightweight, fast, and easy to edit without needing complex build tools or frameworks.

## 🌟 Features

- **Modern Luxury Design**: Premium black, gold, white, and soft gray color palette.
- **Fully Responsive**: Looks perfect on mobile phones, tablets, and desktop computers.
- **Interactive Elements**: Smooth scrolling, sticky navigation, mobile menu, and scroll animations.
- **SEO Optimized**: Includes meta tags, Open Graph tags, and semantic HTML structure.
- **Accessible**: Keyboard navigation support and ARIA considerations.
- **No Dependencies**: Built entirely with vanilla web technologies.
- **Ready for Deployment**: Optimized for GitHub Pages or any static file hosting.

## 📁 Project Structure

```
/sirkay-divine-outfits
│
├── index.html          # Main HTML file containing all sections
├── style.css           # All styling and responsive design rules
├── script.js           # Interactive features and animations
├── README.md           # Project documentation
│
└── images/             # Directory for all website images
    ├── hero.jpg        # Main hero section background
    ├── design1.jpg     # Placeholder image 1
    ├── design2.jpg     # Placeholder image 2
    ├── design3.jpg     # Placeholder image 3
    ├── design4.jpg     # Placeholder image 4
    └── logo-placeholder.jpg # Brand logo placeholder
```

## 🛠️ How to Edit Content

The code has been heavily commented to make editing easy for non-developers. Look for `<!-- EDIT: ... -->` comments in the HTML file.

### 1. Changing Text Content
Open `index.html` in any text editor (like VS Code, Notepad, or TextEdit). Find the text you want to change and replace it. For example:
```html
<!-- Change this -->
<h1 class="hero-title">Designing Confidence Through Fashion</h1>

<!-- To this -->
<h1 class="hero-title">Your New Headline Here</h1>
```

### 2. Replacing Images
1. Add your new images to the `images/` folder.
2. Open `index.html` and find the image tag you want to update.
3. Change the `src` attribute to point to your new image:
```html
<!-- Change this -->
<img src="images/hero.jpg" alt="Luxury Fashion Hero">

<!-- To this -->
<img src="images/your-new-image.jpg" alt="Description of your image">
```

### 3. Updating Contact Information
Find the Contact section in `index.html` and update the phone, email, and location details:
```html
<a href="tel:+2347033637456" class="contact-link">+234 703 363 7456</a>
<a href="mailto:info@sirkaydivinoutfits.com" class="contact-link">info@sirkaydivinoutfits.com</a>
```

### 4. Setting Up the Contact Form
The contact form is currently set up to use Formspree. To make it work:
1. Go to [Formspree](https://formspree.io/) and create a free account.
2. Create a new form and get your unique Form ID.
3. Update the `action` attribute in the form tag in `index.html`:
```html
<form class="contact-form" id="contactForm" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

### 5. Changing Colors
Open `style.css` and look at the top of the file. You can easily change the entire color scheme by updating the CSS variables:
```css
:root {
    /* Colors */
    --color-black: #0f0f0f;
    --color-gold: #d4af37; /* Change this hex code to change the primary accent color */
    --color-white: #ffffff;
    --color-gray: #f5f5f5;
}
```

## 🚀 How to Deploy to GitHub Pages

This project is perfectly structured for free hosting on GitHub Pages.

1. Create a GitHub account if you don't have one.
2. Create a new repository named `sirkay-divine-outfits`.
3. Upload all the files from this folder to your new repository.
4. Go to your repository **Settings**.
5. Navigate to the **Pages** section on the left sidebar.
6. Under "Build and deployment", select **Deploy from a branch**.
7. Under "Branch", select `main` (or `master`) and click **Save**.
8. Wait a few minutes, and your website will be live at `https://yourusername.github.io/sirkay-divine-outfits/`.

## 📱 Testing Locally

To view the website on your computer before deploying:
1. Simply double-click the `index.html` file to open it in your default web browser.
2. For a better experience, use a local server extension like "Live Server" in VS Code.

---
*Designed and developed for Sirkay Divine Outfits.*
