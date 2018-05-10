(function(global) {
  'use strict';

  var USER_TYPES = {
    STUDENT: 'student',
    TEACHER: 'teacher'
  };

  function User(options) {
    this.name = options.name || '';
    this.email = options.email || '';
  }

  function Student(options) {
    var user = new User(options);

    // Custom stuff for students
    user.studentId = options.studentId || 'S-ID';

    return user;
  }

  function Teacher(options) {
    var user = new User(options);

    // Custom stuff for teachers
    user.teacherId = options.teacherId || 'T-ID';

    return user;
  }

  function UserFactory() {}

  UserFactory.prototype.create = function(options) {
    var userType = options.userType || USER_TYPES.STUDENT;

    if (userType === USER_TYPES.STUDENT) {
      this.userClass = Student;
    }
    else if (userType === USER_TYPES.TEACHER) {
      this.userClass = Teacher;
    }

    return new this.userClass(options);
  };

  UserFactory.prototype.userClass = Student;

  if (typeof global.UserFactory === 'undefined') {
    global.UserFactory = UserFactory;
  }

})(window);
