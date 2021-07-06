const apiKey = "6F5TkPRcFw8TFoto82GGSf3W2yNExEZ6";

const petition = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
petition.then ( resp => {
    console.log(resp);
});