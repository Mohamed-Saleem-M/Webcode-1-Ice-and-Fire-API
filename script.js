var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "200px;"

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "searchCategory");
input.setAttribute("size", "30");
input.style.margin = ("30px", "20px");
input.setAttribute("placeholder", "Category - Books/Characters/Houses ")

var input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "searchID");
input1.setAttribute("size", "30");
input1.style.margin = ("30px", "20px");
input1.setAttribute("placeholder", "ID Num - For Selected Category")

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search Results";
button.style.margin = ("30px", "20px");
button.addEventListener("click", searchFn);

var searchResult = document.createElement("div");
searchResult.setAttribute("id", "searchResult");
searchResult.style.textAlign = "left";

div.append(input, input1, button, searchResult);
document.body.append(div);

function searchFn() {
    let searchedCategory = document.getElementById("searchCategory").value;

    if (searchedCategory == "books") {
        booksCategory();
    } else if (searchedCategory == "characters") {
        charactersCategory();
    } else if (searchedCategory == "houses") {
        housesCategory();
    }
    else {
        row.innerHTML = "";
        row.innerHTML = `<b>Enter Valid Category - Books/Characters/Houses</b>`;
        input.value = "";
        input1.value = "";
    }

}

async function booksCategory() {

    row.innerHTML = "";
    searchResult.innerHTML = "";

    try {

        let res3 = document.getElementById("searchID").value;

        let bookURL = `https://www.anapioficeandfire.com/api/books/${res3}`;

        let res = await fetch(bookURL, { method: "GET" });
        let booksDataByIdNum = await res.json();
        console.log(booksDataByIdNum);

        let characters = [];

        let j = 0
        let k = 5
        while (j < k) {
            let charurl = booksDataByIdNum.characters[j];
            j++;
            let res1 = await fetch(charurl, { method: "GET" });
            let data1 = await res1.json();
            let result = data1.name;
            if (result !== "") { characters.push(result) }
            else (k++);
        }

        row.innerHTML += `
        <div class="col-md-6 books">
            <div class="col-md-10 h-100">
            <div class="card border-info mb-3"  style="width:auto">
                <div class="card-header"><span class="heading">Book Name : </span><span class="content">${booksDataByIdNum.name}</span></div>
                <div class="card-body text-dark">
                    <p class="card-text"><span class="heading">ISBN Number : </span><span class="content1">${booksDataByIdNum.isbn}</span></p>
                    <p class="card-text"><span class="heading">No. of Pages : </span><span class="content1">${booksDataByIdNum.numberOfPages}</span></p>
                    <p class="card-text"><span class="heading">Author : </span><span class="content1">${booksDataByIdNum.authors}</span></p>
                    <p class="card-text"><span class="heading">Publisher : </span><span class="content1">${booksDataByIdNum.publisher}</span></p>
                    <p class="card-text"><span class="heading">Released Date : </span><span class="content1">${booksDataByIdNum.released}</span></p>
                    <p class="card-text"><span class="heading">Characters : </span><span class="content1">${characters}</span></p>
                </div>
            </div>
            </div>
        </div>`

    } catch (error) {

        row.innerHTML = `<b>Enter Valid ID Number for Books Category - 1 to 11</b><br><br>`;

    }

    input.value = "";
    input1.value = "";

}

async function charactersCategory() {

    row.innerHTML = "";
    searchResult.innerHTML = "";

    try {

        let res3 = document.getElementById("searchID").value;

        let charURL = `https://www.anapioficeandfire.com/api/characters/${res3}`;

        let res = await fetch(charURL, { method: "GET" });
        let charactersDataByIdNum = await res.json();
        console.log(charactersDataByIdNum);
        console.log(charactersDataByIdNum.name);
        console.log(charactersDataByIdNum.gender);


        row.innerHTML += `
        <div class="col-md-6 ">
            <div class="col-md-10 h-100">
            <div class="card border-info mb-3"  style="width:auto">
                <div class="card-header"><span class="heading">Character Name : </span><span class="content">${charactersDataByIdNum.name}</span></div>
                <div class="card-body text-dark">
                    <p class="card-text"><span class="heading">Gender : </span><span class="content1">${charactersDataByIdNum.gender}</span></p>
                </div>
            </div>
            </div>
        </div>`

    } catch (error) {

        row.innerHTML = `<b>Enter Valid ID Number for Characters Category - 1 to 2138 </b>`;

    }

    input.value = "";
    input1.value = "";

}

async function housesCategory() {

    console.log("houses");

    row.innerHTML = "";
    searchResult.innerHTML = "";

    try {

        let res3 = document.getElementById("searchID").value;

        let houseURL = `https://www.anapioficeandfire.com/api/houses/${res3}`;

        let res = await fetch(houseURL, { method: "GET" });
        let housesDataByIdNum = await res.json();
        console.log(housesDataByIdNum);
        console.log(housesDataByIdNum.name);
        console.log(housesDataByIdNum.region);



        row.innerHTML += `
        <div class="col-md-6 ">
            <div class="col-md-10 h-100">
            <div class="card border-info mb-3"  style="width:auto">
                <div class="card-header"><span class="heading">House Name : </span><span class="content">${housesDataByIdNum.name}</span></div>
                <div class="card-body text-dark">
                    <p class="card-text"><span class="heading">Region : </span><span class="content1">${housesDataByIdNum.region}</span></p>
                </div>
            </div>
            </div>
        </div>`

    } catch (error) {

        row.innerHTML = `<b>Enter Valid ID Number for Houses Category - 1 to 444 </b>`;

    }

    input.value = "";
    input1.value = "";
}


// *******************************************************************

var div1 = document.createElement("div");
div1.style.justifyContent = "space-around";
div1.style.marginTop = "200px;"

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

container.append(row);
div1.append(container);

async function book() {

    let bookURL = "https://www.anapioficeandfire.com/api/books";

    let res = await fetch(bookURL, { method: "GET" });
    let booksData = await res.json();
    console.log(booksData);

    let characters = [];

    for (let i = 0; i < booksData.length; i++) {

        let j = 0
        let k = 5
        while (j < k) {
            let charurl = booksData[i].characters[j];
            j++;
            let res1 = await fetch(charurl, { method: "GET" });
            let data1 = await res1.json();
            let result = data1.name;
            if (result !== "") { characters.push(result) }
            else (k++);
        }

        row.innerHTML += `
        <div class="col-md-6 books">
            <div class="col-md-10 h-100">
            <div class="card border-info mb-3"  style="width:auto">
                <div class="card-header"><span class="heading">Book Name : </span><span class="content">${booksData[i].name}</span></div>
                <div class="card-body text-dark">
                    <p class="card-text"><span class="heading">ISBN Number : </span><span class="content1">${booksData[i].isbn}</span></p>
                    <p class="card-text"><span class="heading">No. of Pages : </span><span class="content1">${booksData[i].numberOfPages}</span></p>
                    <p class="card-text"><span class="heading">Author : </span><span class="content1">${booksData[i].authors}</span></p>
                    <p class="card-text"><span class="heading">Publisher : </span><span class="content1">${booksData[i].publisher}</span></p>
                    <p class="card-text"><span class="heading">Released Date : </span><span class="content1">${booksData[i].released}</span></p>
                    <p class="card-text"><span class="heading">Characters : </span><span class="content1">${characters}</span></p>
                </div>
            </div>
            </div>
        </div>`

        characters = [];

    }
    document.body.append(div1);
}

book();