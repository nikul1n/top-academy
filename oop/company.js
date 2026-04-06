class Company {
    constructor(staff) {
        this.staff = [];
    }

    hireEmployee = employee => this.staff.push(employee);


    dismissEmployee = employee => {
        const temp = this.staff.indexOf(employee);
        // console.log(temp);
        console.log(`Сотрудник ${this.staff[temp].name} уволен`);
        this.staff.splice(temp, 1);
        // for (let i = 0; i <= this.staff.length; i++) {
        //     if (i === temp) {
        //         console.log(`Сотрудник ${this.staff[i].name} уволен`);
        //         this.staff[i] = this.staff[this.staff.length-1];
        //         this.staff.pop();
        //     }
        // }

    }

    displayStaff() {

        for (let i = 0; i < this.staff.length; i++) {
            this.staff[i].displayEmployee();
        }
    }
}

class Employee {
    constructor(name, age, specials) {
        this.name = name;
        this.age = age;
        this.specials = specials;
    }

    displayEmployee = () => console.log(`Сотрудник: ${this.name}, ${this.age} лет, специальность: ${this.specials}`);
}

const company1 = new Company();
const employee1 = new Employee('Ivan', 30, 'CEO');
const employee2 = new Employee('Sergey', 31, 'Accountant');
const employee3 = new Employee('Pavel', 32, 'Commercial Director');
company1.hireEmployee(employee1);
company1.hireEmployee(employee2);
company1.hireEmployee(employee3);
company1.displayStaff();
company1.dismissEmployee(employee2);
company1.displayStaff();
console.log(company1.staff.includes(employee1));