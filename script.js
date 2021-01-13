function createRow (id, n, p){
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = n;
    const points = document.createElement("td");
    points.innerText = p;
    row.append(name, points);
    document.querySelector(id).append(row);
}

function genMatches (nTeams) {
    // url (required), options (optional)
    fetch('https://spreadsheets.google.com/feeds/cells/1gJLOWF7hFOf3YPCAy4MJegMW9da6zd7iF7UqDc225Io/1/public/full?alt=json', {
        method: 'get'
    }).then(function(response) {
        response.json().then(function(data) {
            //gruppe a
            for(let i = 1; i<6; i++){
                let name = data.feed.entry[i].gs$cell.inputValue;
                let points = data.feed.entry[i+6].gs$cell.inputValue;
                createRow("#t1", name, points);
            }
            //gruppe b
            for(let i = 13; i<18; i++){
                let name = data.feed.entry[i].gs$cell.inputValue;
                let points = data.feed.entry[i+6].gs$cell.inputValue;
                createRow("#t2", name, points);
            }
            //gruppe c
            for(let i = 25; i<30; i++){
                let name = data.feed.entry[i].gs$cell.inputValue;
                let points = data.feed.entry[i+6].gs$cell.inputValue;
                createRow("#t3", name, points);
            }
            //gruppe d
            for(let i = 37; i<42; i++){
                let name = data.feed.entry[i].gs$cell.inputValue;
                let points = data.feed.entry[i+6].gs$cell.inputValue;
                createRow("#t4", name, points);
            }
            
          });
    }).catch(function(err) {
        // Error :(
    });
}

document.addEventListener("DOMContentLoaded", genMatches(8));

