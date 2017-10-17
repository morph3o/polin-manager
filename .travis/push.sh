#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b heroku
  git add public server.js server.js.map
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-heroku https://${GH_TOKEN}@github.com/morph3o/polin-manager.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-heroku heroku
}

setup_git
commit_website_files
upload_files