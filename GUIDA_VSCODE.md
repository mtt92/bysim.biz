# 🚀 Guida: Aprire il Progetto con Visual Studio Code

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

1. **Node.js** (versione 18 o superiore)
   - Scarica da: https://nodejs.org/
   - Verifica l'installazione: `node --version`

2. **Visual Studio Code**
   - Scarica da: https://code.visualstudio.com/

## 🔧 Passo 1: Aprire il Progetto

### Metodo 1: Drag & Drop
1. Apri Visual Studio Code
2. Trascina la cartella `bysim-website` nella finestra di VS Code

### Metodo 2: Menu File
1. Apri Visual Studio Code
2. Vai su `File` → `Open Folder...`
3. Seleziona la cartella `bysim-website`
4. Clicca su `Select Folder` (o `Apri`)

### Metodo 3: Terminale (Avanzato)
```bash
cd percorso/alla/cartella/bysim-website
code .
```

## 📦 Passo 2: Installare le Dipendenze

1. Apri il terminale integrato in VS Code:
   - Menu: `Terminal` → `New Terminal`
   - Oppure premi: `Ctrl + `` (backtick)

2. Esegui il comando:
```bash
npm install
```

Questo installerà tutte le dipendenze necessarie (Next.js, React, Tailwind, ecc.)

## ▶️ Passo 3: Avviare il Server di Sviluppo

Nel terminale, esegui:
```bash
npm run dev
```

Vedrai un messaggio simile a:
```
▲ Next.js 14.2.4
- Local:        http://localhost:3000
```

## 🌐 Passo 4: Visualizzare il Sito

1. Apri il browser
2. Vai su: **http://localhost:3000**
3. Il sito bySim sarà visibile e funzionante!

## 🎨 Estensioni VS Code Consigliate

Quando apri il progetto, VS Code potrebbe suggerirti di installare alcune estensioni. **Accetta e installa**:

1. **ES7+ React/Redux/React-Native snippets** - Snippet per React
2. **Tailwind CSS IntelliSense** - Autocompletamento Tailwind
3. **Prettier** - Formattazione automatica del codice

Oppure installale manualmente:
- Apri la barra laterale Extensions (Ctrl+Shift+X)
- Cerca e installa: "Tailwind CSS IntelliSense"

## 📁 Struttura del Progetto

```
bysim-website/
├── app/                    # Pagine Next.js
│   ├── page.tsx           # Home page
│   ├── siti-web/          # Pagina Siti Web
│   ├── software-ai/       # Pagina Software & AI
│   ├── blog/              # Pagina Blog
│   └── contatti/          # Pagina Contatti
├── components/            # Componenti riutilizzabili
│   ├── Navbar.tsx         # Navbar
│   ├── Footer.tsx         # Footer
│   └── PriceCard.tsx      # Card prezzi
├── public/                # File statici (immagini, ecc.)
└── package.json           # Dipendenze del progetto
```

## 🛠️ Comandi Utili

```bash
# Avvia il server di sviluppo
npm run dev

# Crea una build di produzione
npm run build

# Avvia la versione di produzione
npm start

# Verifica errori di linting
npm run lint
```

## 🔄 Hot Reload

Mentre `npm run dev` è attivo:
- Ogni modifica ai file viene **automaticamente ricaricata** nel browser
- Non serve riavviare il server
- Salva il file e vedi i cambiamenti istantaneamente!

## 🐛 Risoluzione Problemi

### Problema: "npm command not found"
**Soluzione**: Installa Node.js da nodejs.org

### Problema: Porta 3000 occupata
**Soluzione**: Il server userà automaticamente la porta 3001. Oppure:
```bash
# Usa una porta specifica
PORT=3001 npm run dev
```

### Problema: Errori durante npm install
**Soluzione**: 
```bash
# Pulisci la cache e riprova
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problema: Le modifiche non si vedono
**Soluzione**:
1. Riavvia il server (Ctrl+C poi npm run dev)
2. Pulisci la cache del browser (Ctrl+Shift+R)

## 🎯 Prossimi Passi

1. ✅ Apri il progetto in VS Code
2. ✅ Installa le dipendenze con `npm install`
3. ✅ Avvia il server con `npm run dev`
4. 🎨 Inizia a personalizzare il sito!

### Dove iniziare a modificare:

- **Colori/Stili**: `app/globals.css` e `tailwind.config.ts`
- **Contenuti Home**: `app/page.tsx`
- **Navbar**: `components/Navbar.tsx`
- **Prezzi**: Modifica in `app/siti-web/page.tsx` e `app/software-ai/page.tsx`
- **Contatti**: `app/contatti/page.tsx`

## 📚 Risorse Utili

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/icons/

## 💡 Tips per VS Code

- `Ctrl+P` - Ricerca rapida file
- `Ctrl+Shift+F` - Cerca in tutti i file
- `F2` - Rinomina simbolo
- `Alt+Click` - Multi-cursore
- `Ctrl+/` - Commenta/decommenta riga

---

🚀 **Buon sviluppo con bySim!**
