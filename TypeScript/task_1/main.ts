// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional properties with string keys and any values
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Directors object
const director1: Directors = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Los Angeles",
  numberOfReports: 10,
  contract: false, // Additional property with a boolean value
  department: "HR" // Additional property with a string value
};

// Output the Directors object
console.log(director1);

// Note: The Directors interface extends Teacher and requires the numberOfReports attribute.
