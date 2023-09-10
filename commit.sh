#!/bin/bash

echo "Start"
git add .
git commit -m $1 
git push -u origin main 
echo "Done"