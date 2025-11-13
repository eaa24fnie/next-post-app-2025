# Modul 4: Migrer til Tailwind CSS

## Oversigt

I dette modul vil du migrere hele applikationen fra CSS Modules til Tailwind CSS. Du vil lære at arbejde med utility-first CSS og se hvordan det kan forbedre din udviklingshastighed.

---

## Opgave 4.1: Installer Tailwind og VS Code Extension

**VIGTIGT: Installer VS Code Extension først!**

1. **Åbn VS Code Extensions (Cmd+Shift+X / Ctrl+Shift+X)**
2. **Søg efter: "Tailwind CSS IntelliSense"**
3. **Installer extensionen fra Tailwind Labs**
   - Denne extension giver dig autocomplete og preview af Tailwind classes
   - Du vil se farver, spacing og andre værdier når du skriver classes
   - Helt essentiel for at arbejde effektivt med Tailwind!

**Følg Next.js officielle dokumentation
(Gengivet nedenunder):**

https://nextjs.org/docs/app/getting-started/css#tailwind-css

**Installation (den nye måde i Next.js 16):**

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

**Konfigurer PostCSS:**

Opret `postcss.config.mjs` i roden af projektet:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {}
  }
};
```

**Opdater `app/globals.css`:**

Erstat alt indholdet med:

```css
@import "tailwindcss";
```

**Note:** Dette er den mindste konfiguration. Senere vil vi tilføje CSS variables og custom animations når vi migrerer komponenter.

**Verificer installation:**

Test at Tailwind virker ved at tilføje utility classes i en komponent - f.eks. i `app/page.js`:

```javascript
<h1 className="text-4xl font-bold">Test</h1>
```

Start development server: `npm run dev` og tjek at styling virker.

**Test VS Code Extension:**

Når du skriver `className="bg-` skulle du nu se autocomplete suggestions med farve preview! 🎨

---

## Opgave 4.2: Forstå Tailwind Utility Classes

**Hvad er Tailwind CSS?**

Tailwind er et "utility-first" CSS framework. I stedet for at skrive custom CSS, bruger du små, genbrugelige CSS klasser direkte i din JSX.

**Quick Reference - De 10 mest brugte classes:**

1. `flex` - Layout med flexbox
2. `p-4` - Padding 16px
3. `m-4` - Margin 16px
4. `bg-white` - Hvid baggrund
5. `text-gray-900` - Mørk tekst
6. `rounded-lg` - Afrundede hjørner
7. `shadow-md` - Mellemhård skygge
8. `hover:bg-blue-600` - Ændring ved hover
9. `w-full` - Fuld bredde
10. `gap-4` - Mellemrum mellem elementer

**Med disse 10 classes kan du style 80% af din app! 🎨**

**Design strategi:**

Vi holder det simpelt og bruger én konsistent "dark" stil gennem hele appen:
- Mørk baggrund: `bg-[#1a1a1a]` 
- Hvid baggrund til cards/komponenter: `bg-white`
- Mørk tekst: `text-[#ededed]` på mørke baggrunde, `text-black` på lyse
- Gråtoner til sekundær tekst: `text-gray-400`, `text-gray-600`

**Eksempel:**
```javascript
// Mørk baggrund med hvide cards
className="bg-black"  // Page baggrund
className="bg-white"  // Card baggrund
className="text-black" // Tekst på hvid baggrund
```

---

**Eksempel - Fra CSS Modules til Tailwind:**

```javascript
// TIDLIGERE med CSS Modules:
import styles from "./Nav.module.css";
<nav className={styles.nav}>
  <h1 className={styles.title}>Posts</h1>
</nav>

// CSS fil:
.nav {
  display: flex;
  padding: 1rem;
  background-color: #333;
}
.title {
  color: white;
  font-size: 1.5rem;
}
```

```javascript
// NU med Tailwind:
<nav className="flex p-4 bg-gray-800">
  <h1 className="text-white text-2xl">Posts</h1>
</nav>

// Ingen CSS fil nødvendig!
```

**De mest brugte Tailwind classes:**

**Layout:**

- `flex` = display: flex
- `grid` = display: grid
- `block` = display: block
- `hidden` = display: none

**Spacing (padding og margin):**

