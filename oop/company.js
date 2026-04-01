class Company {
    constructor(staff) {
        this.staff = [];
    }

    hireEmployee(employee) {
        this.staff.push(employee);
    }

    dismissEmployee(employee) {
        this.staff.splice(employee);
    }

    displayStaff() {
        // alert(this.staff);
        for (let i = 0; i <= this.staff.length; i++) {
            console.log(this.staff[i]);

        }        // if (number % i === 0) {
        //     isPrime = false;
        //     break;
        // }
    }
}

class Employee {
    constructor(name, age, specials) {
        this.name = name;
        this.age = age;
        this.specials = specials;
    }

    displayEmployee(employee) {
        console.log(`Сотрудник: ${this.name}, ${this.age} лет, специальность: ${this.specials}`);
    }
}

const company1 = new Company();
const employee1 = new Employee('Ivan', 30, 'SEO');
const employee2 = new Employee('Sergey', 31, 'Accountant');
const employee3 = new Employee('Pavel', 32, 'Commercial Director');
company1.hireEmployee(employee1);
company1.hireEmployee(employee2);
company1.hireEmployee(employee3);
company1.displayStaff();
company1.dismissEmployee(employee2);
company1.displayStaff();

// company1.displayStaff();