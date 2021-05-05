'use strict';







//Какие будут результаты выполнения кода и почему, напишите объяснение к каждому примеру:

// false && true || true  // TRUE        ,cos first action false && true with index 7 equals false, 
                                          // than false || true return true index 6

// false && (true || true);//          , first action (true || true)cos brackets () have index 20 return true,
                                       // than false && true return false witn index 7

 //+'40' + +'2';// 42 number ,       cos two numbers have unary plus,therefore it will be typeof Number

//'2' + 3 ** 2; // 29 String ,       cos operator ** has index 16, after we have concatonaiton

//3 ** 2 / 3; // 3 Number ,       cos ** has index 16 , and / has index 15  left to right 3 ** 2 = 9 and 9 / 3 = p

 //3 ** (9 / 3); // 27 Number,     first action (9 / 3) this has index 20, then 3 ** 3 has index 16 

 //'10' + (5 === 6);// 10FALSE,      because first action will be (5 === 6) index 20 and it is false , than concatanation '10'+ false
  
 //'10' — 5 === 6;//FALSE,          cos, first action would be '10' - 5 with index 14 , than 5 which is Number === 6 with index 11 false

 //undefined + 1; // ERROR,         

 //(+null == false) < 1;//FALSE      first action would be (+null == false) equals true or 1 index 20,
                                  // second 1 < 1 (index 12)false
 
// (+null == false) < 1 ** 5;// TRUE    ,because first action 1 ** 5 index 16 equals 5, second (+null == false)true or 1 and 1 < 5 true
  
 //let number = 5;                    // , index = 3 

 //2 * ++number;// 12 NUMBER         , ++ has index 17 called Prefix Increment , ++number is 6 ( number = 5) 1 + 5 = 6 
                                      // second action 2 * 6 = 12  (2 * 6)has index 15

 //2 * number — -; // 10 NUMBER       first action Postfix Decrement with index 18 , number-- equals 5, then 2 * 5 index 15
// console.log(number);// 10





