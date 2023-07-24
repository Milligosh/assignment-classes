class student {
    constructor(studentName, studentAge, studentScore, studentCourses) {
      this.name = studentName;
      this.age = studentAge;
      this.score = studentScore;
      this.courses = studentCourses;
    }
  
    callName() {
      return this.name;
    }
  
    callAge() {
      return this.age;
    }
  
    increment() {
      return this.age+=1; 
    }
  
    coursesAddUp(course) {
      this.courses.push(course);
    }
  }
  
  const student1 = new student('Millicent', 45, 97, ['Economics', 'Geography']);
  console.log(`student name : ${student1.callName()}`);
  console.log(`student age: ${student1.callAge()}`);
  console.log(`student age increment: ${student1.increment()}`); 
  console.log(`student score: ${student1.score}`);

  student1.coursesAddUp('Mathematics'); //adds maths to the array of courses
  console.log(`student courses: ${student1.courses}`);

  