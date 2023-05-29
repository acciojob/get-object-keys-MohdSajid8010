//your JS code here. If required.
let student ={
	name:"student1"
}
// student.protptype.getKeys=function (){
// 	return Object.keys(student);
// }
let prototype={
    getKeys:function(){
        return Object.keys(student)}}

Object.setPrototypeOf(student,prototype)
console.log(student.getKeys())