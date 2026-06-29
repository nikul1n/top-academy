import sessionApi from "./sessionApi.js";
import config from "./config.js";


const apiUrl = config.apiUrl + '/cart'

const cartApi = {
    async get() {
        const responce = await fetch(apiUrl + `sessionId=${sessionApi.getSessionId()}`);

        const data = await responce.json();

        return data;

    },

    async addItem (product, quantity = 1) {
        const card = get();
        const foundProduct = card.products.find((p) => p.id === product.id)

        if (foundProduct) {
            foundProduct.quantity += quantity;
        } else {
            card.products.push({
                productId: product.id,
                quantity
            })
        }  
        
        const responce = await fetch(apiUrl + `/${card.id}`, {
            method: 'PUT',
            body: JSON.stringify(card)
        });
        return responce.ok;
    }


}

export default cartApi;