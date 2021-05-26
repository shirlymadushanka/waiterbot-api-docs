#!/usr/bin/env sh

# abort on errors
set -e

# checkout to gh-pages
git checkout --orphan gh-pages

# build
npm run build

git --work-tree dist add --all
git --work-tree dist commit -m "Deploy"

git push origin HEAD:gh-pages --force

rm -rf dist
git checkout -f main
git branch -D gh-pages