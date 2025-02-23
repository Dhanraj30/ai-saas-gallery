# Gallery AI - Perfect Format for Every Platform

![Gallery AI Logo](https://your-logo-url.com)

Gallery AI is a SaaS application that leverages artificial intelligence to automatically optimize images and videos for various social media platforms. With just one upload, your content is perfectly formatted for every platform, saving you time and ensuring consistent quality across all your social media presence.

## 🌟 Features

### Intelligent Format Optimization
- Automatic resizing and formatting for all major social media platforms
- Smart cropping that preserves the key elements of your content

### Platform Support
- Instagram (Posts, Stories, Reels)
- Facebook (Timeline, Stories, Ads)
- Twitter (Posts, Cards)
- LinkedIn (Posts, Company Pages)
- TikTok
- YouTube (Thumbnails, Channel Art)

### AI-Powered Enhancements
- Smart object detection and focus
- Quality optimization while maintaining file size requirements
- Aspect ratio optimization per platform

### User Features
- Drag-and-drop interface
- Bulk upload support
- Template management
- Project organization
- Cloud storage integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database (We use Neon DB)
- Cloudinary account for image processing
- Clerk account for authentication

### Environment Variables
Create a `.env` file in the root directory with the following:

```env
DATABASE_URL="your-neon-db-url"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-cloudinary-key"
CLOUDINARY_API_SECRET="your-cloudinary-secret"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-public-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dhanraj30/ai-saas-gallery.git
cd gallery-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Start the development server:
```bash
npm run dev
```

### Docker Deployment

1. Build and run with Docker Compose:
```bash
docker-compose build
```
```bash
docker-compose up -d
```

2. View logs:
```bash
docker-compose logs -f
```


## 💻 Tech Stack

- **Frontend**: Next.js 15, React, TailwindCSS, DaisyUI, TypeScript
- **Backend**: Node.js, Prisma
- **Database**: PostgreSQL (Neon)
- **Authentication**: Clerk
- **Image Processing**: Cloudinary
- **Deployment**: Docker, Vercel

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Links

- [Website](https://galleryai.com)

Built with ❤️ by the Gallery AI Team