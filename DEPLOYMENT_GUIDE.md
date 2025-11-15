# Deployment Guide - Hawd Climate Guardian Website

## Step-by-Step Deployment Guide

### Option 1: Deploy to Vercel (Recommended - FREE)

Vercel is perfect for React/Vite applications and offers:
- ✅ Free hosting
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Easy custom domain configuration

#### Steps to Deploy on Vercel:

1. **Prepare Your Code**
   ```bash
   # Make sure you're in the project directory
   cd C:\Users\OMEN\Downloads\hawd-eco-web-main\hawd-eco-web-main
   
   # Build the project to test
   npm run build
   ```

2. **Create GitHub Repository (if not already)**
   - Go to https://github.com
   - Click "New Repository"
   - Name it: `hawd-climate-guardian`
   - Make it Public or Private
   - DON'T initialize with README (you already have code)

3. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hawd Climate Guardian website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hawd-climate-guardian.git
   git push -u origin main
   ```

4. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" (use GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Wait 2-3 minutes for deployment

5. **You'll Get a Free URL**
   - Example: `hawd-climate-guardian.vercel.app`
   - Your site is now LIVE! 🎉

---

### Option 2: Deploy to Netlify (Alternative - FREE)

Similar to Vercel, great for static sites.

#### Steps:

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Get Your Free URL**
   - Example: `hawd-climate-guardian.netlify.app`

---

### Option 3: Deploy to GitHub Pages (FREE)

Good option but requires some configuration for React Router.

#### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (add these lines)
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/hawd-climate-guardian",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repo settings
   - Pages section
   - Source: `gh-pages` branch
   - Save

---

## Buying and Configuring a Custom Domain

### Step 1: Choose a Domain Name

**Suggested domains for your NGO:**
- `hawdclimateguardian.org` (Best for NGOs)
- `hawdclimate.org`
- `hawdclimateaction.org`
- `climatehawd.org`

**Where to Buy:**

1. **Namecheap** (Recommended - Affordable)
   - Website: https://www.namecheap.com
   - .org domain: ~$12-15/year
   - Great support
   - Free WHOIS privacy

2. **Google Domains** (Now Squarespace)
   - Website: https://domains.google.com
   - .org domain: ~$20/year
   - Easy to use
   - Good for beginners

3. **Cloudflare** (Cheapest)
   - Website: https://www.cloudflare.com/products/registrar
   - .org domain: ~$9/year (at cost)
   - Includes free CDN and security

4. **GoDaddy** (Popular but more expensive)
   - Website: https://www.godaddy.com
   - .org domain: ~$15-20/year
   - Watch for renewal prices

### Step 2: Purchase Your Domain

**On Namecheap (Example):**

1. Go to https://www.namecheap.com
2. Search for your desired domain
3. Add to cart (get .org for NGO credibility)
4. Create account or sign in
5. Complete payment (~$12-15)
6. You'll receive confirmation email

**Important:** Enable "Auto-Renew" to avoid losing your domain!

---

## Connecting Domain to Your Hosting

### For Vercel (Most Common):

1. **In Vercel Dashboard**
   - Open your project
   - Go to "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain (e.g., `hawdclimateguardian.org`)
   - Click "Add"

2. **Vercel Will Show DNS Records to Add:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **In Your Domain Registrar (Namecheap):**
   - Go to Domain List
   - Click "Manage" on your domain
   - Go to "Advanced DNS" tab
   - Add the DNS records Vercel provided:
     
   **Add A Record:**
   - Type: A Record
   - Host: @
   - Value: 76.76.21.21
   - TTL: Automatic

   **Add CNAME Record:**
   - Type: CNAME Record
   - Host: www
   - Value: cname.vercel-dns.com
   - TTL: Automatic

4. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours
   - Check status: https://dnschecker.org

5. **Verify in Vercel**
   - Once DNS propagates, Vercel will automatically verify
   - SSL certificate will be issued (HTTPS)
   - Your site will be live at your custom domain! 🎉

---

### For Netlify:

1. **In Netlify Dashboard**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain
   - Click "Verify"

2. **Netlify Will Provide DNS Records**
   - Usually 1-2 A records or a CNAME

3. **Add Records to Your Domain Registrar**
   - Same process as Vercel above

---

### For Custom Nameservers (Advanced):

Some prefer using Cloudflare for free CDN and DDoS protection:

1. **Sign up at Cloudflare** (Free plan)
   - https://www.cloudflare.com

2. **Add Your Site**
   - Enter your domain name
   - Cloudflare will scan existing DNS records

3. **Update Nameservers at Your Registrar**
   - Cloudflare will provide 2 nameservers:
     ```
     blake.ns.cloudflare.com
     sara.ns.cloudflare.com
     ```
   - Go to your domain registrar
   - Find "Nameservers" or "DNS" settings
   - Change to "Custom Nameservers"
   - Enter the Cloudflare nameservers
   - Save

4. **Configure DNS in Cloudflare**
   - Add A records or CNAME as required by your host
   - Enable "Proxy" (orange cloud) for DDoS protection
   - Free SSL certificate included

---

## Complete Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Test deployment works on free URL
- [ ] Domain purchased
- [ ] DNS records configured
- [ ] Wait for DNS propagation
- [ ] Verify HTTPS/SSL is active
- [ ] Test all pages work
- [ ] Test contact form
- [ ] Test mobile responsiveness
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)

---

## Recommended Deployment Path

**For Your NGO, I Recommend:**

1. **Hosting:** Vercel (Free, fast, reliable)
2. **Domain:** Namecheap .org domain (~$12/year)
3. **CDN/Security:** Cloudflare (Free, optional but recommended)

**Total Cost:** ~$12-15 per year (just the domain)

**Timeline:**
- Deploy to Vercel: 15 minutes
- Buy domain: 10 minutes
- Configure DNS: 10 minutes
- DNS propagation: 30 mins - 24 hours
- **Total: ~1 hour active work**

---

## Post-Deployment Tasks

### 1. Submit to Search Engines

**Google Search Console:**
- Go to https://search.google.com/search-console
- Add your domain
- Submit sitemap: `https://yourdomain.org/sitemap.xml`

