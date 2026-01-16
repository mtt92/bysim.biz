# bySim - Tech Agency Website

Sito web completo per bySim, un'agenzia tech AI-Native specializzata in sviluppo web e software.

## 🚀 Tecnologie Utilizzate

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **TypeScript**
- **Lucide React** (icone)

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## 📁 Struttura del Progetto

```
bysim-website/
├── app/
│   ├── layout.tsx          # Layout principale
│   ├── page.tsx            # Home page
│   ├── globals.css         # Stili globali
│   ├── siti-web/
│   │   └── page.tsx        # Pagina Siti Web
│   ├── software-ai/
│   │   └── page.tsx        # Pagina Software & AI
│   ├── blog/
│   │   └── page.tsx        # Pagina Blog
│   └── contatti/
│       └── page.tsx        # Pagina Contatti
├── components/
│   ├── Navbar.tsx          # Navbar responsive
│   ├── Footer.tsx          # Footer
│   └── PriceCard.tsx       # Card prezzi riutilizzabile
└── public/                 # Asset statici
```

## 🎨 Design System

### Colori
- **Background**: Slate-900 (#0f172a)
- **Accenti**: Cyan-400 (#22d3ee), Blue-600 (#2563eb), Purple-600 (#9333ea)
- **Testo**: Slate-100 (#f1f5f9), Slate-400 (#94a3b8)

### Componenti
- Gradient text per titoli importanti
- Card con effetto hover e scale
- Border gradient per elementi highlighted
- Backdrop blur per card trasparenti

## 📄 Pagine

1. **Home** (`/`) - Hero, value prop, grid servizi
2. **Siti Web** (`/siti-web`) - Due prodotti (Flash, Custom), processo
3. **Software & AI** (`/software-ai`) - Vibe Coding, 3 prodotti, use cases
4. **Blog** (`/blog`) - Grid articoli, newsletter
5. **Contatti** (`/contatti`) - Form contatti, info

## 🚀 Build per Produzione

```bash
npm run build
npm start
```

## 📝 Note

- Tutte le pagine sono responsive
- Menu mobile funzionante
- Componente PriceCard riutilizzabile
- Testi in italiano persuasivo
- Design Tech Minimalist con accenti neon

---

Sviluppato con ❤️ da **bySim** usando il Vibe Coding
