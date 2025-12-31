ZenQuotes - Goodreads Edition

A Node.js Express application that scrapes quotes from Goodreads and displays them in a clean, modern, fully responsive frontend with dark/light theme support.

Features

Dynamic Tags Section – Auto-generated scrollable tags fetched from Goodreads.

Quote Length Filter – Filter quotes by length:

All (default)

Short (<150 characters)

Long (≥150 characters)

Quote of the Day – Daily featured quote with fixed font size and countdown timer.

Smart Pagination – Preview format: 1 2 3 4 5 … 10000000.

Tag Filtering – Click any tag to filter quotes by category.

Share Functionality – Copy quotes to clipboard with one click.

Dark/Light Theme Toggle – Persistent theme preference.

Mobile-First Design – Fully responsive with clamp-based typography.

Real-Time Sync – Auto-refresh quotes every 60 seconds.

Smooth Animations – Page transitions with top-to-bottom and bottom-to-top effects.

Copyright Notice – Attribution footer for Goodreads source.

Latest Updates (v2.1)

Pagination Redesign – Format: "previous 1 2 3 4 5 6 7 8 9 … 99 100 next".

Previous/Next Buttons – Smart enable/disable logic.

Quick Access – First 9 pages always shown.

Dots Separator – For large page ranges; last 2 pages always visible.

Copyright Footer – Attribution to Goodreads at bottom of page.

Differentiated Typography – Quote of the Day vs. regular quotes.

Responsive Fonts – Clamp-based sizing for seamless scaling.

Recent Enhancements

Added /api/tags endpoint for dynamic tag fetching with 1-hour caching.

Differentiated Typography:

Quote of the Day: Fixed 1.15rem, consistent size.

Regular Quotes: Responsive clamp sizing (14px–16.5px).

Short/Long Quote Filters:

Filter buttons update dynamically on selection.

Mobile Typography Improvements:

Disabled text size adjust to prevent unwanted iOS zoom.

Responsive viewport meta tag.

Word-break and center alignment for readability.

Removed stats badges (Global Fetched, Available).

Enhanced tag chip styling with hover effects.

Added persistent theme selection using localStorage.

Smooth page transition animations with cascading staggered delays.

Project Structure
index.js           # Express server with quote/tag scraping APIs
public/index.html  # Single-page application with embedded CSS/JS
package.json       # Node.js dependencies

API Endpoints
Endpoint	Method	Description
/api/tags	GET	Returns all available quote tags (cached 1 hour).
/api/qotd	GET	Returns the Quote of the Day.
/api/quotes?page=1&tag=love	GET	Returns paginated quotes with optional tag filter.
/	GET	Serves the frontend.
Running the App
npm install
npm start


Server runs on: http://0.0.0.0:5000

Tech Stack

Backend: Node.js, Express, Axios, Cheerio

Frontend: Vanilla HTML, CSS, JavaScript

Styling: CSS Variables (themes), clamp() for responsive typography

Data Source: Goodreads (web scraping)

Color Themes

Light Mode (Default)

Primary: #000000

Background: #ffffff

Secondary BG: #f9f9f9

Text: #1a1a1a

Text Muted: #666666

Border: #eeeeee

Dark Mode

Primary: #ffffff

Background: #000000

Secondary BG: #111111

Text: #f0f0f0

Text Muted: #888888

Border: #222222

Theme toggled via localStorage and [data-theme="dark"] attribute on <html>.

Quote Length Threshold

Short Quotes: <150 characters

Long Quotes: ≥150 characters

Used by the "Short/Long" filters to help users find preferred quotes.

Typography System

Quote of the Day

Font: Georgia serif, italic

Size: Fixed 1.15rem

Line-height: 1.8

Letter-spacing: 0.3px

Center-aligned

Regular Quotes

Font: Georgia serif, italic

Size: Responsive clamp(14px, 2.8vw, 16.5px)

Line-height: Responsive clamp(1.45, 1.55, 1.65)

Letter-spacing: 0.15px

Mobile Optimization

Base font size: 16px (prevents iOS auto-zoom)

Text size adjust: 100% (webkit & standard)

Word-break: break-word

Text-align: center

Copyright Notice
© 2025 Goodreads Quotes. All quotes sourced from Goodreads.com


Location: Footer, centered

Font size: 0.75rem

Color: var(--text-muted)

Border-top: 1px solid

Padding: 2rem top

Theme-aware: Adapts to dark/light mode
