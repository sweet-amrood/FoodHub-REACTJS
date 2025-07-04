const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel