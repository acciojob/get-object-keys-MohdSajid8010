//your JS code here. If required.
let student ={
	name:"student1"
}

Object.prototype.getKeys=function(){
	return Object.keys(this);
}
console.log(student.getKeys())