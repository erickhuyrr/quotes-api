# ZenQuotes - Goodreads Edition

## Overview
A Node.js Express application that scrapes quotes from Goodreads and displays them in a clean, modern, fully responsive frontend with dark/light theme support.

## Features
- **Dynamic Tags Section** - Auto-generated scrollable tags fetched from Goodreads
- **Quote Length Filter** - Filter quotes by length (All, Short <150 chars, Long ≥150 chars)
- **Quote of the Day** - Daily featured quote with consistent fixed font size, countdown timer
- **Smart Pagination** - Preview format (1 2 3 4 5 ... 10000000) for easy navigation
- **Tag Filtering** - Click any tag to filter quotes by category
- **Share Functionality** - Copy quotes to clipboard with one click
- **Dark/Light Theme Toggle** - Persistent theme preference
- **Mobile-First Design** - Fully responsive with clamp-based responsive typography
- **Real-Time Sync** - Auto-refresh quotes every 60 seconds
- **Smooth Animations** - Page transitions with top-to-bottom and bottom-to-top animations
- **Copyright Notice** - Attribution footer for Goodreads source

## Latest Updates (v2.1)
- **Pagination Complete Redesign** - Format: "previous 1 2 3 4 5 6 7 8 9 … 99 100 next"
  - Previous/Next buttons with smart enable/disable
  - Shows first 9 pages for quick access
  - Dots separator for large page ranges
  - Last 2 pages always visible
  - Perfect for browsing thousands of pages
- **Copyright Footer Added** - Attribution to Goodreads at bottom of page
- Typography properly differentiated between QOTD and regular quotes
- Responsive fonts with clamp-based sizing for seamless scaling

## Recent Enhancements
- Added `/api/tags` endpoint for dynamic tag fetching with caching (1 hour)
- **NEW: Differentiated Typography**
  - **Quote of the Day**: Fixed 1.15rem, consistent size regardless of content
  - **Regular Quotes**: Responsive clamp sizing (14px to 16.5px based on 2.8vw viewport width)
  - Both with optimized line-height, letter-spacing, and center alignment
- **NEW: Short/Long Quote Length Filters**
  - All quotes (default)
  - Short quotes (< 150 characters)
  - Long quotes (≥ 150 characters)
  - Filter buttons update dynamically as user selects
- Enhanced mobile typography with:
  - Text size adjust disabled to prevent unwanted zoom on iOS
  - Responsive viewport meta tag (width=device-width, initial-scale=1)
  - Word-break and text-align center for better readability
- Removed stats badges ("Global Fetched", "Available")
- Enhanced tag chip styling with hover effects
- Fixed spacing and padding for mobile devices
- Added persistent theme selection using localStorage
- Smooth page transition animations
  - Quotes slide down from top when navigating forward (next page)
  - Quotes slide up from bottom when navigating backward (previous page)
  - Staggered animation delays for cascading effect
- Optimized typography: `html { font-size: 16px }`, body `1rem` with `1.6` line-height

## Project Structure
- `index.js` - Express server with quote/tag scraping APIs
- `public/index.html` - Single-page application with embedded CSS/JS
- `package.json` - Node.js dependencies

## API Endpoints
- `GET /api/tags` - All available quote tags (cached 1 hour)
- `GET /api/qotd` - Quote of the Day
- `GET /api/quotes?page=1&tag=love` - Paginated quotes with optional tag filter
- `GET /` - Serves the frontend

## Running the App
```bash
npm install
npm start
```
Server runs on `http://0.0.0.0:5000`

## Tech Stack
- **Backend**: Node.js, Express, Axios, Cheerio
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Styling**: CSS Variables for themes, CSS clamp() for responsive typography
- **Data Source**: Goodreads web scraping

## Documentation

### Copyright Notice
The application includes a copyright footer at the bottom of every page:
```
© 2025 Goodreads Quotes. All quotes sourced from Goodreads.com
```

**Purpose**: Provides attribution to Goodreads as the source of all quotes displayed on the platform.

**Location**: Footer section, centered with muted text styling
- Font size: 0.75rem (small, non-intrusive)
- Color: `var(--text-muted)` (respects dark/light theme)
- Border-top: 1px solid border for visual separation
- Padding: 2rem top margin, 2rem padding-top for breathing room

**Implementation**: 
- HTML footer div with inline styles in `public/index.html`
- Responsive on all screen sizes (mobile, tablet, desktop)
- Theme-aware (automatically adjusts color for dark/light mode)
- No user interaction required (display-only)

**User Visibility**: Always visible when scrolling to bottom of page, ensuring proper attribution at all times.

### Color Themes

**Light Mode (Default)**
- Primary: `#000000` (black)
- Background: `#ffffff` (white)
- Secondary BG: `#f9f9f9` (light gray)
- Text: `#1a1a1a` (dark gray)
- Text Muted: `#666666` (medium gray)
- Border: `#eeeeee` (light border)

**Dark Mode**
- Primary: `#ffffff` (white)
- Background: `#000000` (black)
- Secondary BG: `#111111` (dark gray)
- Text: `#f0f0f0` (light gray)
- Text Muted: `#888888` (medium gray)
- Border: `#222222` (dark border)

Themes are toggled via localStorage and applied using `[data-theme="dark"]` attribute on the HTML element.

### Quote Length Threshold
- **Short Quotes**: Text length < 150 characters
- **Long Quotes**: Text length ≥ 150 characters

This distinction is used by the "Short/Long" filters and helps users find quotes matching their preference.

### Typography System

**Quote of the Day**
- Font: Georgia serif, italic
- Size: Fixed 1.15rem (consistent regardless of quote length)
- Line-height: 1.8
- Letter-spacing: 0.3px
- Always centered with professional appearance

**Regular Quotes**
- Font: Georgia serif, italic
- Size: Responsive `clamp(14px, 2.8vw, 16.5px)`
- Line-height: Responsive `clamp(1.45, 1.55, 1.65)`
- Letter-spacing: 0.15px
- Adapts fluidly to viewport width

**Mobile Optimization**
- Base font size: 16px (prevents iOS auto-zoom)
- Text size adjust: 100% (both webkit and standard)
- Word-break: break-word (prevents overflow)
- Text-align: center (for better readability)
