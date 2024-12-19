const table = [
    { "name": "Ahmed Khan", "class": 1, "roll": 1 },
    { "name": "Sara Ali", "class": 1, "roll": 2 },
    { "name": "Usman Tariq", "class": 1, "roll": 3 },
    { "name": "Ayesha Malik", "class": 1, "roll": 4 },
    { "name": "Ali Raza", "class": 1, "roll": 5 },
    { "name": "Hina Shah", "class": 2, "roll": 1 },
    { "name": "Kamran Javed", "class": 2, "roll": 2 },
    { "name": "Zara Sheikh", "class": 2, "roll": 3 },
    { "name": "Bilal Ahmed", "class": 2, "roll": 4 },
    { "name": "Maham Farooq", "class": 2, "roll": 5 },
    { "name": "Omer Hussain", "class": 3, "roll": 1 },
    { "name": "Anum Fatima", "class": 3, "roll": 2 },
    { "name": "Fahad Iqbal", "class": 3, "roll": 3 },
    { "name": "Kiran Javed", "class": 3, "roll": 4 },
    { "name": "Rameez Khan", "class": 3, "roll": 5 },
    { "name": "Samina Tariq", "class": 4, "roll": 1 },
    { "name": "Zain Abbas", "class": 4, "roll": 2 },
    { "name": "Fatima Noor", "class": 4, "roll": 3 },
    { "name": "Hassan Butt", "class": 4, "roll": 4 },
    { "name": "Tania Ahmed", "class": 4, "roll": 5 },
    { "name": "Danish Raza", "class": 5, "roll": 1 },
    { "name": "Lubna Aslam", "class": 5, "roll": 2 },
    { "name": "Hamza Qureshi", "class": 5, "roll": 3 },
    { "name": "Nida Khan", "class": 5, "roll": 4 },
    { "name": "Adil Sharif", "class": 5, "roll": 5 },
    { "name": "Rida Mehmood", "class": 6, "roll": 1 },
    { "name": "Saad Ahmed", "class": 6, "roll": 2 },
    { "name": "Mehwish Tariq", "class": 6, "roll": 3 },
    { "name": "Waqas Ali", "class": 6, "roll": 4 },
    { "name": "Nashit Hussain", "class": 6, "roll": 5 }
]
//   console.log(table);

function renderTable() {

    const tableBody = document.getElementById("body");
    tableBody.innerHTML = "";

    table.forEach(student => {
        const row = `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
        // console.log(row);
    });
    
}
renderTable();


function filterClass(){
    const tableBody = document.getElementById("body");
    const classFilter = parseInt(document.getElementById('classFilter').value);
    const classes = table.filter( (item)=>{
        return item.class === classFilter
    })
    tableBody.innerText= "";    


    classes.forEach ( (item) =>{
        const tr = document.createElement('tr');
        
        const td2 = document.createElement('td')
        const innerValue2 = td2.innerText = item.roll
        tr.appendChild(td2)
        
        const td = document.createElement('td')
        const innerValue = td.innerText = item.name
        tr.appendChild(td)

        const td1 = document.createElement('td')
        const innerValue1 = td1.innerText = item.class
        tr.appendChild(td1)

        document.getElementById('body').appendChild(tr);
    })   
    console.log(classes);
}

function findName(){
    const tableBody = document.getElementById("body");
    const search = document.getElementById('searchInput').value;
    const names = table.filter( (student)=>{
       return student.name === search
    })

    tableBody.innerText= ""; 
    names.forEach ( (student) =>{
        const tr = document.createElement('tr');
        
        const td2 = document.createElement('td')
        const innerValue2 = td2.innerText = student.roll
        tr.appendChild(td2)
        
        const td = document.createElement('td')
        const innerValue = td.innerText = student.name
        tr.appendChild(td)

        const td1 = document.createElement('td')
        const innerValue1 = td1.innerText = student.class
        tr.appendChild(td1)

        document.getElementById('body').appendChild(tr);
    })
    console.log(names);
    
}

// findName()