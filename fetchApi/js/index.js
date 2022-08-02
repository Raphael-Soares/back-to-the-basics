const url = "https://jsonplaceholder.typicode.com/";

const postsContainer = document.querySelector("#posts-container");
const loadingElement = document.querySelector("#loading");

const btnPosts = document.querySelector("#btnPosts");
const btnUsers = document.querySelector("#btnUsers");

function getData(typeData) {
    fetch(`${url}${typeData}`)
        .then((response) => response.json())
        .then((response) => console.log(response));
}

btnPosts.addEventListener("click", () => getData("posts"));
btnUsers.addEventListener("click", () => getData("users"));
