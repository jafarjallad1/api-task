async function get() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;

   
    const result = products.map(function (product) {
        return `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" />
        `;
    }).join(''); 

    document.querySelector(".products").innerHTML = result;
}

get();
