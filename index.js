let userInput = prompt("list your flavors by commas");
let flavors = userInput.split(",");
function tabelizedflavors(){
const flavorTable ={};
for (let f=0; f < flavors.length;f++){
    if (!(flavors[f] in flavorTable)){
        let count =0;
        for (let i =0; i <flavors.length; i++){
            if (flavors[i] === flavors[f]){
                count++
            }
        }
        flavorTable[flavors[f]] = count;
    }

}

console.table(flavorTable);
}

tabelizedflavors();