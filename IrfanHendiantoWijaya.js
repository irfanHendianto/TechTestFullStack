let input = [264793,803935]
let tempArr = [];
let result = [];
let dif = input[1] - input[0]

for (let i = 0; i <= dif; i++) {
    tempArr.push(input[0] + i)
    
}
const checkValue = (num) =>{
    let notDecrease = true;
    let countDouble = 0;
    let temp = num.toString().split('').map(Number);

    for (let i = 0; i < temp.length - 1; i++){ 
        if(temp[i] > temp[i+1]){
            notDecrease = false;
            break;
        }else if(temp[i] === temp[i+1]){
            countDouble++;
//              if(temp[i+1] !== temp[i+2] && temp[i] !== temp[i-1]){
//                  countDouble++;
//             }
        }
    }
    if(countDouble > 0 && notDecrease){
        return true;
    }else{
        return false
    }
}
tempArr.map(el => {
    let checkData = checkValue(el);
    if(checkData){
        result.push(el)
    }
})



console.log(result.length)