- `p-4` = padding: 1rem (16px)
- `px-4` = padding left og right: 1rem
- `py-4` = padding top og bottom: 1rem
- `pt-4` = padding-top: 1rem
- `pb-4` = padding-bottom: 1rem
- `m-4` = margin: 1rem
- `mx-auto` = margin left og right: auto (bruges til at centrere)
- `gap-4` = gap: 1rem (mellemrum mellem flex/grid børn)
- `space-y-4` = margin-top: 1rem mellem alle børn (vertical spacing)

**Skala (de mest brugte):**

- `0` = 0px
- `1` = 0.25rem (4px) - meget lille
- `2` = 0.5rem (8px) - lille
- `4` = 1rem (16px) - ⭐ standard, meget brugt
- `6` = 1.5rem (24px) - mellem
- `8` = 2rem (32px) - stor
- `12` = 3rem (48px) - meget stor

**Tip:** Start med at bruge `4` og `8`, tilpas derefter efter behov!

**Farver:**

- `bg-gray-800` = baggrund mørk grå
- `text-white` = hvid tekst
- `text-gray-600` = grå tekst
- Farver: `gray, red, blue, green, yellow, purple` osv.
- Nuancer: `50` (meget lys) → `500` (mellem) → `900` (meget mørk)

**Tommelfingerregel for nuancer:**

- `50-200` = Lyse farver (baggrunde, subtle highlights)
- `300-500` = Mellem farver (borders, sekundære elementer)
- `600-900` = Mørke farver (primær tekst, knapper, vigtige elementer)

**Eksempel:**

- `bg-blue-500` = Medium blå knap
- `hover:bg-blue-600` = Lidt mørkere ved hover
- `text-gray-900` = Næsten sort tekst (bedre end pure black!)
- `border-gray-300` = Lys grå border

**Typography:**

- `text-sm` = font-size: 0.875rem (14px)
- `text-base` = font-size: 1rem (16px)
- `text-lg` = font-size: 1.125rem (18px)
- `text-xl` = font-size: 1.25rem (20px)
- `text-2xl` = font-size: 1.5rem (24px)
- `font-bold` = font-weight: 700
- `font-semibold` = font-weight: 600

**Borders og Afrunding:**

- `border` = border: 1px solid
- `border-2` = border: 2px solid
- `rounded` = border-radius: 0.25rem
- `rounded-lg` = border-radius: 0.5rem
- `rounded-full` = border-radius: 9999px (cirkel)

**Hover og States:**

- `hover:bg-blue-600` = ændrer baggrund ved hover
- `hover:text-white` = ændrer tekst farve ved hover
- `transition` = tilføjer smooth transition

**Responsive Design:**

- `md:flex` = flex kun på medium screens og større
- `lg:text-2xl` = større tekst på large screens
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

**Praktisk øvelse - oversæt denne CSS:**

```css
.card {
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

<details>
<summary><strong>👉 Klik her for at se svaret</strong></summary>

```javascript
<div className="p-6 mb-4 bg-white rounded-lg shadow">
```

**Forklaring:**

- `p-6` = padding: 1.5rem
- `mb-4` = margin-bottom: 1rem
- `bg-white` = background-color: white
- `rounded-lg` = border-radius: 0.5rem
- `shadow` = box-shadow (Tailwind's standard skygge)

</details>

**Almindelige begynder-fejl at undgå:**

- ❌ `className="p4"` → ✅ `className="p-4"` (husk bindestreg!)
- ❌ `className="padding-4"` → ✅ `className="p-4"` (brug forkortelsen)
- ❌ Multiple classNames: `className="p-4" className="bg-white"`
  → ✅ `className="p-4 bg-white"` (alle classes i én string)
- ❌ `class="p-4"` → ✅ `className="p-4"` (React bruger className!)

**Hjælperessourcer:**

- Tailwind Docs: https://tailwindcss.com/docs
- Tailwind Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet
- VS Code Extension: "Tailwind CSS IntelliSense" (giver autocomplete!)

---

## Opgave 4.3: Migrer Nav Komponenten

**VIGTIG INSTRUKTION: Prøv først selv! 🎯**

Før du scroller ned til guiden, prøv at migrere Nav komponenten selv:

1. Åbn `components/Nav.js` og `components/Nav.module.css`
2. Se på CSS reglerne - hvad gør de?
3. Brug Opgave 4.2 som reference og prøv at oversætte CSS til Tailwind
4. Brug VS Code Tailwind IntelliSense til at finde de rigtige classes
5. Test i browseren

**Kun hvis du sidder fast i 10+ minutter, scroll ned til guiden! 👇**

---

<details>
<summary><strong>📖 Klik her for step-by-step guide (brug kun hvis nødvendigt)</strong></summary>

**Step-by-step guide til at migrere `Nav` komponenten:**

**1. Åbn `components/Nav.js` og `components/Nav.module.css`**

Analyser den nuværende styling. Hvad gør hver CSS regel?

**2. Oversæt CSS til Tailwind classes:**

Eksempel på den faktiske Nav styling i projektet:

```css
/* Nav.module.css */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 20px;
  background-color: var(--foreground);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
}

