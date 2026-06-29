// export class TestAPI {
//     products =
//         [{
//             id: 1,
//             name: "iphone",
//             price: 100,
//             image: "./images/orig.png"
//         },
//         {
//             id: 2,
//             name: "samsung",
//             price: 100,
//             image: `./images/1047076_r6354.jpg`
//         },
//         {
//             id: 3,
//             name: "huawei",
//             price: 100,
//             image: "./images/358.webp"
//         }]


//      async getAll() {
//         return this.products;
//     }
// }


// import config from "./config.js";


import config from "./config.js";
const _apiUrl = config.apiUrl + '/products'

const productsApi = {
    async getAll() {
       const responce = await fetch(_apiUrl);

       const data = await responce.json();

       return data;
    },

    async get(id) {
        const responce = await fetch(_apiUrl + `/${id}`);

        const data = await responce.json();

        return data;
    }
}

export default productsApi;