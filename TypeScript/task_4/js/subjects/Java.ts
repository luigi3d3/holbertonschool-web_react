namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.getTeacher() && this.getTeacher().experienceTeachingJava) {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

