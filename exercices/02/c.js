const linkToFetch = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

Promise.all(
  linkToFetch.map((link) => fetch(link).then((post) => post.json()))
).then((posts) => console.log(posts));
