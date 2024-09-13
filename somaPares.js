let input = require('fs').readFileSync('input.txt','utf-8');
let lines = input.split('\n');

for (let j = 0; j < lines.length; j++) {
    let num = Number(lines[j]);
    let somaNum = 0;

    

    if (num!=0) {

        if(num%2 != 0){
            num++;
        }
        for (let i = 1; i <= 5; i++) {
            somaNum += num;
            num += 2;
                        
        }
        console.log(somaNum);
    }
    
}


