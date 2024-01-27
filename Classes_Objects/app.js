////// prototype

const student = {
    study() {
        console.log("i am study now");
    }
}
const karan = {
    marks: 99,
    name: "karan"
};
const arjun = {
    marks :99,
    name:"arjun"
};
karan.__proto__ = student;
arjun.__proto__ = student;


//// class
class employee{
    constructor(Id,job){
        this.id = Id;
        console.log("JSR")
        // this.job = job;
    }
    salary = 5000000;
    name = "jaypal";
    setID(num){
        return num;
    }
    go(){
        console.log("On th way");
    }
    work(){
        console.log("CEO");
    }
}

//inheritance
// child class of employee
class manoj extends employee{
  constructor(job){
    super();
    this.job = job;
  }
  work(){
    super.go();  // passing method to parent class 
    console.log("At work")
  }
}
let manager = new employee();
let CEO = new employee(1); //construction
let  emplo = new manoj(3,"developer");


// pactice Questions:
// Q.1 
let Data = "Sensitive Information";

class  User {
    constructor(name,email){
        this.name= name;
        this.email =email;
    }
    viewData(){
        console.log("Data : " , Data);
    }
}

//Q.2
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    EditData(){
        Data = "Edit by Admin";
    }
}

let s1 = new User("ajay","ajay@gmail.com");
let s2 = new User("vijay","vijay@gmail.com");

let ad = new Admin("admn","admin@gmail.com");