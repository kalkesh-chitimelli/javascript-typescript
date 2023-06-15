let employee:[id:number,name: string,isPermanent: boolean]
let employees:[id:number,name: string,isPermanent: boolean][]=[]
const addEmployeeWithPermanentFalse=(id:number,name:string,isPermanent:boolean=false)=>{
    employee=[id,name,isPermanent]
    employees.push(employee)
}
const updateEmployee=(id:number,isPermanent?:boolean)=>{
    const employee = employees.find(employee=>employee[0]===id)
    if (employee) {
        if(isPermanent!==undefined){
            employee[2]=isPermanent;
            console.log(`Employee with id ${id} updated`);
        }else{
            console.log(`employee with id ${id} not updated`);
        }
    }else{
        console.log(`We don't have data of employee with id ${id}`);
    }
}
addEmployeeWithPermanentFalse(1,"shiv")
addEmployeeWithPermanentFalse(2,"aryn",true)
addEmployeeWithPermanentFalse(3,"srb",false)
addEmployeeWithPermanentFalse(4,"amn",true)
addEmployeeWithPermanentFalse(5,"rkt")
console.log("Employees data after Adding with default value");
console.log(employees);


updateEmployee(1,true)
updateEmployee(2,false)
console.log(employees);


const typeAssertionExample=()=>{
    let stringIdEmps = employees.map(e=>[(e[0]) as any as String,e[1],e[2]])
    stringIdEmps.push(["6","srb",true]);
    console.log(stringIdEmps);
}
typeAssertionExample();