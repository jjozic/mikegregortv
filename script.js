function createRow (id, n, p){
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = n;
    const points = document.createElement("td");
    points.innerText = p;
    row.append(name, points);
    document.querySelector(id).append(row);
}

function addBox (id, n1, n2, g1, g2){
    const div = document.createElement("div");
    const name = document.createElement("span");
    name.innerText = n1 + " - " + n2;
    const game1 = document.createElement("span");
    game1.innerText = g1;
    const game2 = document.createElement("span");
    game2.innerText = g2;
    div.append(name, game1, game2)
    document.querySelector(id).append(div);
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
            //viertelfinale
            for(let i = 49; i<65; i+=4){
                let name1 = data.feed.entry[i].gs$cell.inputValue;
                let name2 = data.feed.entry[i+1].gs$cell.inputValue;
                let score1 = data.feed.entry[i+2].gs$cell.inputValue;
                let score2 = data.feed.entry[i+3].gs$cell.inputValue;
                addBox("#viertel", name1, name2, score1, score2);
            }

              //halb
              for(let i = 66; i<74; i+=4){
                let name1 = data.feed.entry[i].gs$cell.inputValue;
                let name2 = data.feed.entry[i+1].gs$cell.inputValue;
                let score1 = data.feed.entry[i+2].gs$cell.inputValue;
                let score2 = data.feed.entry[i+3].gs$cell.inputValue;
                addBox("#halb", name1, name2, score1, score2);
            }
            //3. platz
            for(let i = 75; i<79; i+=4){
                let name1 = data.feed.entry[i].gs$cell.inputValue;
                let name2 = data.feed.entry[i+1].gs$cell.inputValue;
                let score1 = data.feed.entry[i+2].gs$cell.inputValue;
                let score2 = data.feed.entry[i+3].gs$cell.inputValue;
                addBox("#platz", name1, name2, score1, score2);
            }
              //finale
              for(let i = 80; i<84; i+=4){
                let name1 = data.feed.entry[i].gs$cell.inputValue;
                let name2 = data.feed.entry[i+1].gs$cell.inputValue;
                let score1 = data.feed.entry[i+2].gs$cell.inputValue;
                let score2 = data.feed.entry[i+3].gs$cell.inputValue;
                addBox("#finale", name1, name2, score1, score2);
            }
            
          });
    }).catch(function(err) {
        // Error :(
    });
}

document.addEventListener("DOMContentLoaded", genMatches(8));

