let btn = document.getElementById("search");

btn.onclick = function(){
    let recherche = document.getElementById("url").value;
    console.log(recherche);
    let url = 'http://www.omdbapi.com/?apikey=f6e256e1&t='+recherche

    fetch(url)
    .then(res => res.text())
    .then(text => {
        console.log(text);
        let data = JSON.parse(text);

        let monFilm = document.getElementById("film");

        let titre = document.createElement("h2");
        let image = document.createElement("img");
        let annee = document.createElement("p");
        let duree = document.createElement("p");
        let genre = document.createElement("p");
        let synopsis = document.createElement("p");

        image.src = data.Poster;
        titre.textContent = "Titre du film : "+data.Title;
        annee.textContent = "Année de production : "+data.Year;
        duree.textContent = "Durée du film : "+data.Runtime;
        genre.textContent = "Genre : "+data.Genre;
        synopsis.textContent = "Synopsis : "+data.Plot;
        

        monFilm.appendChild(titre);

        let row = document.createElement("div");
        row.className = "row";
        monFilm.appendChild(row);
        let col1 = document.createElement("div");
        col1.className = "col";

        col1.appendChild(image);
        row.appendChild(col1)

        let col2 = document.createElement("div");
        col2.className = "col";

        col2.appendChild(annee);
        col2.appendChild(duree);
        col2.appendChild(genre);
        col2.appendChild(synopsis);

        row.appendChild(col2);
    });
}
