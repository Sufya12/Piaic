


let PersonName: string = "Sufyan Ahmad";



let lowercaseName: string = PersonName.toLowerCase();


console.log(lowercaseName);





let uppercaseName: string = PersonName.toUpperCase();



console.log(uppercaseName);




let words: string[] = PersonName.split(" ");


let titlecaseName: string = ""


for (let i = 0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};


console.log(titlecaseName)

export{};
