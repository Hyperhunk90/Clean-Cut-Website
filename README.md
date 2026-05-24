# Clean Cut Property Maintenance L.L.C. Website

A fast, static, mobile-first website built for local SEO across Central, Baton Rouge, Denham Springs, and Pride, Louisiana. No build step, no frameworks, no database. Plain HTML, CSS, and a small JavaScript file. It loads quick and ranks for local searches.

## What is in here

```
cleancut/
  index.html              Home page
  services.html           All services with anchor links
  about.html              Will and Shelby story
  service-areas.html      Service area hub
  contact.html            Quote form and contact info
  areas/
    central-la.html       Local landing page (home base)
    baton-rouge.html      Local landing page
    denham-springs.html   Local landing page
    pride-la.html         Local landing page
  css/style.css           Full design system
  js/main.js              Menu, scroll effects, quote form
  assets/img/             Logo and your real job photos
  assets/textures/        Bark, soil, grass, and divider art
  robots.txt              Tells search engines to index the site
  sitemap.xml             Lists every page for Google
  site.webmanifest        App icon and theme info
```

## Step 1. Put it on GitHub

1. Make a free account at github.com if you do not have one.
2. Create a new repository. Name it something like `cleancut-website`. Keep it public.
3. Upload every file and folder in this `cleancut` folder to the repository. You drag and drop them into the GitHub upload screen, or use git from your computer.
4. Commit the upload.

## Step 2. Connect it to Hostinger

Hostinger gives you two clean ways to do this. Pick one.

**Option A. Git deployment (recommended, auto-updates)**

1. Log into Hostinger and open hPanel.
2. Go to Websites, then your domain, then Advanced, then GIT.
3. Paste your GitHub repository link and set the branch to `main`.
4. Set the install path to your public folder (usually `public_html`).
5. Deploy. Every time you push a change to GitHub, you redeploy with one click.

**Option B. Manual upload (simplest one-time)**

1. In hPanel open the File Manager.
2. Open the `public_html` folder.
3. Upload every file and folder from this project into `public_html`. The `index.html` must sit at the top of `public_html`, not inside a subfolder.
4. Visit your domain. The site is live.

## Step 3. Turn on the quote form (5 minutes, free)

Right now the contact form works in fallback mode. When a visitor submits it, it opens their email app with a message addressed to you. That works, but a hosted form is cleaner and sends straight to your inbox.

1. Go to web3forms.com and enter your email (`cleancutpm225@gmail.com`). They send you a free access key.
2. Open `contact.html` in a text editor.
3. Find this line:
   `<input type="hidden" name="access_key" value="WEB3FORMS_ACCESS_KEY">`
4. Replace `WEB3FORMS_ACCESS_KEY` with the key they emailed you.
5. Save and re-upload `contact.html` (or push to GitHub if you used Option A).

Now every quote request lands in your inbox automatically.

## Step 4. Confirm your details

A few placeholders need your real info. Search and replace across all files.

- **Domain.** Every page uses `https://www.cleancutpropertymaintenance.com`. If your real domain differs, find and replace it in all `.html` files, plus `robots.txt` and `sitemap.xml`.
- **Email.** `cleancutpm225@gmail.com` is set as your contact email. Change it everywhere if you use a different one.
- **Phone.** `225-975-8063` is set as your number, both as text and as click-to-call links (`tel:+12259758063`). Confirm it is right.
- **Hours.** Set to Monday through Friday 7a to 6p and Saturday 8a to 3p. Edit in the footer and `contact.html` if they change.

## Step 5. Swap the sample reviews for real ones

The home page shows three sample testimonials so the section is not empty. Replace them with real Google reviews as soon as you collect a few.

1. Open `index.html`.
2. Find the testimonials section (search for `quote-card`).
3. Replace the sample quotes, names, and towns with real ones.
4. Ask happy customers to leave you a Google review. Real reviews lift your local ranking more than almost anything else.

## Step 6. Link your social profiles (optional, good for SEO)

If you run a Facebook or Instagram page, add the links so Google connects them to your business.

1. Open `index.html`.
2. Find the structured data block near the top (search for `LawnCareService`).
3. Add this inside that block, right before the closing brace:
   ```
   "sameAs": [
     "https://www.facebook.com/YOURPAGE",
     "https://www.instagram.com/YOURPAGE"
   ],
   ```

## Step 7. Tell Google you exist

1. Set up a free Google Business Profile at business.google.com. Use the exact same business name, address, and phone you see on this site. Matching details help you rank.
2. Add your site to Google Search Console at search.google.com/search-console.
3. Submit your sitemap there: `https://www.cleancutpropertymaintenance.com/sitemap.xml`.

That gets you indexed and shows you what people search to find you.

## Editing tips

- All text lives in the `.html` files. Open one in any text editor and change the words between the tags.
- Colors and fonts live in `css/style.css` at the top, under the variables block. Change one value and it updates the whole site.
- To add a new job photo, drop it in `assets/img/` and point an `<img src="">` tag at it. Keep photos under about 300 KB so pages stay fast.
- The favicon (the little tab icon) uses `assets/img/logo-sm.png`. Replace that file to change it.

## How the form behaves

- **Key set:** submissions post to Web3Forms and arrive in your inbox. The visitor sees a thank-you message.
- **Key not set:** the form opens the visitor's email app with their details pre-filled to your address. Nothing breaks either way.

Questions on any step, the code is commented and plain. You own all of it.
