
var  Teacher = {
            name:"Ramya",
            Subjects:["Maths","Physics","Chemsitry"],
            teaches:["FirstYear","SecoundYear"],
            age:28
        }
var properties= " ";
for(p in Teacher)
{
properties+= p +" : "
}
console.log("before deleteion:" +properties);

delete Teacher.age;

console.log("after deleteion" +properties);

