// .gitignore
node_modules/
build/
data/
.env
.DS_Store
*.log
dist/
coverage/
*.local
npm-debug.log*

// .github/workflows/deploy.yml
name: Deploy Dockerized Budget App

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Build backend Docker image
        run: docker build -t budget-backend ./server

      - name: Build frontend Docker image
        run: docker build -t budget-frontend ./client

      - name: Lint & test backend (optional)
        run: |
          cd server
          npm install
          echo "No tests configured"

// Folder structure:
// - client/
//   - Dockerfile
//   - package.json
//   - public/
//     - index.html
//     - .well-known/security.txt
//   - src/
//     - App.js
//     - BudgetTracker.jsx
//     - index.js
//     - index.css
// - server/
//   - Dockerfile
//   - package.json
//   - server.js
// - .env.example
// - docker-compose.yml
// - extras/
//   - nginx.conf
//   - budget-backend.service

// [ ... rest of unchanged code remains ... ]