.navLink {
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
  color: var(--text-primary);
}

.navLink:hover {
  background-color: var(--background);
}

.active {
  background-color: var(--background);
}
```

**Bliver til Tailwind:**

```javascript
<nav className="fixed top-0 left-0 right-0 flex justify-center gap-8 p-5 bg-[#1a1a1a] border-b border-gray-800 z-100">
  <Link
    href="/posts"
    className="px-4 py-2 rounded-lg font-medium transition-all text-[#ededed] hover:bg-black">
    Posts
  </Link>
  {/* Active state: tilføj bg-black */}
</nav>
```

**Tip:** Bemærk brugen af `fixed` til at fastgøre navigation i toppen, og `z-[100]` til at sikre den ligger over andet indhold!

**3. Test i browseren**

- Gem filen
- Tjek at det ser ud som før
- Tjek hover effekter virker
- Test på forskellig skærmstørrelser

**4. Slet CSS Module filen**

Når alt virker: slet `Nav.module.css` og importer i `Nav.js`

**Almindelige fejl at undgå:**

- ❌ Glemme at fjerne CSS Module import
- ❌ Bruge `class` i stedet for `className`
- ❌ Glemme at teste hover states
- ❌ Ikke tjekke responsive design

</details>

---

## Opgave 4.4: Migrer UserAvatar Komponenten

**Nu er det din tur - UDEN guide! 💪**

Migrer `UserAvatar` komponenten til Tailwind helt selv.

**Tilladt hjælp:**

- Opgave 4.2 (utility classes reference)
- Tailwind dokumentation: https://tailwindcss.com/docs
- VS Code IntelliSense

**IKKE tilladt:**

- At scrolle ned til "Hjælp" sektionen før du har prøvet i minimum 15 minutter

**Checklist når du er færdig:**

- [ ] Billedet er cirkulært
- [ ] Billedet har en border
- [ ] Billedet fylder den rigtige størrelse
- [ ] CSS Module import er fjernet
- [ ] Det ser ud som før i browseren

---

<details>
<summary><strong>🆘 Hjælp (kun hvis du virkelig sidder fast efter 15+ minutter)</strong></summary>

````javascript
**Hjælp (kun hvis du virkelig sidder fast efter 15+ minutter)**

Den faktiske UserAvatar styling fra projektet:

```javascript
// UserAvatar med flex container og bruger info
<div className="flex items-center gap-3 mb-3">
  <img
    className="w-10 h-10 rounded-full object-cover shrink-0"
    src={image}
    alt={name}
  />
  <div className="flex flex-col gap-0.5">
    <h3 className="text-sm font-semibold m-0 text-black leading-tight">
      {name}
    </h3>
    <p className="text-xs m-0 text-gray-600 leading-tight">
      {title}
    </p>
  </div>
</div>
````

**Forklaring af classes:**

- `w-10 h-10` = width og height: 40px (matcher .avatarImage styling)
- `rounded-full` = perfekt cirkel
- `object-cover` = beskærer billede korrekt
- `flex-shrink-0` = forhindrer billedet i at krympe
- `flex flex-col` = stakker navn og titel vertikalt
- `gap-0.5` = meget lille mellemrum (2px) mellem navn og titel
- `leading-tight` = line-height: 1.2 for kompakt visning

**Note:** Ingen border i den faktiske design - kun cirkulært billede!

````

**Forklaring af classes:**

- `w-12 h-12` = width og height: 3rem (48px)
- `rounded-full` = perfekt cirkel
- `border-2` = 2px border
- `border-gray-300` = lys grå border farve
- `object-cover` = beskærer billede korrekt (sikrer det ikke strækkes)

**Størrelser til avatar:**

- Small: `w-8 h-8` (32px)
- Medium: `w-12 h-12` (48px)
- Large: `w-16 h-16` (64px)
- Extra large: `w-24 h-24` (96px)

