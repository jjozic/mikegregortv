function genMatches (nTeams) {
    // url (required), options (optional)
    fetch('https://spreadsheets.google.com/feeds/cells/1gJLOWF7hFOf3YPCAy4MJegMW9da6zd7iF7UqDc225Io/1/public/full?alt=json', {
        method: 'get'
    }).then(function(response) {
        response.json().then(function(data) {
            // console.log(data);
            const gA = document.querySelector(".gruppeA");
            const n1 = document.createElement("span");
            n1.innerHTML = data.feed.entry[1].gs$cell.inputValue;
            const n2 = document.createElement("span");
            n2.innerHTML = data.feed.entry[2].gs$cell.inputValue;
            const n3 = document.createElement("span");
            n3.innerHTML = data.feed.entry[3].gs$cell.inputValue;
            const n4 = document.createElement("span");
            n4.innerHTML = data.feed.entry[4].gs$cell.inputValue;
            const n5 = document.createElement("span");
            n5.innerHTML = data.feed.entry[5].gs$cell.inputValue;
            
            gA.append(n1,n2,n3,n4,n5);
          });
    }).catch(function(err) {
        // Error :(
    });
}

document.addEventListener("DOMContentLoaded", genMatches(8));

