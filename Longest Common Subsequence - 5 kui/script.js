// function LCS(x, y) {
//     let arr = x.split('')
//     let res = arr.filter(el => y.indexOf(el) >= 0)
//     console.log(arr)
//     console.log(res)
// return res.join('')
//   }

// //   console.log(LCS("e", "abc")) //'abc'
// console.log(LCS("123456789","132535365" ))



// function LCS(x,y){


//     function variable(x, y) {
//         // let arr = x.split('')
//         // let arr2 = y.split('')
//         // let res = arr.filter((el,i) => (el == arr2[i]))
//         // console.log(arr)
//         // console.log(res)
//         // return res.join('')
//     }
    
//     let res = variable(x,y)
//     let res2 = variable(y,x)
//     console.log(res,res2)

//     return res.length > res2.length ? res2 : res
//     }
    
//     //   console.log(LCS("e", "abc")) //'abc'
//     console.log(LCS("anotetest","notatest" ))

function LCS(x, y) {
    yChar=y.split("");
    console.log(yChar)
    var start=0;
    var arr=[];
    for(var i=0;i<yChar.length;i++){
      pos=x.indexOf(yChar[i],start);
      if(pos>=start){
        arr.push(yChar[i]);
        start=pos+1;
      }
    }
    return arr.join("");
  }

  console.log(LCS("anotetest","notatest" ))