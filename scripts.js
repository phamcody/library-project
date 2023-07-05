class Book {
    
    constructor(title, author, pages, total, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.total = total;
        this.read = read;
        this.index = index;
        this.library = [];
        this.disableButton
    }

    addBookToLibrary(books) {
        this.library.push(books);
    } 

    createCards(titleInputted, authorInputted, pagesInputted, totalInputted, readInputted) {

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
        uTitle.textContent = titleInputted;
    
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
        uAuthor.textContent = authorInputted;
        authorDiv.appendChild(uAuthor);
    
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('pages-div');
        bookContainer.appendChild(pagesDiv);
    
        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = 'pages';
        pagesDiv.appendChild(pages);
    
        const pageContainer = document.createElement('div');
        pageContainer.classList.add('container');
        pagesDiv.appendChild(pageContainer);
    
        const uPages = document.createElement('div');
        uPages.classList.add('u-pages');
        uPages.textContent = pagesInputted;
        pageContainer.appendChild(uPages);
    
        const uParagraph = document.createElement('div');
        uParagraph.textContent = '/';
        pageContainer.appendChild(uParagraph);
    
        const uPagesTotal = document.createElement('div');
        uPagesTotal.classList.add('u-pages');
        uPagesTotal.textContent = totalInputted;
        pageContainer.appendChild(uPagesTotal);
    
    
        const readButton = document.createElement('button');
        readButton.classList.add('read-or-not');
        readButton.textContent = readInputted;
        bookContainer.appendChild(readButton);
        
        readButton.addEventListener('click', () => {
            if (readButton.textContent === 'unfinished') {
                readButton.classList.add('read');
                readButton.textContent = 'read';
                uPages.textContent = uPagesTotal.textContent;
            }
            else {
                readButton.classList.remove('read');
                readButton.textContent = 'unfinished';
            }
        })
    
        const bookDelete = document.createElement('button');
        bookDelete.textContent = 'X';
        bookDelete.classList.add('delete');
        bookDelete.setAttribute('id', titleInputted);
        bookContainer.appendChild(bookDelete);
    
        bookDelete.addEventListener('click', (e) => {
            for (let i = 0; i < this.library.length; i++) {
                if (this.library[i].title === e.target.id) {
                    this.library.splice(i, 1);
                }
            }
            console.log(this.library);
            mainContainer.removeChild(bookContainer);
        })
    
    
        if (uPages.textContent === uPagesTotal.textContent) {
            readButton.classList.add('read');
            readButton.textContent = 'read';
        }
    
    }

    showForm() {

        if (this.disableButton === true) return;
    
        const formOutsideContainer= document.createElement('div');
        formOutsideContainer.classList.add('form-outside-container');
        formOutsideContainer.setAttribute('id', 'form-outside-container');
        mainContainer.appendChild(formOutsideContainer);
    
    
        const form = document.createElement('form');
        form.setAttribute('onsubmit', 'return false;');
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
        submitButton.setAttribute('id', 'submit');
        submitButton.textContent = 'ADD';
    
        form.appendChild(submitButton);
    
        const closeButton = document.createElement('button');
        closeButton.classList.add('delete');
        closeButton.classList.add('stretch');
        closeButton.textContent = 'X';
    
        /* Seperate */
    
        form.appendChild(closeButton);
    
        closeButton.addEventListener('click', () => {
            this.disableButton = false;
            mainContainer.removeChild(formOutsideContainer);
        })
    
        const buttonSubmit = document.getElementById('submit');
        if (buttonSubmit) {
            buttonSubmit.addEventListener('click', (e) => {
                let chooseTitle = document.getElementById('book_title');
                let chooseAuthor = document.getElementById('book_author');
                let choosePage = document.querySelector('[name="read_pages"]');
                let chooseTotal = document.querySelector('[name="total_pages"]');
                let chooseRead = 'unfinished';
                let index = this.addSubmitCount;
        
                if (
                    chooseTitle.value === ''||
                    chooseAuthor.value === ''||
                    choosePage.value === ''||
                    chooseTotal.value === ''
                ) return;
        
                else {
                    
                    if (choosePage.value === chooseTotal.value) chooseRead = 'read';
                
                    let submitBook = new Book(chooseTitle.value, chooseAuthor.value, choosePage.value, chooseTotal.value, chooseRead, index);
                    this.addBookToLibrary(submitBook);
    
                    
                    this.createCards(chooseTitle.value, chooseAuthor.value, choosePage.value, chooseTotal.value, chooseRead, index);
                    this.disableButton = false;
    
                    console.log(this.library);
                    mainContainer.removeChild(formOutsideContainer);
                }
            })
        }
    
    
    };


}



let user = new Book();

const mainContainer = document.querySelector('.main');
const addBook = document.getElementById('add-button');
addBook.addEventListener('click', () => {
    user.showForm();
    user.disableButton = true;
})








