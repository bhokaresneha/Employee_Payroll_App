//event listener for salary

const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });

// const form = document.querySelector('.form');
// form.addEventListener('submit', handleFormSubmit);


// function handleFormSubmit(event) {
//     event.preventDefault();
    
//     const data = new FormData(event.target);
//     const formJSON = Object.fromEntries(data.entries());
  
//     // for multi-selects, we need special handling
//  //   formJSON.snacks = data.getAll('');
    
//     const results = document.querySelector('.results pre ');
//     results.innerText = JSON.stringify(formJSON, null, 2);
//   }

const textError = document.querySelector('.text-error');

  function save(){
    try {
        let employeePayrollData = createPayrollData();
        alert(employeePayrollData.toString());

    }catch (e) {

    }
}

  const createPayrollData = () => {
    let employeePayroll = new EmployeePayroll();
    try{
        employeePayroll.name =  document.querySelector('#name').value;
              
    } catch (e) {
        textError.textContent = "Name Is Incorrect" ;
        }
        employeePayroll.salary =  document.querySelector('#salary').value;
    
    return employeePayroll;
}


  class EmployeePayroll{
   
    get name(){ return this._name; }
    set name(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
            this._name=name;
            alert(employeePayroll.toString());

        }
        else
        {
        throw('Name is Incorrect!'); 
        }
    }
    get salary(){ return this._salary; }
    set salary(salary){ 
        this._salary=salary;
    }
    toString(){
                        
        return "Name"+this.name,"Salary"+this.salary;

    }
}