</details>

---

## Opgave 4.5: Migrer PostCard Komponenten

**Udfordring: Del komponenten op i små dele! 🧩**

PostCard er den mest komplekse komponent indtil videre. I stedet for at give dig en komplet guide, skal du tænke systematisk:

**Din strategi:**

1. **Opdel komponenten mentalt:**

   - Container (article)
   - Header med bruger info (avatar + navn + titel)
   - Post billede
   - Caption tekst
   - Action buttons (View, Update, Delete)

2. **Migrer ét element ad gangen:**

   - Start med container
   - Test i browseren
   - Fortsæt med næste element
   - Test igen

3. **Brug "Inspicér Element" i browseren:**
   - Højreklik på PostCard → Inspicér
   - Se de nuværende CSS regler
   - Oversæt til Tailwind utilities

**Tilladt hjælp:**

- Du må se på Nav komponenten som inspiration
- Du må bruge Tailwind docs
- Du må bruge VS Code IntelliSense

**Når du er færdig, sammenlign med guiden nedenfor - er din løsning bedre eller dårligere? Hvorfor?**

---

<details>
<summary><strong>📋 Guide til sammenligning (åbn EFTER du har prøvet selv)</strong></summary>

**PostCard er mere kompleks - tag det i små skridt:**

**Step 1: Container**

```javascript
**📋 Guide til sammenligning (åbn EFTER du har prøvet selv)**

**PostCard styling fra den faktiske implementation:**

**Step 1: Container**

```javascript
**Step 1: Container**

```javascript
<article className="flex flex-col gap-3 p-5 rounded-xl bg-white transition-all cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-lg">
```

**Forklaring:**
- `flex flex-col` = vertical layout med flexbox
- `gap-3` = 12px mellemrum mellem elementer
- `p-5` = 20px padding
- `rounded-xl` = 12px border-radius
- `shadow-sm` = subtil skygge: 0 2px 8px rgba(0,0,0,0.05)
- `hover:-translate-y-1` = løft card 4px ved hover
- `hover:shadow-lg` = større skygge ved hover

**Step 2: Post billede**

```javascript
<img 
  className="w-full h-[250px] object-cover rounded-lg" 
  src={post.image} 
  alt={post.caption} 
/>
```

**Forklaring:**
- `h-[250px]` = fast højde på 250px
- `rounded-lg` = 8px border-radius på billedet

**Step 3: Post titel**

```javascript
<h3 className="text-base font-medium text-black mt-1 leading-snug">
  {post.caption}
</h3>
```

**Forklaring:**
- `text-base` = 16px font-size
- `font-medium` = 500 font-weight
- `leading-snug` = 1.4 line-height

**Tip:** Simpel styling med hvid baggrund til cards på mørk page baggrund!
````

**Forklaring:**

- `flex flex-col` = vertical layout med flexbox
- `gap-3` = 12px mellemrum mellem elementer
- `p-5` = 20px padding
- `rounded-xl` = 12px border-radius
- `shadow-sm` = subtil skygge: 0 2px 8px rgba(0,0,0,0.05)
- `hover:-translate-y-1` = løft card 4px ved hover
- `hover:shadow-lg` = større skygge ved hover

**Step 2: Post billede**

```javascript
<img className="w-full h-[250px] object-cover rounded-lg" src={post.image} alt={post.caption} />
```

**Forklaring:**

- `h-[250px]` = fast højde på 250px
- `rounded-lg` = 8px border-radius på billedet

**Step 3: Post titel**

```javascript
<h3 className="text-base font-medium text-black dark:text-[#ededed] mt-1 leading-snug">{post.caption}</h3>
```

**Forklaring:**

- `text-base` = 16px font-size
- `font-medium` = 500 font-weight
- `leading-snug` = 1.4 line-height

**Tip:** Den faktiske design bruger `var(--foreground)` og `var(--text-primary)` for automatisk dark mode support!

````

**Step 2: Header (bruger info)**

```javascript
<div className="flex items-center gap-3 mb-4">
  <img className="w-12 h-12 rounded-full" src={user.image} alt={user.name} />
  <div>
    <h3 className="font-semibold text-gray-900">{user.name}</h3>
    <p className="text-sm text-gray-500">{user.title}</p>
  </div>
</div>
````

**Step 3: Post billede**

```javascript
<img className="w-full h-64 object-cover rounded-lg mb-4" src={post.image} alt={post.caption} />
```

**Step 4: Caption og Actions**

```javascript
<p className="text-gray-700 mb-4">{post.caption}</p>
<div className="flex justify-end gap-2">
  <Link
    href={`/posts/${post.id}`}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
  >
    View
  </Link>
