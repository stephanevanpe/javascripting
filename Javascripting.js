let result = prompt("Hey mon ami ! Tu aimes ça les patates ?" );
let patate='#'
if (result === 'oui') {
    for (var i = 0; i < 7; i++) {
        console.log(patate);
        patate+=patate[i];
    
    }
} else if (result === 'non'){
    alert("Tu sais pas ce que tu perds");
}else{ alert("Je vous sens comme tiraillé")};