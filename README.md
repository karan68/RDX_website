# 🚀 Echo Nest - Laptop Showcase Platform

A modern, responsive laptop showcase website built with React, TypeScript, and Tailwind CSS. Echo Nest helps users discover the perfect laptop for their needs with an immersive video experience and detailed specifications.

## ✨ Features

- **🎯 Persona-Based Browsing**: Dedicated pages for Students, Creators, and Gamers
- **🎥 Interactive Video Previews**: Hover over laptops to see video demonstrations
- **📊 Smart Filtering**: Filter by price range and usage category
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚡ High Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Beautiful interface with smooth animations and transitions
- **📋 Detailed Specs**: View comprehensive laptop specifications in an elegant overlay

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: Netlify (configured)
- **Backend**: Node.js/Express (API routes)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karan68/echo-nest.git
   cd echo-nest
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 📁 Project Structure

```
echo-nest/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── site/          # Site-specific components
│   │   └── ui/            # UI library components (shadcn/ui)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page (all laptops)
│   │   ├── Gaming.tsx     # Gaming laptops
│   │   ├── Creator.tsx    # Creator laptops
│   │   └── Student.tsx    # Student laptops
│   └── global.css         # Global styles and animations
├── server/                # Backend API
├── shared/                # Shared types and data
│   └── laptops.ts         # Laptop data and types
├── public/                # Static assets
│   └── assets/            # Videos and images
├── netlify/               # Netlify functions
└── netlify.toml          # Netlify deployment config
```

## 🎮 Usage

### Browse Laptops
- **Home Page**: View all laptops with filtering options
- **Student Page**: Laptops optimized for studying and productivity
- **Creator Page**: High-performance laptops for content creation
- **Gaming Page**: Gaming laptops with dedicated graphics

### Interactive Features
- **Hover Preview**: Hover over laptop cards to see video demos
- **Specs Overlay**: Click "View specs" to see detailed specifications
- **Price Filtering**: Filter by budget ranges (40K, 50K, 60K, 70K, 80K, 90K)
- **Category Filtering**: Filter by usage type (Student, Creator, Gaming)

## 🔧 Configuration

### Adding New Laptops

Edit the `shared/laptops.ts` file to add new laptop entries:

```typescript
{
  title: "Your Laptop Model",
  specs: "Processor · RAM · Storage",
  priceSegment: "60K", // 40K, 50K, 60K, 70K, 80K, 90K
  usage: "Student", // Student, Creator, Gaming
  image: "/assets/laptop_image.jpg"
}
```

### Customizing Videos

Replace the video files in `public/assets/`:
- `main_loop.mp4` - Home page background video
- `gaming_loop.mp4` - Gaming page background video
- `creator_loop.mp4` - Creator page background video
- `students_loop.mp4` - Student page background video
- `laptop_video.mp4` - Laptop preview video

## 🚀 Deployment

### Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Your site will be live at: `https://your-site-name.netlify.app`

### Alternative Deployment Options

- **Vercel**: Import repository at [vercel.com](https://vercel.com)
- **GitHub Pages**: Enable in repository settings
- **Railway**: Deploy at [railway.app](https://railway.app)

## 🎨 Customization

### Styling
- Modify `client/global.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit component files for specific styling changes

### Animations
The project includes smooth animations for:
- Modal transitions (scale in/out)
- Specs overlay (slide up/down)
- Background fades
- Hover effects

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/karan68/echo-nest/issues) page
2. Create a new issue with detailed description
3. Include screenshots and error messages if applicable

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool
- [Netlify](https://netlify.com/) - Hosting platform

---

**Built with ❤️ for laptop enthusiasts**

🌐 **Live Demo**: [Your Netlify URL]
