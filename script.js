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

function genMatches () {
    fetch('https://spreadsheets.google.com/feeds/cells/1VMtW9u1rBe425AmmttrI6_eRWQaon-trOEPG_AvM77w/1/public/full?alt=json', {
        method: 'get'
    }).then((response) => {
        response.json().then(function(data) {
            console.log(data)
            
            function makeGroup(from, to, size, id){
                const players = [];
                for(let i = from; i<to; i++){
                    players.push(
                        {
                            name: data.feed.entry[i].gs$cell.inputValue,
                            points: data.feed.entry[i+size].gs$cell.inputValue
                        }
                    )
                }
                players.sort((a, b) => a.points - b.points).reverse();
                players.forEach(player => createRow(id, player.name, player.points))
            }

            makeGroup(1, 5, 5, "#t1");
            makeGroup(11, 15, 5, "#t2");
            makeGroup(21, 25, 5, "#t3");
            makeGroup(31, 35, 5, "#t4"); 

            function makeKo(from, to, id){
                for(let i = from; i<to; i+=4){
                    let name1 = data.feed.entry[i].gs$cell.inputValue;
                    let name2 = data.feed.entry[i+1].gs$cell.inputValue;
                    let score1 = data.feed.entry[i+2].gs$cell.inputValue;
                    let score2 = data.feed.entry[i+3].gs$cell.inputValue;
                    addBox(id, name1, name2, score1, score2);
                }
            }

            makeKo(41, 56, "#viertel"); 
            makeKo(58, 66, "#halb"); 
            makeKo(67, 71, "#platz"); 
            makeKo(72, 76, "#finale");
            
          });
    }).catch(function(err) {
        // Error :(
    });
}

document.addEventListener("DOMContentLoaded", genMatches());

