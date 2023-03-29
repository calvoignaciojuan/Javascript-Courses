import fetch from "node-fetch";
const API = 'http://api.escuelajs.co/api/v1';

async function fetchData(urlApi){

    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async(urlApi) =>{

    try{
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${products[0].category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
        
    }catch(error){
        console.error(error);
    }
}

anotherFunction(API);