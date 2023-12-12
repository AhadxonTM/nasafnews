

// switch (baho) {
//     case 5:
//         console.log("a'lo");
//         break;

//     case 4:
//         console.log("yaxshi")
//         break

//     case 3:
//         console.log("qoniqarli")
//         break
//     case 2:
//         console.log("qoniqarsiz")
//         break
// }

// switch (hafta_kuni) {
//     case 1:
//         console.log("dushanba")
//         break
//     case 2:
//         console.log("seshanba")

//         break
//     case 3:
//         console.log("chorshanba")
//         break
//     case 4:
//         console.log("payshanba")
//         break
//     case 5:
//         console.log("juma")
//         break
//     case 6:
//         console.log("shanba")
//         break
//     case 7:
//         console.log("yakshanba")
//         break
//     default:
//         console.log("bunday kun yo'q")    
// }




// switch (oy) {
//     case 1:
//         console.log(" bu oy yanvar va bu oyda 31 kun bor")
//         break
//     case 2:
//         console.log(" bu oy fevral va bu oyda 28 kun bor")
//         break
//     case 3:
//         console.log(" bu oy mart va bu oyda 31 kun bor")
//         break
//     case 4:
//         console.log(" bu oy aprel va bu oyda 30 kun bor")
//         break
//     case 5:
//         console.log(" bu oy may va bu oyda 31 kun bor")
//         break
//     case 6:
//         console.log(" bu oy iyun va bu oyda 30 kun bor")
//         break
//     case 7:
//         console.log(" bu oy iyul va bu oyda 31 kun bor")
//         break
//     case 8:
//         console.log(" bu oy avgust va bu oyda 31 kun bor")
//         break
//     case 9:
//         console.log(" bu oy sentabrr va bu oyda 30 kun bor")
//         break
//     case 10:
//         console.log(" bu oy oktabr va bu oyda 31 kun bor")
//         break
//     case 11:
//         console.log(" bu oy noyabr va bu oyda 30 kun bor")
//         break
//     case 12:
//         console.log(" bu oy dekabr va bu oyda 31 kun bor")
//         break
// default:
//     console.log("bunday oy mavjud emas")


// }


// let b = +prompt("b sonni kiriting")
// switch (amal) {
    //     case 1:
    //         let qush = a + b;
    //         console.log(qush)
    //         break
    //     case 2:
    //         let ayirish = a - b;
    //         console.log(ayirish)
    //         break
    //     case 3:
    //         let kopaytir = a * b;
    //         console.log(kopaytir)
    //         break
    //     case 4:
    //         let bul = a / b;
    //         console.log(bul)
    //         break
    // default:
    //     console.log("bu raqamni kiritish ta'qiqlangan")
    // }
    let a = +prompt("a sonni kiriting")
    let amal = +prompt(" amal raqamini kiritin 1 dan 4 gacha")

    switch(amal){
        case 1:
            let disimetr = a / 100;
        console.log(disimetr);
        break
        case 2:
            let kilometr = a / 1000;
        console.log(kilometr);
        break
        case 3:
            let metr = a * 1;
        console.log(metr);
        break
        case 4:
            let millimetr = a * 1000;
        console.log(millimetr);
        break
        case 5:
            let santimetr = a * 100;
        console.log(santimetr);
        break

    }

