import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      ref: "Employee",
    },
    basicSalary: {
      type: Number,
      required: [true, "Vui lòng nhập lương cơ bản"],
    },
    responsibilityAllowance: {
      type: Number,
      default: 0,
    },
    transportAllowance: {
      type: Number,
      default: 0,
    },
    phoneAllowance: {
      type: Number,
      default: 0,
    },
    lunchAllowance: {
      type: Number,
      default: 0,
    },
    childrenAllowance: {
      type: Number,
      default: 0,
    },
    attendanceAllowance: {
      type: Number,
      default: 0,
    },
    seniorityAllowance: {
      type: Number,
      default: 0,
    },
    effectiveDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Salary = mongoose.model("Salary", salarySchema);

export default Salary;
