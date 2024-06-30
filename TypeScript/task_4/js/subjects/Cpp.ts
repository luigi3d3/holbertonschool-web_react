namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.getTeacher() && this.getTeacher().experienceTeachingC) {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

