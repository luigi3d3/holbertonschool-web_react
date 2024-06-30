namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.getTeacher() && this.getTeacher().experienceTeachingReact) {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

