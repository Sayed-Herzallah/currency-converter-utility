// interpertter vs compiler
// document.getElementById('showTime').innerHTML="hello";
// document.getElementById('showTime').style="color:red";

// =========================================
// output result
// var x=10;
// var y=20;
// var z =x+y
// console.log(z);

// alert(z)
// document.write(z);
// document.writein(z);
// document.getElementById('showTime').innerHTML="hello";

// ======================================================

// variable
//###
//  1.type (var,let,const) 2.name variable 3.value (data)
// let vs var vs const
// name variable
/*not start number and special character and contain any reserved word
*/
// var x = document.getElementsById("showTime")

// data type
// number
// string
// boolean
// null
// undefined
// object
// var x = 5 number (intger)
// var x = 5.5  number (float)
// var x = "5" string ("" or '')
// var x = true || false boolean
// var x = null     
// var x = undefined
// console.log(typeof(x)); // check data type
// Array 
// [] square bracket
// var x =["1","2","3"] 
// x[0]="1"
// console.log(typeof(x)); // check data type >>>>>>> object علشان ال array بتشيل
//  اكثر من نوع بيانات عندي 
// undefined = لسه ما اتحطتش قيمة اخترعوا علشان جافا اصلا 
// 🔥 null = اتحطت قيمة فاضية بإيدي
// not defined حاجة مش متعرفه اصلا وده error
// Object   هزمة بيانات عباره عن key and value اي بوصف القيم بتاعتي يعني كائن للوصف 
// {} curly bracket
// var x = {name:"ahmed",age:20}
// console.log(x[0]) // undefined انا في الاوبجكت مش بتعامل ب index
// console.log(typeof(x)); // check data type
// var x 
// var x = null 
// null هي 
// بضفها ل متغير علشان اهئا ميموري علشان لما اشتغل اشتغل مره واحده و اعلي proformance  هي مستثمرة زي الذهب لاحظ undefined مش بيحجز مكان في موميري 
// array and null and object type of object 
// interview not defined and null and undefined 
// ===================================================
// if (condation) للشروط توقع من مبرمج ل مستخدم 
/* 
if (condation) {
    if true
} else {
    if false
}

*/
// لاحظ انا alter رساله تبية زي prompet 
/* inptut user
var x = prompt("enter number") غير مستخدم زي write 
اكثرنا استخدامنا هي 
 */
// ==================================================
// function >>>>>>>>>>>>>> block of statement
// function name (parameter) {
//     code function
// }
// name (parameter) >>>>>>>> function call
// var x = 10
// function name (parameter) {
//     console.log(parameter)
// }
// name (x)

// undefined بيحاول يقلل من حدوث الاخطاء 






























function convertData(value){
var dollar= document.getElementById("dollar").value
var result =document.getElementById("result")

    if(dollar==""){
        result.innerHTML = "Enter Value";
    }
    else if (isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
    }
    else if (dollar<0){
       result.innerHTML = "Enter postiva Number";
    }
     else if (dollar==0){
       result.innerHTML = "Enter Number Rather Than Zero";
    }
    else{
        result.innerHTML =` ${dollar*50}  Egyption pound`;
    }
return false;
}
