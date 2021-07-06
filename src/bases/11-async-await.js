const getImagen = async () => {
  try {
    const apiKey = "6F5TkPRcFw8TFoto82GGSf3W2yNExEZ6";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );

    const { data } = await resp.json();

    console.log(data);

    const { url } = data.images.original;
    const image = document.createElement("img");
    image.src = url;

    document.body.appendChild(image);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
