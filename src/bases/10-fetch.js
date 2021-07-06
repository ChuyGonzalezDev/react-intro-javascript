// APIKEY = https://developers.giphy.com/dashboard/
const apiKey = "6F5TkPRcFw8TFoto82GGSf3W2yNExEZ6";

const petition = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

petition
  .then((resp) => resp.json())
  .then(({ data }) => {
    console.log(data.images.original.url);
    const { url } = data.images.original;

    const image = document.createElement("img");
    image.src = url;

    document.body.append(image);
  })
  .catch(console.warn);
