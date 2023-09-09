// dont use var (var is global) instead use const (constante) or let (variable)
var urls = [
  { url: "https://jsonplaceholder.typicode.com/posts/1" },
  { url: "https://jsonplaceholder.typicode.com/posts/2" },
  { url: "https://jsonplaceholder.typicode.com/posts/3" },
];

// instead of using for and replace url value, you can map the data
for (i = 0; i <= urls.length; i++) {
  // why <= and not juste < ?
  // maybe try catch if you have one or more error
  response = fetch(urls[i]); // fetch is sync or async ?
  urls[i] = response; // declare const for response
}

// should display a list of posts
console.log(urls);
