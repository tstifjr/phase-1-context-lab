/* Your Code Here */

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour : array[3],
        timeInEvents: [],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(arrayOfArrays){
    const arrayOfObj = arrayOfArrays.map(array => createEmployeeRecord(array))
    return arrayOfObj
}

function createTimeInEvent(dateStamp){
    const timeEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0],
    }
    this.timeInEvents.push(timeEvent);
    return this;
}

function createTimeOutEvent(dateStamp){
    const timeEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0],
    }
    this.timeOutEvents.push(timeEvent);
    return this;
}

function hoursWorkedOnDate(date){
    const matchedInEvent = this.timeInEvents.find(event => event.date === date)
    const matchedOutEvent = this.timeOutEvents.find(event => event.date === date)
    return (matchedOutEvent.hour - matchedInEvent.hour)/100;
}

function wagesEarnedOnDate(date){
     return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName){
    const matchedRecord = srcArray.find(record => record.firstName === firstName);
    return matchedRecord;
}

function calculatePayroll(collection){
   const payRollTotal = collection.reduce(function (total, record) {
        return total + allWagesFor.call(record)
    }, 0)
    return payRollTotal;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

