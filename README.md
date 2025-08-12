# Superhero Database

This project is a responsive frontend application built with React, Vite, and TailwindCSS. It showcases a Superhero Database with features like browsing, searching, sorting, pagination, and detailed views, leveraging the provided public API.

Live link: [SuperHero Database](https://superhero-pearl.vercel.app/)

## Project Overview

The Superhero Database allows users to explore a collection of superheroes with an intuitive and visually appealing interface.

## Features

- **Browse Superheroes**: Display a paginated list of superheroes with card-based layouts.
- **Search Functionality**: Filter superheroes by name using partial or exact matches.
- **Sorting**: Sort the list by name in ascending or descending order.
- **Pagination**: Navigate through pages with a custom component showing adjacent pages and ellipsis for large datasets.
- **Details View**: View comprehensive superhero details, including appearance, powerstats(__Bar Char__ & __Radar Chart__), biography, and connections.
- **Responsive Design**: Optimized for desktop and mobile devices using Flexbox and Grid.
- **Dark Mode**: Toggleable theme support for enhanced user experience.
- **Loading States**: Skeleton loaders for cards and details pages during API fetches.

## Technologies Used

- **React**: For building dynamic UI components.
- **Vite**: As the build tool for fast development and optimization.
- **TailwindCSS**: For styling with utility-first classes and dark mode support.
- **React Router DOM**: For navigation between home and details pages.
- **Lucide React**: For icons in the UI (e.g., theme toggle).
- **ChartJs**: For powerstats chart of our hero.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Tanjim605/Superhero.git
   cd Superhero
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:5173` (or the port specified in the terminal) to see the app.

## API Integration

The application uses the Innovix Matrix System Superhero API:
- **List API**: `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records`
- **Details API**: `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/{id}`

API documentation is available at:
- [Swagger UI](https://superhero-api.innovixmatrixsystem.com/api-docs)
- [Redoc](https://superhero-api.innovixmatrixsystem.com/api-docs/redoc)

## Deployment

This project is deployed using [Vercel](https://vercel.com/). You can view the live version at: [Live Link](https://superhero-pearl.vercel.app/).

## File Structure

```
superhero-database/
├── public/           # Static assets
│   ├── assets/       # Images and icons
├── src/              # Source code
│   ├── components/   # Reusable UI components (e.g., HeroCard, Pagination)
│   ├── context/      # Theme context
│   ├── pages/        # Page components (e.g., Home, Details)
│   ├── utils/     # API service functions
│   └── ...           # Other files (App.jsx, main.jsx, index.css)
├── .gitignore        # Git ignore file
├── package.json      # Project dependencies
├── README.md         # This file
└── ...               # Config files (vite.config.js)
```