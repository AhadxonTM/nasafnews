


// salomber();
// salomber();
// salomber();
// salomber();



// function salomber(){
//     console.log("Salomalekum bratva")
// }

// salomber();
// salomber();
// salomber();
// salomber();



// const hayrlash = function(){
//     console.log(" jizn voram")
// }
// hayrlash()
// hayrlash()


// let arrow = () => {
//     console.log("yashash yaxshi, yaxshi yashash undanam yaxshi")
// }
//  arrow()
//  arrow()
//  arrow()



//  const takrorlovchi = function(name = "abdulahad",day = "kun"){
//     console.log(`hayrli ${day}, ${name}`)

//  }
//  takrorlovchi();
//  takrorlovchi();




// let son = +prompt("sonni kiriting")



// if ( son === 0){
//     console.log("bu son juft ham toq ham emas")
// }
// else if (son % 2 === 0) {
//     console.log("bu son juft son")
// }
// else {
//     console.log("bu son toq son")


// }



// const bill = (product, tax) => {
//     let total = 0;


//     let i = 0;
//     while( i < product.length){
//         total += product[i] + product[i] * tax;
//         console.log(total)
//         console.log(product[i])
//         i++
//     }
//     // console.log(total)
//     return total;
// }
// const result = bill([1000,2000,5000],0.2);
// // console.log(result)





const menifunc = (callbackFunc) => {
    let number = 50;
    callbackFunc(number)
}
menifunc(function (value) {
    console.log(value)
})

const ismlar = ["valijon", 'alijon', 'abdulahad', 'nigora', 'nurmuhammad', 'ziyodullo']

const yangism = [];

ismlar.forEach(function (ism) {
    const katism = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase();
    console.log(katism)
    yangism.push(katism)
})
console.log(yangism)