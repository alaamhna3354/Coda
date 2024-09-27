set -e

npm run build

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:alaamhna3354/lazurde.git master:gh-pages