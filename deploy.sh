#!/bin/bash

echo "🚀 Deploying France Witness Mokoena Portfolio to Vercel"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

echo -e "${BLUE}🔍 Checking for git repository...${NC}"
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Initializing git repository...${NC}"
    git init
fi

echo -e "${BLUE}📝 Adding files to git...${NC}"
git add .

echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "Deploy portfolio website with SEO optimization"

echo -e "${GREEN}✅ Local git setup complete!${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Create a GitHub repository at: https://github.com/new"
echo "   - Repository name: france-portfolio"
echo "   - Make it public"
echo "   - Don't initialize with README (we already have one)"
echo ""
echo "2. Run these commands:"
echo -e "${BLUE}   git remote add origin https://github.com/FranceMokoena/france-portfolio.git${NC}"
echo -e "${BLUE}   git push -u origin main${NC}"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Sign up/Login with GitHub"
echo "   - Click 'New Project'"
echo "   - Import your france-portfolio repository"
echo "   - Click 'Deploy'"
echo ""
echo -e "${GREEN}🎉 Your portfolio will be live at: https://france-portfolio.vercel.app${NC}"
echo ""
echo -e "${YELLOW}🌐 For free custom domain:${NC}"
echo "   - Use Vercel's free subdomain: france-portfolio.vercel.app"
echo "   - Or get free domain from Freenom: francewitnessmokoena.tk"
echo "   - Or use GitHub Pages: francemokoena.github.io"
echo ""
echo -e "${GREEN}✨ SEO Optimization Complete!${NC}"
echo "   Your site is optimized for:"
echo "   - 'FRANCE WITNESS MOKOENA'"
echo "   - 'WEB DEVELOPER'"
echo "   - 'APP DEVELOPER'"
echo "   - 'SOFTWARE DEVELOPER'"
echo ""
