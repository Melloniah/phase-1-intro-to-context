// Your code here

const employees= ["Gray", "Worm", "Security", 1]

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]



const createEmployeeRecord = (employeesNames)=>({
    firstName: employeesNames[0],
    familyName: employeesNames[1],
    title: employeesNames[2],
    payPerHour: employeesNames [3],
    timeInEvents:[],
    timeOutEvents: [],
});
const createEmployeeRecords =(employeesNames)=> employeesNames.map(createEmployeeRecord);

const createTimeInEvent = (employee, dateTimeString) => {
    let [date, hour] = dateTimeString.split(" ");

    let timeInEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    };

    employee.timeInEvents.push(timeInEvent);
    return employee;
};
const createTimeOutEvent = (employee, dateTimeString) => {
    let [date, hour] = dateTimeString.split(" ");

    let timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    };

    employee.timeOutEvents.push(timeOutEvent);
    return employee;
};

const hoursWorkedOnDate = (employee, date) => {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);

    if (timeIn && timeOut) {
        return (timeOut.hour / 100) - (timeIn.hour / 100); // Convert HHMM to HH before subtraction
    } else {
        return 0; 
    }
};

const wagesEarnedOnDate = (employee, date) => {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
};
const allWagesFor = (employee) => {
    return employee.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
};
const calculatePayroll = (employees) => {
    return employees.reduce((total, employee) => {
        return total + allWagesFor(employee);
    }, 0);
};
