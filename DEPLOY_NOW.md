# Deploy StitchSpace to Vercel - Step by Step

## 🚀 Quick Deploy via Dashboard (Easiest)

### Step 1: Push to GitHub (if not already done)
```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/StitchSpace.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select your StitchSpace repository
4. Vercel will auto-detect Vite settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"
6. Wait ~30 seconds
7. Your site is live! 🎉

## 🔧 Deploy via CLI

### Step 1: Login
```bash
npx vercel login
```

### Step 2: Deploy
```bash
npx vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No** (first time)
- Project name? **stitchspace** (or press Enter)
- Directory? **./** (press Enter)
- Override settings? **No** (press Enter)

### Step 3: Deploy to Production
```bash
npx vercel --prod
```

## 📝 Your Project Settings

Vercel will automatically detect:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

## 🌐 After Deployment

You'll get:
- A live URL like: `https://stitchspace-xxx.vercel.app`
- Automatic HTTPS
- Global CDN
- Custom domain support (add later)

## 🔄 Future Updates

Every time you push to GitHub:
- Vercel automatically rebuilds and deploys
- Preview deployments for pull requests
- Instant rollback if needed