</div>
```

**Tip:** Brug `flex flex-col` for at stable elementer vertikalt!

</details>

---

## Opgave 4.6: Migrer FormPost Komponenten

**Forms i Tailwind:**

**Form layout (grid med 2 kolonner):**

```javascript
<form className="grid grid-cols-[1fr_2fr] gap-4 items-start max-w-[800px] my-5">
  {/* grid-cols-[1fr_2fr] = labels i venstre kolonne, inputs i højre */}
</form>
```

**Labels:**

```javascript
<label className="font-medium pt-3 text-black">Caption</label>
```

**Input fields:**

```javascript
<input
  type="text"
  className="w-full p-3 border border-gray-300 rounded-lg text-base font-[inherit] bg-white text-black transition-colors focus:outline-none focus:border-black focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)]"
  placeholder="Enter caption..."
/>
```

**Image preview:**

```javascript
<img src={imageUrl} alt="Preview" className="w-full h-auto rounded-lg col-start-2" />
```

**Buttons container:**

```javascript
<div className="col-start-2 flex gap-4 mt-5">
  <button
    type="submit"
    className="px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all bg-black text-white hover:opacity-85 hover:-translate-y-px">
    Save Post
  </button>
  <button
    type="button"
    className="px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all bg-gray-200 text-black hover:bg-gray-300">
    Cancel
  </button>
</div>
```

**Responsive (mobil):**

```javascript
<form className="grid grid-cols-[1fr_2fr] gap-4 items-start max-w-[800px] my-5 max-[600px]:grid-cols-1">
  {/* På mobil bliver det én kolonne */}

  <label className="font-medium pt-3 max-[600px]:pt-0 text-black">Caption</label>

  {/* Image preview og buttons skal også justeres */}
  <img className="w-full h-auto rounded-lg col-start-2 max-[600px]:col-start-1" />

  <div className="col-start-2 max-[600px]:col-start-1 flex gap-4 mt-5">{/* Buttons */}</div>
</form>
```

**Tip:** `col-start-2` placerer elementet i anden kolonne. På mobil bliver det `col-start-1`!

---

## Opgave 4.7: Migrer Sider

**Page layouts i Tailwind:**

**Posts liste side (`app/posts/page.js`):**

```javascript
<div className="min-h-screen pt-20 pb-10 bg-black">
  <div className="max-w-[1400px] mx-auto px-5">
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 py-5">
      {/* Posts grid med auto-fill */}
    </div>
  </div>
</div>
```

**Forklaring:**

- `pt-20 pb-10` = 80px padding top (plads til fixed nav), 40px bottom
- `bg-black` = mørk baggrund til page
- `grid-cols-[repeat(auto-fill,minmax(300px,1fr))]` = responsive grid der automatisk tilpasser antal kolonner

**Post detail side (`app/posts/[id]/page.js`):**

```javascript
<div className="min-h-screen pt-20 pb-10 bg-black">
  <div className="max-w-[800px] mx-auto py-10 px-5">
    <h1 className="text-[32px] font-semibold mb-6 text-[#ededed] tracking-tight">Post Details</h1>
    <div className="bg-white p-6 rounded-xl mb-6 shadow-sm">{/* Post content */}</div>

    <div className="flex gap-4 mt-5">
      <button className="px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all bg-black text-white hover:opacity-85 hover:-translate-y-px">
        Update
      </button>
      {/* Delete button */}
    </div>
  </div>
</div>
```

**Home page (`app/page.js`):**

```javascript
<div className="min-h-screen pt-20 pb-10 bg-black flex items-center justify-center">
  <div className="text-center max-w-[600px]">
    <div className="mb-10">{/* Logo */}</div>
    <h1 className="text-[32px] font-semibold mb-4 tracking-tight text-[#ededed]">Welcome</h1>
    <p className="text-base text-gray-400 mb-8 leading-relaxed">Description text</p>
    <div className="flex gap-4 justify-center">
      <button className="px-6 py-3 rounded-lg font-medium bg-white text-black transition-all hover:opacity-85 hover:-translate-y-px">
        Primary
      </button>
      <button className="px-6 py-3 rounded-lg font-medium border border-gray-700 text-[#ededed] transition-all hover:bg-gray-900">
        Secondary
      </button>
    </div>
  </div>
