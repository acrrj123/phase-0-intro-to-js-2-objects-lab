// Write your solution in this file!
const employee = {
    name: "Ana",
    streetAddress: "2345 Sage rd",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, [key]: value};
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj };
    delete newObj.name
    return newObj;
};
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    let newObj = obj;
    delete newObj.name
    return newObj;
}