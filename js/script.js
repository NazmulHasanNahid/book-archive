 //input-search
 const searchBook = () => {
  const SearchField = document.getElementById("input-search");
  const searchText = SearchField.value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
  SearchField.value = "";
 }

//total result section
  const totalResult = document.getElementById('total-result');
  const displaySearchResult = books => {
  const result = `${books.numFound}`
  function color(){
    totalResult.style.color='white'
    totalResult.style.margin = '20px 0px'
    
  }

  //error handeling
  if (result === "0") {
    totalResult.innerText = `No result Found`
    color()
  } else {
    totalResult.innerText = `Found : ${books.numFound}  Books`
    color()
  }

  //display books
  const searchResult = document.getElementById('search-result');
  const book = books.docs;
  searchResult.textContent = '';
  book.forEach(doc => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-75 mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <p class="card-text">Author name: ${doc.author_name}</p>
          <p class="card-text"> publisher : ${doc.publisher}</p>
          <p class="card-text">First publish year: ${doc.first_publish_year}</p>
      </div>
    </div>
      `;
    searchResult.appendChild(div)
  });

}