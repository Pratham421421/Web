
var Student = [
    {   
        name: "s1",
        gender:"male",
        id: 1,
        city:"Mumbai"
    },
    {   
        name: "s2",
        gender:"male",
        id: 2,
        city:"Pune"
    },
    {   
        name: "s3",
        gender:"female",
        id: 3,
        city:"Dehli"
    },
    {   
        name: "s4",
        gender:"male",
        id: 4,
        city:"Hyderabad"
    },
    {   
        name: "s5",
        gender:"female",
        id: 5,
        city:"Banglore"
    },
    {   
        name: "s6",
        gender:"male",
        id: 6,
        city:"Chennai"
    },
    {   
        name: "s7",
        gender:"female",
        id: 7,
        city:"Kolkatta"
    },
];

for(var i=0; i<Student.length; i++){
    if(Student[i].city=="Hyderabad"){
        console.log(Student[i]);
    }
}