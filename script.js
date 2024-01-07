//Ստեղծել փոփոխական month, որի արժեքը տատանվում է 1-12 միջակայքում։
//Գտնոլ, թե տրված թվին համապատասխան ամիսը ո՞ր եղանակին է պատկանում։
// let month = 6;
//  if(month>3 && month<=5){
//     console.log('Գարուն');
// }
// else if(month>5 && month<=8){
//     console.log('Ամառ');
// }
// else if(month>8 && month<=11){
//     console.log('Աշուն');
// }
// if(month == 12 || month==1 || month == 2){
//     console.log('Ձմեռ');
// }
// Ցիկլի միջոցով տպել 100-1 թվերը
// for(let i = 100; i>0;i--){
//     console.log(i);
// }

//Ցիկլի միջոցով տպել 1-100 կենտ թվերը
// for(let i = 1; i<=100; i++){
//     if(i % 2 !==0){  
//         console.log(i);
//     }
// }

// Տրված է զնգվատծ 
// let arr = [1,2,3];
// Զանգվածի վերջում ավելացնել 4,5
// let arr = [1,2,3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

// Տրված է զանգված
// let arr = ['a','b','c','d','e'];
// Զանգվածից ջնջել 2 էլեմենտ և ստուգել զանգվածի երկարեւթյուն։
// let arr = ['a','b','c','d','e'];
// delete arr [2];
// delete arr [4];
// console.log(arr);
// console.log(arr.length);

// Ստեղծել զնագված։ Տպել զանգվածը և դրա երկարությունը։
// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);

//Ստեղծել դատարկ զամգված։ Լցնել զանգվածը էլեմենտներով։
// let arr = [];
// arr[0] = 5;
// arr[1] = 3;
// arr[3] = 8;
// arr.push(9);
// console.log(arr);

//Ստացեք հետևյալ օբյեկտի բանալիների զանգվատը։
// let obj = {
//     x:1,
//     y:2,
//     z:3
// }
// let keys = Object.keys(obj);
// console.log(keys);
// console.log(obj);

//9. Ստուգեք, որ num1 փոփոխականը փոքր կամ հավասար  է 1-ին և փոփոխական num2-ը 
// մեծ կամ հավասար 3-ին։
// let num1 = 1;
// let num2 = 8;
//  if( num1<=1 && num2>=3){
//     console.log(true);
//  }
//  else{
//     console.log(NaN);
//  }

//Տրված է թիվ։ Ստուգել՝ այն բաժանվում է 3-ի։
// let num = 4567;
// if(num % 3 ===0){
//     console.log(true);
// }
// else{
//     console.log(NaN);
// }

// //Տրված է զանգված։ Կոնսուլում տպել զանգվածի բոլոր էլեմենտները։
// let arr = ['a','b','c','d','e'];
// for(let elem of arr){
//     console.log(elem);
// }

//Կոնսուլում տպել  օբյեկտի բոլո բանալիները։
// let obj = {
//     x:1,
//     y:2,
//     z:3
// };
// for(let keys in obj){
//     console.log(keys);
// }

//Տրված է հետևյալ օբյեկտը։ Կոնսուլում տպել այն էլեմենտները, որոնց արժեքները կենտ թվեր են։
// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// }

// for(let keys in obj){
//     if(obj[keys] % 2 !== 0){
//         console.log(obj[keys]);
//     }
// }

//Տրված է զանգված։ Գտնել զանգածի էլեմենտների գումարը։
// let arr = [2,5,9,3,1,4];
// let res = 0;
// for(let elem of arr){
//     res += elem
// }
// console.log(res);

//2 Ցիկլի միջոցով տպել հետջյալ տողը։
//111222333444555666777888999
// let str = '';

// for(let i = 1; i<10; i++){
//     for(let j = 0; j<3; j++){
//         str += i.toString();
//     }
// }
//     console.log(str);

//test
// let obj = {
//     a:'hz'
// }
// let str = '';
// for(let elem in obj){
//     for(let i = 1; i<5; i++){
//         str += obj[elem];
//     }
// }
// console.log(str);

//Տրված է թվերով լցված զանգված։ Տպել զանգվածի այն էլեմենտները, որոնք մեծ են 0-ից և փոքր են 10-ից։
// let arr = [4,5,7,78,45,96,785,454,10,4,5];
// for(let elem of arr){
//     if(0<elem && elem < 10){
//         console.log(elem);
//     }
// }

//Տրված է հետևյալ օբյեկտը։ Ավելացնել բոլոր արյեքները 10%-ով։
// let obj = {
//     employee1:100,
//     employee2:200,
//     employee3:300,
//     employee4:400,
//     employee5:500,
//     employee6:600,
//     employee7:700
// }
// let res = 0;
// let value = 0;
// for(let elem in obj){
//     value = obj[elem]
//     res = value + (value * 10 ) / 100
//     console.log(res);
// }

//Տրված են հետևյալ զանգվածները։ Սրանց օգնությամբ ստացեք օբյեկտ, որի բանալիները կլինեն առաջին զանգվածի էլեմենտները,
// իսկ արժեքները՝ երկրորդ։
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10]
// let obj = {};

// for (let i = 0; i < arr1.length; i++) {
//   obj[arr1[i]] = arr2[i];

// }
// console.log(obj);
    
//2 Ցիկլի միջոցով ստացեք հետևյալ զանգվածները։
// let arr = [];
// for(let i = 0; i <=2; i++){
//     arr.push([])
//     for(j = 1; j<=5; j++){
//         arr[i].push(j)
//     }
// }
// console.log(arr);

//Ստեղծել ֆունկցիա, որը կոնսուլում կտպի ձեր անուն ազգանունը։
// function name(){
//     console.log('Nerses Grigoryan');
// } 
//  name();

// Ստեղծել ֆունկցիա, որը պարամետրում ստանում է թիվ և վերադարձնում է այդ թվի խորանարդը։
// Այդ ֆունկցիայի միջոցով գտնել 3 թվի խորանարդը և վերադարձնել այն res փոփոխականին։
//   function kub(num){
//     return num**3; 
// } 
// let res = kub(3);
// console.log(res);

//2 Ցիկլի միջոցով ստացեք հետևյալ զանգվածը։
//[[1, 2], [3, 4], [5, 6], [7, 8]] 
// let arr = [];
// let num = 1;
// for(let i = 0; i<4; i++){
//     arr[i] = [];
//     for(let j = 0; j<2; j++){
//         arr[i].push(num);
//         num++;
//     }
// }
// console.log(arr);