const result = document.querySelector('.result')

const fetchProduct = async () => {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');

        const { 
            data: { 
                fields: { image, name, price, description } 
            } 
        } = await axios.get(`/api/3-product?id=${id}`);

        result.innerHTML = `
            <h1 class="title">${name}</h1>
            <article class="product">
                <img class="product-img"
                src="${image[0].url}"
                alt="${name}"
                />
                <div class="product-info">
                    <h5 class="title">${name}</h5>
                    <h5 class="price">$${price}</h5>
                    <p class="desc">${description}</p>
                </div>
            </article>
        `;
    } catch (error) {
        result.innerHTML = '<h2>There was an error</h2>';
    }
};

fetchProduct();