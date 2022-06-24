import {reactive} from "vue";
import axios from "axios";

const orderProducts = reactive([]);

function useStore() {

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/api/messages/products", false);
    xhttp.send();

    const products = JSON.parse(xhttp.responseText);

    const getProductById = (id) => {
        return products.value.find((product) => product.id === id);
    };

    const addProductToOrder = (product) => {
        orderProducts.push(product);
    };

    const addProduct = (name, price) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/api/messages/product", false);
        xhttp.send("{\n\t\"name\": \"" + name + "\",\n\t\"price\": " + price + "\n}")
    }

    return {
        products,
        getProductById,
        addProductToOrder,
        orderProducts,
        addProduct
    }
}

export default useStore;