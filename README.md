# Cannabis Masters – Official Website

A modern, responsive web platform developed for Cannabis Masters, a South African cannabis retail business operating across multiple locations in Gauteng.

The platform is designed to strengthen the business's online presence, improve customer accessibility, showcase its product offerings, and provide educational information through a centralised digital experience.

**Live Website:** [https://dumanimbili.github.io/cannabis-masters/](https://dumanimbili.github.io/cannabis-masters/)

**GitHub Repository:** [https://github.com/DumaniMbili/cannabis-masters](https://github.com/DumaniMbili/cannabis-masters)

---

## Project Overview

Cannabis Masters aims to establish a stronger digital presence through a responsive website that connects customers with business information, product categories, educational resources, and physical store locations.

The initial development phase focuses on building the frontend experience, establishing the website's structure, and creating a foundation for future e-commerce functionality.

The longer-term vision is to evolve the platform into an integrated digital experience where customers can explore product information and, subject to the business's requirements, complete online purchases.

## Current Features

The initial website implementation includes:

- **Responsive Design:** Layouts optimised for desktop, tablet, and mobile devices.
- **Navigation:** Desktop navigation and a mobile-friendly hamburger menu.
- **Hero Section:** Introductory section highlighting the Cannabis Masters brand.
- **About Section:** Business introduction and brand positioning.
- **Product Categories:** Initial product category presentation.
- **Education Section:** Dedicated space for cannabis-related educational content.
- **Contact Integration:** Direct WhatsApp, telephone, and Instagram links.
- **Store Locator:** Individual location sections with Google Maps directions.
- **Footer:** Quick navigation links and social contact options.
- **Sticky Navigation:** Navigation remains accessible while users scroll.

## Technology Stack

The project uses the following technologies and development tools:

| Technology        | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| React             | Component-based frontend development            |
| JavaScript (ES6+) | Application logic and interactivity             |
| Vite              | Development server and production build tooling |
| CSS3              | Layout, styling and responsive design           |
| Lucide React      | Interface icons                                 |
| Font Awesome      | Brand icons                                     |
| ESLint            | Code quality and linting                        |
| Git               | Version control                                 |
| GitHub            | Source code hosting                             |
| GitHub Actions    | Automated build and deployment                  |
| GitHub Pages      | Website hosting                                 |

## Getting Started

To run the project locally, follow these instructions.

### Prerequisites

Ensure the following tools are installed:

- Node.js (version 24 or compatible)
- npm
- Git
- A code editor such as Visual Studio Code

### Installation

Clone the repository:

```bash
git clone https://github.com/DumaniMbili/cannabis-masters.git
```

Navigate into the project directory:

```bash
cd cannabis-masters
```

Install dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173/
```

Open this address in your browser to view the application.

### Production Build

To generate an optimised production build:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

The current project follows a standard React and Vite structure:

```text
cannabis-masters/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Deployment

The website is hosted using GitHub Pages, with GitHub Actions handling the deployment process.

The deployment workflow is configured to:

1. Trigger when changes are pushed to the `main` branch.
2. Check out the latest repository code.
3. Set up the Node.js environment.
4. Install project dependencies.
5. Generate the production build.
6. Upload the production files.
7. Deploy the website to GitHub Pages.

The Vite configuration includes the repository base path required for GitHub Pages hosting.

This provides an automated deployment pipeline, allowing updates to be published through the normal Git workflow.

## Development Roadmap

The project is being developed in phases.

### Phase 1 – Website Foundation

- [x] React and Vite project setup.
- [x] Initial website structure.
- [x] Responsive navigation.
- [x] Hero and About sections.
- [x] Product category presentation.
- [x] Education section.
- [x] Contact integration.
- [x] Store location information.
- [x] Responsive footer.
- [x] GitHub repository setup.
- [x] GitHub Pages deployment.

### Phase 2 – Content and Business Integration

- [ ] Finalise business information and branding assets.
- [ ] Obtain approved product descriptions and catalogue information.
- [ ] Refine website content.
- [ ] Incorporate business feedback.
- [ ] Complete the visual and responsive review.

### Phase 3 – Product Catalogue and E-commerce

- [ ] Develop a structured product catalogue.
- [ ] Implement individual product information pages.
- [ ] Introduce product categories and filtering.
- [ ] Develop shopping cart functionality.
- [ ] Implement the required online purchasing workflow.
- [ ] Evaluate backend and database requirements.
- [ ] Integrate appropriate payment and order management functionality.

### Phase 4 – Future Enhancements

- [ ] Expand educational resources.
- [ ] Improve search engine optimisation (SEO).
- [ ] Introduce additional customer-focused functionality.
- [ ] Evaluate analytics and website performance.

_The roadmap is subject to business requirements, available resources, and feedback._

## Project Status

**Current Status:** Active Development – Initial Website Deployed.

The first frontend implementation is publicly accessible through GitHub Pages. Development is currently focused on refining the website and gathering the business information required for the next phase.

The product catalogue, backend infrastructure, shopping cart, and online purchasing functionality are planned enhancements and have not yet been implemented.

---

## Author

**Dumani Mbili**

Software Engineering | Web Development | IT

[GitHub Profile](https://github.com/DumaniMbili)

---

_Developed for Cannabis Masters._
