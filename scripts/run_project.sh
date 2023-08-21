#!/bin/bash

# Display a menu
echo "Select an option:"
echo "1. Run Tests"
echo "2. Run Linting"
echo "3. Format Code"
echo "4. Exit"

# Read user input
read -p "Enter the number of your choice: " choice

# Perform the selected action
case $choice in
  1)
    # Run tests (replace with your actual test command)
    echo "Running Tests..."
    npm test
    ;;
  2)
    # Run linting (replace with your actual linting command)
    echo "Running Linting..."
    npm run lint
    ;;
  3)
    # Format code (replace with your actual code formatting command)
    echo "Formatting Code..."
    npm run format
    ;;
  4)
    # Exit the script
    echo "Exiting..."
    exit 0
    ;;
  *)
    # Invalid choice
    echo "Invalid choice. Please select a valid option."
    ;;
esac
