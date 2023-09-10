var urls = [
  { url: "https://jsonplaceholder.typicode.com/posts/1" },
  { url: "https://jsonplaceholder.typicode.com/posts/2" },
  { url: "https://jsonplaceholder.typicode.com/posts/3" },
];

for (i = 0; i < urls.length; i++) {
  urls[i] = fetch(urls[i].url).then((response) => response.json());
}

Promise.all(urls).then((data) => {
  console.log(data);
});
