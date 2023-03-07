rm -rf dist
cd publish
tsc
npx tsc-esm-fix --target ../dist
cp package.json ../dist
cp README.md ../dist
cd ../dist
npm publish --access public