</div>
```

**Tip:** Alle sider bruger `pt-20` (80px) for at give plads til den fixed navigation!

---

## Opgave 4.8: Migrer DeleteButton/DeletePostButton

**Delete button (trigger):**

```javascript
<button className="px-3 py-3 bg-transparent text-red-500 border-2 border-red-500 rounded-lg text-base font-medium cursor-pointer transition-all hover:bg-red-500 hover:text-white">
  Delete
</button>
```

**Modal overlay (baggrund med fadeIn animation):**

```javascript
<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-1000 animate-[fadeIn_0.2s_ease-in-out]">
```

**Modal content box:**

```javascript
<div className="bg-white p-8 rounded-xl max-w-[450px] w-[90%] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] animate-[slideIn_0.3s_ease-out]">
  <h2 className="m-0 mb-4 text-2xl font-semibold text-black">Confirm Delete</h2>
  <p className="m-0 mb-6 text-gray-600 leading-relaxed">
    Are you sure you want to delete this post? This action cannot be undone.
  </p>

  {/* Buttons container */}
  <div className="flex gap-4 justify-end">
    <button
      onClick={onCancel}
      className="px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-all border-none bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
      Cancel
    </button>
    <button
      onClick={onConfirm}
      className="px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-all border-none bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed">
      Delete
    </button>
  </div>
</div>
```

**Tips:**
- `bg-black/50` = 50% gennemsigtighed i stedet for `rgba(0,0,0,0.5)`
- `z-1000` = meget høj z-index for modal overlay
- Animations (`fadeIn`, `slideIn`) kan defineres i `globals.css` som custom keyframes

---

## Opgave 4.9: Tjek og Test Alle Komponenter

**Nu har du migreret de vigtigste komponenter. Tid til at teste!**

**Gennemgå hver komponent:**

1. **Nav** - Er navigationen fixed i toppen? Virker hover states?
2. **UserAvatar** - Er billedet cirkulært? Er tekststørrelser korrekte?
3. **PostCard** - Virker hover effect (løft og skygge)? Er spacing korrekt?
4. **FormPost** - Er grid layout korrekt på desktop? Bliver det én kolonne på mobil?
5. **DeletePostButton** - Vises modal korrekt? Virker animations?

**Test i browseren:**

- 📱 **Mobil** - Resize browser vinduet til mobil størrelse
- 💻 **Desktop** - Test på fuld skærm
- 🎨 **Styling** - Sammenlign med original design

**Almindelige problemer:**

- Forkert spacing → sammenlign med original CSS Module styling
- Missing transitions → `transition-all` mangler på hover elementer

**Når alt fungerer korrekt, fortsæt til næste opgave!**

---

## Opgave 4.10: Tilføj Base Styling og Animations til globals.css

**Nu skal vi tilføje minimal CSS tilbage til `globals.css`:**

Da vi erstattede alt indhold med kun `@import "tailwindcss";`, skal vi tilføje:
- Base styling (resets, font)  
- Custom animations til modal

**Opdater `app/globals.css` til:**

```css
@import "tailwindcss";

/* Base styling */
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background: black;
  color: #ededed;
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Custom animations for modal */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Hvad gør dette:**

- **Body baggrund:** `background: black` - mørk default baggrund
- **Body text:** `color: #ededed` - lys tekst på mørk baggrund
- **Animations:** Til modal fadeIn og slideIn effekter

**Test det virker:**

1. Tjek at baggrunden er mørk
2. Tjek at fonts ser korrekte ud
3. Animations vil virke når du senere migrerer modal komponenten

---

## Opgave 4.11: Migrer Alle Sider

**Gennemgå hver side og migrer til Tailwind:**

**`app/posts/page.js` (Posts liste):**

