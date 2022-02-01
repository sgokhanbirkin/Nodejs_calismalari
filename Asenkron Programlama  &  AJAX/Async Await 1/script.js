// async function fn(){
//     return "hello"
// }

// console.log(fn());

// fn()
//     .then(res => console.log(res));

let isError = false;

function getCategory(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(!isError){
                reject('Error...');
            }else{
                resolve('Phone');
            }
        }, 1000);
    })
    
}


function getProducts(category){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`5 products in ${category}`);
        }, 1000);
    })
}


// getCategory()
//     .then(getProducts)
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err));

async function getProduct(){
    try {
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }


}

getProduct();