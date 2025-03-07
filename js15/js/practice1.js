words= [];

let choice1= confirm("Do you want to add a word?");

while(choice1){
    let newWord= prompt("Enter the word that you want to add into array?");
    words.push(newWord);
    words.sort();
    alert(`Current array: ${words}`);

    let choice2=confirm("Do you want to continue add new items into your array?");

    if(choice2){
        continue;
    }
    else{
        alert(`Final version of your array: ${words}\nHave a good day.`);
        break;
    }
}
if(choice1===false){
    alert("Okay then have a good day.")
}
