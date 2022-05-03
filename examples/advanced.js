function Book(title, author, npages, hasRead) {
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.hasRead = hasRead;
    this.info = function () {
        return this.title +
            " by " + this.author +
            ", " + this.npages + " pages" +
            ", " + (this.hasRead ? "was read" : "not read yet.");
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 0)

console.log(theHobbit.info());