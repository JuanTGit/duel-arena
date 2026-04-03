# Duel Arena

A modern, interactive player-versus-player (PvP) fighting game built with React. Battle opponents in real-time with support for both local and online multiplayer gameplay.

## Features

- **Local Multiplayer**: Play against opponents on the same device
- **Online Multiplayer**: Challenge players across the network
- **Real-time Combat**: Engage in dynamic, fast-paced fights
- **Character Selection**: Choose your fighter before each match
- **Responsive UI**: Built with Bootstrap for a polished, modern interface

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.7.1
- **Styling**: Bootstrap 5.1.0, Font Awesome 5.15.4
- **Linting**: ESLint 9.30.1
- **Deployment**: Vercel (configured via `vercel.json`)

## Project Structure

```
duel-arena/
├── src/
│   ├── components/
│   │   ├── Fight.jsx          # Main fight/battle component
│   │   ├── Fighter.jsx        # Individual fighter component
│   │   ├── Menu.jsx           # Main menu/landing page
│   │   ├── Sprite.jsx         # Sprite rendering component
│   │   └── Lobby/
│   │       ├── Local.jsx      # Local multiplayer lobby
│   │       └── Online.jsx     # Online multiplayer lobby
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # React entry point
│   └── main.css               # Global styles
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
└── vercel.json                # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd duel-arena
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port displayed in your terminal).

### Build

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Routes

- `/` - Main menu/home page
- `/local` - Local multiplayer game lobby
- `/online` - Online multiplayer game lobby

## Game Flow

1. **Menu**: Players start at the main menu and choose their game mode
2. **Lobby**: Select a game mode (Local or Online) to enter the appropriate lobby
3. **Fighter Selection**: Choose your character/fighter
4. **Fight**: Engage in real-time combat with your opponent

## Key Components

- **Menu**: Provides navigation between game modes
- **Local**: Handles local (same-device) multiplayer setup
- **Online**: Manages online multiplayer connections
- **Fight**: Core game logic and real-time battle rendering
- **Fighter**: Individual player character representation
- **Sprite**: Handles sprite rendering for characters

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

To deploy:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your app

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

[Add your license here]

## Troubleshooting

- **Port already in use**: If port 5173 is in use, Vite will automatically try the next available port
- **Dependencies not installing**: Try deleting `node_modules` and `package-lock.json`, then running `npm install` again
- **Build errors**: Ensure you're using Node.js v18 or higher

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Happy dueling!** ⚔️