```javascript
export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen pt-20 pb-10 bg-black">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 py-5">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

**`app/posts/[id]/page.js` (Post detail):**

```javascript
export default async function PostDetailPage({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="min-h-screen pt-20 pb-10 bg-black">
      <div className="max-w-[800px] mx-auto py-10 px-5">
        <h1 className="text-[32px] font-semibold mb-6 text-[#ededed] tracking-tight">Post Details</h1>

        {/* Post content */}
        <div className="bg-white p-6 rounded-xl mb-6 shadow-sm">
          {/* UserAvatar component */}
          <UserAvatar user={post.user} />

          {/* Post image */}
          <img className="w-full h-auto object-cover rounded-lg mb-4" src={post.image} alt={post.caption} />

          {/* Caption */}
          <p className="text-base text-black leading-relaxed">{post.caption}</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-5">
          <Link
            href={`/posts/${post.id}/update`}
            className="px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all bg-white text-black hover:opacity-85 hover:-translate-y-px">
            Update
          </Link>
          <DeletePostButton deleteAction={deletePost} />
        </div>
      </div>
    </div>
  );
}
```

**`app/posts/create/page.js` og `app/posts/[id]/update/page.js`:**

```javascript
export default function CreatePostPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-black">
      <div className="max-w-[800px] mx-auto py-10 px-5">
        <h1 className="text-[32px] font-semibold mb-6 text-[#ededed] tracking-tight">
          Create New Post
        </h1>
        <FormPost />
      </div>
    </div>
  );
}
```

**Home page (`app/page.js`):**

```javascript
export default function HomePage() {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-black flex items-center justify-center">
      <div className="text-center max-w-[600px]">
        <div className="mb-10">{/* Logo component */}</div>
        <h1 className="text-[32px] font-semibold mb-4 tracking-tight text-[#ededed]">
          Next.js Posts App
        </h1>
        <p className="text-base text-gray-400 mb-8 leading-relaxed">
          A modern post sharing application built with Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/posts"
            className="px-6 py-3 rounded-lg font-medium bg-white text-black transition-all hover:opacity-85 hover:-translate-y-px">
            View Posts
          </Link>
          <Link
            href="/posts/create"
            className="px-6 py-3 rounded-lg font-medium border border-gray-700 text-[#ededed] transition-all hover:bg-gray-900">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
}
```

**Tip:** Alle sider følger samme mønster med `bg-black` for mørk baggrund og `pt-20` for navigation padding!

---

## Opgave 4.12: Slet Alle CSS Module Filer

**Nu hvor alle komponenter og sider bruger Tailwind, er det tid til oprydning:**

**1. Tjek at alt fungerer:**

- Test hele applikationen
- Gennemgå alle sider
- Verificer at styling ser korrekt ud

**2. Slet CSS Module filer:**

```bash
# I terminal, slet alle .module.css filer:
rm components/*.module.css
rm app/**/*.module.css
```

Eller slet dem manuelt:

- `components/Nav.module.css`
- `components/PostCard.module.css`
- `components/UserAvatar.module.css`
- `components/FormPost.module.css`
- `components/DeletePostButton.module.css`
- Osv.

**3. Fjern CSS Module imports:**

Gennemgå alle komponenter og slet linjer som:

```javascript
import styles from "./Nav.module.css"; // ❌ SLET DENNE LINJE
```

**4. Verificer at projektet stadig bygger:**

```bash
npm run build
```

Hvis der er fejl, har du måske glemt at migrere en komponent!

**5. Commit dine ændringer:**

```bash
git add .
git commit -m "Migrated from CSS Modules to Tailwind CSS"
```

---

## Opgave 4.13: Tilføj Forbedringer

**Nu hvor du har Tailwind, kan du nemt justere og forbedre:**

1. **Hover effects er allerede implementeret:**

   ```javascript
   // PostCard hover effect
   className = "hover:-translate-y-1 hover:shadow-lg transition-all";

   // Button hover effect
   className = "hover:opacity-85 hover:-translate-y-px";
   ```

2. **Juster spacing efter behov:**

   ```javascript
   // Prøv forskellige gap værdier
   className = "gap-3 md:gap-4 lg:gap-6";

   // Responsive padding
   className = "p-4 md:p-6 lg:p-8";
   ```

3. **Eksperimenter med farver:**

   ```javascript
   // Skift primær farve fra sort til blå
   className = "bg-blue-600 text-white hover:bg-blue-700";

   // Eller grøn
   className = "bg-green-600 text-white hover:bg-green-700";
   ```

4. **Fine-tune border radius:**

   ```javascript
   // Fra rounded-xl (12px) til rounded-2xl (16px)
   className = "rounded-2xl";

   // Eller mere kantede hjørner
   className = "rounded-md";
   ```

5. **Dark mode er allerede implementeret:**

   Alle komponenter bruger allerede `dark:` prefix for dark mode support. Test det ved at ændre systemets appearance!

---

## Reflektion

- Hvilke forbedringer tilføjede du?
- Hvordan påvirker Tailwind din udviklingshastighed?
- Hvad er fordele og ulemper ved utility-first CSS?
- Hvordan var det at slippe af med alle CSS Module filerne?
- Hvad er fordele/ulemper ved Tailwind vs CSS Modules?
- Hvornår ville du bruge Tailwind? Hvornår CSS Modules?

---

## Opgave 4.13: Eksperimenter og Lær Ved at Prøve (ekstra)

**Nu har du migreret hele appen - tid til at eksperimentere! 🔬**

Tailwind lærer man bedst ved at prøve sig frem. Lav følgende eksperimenter:

**Eksperiment 1: Farve-variationer**

Tag en komponent (f.eks. en knap) og prøv forskellige farve-kombinationer:

- Prøv `bg-blue-500`, `bg-blue-600`, `bg-blue-700` - se forskellen
- Prøv `bg-red-500`, `bg-green-500`, `bg-purple-500`
- Kombiner med `hover:bg-[farve]-700`

**Hvad lærte du om farve-nuancer?**

**Eksperiment 2: Spacing**

Tag PostCard komponenten:

- Prøv at ændre `p-6` til `p-2`, `p-4`, `p-8`, `p-12`
- Prøv at ændre `gap-3` til `gap-1`, `gap-6`, `gap-10`
- Prøv at ændre `mb-4` til `mb-2`, `mb-8`

**Hvad er den rigtige mængde spacing? Hvorfor?**

**Eksperiment 3: Responsive design**

Tag posts liste siden:

- Prøv `grid-cols-1 md:grid-cols-2`
- Prøv `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Prøv `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

**Resize browservinduet - hvad sker der? Hvilken løsning er bedst?**

**Eksperiment 4: Hover effekter**

Tilføj kreative hover effekter til dine cards:

```javascript
// Prøv disse kombinationer:
className = "hover:scale-105 transition-transform";
className = "hover:shadow-2xl transition-shadow";
className = "hover:-translate-y-1 hover:shadow-xl transition-all";
className = "hover:rotate-1 transition-transform";
```

**Hvilke effekter virker bedst? Hvilke er for meget?**

**Eksperiment 5: Lav en custom komponent**

Design en ny komponent fra bunden med kun Tailwind:

- En "Featured Post" card med større billede
- En "User Stats" card med tal og ikoner
- En "Loading Skeleton" komponent

**Tvang dig selv til IKKE at se på eksisterende kode - brug kun:**

- Tailwind docs
- VS Code IntelliSense
- Din hukommelse fra tidligere opgaver

**Refleksion:**

- Hvilke classes husker du uden at slå op?
- Hvilke classes skal du stadig google?
- Hvad er nemmere med Tailwind vs CSS Modules?
- Hvad er sværere?

---

## Opgave 4.15: Redesign Challenge (ekstra)

**Ultimate udfordring: Redesign hele appen! 🎨**

Nu hvor du kan Tailwind, redesign hele din post app til at se anderledes ud:

**Krav:**

1. **Vælg et farve-tema:**

   - Skift fra blå til en anden primær farve (grøn, lilla, rød, etc.)
   - Brug forskellige nuancer konsistent

2. **Eksperimenter med layout:**

   - Skal posts være i cards eller liste-visning?
   - Skal navbar være i toppen eller siden?
   - Skal der være mere/mindre spacing?

3. **Tilføj personlighed:**
   - Animationer (hover effects, transitions)
   - Afrundinger (skarpe hjørner vs afrundede)
   - Skygger (ingen, subtile eller dramatiske)

**Regler:**

- ✅ Du MÅ ændre alt design
- ✅ Du MÅ eksperimentere vildt
- ❌ Du må IKKE bruge custom CSS (kun Tailwind classes)
- ❌ Du må IKKE ødelægge funktionalitet

**Inspiration:**

- Se på https://dribbble.com for design inspiration
- Se på https://tailwindui.com for komponent ideer
- Tænk på apps du bruger dagligt - hvad kan du lære?

**Del dit redesign:**

Tag screenshots før/efter og del med klassen!

**Hvad lærte du om:**

- Tailwind's muligheder og begrænsninger?
- Design beslutninger og deres konsekvenser?
- At arbejde uden færdig guide?

---