**Bing Webmaster Tools:**
- Go to https://www.bing.com/webmasters
- Add your site

### 2. Set Up Analytics

**Google Analytics (Free):**
- Go to https://analytics.google.com
- Create account
- Get tracking ID
- Add to your website (in index.html)

### 3. Set Up Email

**Professional Email Addresses:**
- info@hawdclimateguardian.org
- contact@hawdclimateguardian.org

**Options:**
- **Google Workspace** (Paid - $6/user/month)
- **Zoho Mail** (Free for 5 users)
- **Namecheap Email** (Cheap - $1/month)

### 4. Social Media

Create profiles matching your domain:
- Facebook: facebook.com/hawdclimateguardian
- Twitter/X: @HawdClimate
- LinkedIn: linkedin.com/company/hawd-climate-guardian

---

## Troubleshooting

### Domain Not Working?
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours
- Verify DNS records are correct
- Clear browser cache (Ctrl + Shift + Delete)

### SSL Certificate Issues?
- Wait for Vercel/Netlify to issue certificate (automatic)
- Usually takes 5-15 minutes after DNS propagates
- Check "Force HTTPS" is enabled in settings

### Site Not Loading?
- Check deployment logs in Vercel/Netlify
- Verify build was successful
- Check browser console for errors

---

## Support Resources

**Vercel Documentation:**
- https://vercel.com/docs

**Netlify Documentation:**
- https://docs.netlify.com

**Domain Help:**
- Namecheap Support: support.namecheap.com
- Live Chat available

**Need Help?**
- Vercel Discord: https://vercel.com/discord
- Stack Overflow: tag with `vercel`, `netlify`, or `deployment`

---

## Estimated Costs Summary

| Item | Provider | Cost | Frequency |
|------|----------|------|-----------|
| Hosting | Vercel/Netlify | **FREE** | Forever |
| Domain (.org) | Namecheap | $12-15 | Yearly |
| SSL Certificate | Vercel/Netlify | **FREE** | Included |
| CDN | Cloudflare | **FREE** | Optional |
| Email (Optional) | Zoho Mail | **FREE** | 5 users |
| **TOTAL** | | **$12-15/year** | |

---

**Ready to deploy? Follow the steps above and your NGO website will be live!**

Good luck! 🚀
