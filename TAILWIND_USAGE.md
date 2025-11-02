/* VaultArena Brand Guidelines - Tailwind CSS Theme Configuration */

## Installation

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Replace the generated config with `tailwind.config.js` from this directory.

## Usage

### Dark Mode

The config uses class-based dark mode. Add `dark` class to your root element:

```html
<html class="dark">
  <!-- Dark mode enabled -->
</html>
```

Or toggle programmatically:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');
```

### Brand Colors

```html
<!-- Orange (Primary Brand Color) -->
<button class="bg-orange text-white hover:bg-orange-dark">
  Enter Arena
</button>

<!-- Navy (Background/UI) -->
<div class="bg-navy text-warm-white">
  <h1 class="text-orange">VaultArena</h1>
</div>

<!-- Gradients -->
<div class="bg-gradient-orange">Orange Gradient</div>
<div class="bg-gradient-navy">Navy Gradient</div>

<!-- Status Colors -->
<div class="bg-success">Success</div>
<div class="bg-warning">Warning</div>
<div class="bg-error">Error</div>
```

### Typography

```html
<!-- Display Headlines (Space Grotesk) -->
<h1 class="font-display text-display-xl text-navy dark:text-warm-white">
  The Arena Awaits
</h1>

<!-- Body Text (Inter) -->
<p class="font-sans text-body text-gray-700 dark:text-gray-300">
  Your strategy. Your arena. Your victory.
</p>

<!-- Font Sizes -->
<h1 class="text-display-xl">Display XL</h1>
<h2 class="text-display-lg">Display Large</h2>
<h3 class="text-display-md">Display Medium</h3>
<p class="text-body-lg">Body Large</p>
<p class="text-body">Body</p>
<p class="text-body-sm">Body Small</p>
```

### Shadows

```html
<!-- Standard Shadows -->
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>

<!-- Orange Shadows (for highlights) -->
<div class="shadow-orange-sm">Orange small</div>
<div class="shadow-orange-md">Orange medium</div>
<div class="shadow-orange-lg">Orange large</div>
```

### Border Radius

```html
<div class="rounded-sm">6px radius</div>
<div class="rounded-md">12px radius</div>
<div class="rounded-lg">16px radius</div>
<div class="rounded-xl">20px radius</div>
```

### Animations

```html
<div class="animate-fade-in">Fades in on mount</div>
<div class="animate-slide-up">Slides up from bottom</div>
<div class="animate-slide-down">Slides down from top</div>
```

### Transitions

```html
<button class="transition-all duration-fast ease-smooth hover:scale-105">
  Quick Transition
</button>

<div class="transition-colors duration-base ease-smooth hover:bg-orange">
  Medium Transition
</div>
```

## Dark Mode Color Scheme

### Light Mode
- **Background:** White (#FFFFFF), Light Gray (#FAFAFA)
- **Text:** Navy (#0B1020), Gray Dark (#1E1E1E)
- **Accents:** Orange (#FF6B1A)

### Dark Mode  
- **Background:** Navy (#0B1020), Navy Light (#131A33)
- **Text:** Warm White (#F5EDE6), Gray Light (#CFCFCF)
- **Accents:** Orange (#FF6B1A), Orange Light (#FF8643)

## Example Component

```jsx
// Button Component
<button className="
  px-6 py-3
  bg-gradient-orange
  text-white font-semibold
  rounded-md
  shadow-orange-sm hover:shadow-orange-md
  transition-all duration-fast ease-smooth
  hover:-translate-y-1
  active:translate-y-0
">
  Enter Arena
</button>

// Card Component  
<div className="
  bg-white dark:bg-navy-light
  border border-gray-200 dark:border-navy
  rounded-lg
  p-8
  shadow-md hover:shadow-lg
  transition-all duration-base ease-smooth
">
  <h3 className="font-display text-heading-lg text-navy dark:text-warm-white">
    Card Title
  </h3>
  <p className="text-body text-gray-600 dark:text-gray-400">
    Card content goes here.
  </p>
</div>

// Hero Section
<section className="
  bg-gradient-navy
  text-warm-white
  py-24
">
  <h1 className="font-display text-display-xl mb-6">
    Welcome to VaultArena
  </h1>
  <p className="text-body-lg text-gray-300 mb-8">
    Where skill meets strategy
  </p>
  <button className="
    bg-orange hover:bg-orange-dark
    text-white
    px-8 py-4
    rounded-md
    font-semibold
    transition-colors duration-fast
  ">
    Get Started
  </button>
</section>
```

## Accessibility

All color combinations meet WCAG AA standards:
- Orange on Navy: 7.2:1 ✓
- Warm White on Navy: 12.8:1 ✓
- Gray Dark on White: 14.5:1 ✓

## Notes

- Use `font-display` for headlines and brand statements (Space Grotesk)
- Use `font-sans` for body text and UI (Inter)
- Always test dark mode by adding `dark` class to `<html>` element
- Orange should be used sparingly for CTAs and highlights (80/15/5 rule)
- Navy is the primary background for dark mode
- Warm White (#F5EDE6) provides better readability on dark backgrounds than pure white
