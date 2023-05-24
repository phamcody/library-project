let myLibrary = [];

function Book(title, author, pages, total, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.total = total;
    this.read = read;
}

let atomic_habits = new Book("Atomic Habits", "James Clear", 24, 250, "No"); 

let disableButton = false;


/* Website Code */
const mainContainer = document.querySelector('.main');

let addBook = document.getElementById('add-button');
addBook.addEventListener('click', () => {
    showForm();
    disableButton = true;
    console.log(disableButton);
})

createCards();



/* FUNCTIONS */



function createCards() {

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-containers');
    mainContainer.appendChild(bookContainer);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');
    bookContainer.appendChild(titleDiv);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'title'
    const uTitle = document.createElement('div');
    uTitle.classList.add('u-title');
    uTitle.textContent = 'Atomic Habits';

    titleDiv.appendChild(title);
    titleDiv.appendChild(uTitle);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author-div');
    bookContainer.appendChild(authorDiv);

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = 'author';
    authorDiv.appendChild(author);

    const uAuthor = document.createElement('div');
    uAuthor.classList.add('u-author');
    uAuthor.textContent = 'James Clear';
    authorDiv.appendChild(uAuthor);

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages-div');
    bookContainer.appendChild(pagesDiv);

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = 'pages';
    pagesDiv.appendChild(pages);

    const uPages = document.createElement('div');
    uPages.classList.add('u-pages');
    uPages.textContent = '247';
    pagesDiv.appendChild(uPages);

    const readButton = document.createElement('button');
    readButton.classList.add('read-or-not');
    readButton.textContent = 'unfinished';
    bookContainer.appendChild(readButton);

    const bookDelete = document.createElement('button');
    bookDelete.textContent = 'X';
    bookDelete.classList.add('delete');
    bookContainer.appendChild(bookDelete);

}

function showForm() {

    if (disableButton === true) return;

    const formOutsideContainer= document.createElement('div');
    formOutsideContainer.classList.add('form-outside-container');
    mainContainer.appendChild(formOutsideContainer);


    const form = document.createElement('form');
    formOutsideContainer.appendChild(form);

    const formContainerOne = document.createElement('div');
    formContainerOne.classList.add('form-container');
    const formContainerTwo = document.createElement('div');
    formContainerTwo.classList.add('form-container');
    const formContainerThree = document.createElement('div');
    formContainerThree.classList.add('form-container');
    formContainerThree.setAttribute('id', 'form-three-p');

    form.appendChild(formContainerOne);
    form.appendChild(formContainerTwo);
    form.appendChild(formContainerThree);

    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const pThree = document.createElement('p');

    formContainerOne.appendChild(pOne);
    formContainerTwo.appendChild(pTwo);
    formContainerThree.appendChild(pThree);

    const bookTitle = document.createElement('label');
    bookTitle.setAttribute('for', 'book_title');
    bookTitle.textContent = 'TITLE';
    pOne.appendChild(bookTitle);

    const bookAuthor = document.createElement('label');
    bookAuthor.setAttribute('for', 'book_author');
    bookAuthor.textContent = 'AUTHOR';
    pTwo.appendChild(bookAuthor);

    const bookPages = document.createElement('label');
    bookPages.setAttribute('for', 'book_pages');
    bookPages.textContent = 'PAGES';
    pThree.appendChild(bookPages);
    

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'book_title');
    titleInput.setAttribute('id', 'book_title');
    titleInput.setAttribute('required', 'true');
    pOne.appendChild(titleInput);

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('name', 'book_author');
    authorInput.setAttribute('id', 'book_author');
    authorInput.setAttribute('required', 'true');
    pTwo.appendChild(authorInput);

    const pThreeContainer = document.createElement('div');
    pThreeContainer.classList.add('container');
    const formThreeP = document.getElementById('form-three-p');
    formThreeP.appendChild(pThreeContainer);

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('name', 'read_pages');
    pagesInput.setAttribute('id', 'book_pages');
    pagesInput.setAttribute('required', 'true');
    pagesInput.setAttribute('pattern', '[0-999]');
    pThreeContainer.appendChild(pagesInput);

    const slash = document.createElement('p');
    slash.textContent = '/';
    pThreeContainer.appendChild(slash);

    const totalInput = document.createElement('input');
    totalInput.setAttribute('type', 'number');
    totalInput.setAttribute('name', 'total_pages');
    totalInput.setAttribute('id', 'book_pages');
    totalInput.setAttribute('required', 'true');
    totalInput.setAttribute('pattern', '[0-999]');
    pThreeContainer.appendChild(totalInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submit');
    submitButton.textContent = 'ADD';

    form.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('delete');
    closeButton.classList.add('stretch');
    closeButton.textContent = 'X';

    form.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        disableButton = false;
        mainContainer.removeChild(formOutsideContainer);
    })
}
