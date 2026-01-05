# StitchSpace Deployment Guide

## Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   vercel
   ```
   Follow the prompts to:
   - Login to Vercel (or create account)
   - Link your project
   - Deploy!

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy!

### Option 2: Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

3. **Or via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder
   - Or connect GitHub for continuous deployment

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Build Output

Your built files are in the `dist` folder. You can:
- Upload the `dist` folder to any static hosting service
- Use it with any CDN
- Deploy to AWS S3, Firebase Hosting, etc.

## Environment Variables

If you need environment variables later, create a `.env` file:
```
VITE_API_URL=your_api_url
```

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Routing issues**: Vercel/Netlify handle React Router automatically
- **Images not loading**: Check image URLs are accessible publicly

