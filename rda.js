//remove duplicates from array in js.

    /*bruteforce sol


    let a = [1,2,5,2,1,8];
    let b =[];
    let len = a.length;

    for (let i=0 ; i<len;i++  ){
        if(b.indexOf(a[i])=== -1){
            b.push(a[i]);
        }
    }
    console.log(b);
    */


//sol-2
let a = [1,2,3,2,1,7];
obj={};

for (let i of a){
    obj[i]= true;
}

let b =Object.keys(obj);

console.log(b);


//sol - 3

let c =[2,4,6,8,4,6];

console.log([...new Set(c)]);
