export class Student {
  studentId:number;
  studentName: string;
  studentEmail: string;
  studentAge: Number;
  studentGender: string;
  studentPassword: string;

  constructor() {
    this.studentName = this.studentEmail = this.studentGender = this.studentPassword ='';      
  }
}
