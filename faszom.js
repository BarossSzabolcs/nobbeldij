function kattintnevkeres(){
    var bekertNev = document.getElementById("bekeresNev").value 
    //alert(bekeresNev)
    for (const elem of prizes.prizes) {
        if(elem.laureates!=undefined)
        for (const elemecske of elem.laureates) {
            if(elemecske.firstname.Includes(bekertNev.toLowerCase)){
                szovegecske+=
                `
                <tr>
                <td>${elemecske.year}/td>
                <td>${elemecske.category}</td>
                <td>${elemecske.firstname}</td>
                <td>${elemecske.surname}</td>
                <td>${elemecske.motivation}</td>
                </tr>

                `
           }

           
        }
        
    }
    document.getElementById("test").innerHTML=szovegecske
}