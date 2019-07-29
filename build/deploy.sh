# Save latest Git commit message
MESSAGE=$(git log -1 --pretty=%B)

if git ls-remote $REMOTE_REPOSITORY | grep -sw "deploy" 2>&1>/dev/null; then
    git checkout . && git checkout deploy;
else
    git checkout -b deploy;
fi

# Remove all files except .git, node_modules and vendor folder
find . -path ./.git -prune -o \( \! -path ./dist \) -prune -o \( \! -path ./vendor \) -exec rm -rf {} \; 2> /dev/null

# Add master branch files
git archive master | tar x -C .

# Update composer
composer update

# Compile front-end
yarn --pure-lockfile
yarn production

# Add ignored compiled files
git add -f public/**/*.css
git add -f public/**/*.js
git add -f public/mix-manifest.json

# Push to the deploy branch
git add .
git commit -am "[${CI_COMMIT_SHA:0:8}]: $MESSAGE"
git push origin deploy

# test before final depoy
yarn test:unit --runInBand
yarn test:vuln
composer test

# Deploy the deploy branch to production
dep deploy