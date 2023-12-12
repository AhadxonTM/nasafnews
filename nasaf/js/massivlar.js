// let ruyhat = [ 11, 22 , 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, ];

// for (let i = 0; i<ruyhat.length; i++){
//     if (ruyhat[i] == 22){
//         // document.write(ruyhat[i]);
//         console.log(ruyhat[i])
//         break

//     }
//     else{
//       console.log('bunday malumot yuq')
       
//     }
// }

// let ruyhat = [ 11, 22 , 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, ];
//  let pass = prompt("parolni kiriting")

// if ( pass.length > 15 && pass.includes("!") && pass.toUpperCase && pass.includes("'") || pass.length > 10){
//     console.log("sizning parolingiz royxatga olindi")
// }
// else if( pass > 8 ){
//     console.log("parolni ozgartiring")
// }
// else{
//     console.log("bu parol yetarlicha uzun emas")
// }

// if (pass.length > 10  || pass.includes("123")){
//     console.log("parolingiz ro'yxatga olindi")
// }
// else if ( pass.length < 8  > 3 ){
//     console.log(" boshqa parol bilan qaytadan urinib ko'ring!")
// }
// else{
//     console.log("hech narsa yoqku")
// }


// const ruyhat = [ 11, 22 , 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, ];

// for(let i = 0; i < ruyhat.length; i++){
//     if( ruyhat[i] === 22 ){
//         continue
//     }
//     console.log("sizning natijalaringiz", ruyhat[i])
//     if (ruyhat[i] === 111){
//         console.log("sizning balingiz eng yuqori va u 100 balldan yuqori");
//         break
//     }
// }


const ismlar = [ "nabijon "," halima" , "valijon"," abdulahad", "nuriddin" ,"oppoqoy", 'yanakimdir'];


for ( let i = 0; i < ismlar.length; i++){
    if ( ismlar[i] == "abdulahad"){
    
        continue
    }
    
    
    // console.log("shular jumlsidan " +ismlar[i])


    if( ismlar[i] == "valijon"){
        console.log(" topildi " + ismlar[i])

        break
    }
}