fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    let container = document.getElementById("container");

    data.products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.thumbnail}">
            <h3>${p.brand}</h3>
            <p>${p.category}</p>
            <p>Rating: ${p.rating}</p>
            <h2>₹${p.price}</h2>
        </div>`;
    });

});