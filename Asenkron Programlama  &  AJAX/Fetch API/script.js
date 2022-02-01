// text

function getText(){
    fetch('text.txt')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
}

//getText()


function getJson(){
    fetch('products.json')
        .then((response) => {
            return response.json();
        }).then((data)=> {
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
}

//getJson();


function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json();
        }).then(users =>{
            // console.log(users.results);
            var html = "";

            users.results.forEach(user=>{
                html+= `
                <div>
                    <img src="${user.picture.medium}">
                    <div>
                        ${user.name.first}
                        ${user.name.first}
                    </div>
                </div>
                `;
            });

            document.querySelector('#users').innerHTML = html;
        }).catch(err=>{
            console.log(err);
        })
}

//getExternalApi();

function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    var data = {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "Sample Title",
            body: "Sample Body"
        }),
        header: new Headers({'content-type':'application/json'})
    }

    fetch(url, data)
        .then(res=>{
            console.log(res);
        })
}


postExternalApi();