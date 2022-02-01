document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employees.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // ? console.log(this.responseText);
            // ? console.log(JSON.parse(this.responseText));

            let employees = JSON.parse(this.responseText);
            
            let html = "";
            // `
            //     <tr>
            //         <td>${employees.firstName}</td>
            //         <td>${employees.lastName}</td>
            //         <td>${employees.age}</td>
            //         <td>${employees.retired}</td>
            //     </tr>
            // `;

            employees.forEach(element => {
                html += `<tr>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.age}</td>
                <td>${element.retired}</td>
            </tr>`;
            })

            document.querySelector('#employees').innerHTML = html;
        }
    }

    xhr.send();
}