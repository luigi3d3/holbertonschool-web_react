function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullName = `${firstInitial}. ${lastName}`;
  return fullName;
}

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional properties with string keys
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const director1: Directors = {
  firstName: 'Luigino',
  lastName: 'Loayza',
  location: 'Lima',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

const teacherNamePrinter: printTeacherFunction = printTeacher;

const printedName = teacherNamePrinter("John", "Doe");
console.log(printedName);

// Example usage
const student = new StudentClass("Luigino", "loayza");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
