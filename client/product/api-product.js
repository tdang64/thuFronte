const API_URL = import.meta.env.VITE_API_URL

const listProducts = async (signal) => {
    try {
        let response = await fetch(API_URL + '/api/products', {
            method: 'GET',
            signal: signal,
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const createProduct = async (product, credentials) => {
    try {
        let response = await fetch(API_URL + '/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
            },
            body: JSON.stringify(product),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

                

const updateProduct = async (params, credentials, product) => {
    try {
        let response = await fetch(API_URL + '/api/products/' + params.productId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
            },
            body: JSON.stringify(product),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const removeProduct = async (params, credentials) => {
    try {
        let response = await fetch(API_URL + '/api/products/' + params.productId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
            },
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
const getProductById = async (productId) => {
    try {
        let response = await fetch(API_URL + '/api/products/' + productId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { listProducts, createProduct, updateProduct, removeProduct, getProductById };