// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional properties with string keys and any values
}

// Create a Teacher object
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  contract: true, // Additional property with a boolean value
  subject: "Mathematics" // Additional property with a string value
};

// Output the Teacher object
console.log(teacher1);

// Note: The [key: string]: any; line in the interface allows adding any property
// with a string key and any value to the Teacher object.
