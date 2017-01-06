// initial test for webpack babel-loader and fetch polyfilling

const dog = 'hey dog';

const fuh = () => dog;

console.log(fuh());

fetch('https://regimen-server-quauxdvexe.now.sh/')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })