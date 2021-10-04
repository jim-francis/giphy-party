console.log("Let's get this party started!");

async function searchGif(searchTerm) {
    try {
        const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { q: searchTerm, api_key: "I6bfVluFS7CzNMMgetRcZK2yzqb4csyB" } })
        const results = res.data.data;
        const imgs = document.querySelector("#imgs")
        const li = document.createElement('li');
        const img = document.createElement('img');
        const random = Math.floor(Math.random() * 50) + 1;
        img.src = results[random].images.original.url;
        li.append(img);
        imgs.append(li);
        input.value = "";
    } catch (e) {
        alert('No GIFs found!')
    }
}

const form = document.querySelector("#form")
const input = document.querySelector("#search")
const removeBtn = document.querySelector("#remove")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    searchGif(input.value)
})

removeBtn.addEventListener('click', function (e) {
    const lis = document.querySelectorAll('li');
    for (let li of lis) {
        li.remove();
    }
})