let data;
async function getMovies() {
    let names = document.getElementById("Mname").value;

    document.getElementById("container").innerHTML = ""
    let url = `https://www.omdbapi.com/?apikey=9555fc85&t=${names}`
    let res = await fetch(url);
     data = await res.json();
    console.log("data:", data.Response);

    if (data.Response == "True") {
        appenddata(data)
    }
    else {
        nodata()
    }

}

function appenddata(data) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = data.Poster;
    img.setAttribute("id", "img1");
    div1.append(img);
    div1.setAttribute("id", "div1");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    let p1 = document.createElement("p");
    p1.innerText = `Title: ${data.Title}`;
    p1.setAttribute("id", "p2");
    let p2 = document.createElement("p");
    p2.setAttribute("id", "p3");
    p2.innerText = `Rating: ${data.imdbRating}⭐`;
    let p3 = document.createElement("p");
    p3.setAttribute("id", "p2");
    p3.innerText = `Released Date: ${data.Released}`;
    let p4 = document.createElement("p");
    p4.setAttribute("id", "p2");
    p4.innerText = `Awards: ${data.Awards}`;

    let p5 = document.createElement("p");
    p5.innerText = data.Genre;
    if (data.imdbRating > 8.5) {
        div2.append(p1, p3, p4, p5, p2)
    }
    else {
        div2.append(p1, p3, p4, p5)
    }

    document.getElementById("container").append(div1, div2)


}

function nodata() {
    let div5 = document.createElement("div");
    div5.setAttribute("id", "div5");
    let p6 = document.createElement("img");
    p6.src = "https://c.tenor.com/NQyibarAoSwAAAAM/lego-star-wars-holiday-special-yoda.gif"
    p6.setAttribute("id", "p6");
    div5.append(p6);
    document.getElementById("container").append(div5)

}
function sortLH(){
    let copy_data=data;
    copy_data=  copy_data.sort(function(a,b){
        return a.Released-b.Released
    })
    appenddata(copy_data)
}
