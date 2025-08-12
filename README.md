# ♠️ Poker Game ♥️

A fun and interactive poker game built with React and TypeScript. This project provides a solid foundation for a poker game with room for adding twists and improvements.

## 🚀 Features (Planned)

- **Basic Poker Gameplay**: Texas Hold'em rules
- **Interactive UI**: Beautiful card animations and game interface
- **Responsive Design**: Works on desktop and mobile devices
- **Extensible Architecture**: Easy to add new features and game modes

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables
- **Code Quality**: ESLint + TypeScript strict mode

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Card.tsx        # Individual playing card component
│   ├── PokerGame.tsx   # Main game component
│   └── *.css           # Component styles
├── types/               # TypeScript type definitions
│   └── poker.ts        # Poker game types
├── utils/               # Utility functions
│   ├── deck.ts         # Deck management
│   └── handEvaluator.ts # Hand evaluation logic
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── *.css               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd poker-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Next Steps

The basic structure is set up! Here's what you can work on next:

1. **Implement Game Logic**: Add actual poker game mechanics
2. **Add AI Players**: Create computer opponents
3. **Multiplayer Support**: Add real-time multiplayer functionality
4. **Custom Rules**: Implement your unique poker twists
5. **Animations**: Add more card animations and effects
6. **Sound Effects**: Add audio for a more immersive experience

## 🎨 Customization

The project uses CSS variables for easy theming. You can customize colors, spacing, and other visual properties in `src/index.css`.

## 📝 Contributing

Feel free to contribute to this project! Some areas that could use help:

- Hand evaluation algorithms
- Game state management
- UI/UX improvements
- Testing and bug fixes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🃏**