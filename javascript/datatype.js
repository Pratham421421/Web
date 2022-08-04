//javascrip is dynamic type variable
var num = 21;
console.log(num+" : "+typeof(num));

num = "twenty one";
console.log(num+" : "+typeof(num))

//primitive data type -> 
            //number, string, boolean, undefined, null, bigInt, symbol
            //stored in stack

   
//non-Primitive datatype -> 
            //Object
            //stored in heap
//Ex.
var student = {fname : "Prathamesh", lname : "Harad", rollNo : 21};
console.log(student);  //printing object
console.log(student.fname); //printing element present in object

//when to store data in:
//primitive -> for single values
//non-primitive -> for multiple values

//Q. Store mobile information
//-> modelName, brandName, price, storage, ram, rating
var mobileInfo = {
    modelName:"IPhone 13",
    bradName:"Apple",
    price:90000,
    storage:"128GB",
    ram:"12GB",
    rating:7.8
};
console.log(mobileInfo);

//How to insert new property inside object using JS code
//-> <objectName>.<new Property key name> = <new value>
mobileInfo.review = "Good";  //Insertion -> latest insertiong in object
mobileInfo.rating = 8;      //Updation -> already exist in object -> changing the value
console.log(mobileInfo); 

//How to delete property
//-> delete <object name>.<propertyname>
delete mobileInfo.review; //Delete -> delete from object
console.log(mobileInfo); 