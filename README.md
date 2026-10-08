# Tic-Tac-Toe 🎮

My first project with **React + TypeScript**: a classic two-player tic-tac-toe game played locally on the same device.

I started with the [official React tutorial](https://react.dev/learn/tutorial-tic-tac-toe). After learning the basics, I **rebuilt the game on my own** to practice state management, reusable components, and TypeScript.

## ✨ Features

- Local two-player gameplay (**X** and **O**) with automatic turn switching.
- Winner detection across rows, columns, and diagonals.
- Draw detection when the board is full and nobody has won.
- No additional moves after the game ends.
- A restart button that appears at the end of a game.
- Responsive dark-themed interface.

## 🛠️ Tech Stack

- **React** — component-based UI and state management with `useState`.
- **TypeScript** — type-safe state, props, and functions.
- **CSS** — responsive layout and custom styling.

## 🚀 Getting Started

Make sure you have Node.js and npm installed. From the project directory, run:

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

To create a production build:

```bash
npm run build
```

## 🧠 What I Learned

- Managing UI updates with React's `useState` hook.
- Passing data and callbacks between components using **props**.
- Building reusable components, including `Square`, `Button`, and `GameStatus`.
- Updating arrays immutably using `slice()`.
- Rendering lists with `map()` and React's `key` prop.
- Deriving values such as the winner, draw status, and current player from existing state instead of storing redundant state.
- Using TypeScript union types, arrays, and optional props.

## 📁 Component Structure

The UI is split into components with distinct responsibilities:

| Component | Responsibility |
| --- | --- |
| `Board` | Manages the board, player turns, and game logic. |
| `Square` | Renders an individual clickable cell. |
| `GameStatus` | Displays the game status and restart option. |
| `Button` | Provides a reusable button with style variants. |

## 📚 Reference

- [React Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)
