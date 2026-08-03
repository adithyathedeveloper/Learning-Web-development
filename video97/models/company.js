import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

export const company = mongoose.model('Employee', EmployeeSchema);