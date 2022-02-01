document.querySelector('#getOne').addEventListener('click', getOne);
document.querySelector('#getAll').addEventListener('click', getAll);
document.querySelector('#postData').addEventListener('click', postData);

function getOne(){
    var id = document.getElementById('postid').value;

    var url = "https://jsonplaceholder.typicode.com/posts/"+id;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function(){
        if(this.status === 200){
            var post = JSON.parse(this.responseText);

            var html = "";
            


                html += `
                <div class="card mb-2">
                    <div class="card-header">
                    ${post.id} --  ${post.title}
                    </div>
                    <div class="card-body">
                        <p>${post.body}</p>
                    </div>
                </div>
                `;
    

            document.querySelector('#results').innerHTML = html;
        }
    }

    xhr.send();
    
}

function getAll(){
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function(){
        if(this.status === 200){
            var posts = JSON.parse(this.responseText);

            var html = "";
            
            posts.forEach(post => {

                html += `
                <div class="card mb-2">
                    <div class="card-header">
                        ${post.title}
                    </div>
                    <div class="card-body">
                        <p>${post.body}</p>
                    </div>
                </div>
                `;
        });

            document.querySelector('#results').innerHTML = html;
        }
    }

    xhr.send();

}

function postData(){
    const data = {
        userId : 1,
        title : "new title",
        body : "new body"
    }

    var json = JSON.stringify(data);
    // ? console.log(json)

    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = function(){
        // ! console.log(xhr.status); // 201
        // ! console.log(xhr.readyState); // 4
        if(xhr.status === 201 && xhr.readyState === 4){
            var post = xhr.responseText;
            console.log(post);
        }
    }
    xhr.send(json);
}