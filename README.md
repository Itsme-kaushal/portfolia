# Kaushal Singh - Portfolio Website

A modern, responsive portfolio website built with Angular showcasing my experience as a Backend Engineer specializing in Nest.js, Flutter, and cloud technologies.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean and professional interface with smooth animations
- **Interactive Components**: Dynamic content with hover effects and transitions
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Animated skill bars and technology stack display
- **Project Portfolio**: Filterable project gallery with detailed descriptions
- **Social Media Integration**: Links to all social platforms

## Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Eye-catching introduction with animated text and floating icons
3. **About**: Personal information, experience timeline, and statistics
4. **Skills**: Technical skills with progress bars, tools, and certifications
5. **Projects**: Filterable project showcase with live demos and source code links
6. **Contact**: Contact form and contact information
7. **Footer**: Links, social media, and newsletter signup

## Technologies Used

- **Frontend**: Angular 17, TypeScript, HTML5, CSS3
- **Styling**: Custom CSS with CSS Variables, Flexbox, Grid
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Animations**: CSS Animations and Transitions
- **Forms**: Angular Reactive Forms

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Angular CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

To build the project for production:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/app/components/hero/hero.component.html` - Name and introduction
- `src/app/components/about/about.component.ts` - Experience and statistics
- `src/app/components/skills/skills.component.ts` - Skills and certifications
- `src/app/components/projects/projects.component.ts` - Project details
- `src/app/components/contact/contact.component.ts` - Contact information

### Styling

The main styles are located in:
- `src/styles.css` - Global styles and CSS variables
- Individual component CSS files for specific styling

### Colors and Themes

Modify the CSS variables in `src/styles.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... other variables */
}
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.component.*
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
├── styles.css
├── index.html
└── main.ts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Kaushal Singh - singhkaushal500@gmail.com

Project Link: [https://github.com/kaushalsingh/portfolio-website](https://github.com/kaushalsingh/portfolio-website)

---

⭐ Star this repository if you found it helpful!