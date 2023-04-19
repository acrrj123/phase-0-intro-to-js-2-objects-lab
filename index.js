// Write your solution in this file!
const employee = {
    name: "Ana",
    streetAddress: "1234 Beautiful st",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}