// eslint-disable-next-line import/prefer-default-export
export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then(({ content, origin, author }) => [origin, author, content])
    .catch((error) => console.error(error));
};
