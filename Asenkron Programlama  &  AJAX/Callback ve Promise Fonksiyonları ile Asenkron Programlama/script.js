var products = [
    {id:1, name:'Samsung S8', price: 3000},
    {id:2, name:'Samsung S9', price: 4000},
    {id:3, name:'Samsung S6', price: 2400},
];

let added = true;

function addProduct(prd, callback){

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            products.push(prd);
            let added = true;

            if(added){
                resolve();
            }else{
                reject('Hata : 500');
            }
        }, 2000);
    });

    // if(added){
    //     setTimeout(()=> {
    //         products.push(prd);
    //         callback(null, prd);
    //     }, 2000);
    // }else{
    //     callback('500',prd);
    // }

    
}


function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        })
    }, 1000);
}


//addProduct({id:4, name:'Samsung Note 5', price: 5000}, getProducts);
addProduct({id:4, name:'Samsung Note 5', price: 5000})
.then(getProducts)
.catch(function(err){
    console.log(err)
});

// addProduct({id:4, name:'Samsung Note 5', price: 5000}, function(err, data){
//     if(err){
//         console.log('hata : '+ err);
//     }else{
//         console.log(data);
//     }
// });
