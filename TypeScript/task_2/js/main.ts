// Definición de la interfaz DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Definición de la interfaz TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implementación de la clase Director que implementa DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implementación de la clase Teacher que implementa TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Definición de la función createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Definición de las interfaces y clases

// Define la interfaz DirectorInterface
interface Director1Interface {
    workDirectorTasks(): string;
}

// Define la interfaz TeacherInterface
interface Teacher1Interface {
    workTeacherTasks(): string;
}

// Implementa la clase Director que implementa DirectorInterface
class Director1 implements Director1Interface {
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implementa la clase Teacher que implementa TeacherInterface
class Teacher1 implements Teacher1Interface {
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Funciones

// Función isDirector como predicado de tipo
function isDirector(employee: Director1 | Teacher1): employee is Director1 {
    return (employee as Director1).workDirectorTasks !== undefined;
}

// Función executeWork
function executeWork(employee: Director1 | Teacher1): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Definición del tipo literal de cadena Subjects
type Subjects = "Math" | "History";

// Definición de la función teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        throw new Error("Invalid class");
    }
}
