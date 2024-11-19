const api_url = 'https://projetoweb-api.vercel.app';
const select = document.getElementById("anime_preference");

select.innerHTML = "";

const getAnimes = async () => {
    
    try {
        const response = await fetch(api_url + "/anime", {
            method: 'GET'
        });

        if (response.ok) {
            let animes = await response.json();
            animes = animes.animes
            
            animes.map((anime) => {
                const option = document.createElement("option");
                option.value = anime.id;
                option.textContent = anime.title;
                select.appendChild(option);
            })
        }
    } catch (err) {
        console.log(err)
    }
};

getAnimes();