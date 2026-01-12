# BookScout - Product Data Explorer

**BookScout** is a full-stack web application designed to explore and scrape book data from [World of Books](https://www.worldofbooks.com). It features a modern, responsive frontend built with Next.js and a robust backend API built with NestJS that handles data scraping and persistence.

## 🚀 Features

- **Category Exploration**: Browse books by categories like Fiction, Non-Fiction, Children's Books, and Rare Books.
- **Real-Time Data / Mock Fallback**: The system attempts to scrape live data. If the target site is unreachable or blocks requests, it gracefully falls back to a high-quality mock dataset ensuring a seamless user experience.
- **Smart Links**: "View on WOB" buttons automatically generate search queries to find the specific book on World of Books, avoiding broken links to out-of-stock items.
- **Responsive Design**: A clean, premium UI offering a great experience on both desktop and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Backend
- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: PostgreSQL (via TypeORM)
- **Scraping**: [Crawlee](https://crawlee.dev/) & Playwright

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (or Docker to run the provided compose file)

### 1. Database Setup
You can spin up a PostgreSQL instance quickly using the provided `docker-compose.yml`:

```bash
docker-compose up -d
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and start the server:

```bash
cd backend
npm install

# Create a .env file based on .env.example if needed
# Ensure your DB credentials match your PostgreSQL setup

# Start the server
npm run start
```
The backend API will run on `http://localhost:3001`.

### 3. Frontend Setup
Navigate to the frontend directory, install dependencies, and start the development server:

```bash
cd frontend
npm install

# Start the development server
npm run dev
```
The frontend will run on `http://localhost:3000`.

## 🖥️ Usage

1. Open your browser and go to `http://localhost:3000`.
2. Select a category from the navigation bar (e.g., "Fiction", "Non-Fiction").
3. View the list of books.
4. Click **"View on WOB"** to see the product availability on the official World of Books website.

3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.
