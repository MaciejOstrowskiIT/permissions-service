#!/bin/sh

if [ ! -d node_modules ]; then
    echo "node_modules missing, installing dependencies..."
    npm install
fi


npm run server