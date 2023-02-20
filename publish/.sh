yarn prepare
cp publish/package.json dist
cp publish/README.md dist
cd dist
npm publish --access public