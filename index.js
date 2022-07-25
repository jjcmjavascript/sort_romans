const romans_numbers = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'VI': 6,
    'VII': 7,
    'VIII': 8,
    'IX': 9,
    'X': 10,
    'XX': 20,
    'XXX': 30,
    'XL': 40,
    'L': 50,
}

function sortRoman(names) {
    const getNumericName = (name) =>{
        const splitted_name = name.split(" "); 
        let current_name = splitted_name[0];
        let name_number =  splitted_name[1] ;
        let result_number = romans_numbers[name_number]; 

        if(name_number && !result_number){
            let i = 1; 
            let temp_result_number = '';
            while(true){
                temp_result_number = name_number.substring(0, name_number.length - i); 
                temp_result_number = romans_numbers[temp_result_number];
                             
                if(temp_result_number){ 
                    result_number = temp_result_number + romans_numbers[name_number.substring(name_number.length - i)]; 
                    break;
                }
                i++;
            }
            
        }
        return {name: current_name, number : result_number}; 
    }; 
    
    return names.sort((currentName, next) => {
        const { name, number } = getNumericName(currentName);
        const { name: nextName, number: nextNumber }= getNumericName(next)
        if(name == nextName){
            return number < nextNumber ?  -1 : 1;
        }
        
        return name < nextName ? -1 : 1
    });
}


const arr = [
    'Francois VI',
    'Francois XXIII',
    'Francois XX',
    'Francois XXV',
    'Petrzlen XXXIV',
    'Paul VIII',
    'Louis XLIII',
    'Philippe XXXVIII',
    'Luka I',
    'Mary XXVIII',
    'Bruce XXVI',
    'Tomek V',
    'Luka XXXVII',
    'Petrzlen I',
    'Paul VI',
    'Mary XXX',
    'Luka XLII',
    'Bruce XLI',
    'Tomek VIII',
    'Luka XXII',
    'Bruce XVIII',
    'Rasto XV',
    'Maru XLI',
    'Francois XXIV',
    'Mary XXIV',
    'Maru XXXIV',
    'Louis XXIX',
    'Francois XL',
    'Philippe L',
    'Bruce XXVII',
    'Maru XXXV',
    'Tomek IX',
    'Paul XLIX',
    'Petrzlen XX',
    'Petrzlen XXXVII',
    'Paul XX',
    'Maru XVIII',
    'Louis XLI',
    'Mary XLII',
    'Luka XVII',
    'Paul XVII',
    'Louis XV',
    'Mary XXXV',
    'Philippe XV',
    'Petrzlen XVI',
    'Mimino XXXVIII',
    'Philippe VII',
]; 

console.log(sortRoman(arr))
