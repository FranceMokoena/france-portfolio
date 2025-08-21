@echo off
echo 🚀 Deploying France Witness Mokoena Portfolio to Vercel
echo ==================================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
npm install

echo 🔍 Checking for git repository...
if not exist ".git" (
    echo ⚠️  Initializing git repository...
    git init
)

echo 📝 Adding files to git...
git add .

echo 💾 Committing changes...
git commit -m "Deploy portfolio website with SEO optimization"

echo ✅ Local git setup complete!
echo.
echo 📋 Next Steps:
echo 1. Create a GitHub repository at: https://github.com/new
echo    - Repository name: france-portfolio
echo    - Make it public
echo    - Don't initialize with README (we already have one)
echo.
echo 2. Run these commands:
echo    git remote add origin https://github.com/FranceMokoena/france-portfolio.git
echo    git push -u origin main
echo.
echo 3. Deploy to Vercel:
echo    - Go to https://vercel.com
echo    - Sign up/Login with GitHub
echo    - Click 'New Project'
echo    - Import your france-portfolio repository
echo    - Click 'Deploy'
echo.
echo 🎉 Your portfolio will be live at: https://france-portfolio.vercel.app
echo.
echo 🌐 For free custom domain:
echo    - Use Vercel's free subdomain: france-portfolio.vercel.app
echo    - Or get free domain from Freenom: francewitnessmokoena.tk
echo    - Or use GitHub Pages: francemokoena.github.io
echo.
echo ✨ SEO Optimization Complete!
echo    Your site is optimized for:
echo    - 'FRANCE WITNESS MOKOENA'
echo    - 'WEB DEVELOPER'
echo    - 'APP DEVELOPER'
echo    - 'SOFTWARE DEVELOPER'
echo.
pause
