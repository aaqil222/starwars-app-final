#!/bin/bash

start_backend() {
    echo "Starting backend..."
    cd backend
    npm install
    npm start &
    cd ..
}

start_frontend() {
    echo "Starting frontend..."
    cd frontend
    npm install
    npm start &
    cd ..
}

open_browser() {
    echo "Opening application in the browser..."
    if command -v xdg-open > /dev/null; then
        xdg-open http://localhost:3000
    elif command -v open > /dev/null; then
        open http://localhost:3000
    else
        echo "Please open http://localhost:3000 in your browser"
    fi
}

start_backend
start_frontend

sleep 5

open_browser

wait
