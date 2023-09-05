// import axios from 'axios';


// export async function productData(){
//     const products = await axios.get("https://fakestoreapi.com/products")
//     return products
// }



import axios from 'axios';

export async function productData() {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
    return products; // Assuming the data you want is in the 'data' property of the response.
  } catch (error) {
    console.error("Error fetching product data:", error);
    return "This API is not available"; // Return a text message if there's an error.
  }
}

