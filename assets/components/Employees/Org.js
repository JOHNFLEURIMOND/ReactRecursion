class Org {
    constructor() {
        this.employees = [];
    }
    getAllEmployees() {
        return this.employees;
    }
    add(employee) {
        this.employees.push(employee);
    }
    findByManagerId(managerId) {
        return this.employees.filter(e => e.getManagerId() === managerId);
    }
    find(id) {
        return this.employees.find(e => e.getId() === id);
    }
    // find the employee with no manager
    getBigBoss() {
        return this.employees.find(e => ! e.getManagerId());
    }
  
    orgChart() {
        // find the big boss
        const bigBoss = this.getBigBoss();
        console.log("bigBoss:", bigBoss);
        this._orgChart(bigBoss);
        // this should be recursive (!)
    }
    _orgChart(employee, level = 0) {
        console.log(" ".repeat(level), employee);
        const directReports = org.findByManagerId(employee.getId());
        if (directReports) {
            directReports.forEach(e => this._orgChart(e, level + 4));
        }
    }
    move(id, newManagerId) {
        const e = this.find(id);
        if (e) {
            e.setManagerId(newManagerId);
        }
    }
  }
  
   
  class Employee {
    constructor(first, last, id, managerId) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.managerId = managerId;
    }
    setManagerId(managerId) {
        this.managerId = managerId;
    }
    getManagerId() {
        return this.managerId;
    }
    getId() {
        return this.id;
    }
    print() {
        console.log(`${this.first} ${this.last} ${this.id} ${this.managerId}`);
    }
  }
  const org = new Org();
  const e1 = new Employee("mark", "saltzman", 1, null);
  org.add(e1);
  const e2 = new Employee("carolyn", "jones", 2, 1);
  org.add(e2);
  const e3 = new Employee("bob", "smith", 3, 1);
  org.add(e3);
  const e4 = new Employee("fred", "underwood", 4, 2);
  org.add(e4);
  const e5 = new Employee("alice", "underhill", 5, 1)
  org.add(e5);
  console.log(org.find(2));
  console.log(org.getAllEmployees());
  org.move(e3.getId(), e2.getId()); // now bob reports to carolyn instead of directly to mark
  console.log(org.getAllEmployees());
  org.orgChart();