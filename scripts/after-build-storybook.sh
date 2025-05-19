#!/bin/bash

# Change to the script's directory
cd "$(dirname "$0")/.."

echo $PWD

rm -rf ./docs

cp -R ./storybooks/main-storybook/dist .
mv dist docs

cp -r ./storybooks/html-storybook/dist ./docs
mv ./docs/dist ./docs/html

cp -r ./storybooks/react-storybook/dist ./docs
mv ./docs/dist ./docs/react

cp -r ./storybooks/vue-storybook/dist ./docs
mv ./docs/dist ./docs/vue

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Storybook build completed successfully."
else
  echo "Storybook build failed."
  exit 1
fi

# # Additional commands can be added here