class Person {
    static instanceCount = 0;

    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return Person.instanceCount;
    }
}

class GradeBook {
    constructor() {
        this.grades = {};
    }

    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }

    getGrades(subject) {
        return this.grades[subject] || [];
    }

    getAllGrades() {
        return this.grades;
    }

    static format() {
        return {
            subject: "",
            grade: 0
        };
    }
}

class Student extends Person {
    static instanceCount = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook();
        Student.instanceCount++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name} and I am a student`);
    }

    getGradeBook() {
        return this.gradeBook;
    }

    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return "School shirt and pants";
    }

    getRole() {
        return "Student";
    }

    static countInstances() {
        return Student.instanceCount;
    }
}

class Teacher extends Person {
    static instanceCount = 0;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instanceCount++;
    }

    introduceYourself() {
        console.log(
            `Hello, my name is ${this.name} and I teach ${this.subject}`
        );
    }

    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        return "Teacher";
    }

    static countInstances() {
        return Teacher.instanceCount;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    enroll(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    expel(student) {
        if (student instanceof Student) {
            this.students.splice(this.students.indexOf(student), 1);
        }
    }

    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        }
    }

    fire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.splice(this.teachers.indexOf(teacher), 1);
        }
    }
}

const john = new Student("John");
const sarah = new Student("Sarah");
const mathTeacher = new Teacher("Mr. Smith", "Math");
const englishTeacher = new Teacher("Mrs. Colin", "English");
const gradeBook1 = new GradeBook();
const school1 = new School("IT School");

school1.enroll(john);
school1.enroll(sarah);
school1.hire(mathTeacher);
school1.hire(englishTeacher);
console.log(school1);

gradeBook1.addGrade("Math", 80);
gradeBook1.addGrade("English", 90);

console.log(gradeBook1.getGrades("Math"));
console.log(gradeBook1.getGrades("English"));
console.log(gradeBook1.getAllGrades());

john.introduceYourself(); // Hello, my name is John and I am a student
sarah.introduceYourself(); // Hello, my name is Sarah and I am a student
mathTeacher.introduceYourself(); // Hello, my name is Mr. Smith and I teach Math
englishTeacher.introduceYourself(); // Hello, my name is Mrs. Colin and I teach English

mathTeacher.teach(john, 90);
englishTeacher.teach(sarah, 86);
console.log(mathTeacher.getSubject()); // "Math"
console.log(englishTeacher.getSubject()); // "English"
console.log(mathTeacher.getStudentGrade(john)); // [90]
console.log(englishTeacher.getStudentGrade(sarah)); // [86]

console.log(john.getGrade("Math")); // [90]
console.log(sarah.getGrade("English")); // [86]
console.log(john.getGradeBook()); // GradeBook { grades: { Math: [ 90 ] } }
console.log(sarah.getGradeBook()); // GradeBook { grades: { English: [ 86 ] } }
