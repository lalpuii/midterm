// Lal Puii
// lalpuii@iastate.edu
// March 7, 2024

// Read the file with books:
fetch("./mystery.json")
.then(response => response.json())
.then(myBooks => loadBooks(myBooks));


function loadBooks(myBooks) {
    // Find the element “col” in HTML
    var checkboxes = [];
    var cards = [];

    var CardBook = document.getElementById("col");
   
    // Read every movie from the array
    for (var i = 0; i<myBooks.books.length; i++){
        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();

        let title = myBooks.books[i].title;
        let year = myBooks.books[i].year;
        let img = myBooks.books[i].img;
        let des = myBooks.books[i].description;
        let rating = myBooks.books[i].rating;

    // create a new HTML div division
    let AddCardBook = document.createElement("div");

    // add class = “col” to new division for Bootstrap 
    AddCardBook.classList.add("col");

    // create Bootstrap card
    AddCardBook.innerHTML = `
        <div id=${card} class="card shadow-sm">
        <img src=${img} class="card-img-top" style="width: 305 px; height: 450px" alt="..."></img>
        <div class="card-body">
            <p class="card-text"> <strong>${title}</strong>, ${year}</p>
            <p class="card-text">${des}</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-body-secondary">${rating}</small>
            </div>
        </div>
        </div>
    `;
    // append new division
    CardBook.appendChild(AddCardBook);

    let cbox = document.getElementById(checkbox);
    checkboxes.push(cbox);
    
    let ccard = document.getElementById(card);
    cards.push(ccard);
    } // end of for

    // Add event listener to search button
    let search = document.getElementById("searchButton");
    search.addEventListener("click", function () {
        let searchTerm = document.getElementById("searchInput").value.toLowerCase();
        console.log(searchTerm);

    // Iterate through cards and show/hide based on search term
        for (let i = 0; i < cards.length; i++) {
            let cardDescription = myBooks.books[i].description.toLowerCase();
            if (cardDescription.includes(searchTerm)) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        } // end for
    }); // end search

    
} // end of function