// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any additional properties
  }
  
  // Create a teacher object
  const teacher: Teacher = {
    firstName: 'luigino',
    lastName: 'loayza',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'Lima',
    contract: true, // Additional property
  };
  
  interface Teacher {
    // ... Asumiendo que ya tienes definidos los atributos anteriores aquí
  }
  // Extiende la interfaz Teacher para incluir un nuevo atributo
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  // Crear un objeto que implemente la interfaz Directors
  const director1: Directors = {
    firstName: 'carlos',
    lastName: 'paredes',
    location: 'arequipa',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  // Interfaz para la función printTeacher
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementación de la función printTeacher
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    // Obtiene la primera letra del firstName
    const firstLetter = firstName.charAt(0);
    // Retorna la primera letra del firstName seguido del lastName completo
    return `${firstLetter}. ${lastName}`;
  };
  
  // Interfaz para el constructor de la clase StudentClass
  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interfaz para la clase StudentClass
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implementación de la clase StudentClass
  class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
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
  
  const student = new StudentClass({ firstName: "luigino", lastName: "loayza" });
  console.log(student.displayName());
  console.log(student.workOnHomework()); 