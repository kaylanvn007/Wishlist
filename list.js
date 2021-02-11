//Object for each item in the wishlist.
function Item (name){
    this.name = name;
};

//Render
function renderItem(item){
    let container = document.querySelector(".container");
    let cell = document.createElement("div");
    let title = document.createElement('h2');

    title.createTextNode(item.name);

    cell.appendChild(title);
    container.appendChild(cell);
}