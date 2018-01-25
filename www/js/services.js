angular.module('starter.services', [])

    .factory('Courses', function() {
      var courses = [
          {
              "id": "100",
              "title": "Critical Thinking in the Digital Information Age (3)",
              "details": "Prerequisite - Corequisite: ENGL 100 or GE Composition (Area A1).Help students develop critical thinking skills using technical software. Main topics include: identifying engineering issues for investigation, developing planning and problem solving strategies, locating pertinent information and examples, critically analyzing these sources, forming and testing hypotheses, synthesizing and organizing results for effective communication, and developing transferable problem solving skills. Letter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "105",
              "title": "Introduction to Computer Engineering and Computer Science (1)",
              "details": "Introduction to the fields of computer engineering and computer science. Current and future trends and challenges in various fields of computing. Social, ethical and economical issues related to computing technology. Exploration of career and professional development opportunities.(Lecture 1 hour) Letter grade only (A-F). Not open for credit to students with credit in: CECS 105H. Same Course as CECS 105H."
          },
          {
              "id": "1051",
              "title": "Introduction to Computer Engineering and Computer Science (1)",
              "details": "Introduction to the fields of computer engineering and computer science. Current and future trends and challenges in various fields of computing. Social, ethical and economical issues related to computing technology. Exploration of career and professional development opportunities.\nLetter grade only (A-F). Same course as CECS 105. Open to students in the Engineering Honors Program. Additional assignments/projects adding depth to the course materials required for Engineering Honors students. Not open for credit to students with credit in CECS 105. (Lecture 1 hour)."
          },
          {
              "id": "110",
              "title": "Beginning Web Design (3)",
              "details": "Introduction to HTML and CSS using modern tools, following the W3C guidelines for coding. Web sites designed with usability and accessibility principles implemented. Overview of graphics, video, sound, JavaScript and Dreamweaver.\nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "174",
              "title": "Introduction to Programming and Problem Solving (3)",
              "details": "Prerequisite: CECS 100 and MATH 113 (or equivalent) all with a grade of C or better.\nIntroduction to basic concepts of computer science and fundamental techniques for solving problems using the Python programming language. Variables, data types, conditional statements, loops and arrays. Programming style. Applications to numerical and non-numerical problems. Introduction to basic concepts of computer science and fundamental tec\nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "200",
              "title": "Intermediate Web Design (3)",
              "details": "Prerequisite: CECS 110 with a grade of C or better. \nIntermediate HTML and CSS using Dreamweaver, following the W3C guidelines for coding. Web sites designed with usability and accessibility principles implemented.\nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "201",
              "title": "Computer Logic Design I (3)",
              "details": "Prerequisite: MATH 113 or equivalent all with a grade of C or better.\nBasic topics in combinational and sequential switching circuits with applications to the design of digital devices. Introduction to Electronic Design Automation (EDA) tools. Laboratory projects with Field Programmable Gate Arrays (FPGA). \n(Lecture 2 hours, lab 3 hours) Letter grade only (A-F)."
          },
          {
              "id": "202",
              "title": "The Digital Information Age (3)",
              "details": "Prerequisite: GE Foundation requirements. \nThe introduction and use of common-place digital and electronic devices and how this technology affects our society. Topics include advances in 3D imaging, 3D printing, Processors, Memory, Security and Privacy.\n(Lecture 3 hours) Letter grade only (A-F)."
          },
          {
              "id": "211",
              "title": "Principles of Computer Engineering I (3)",
              "details": "Prerequisite: MATH 122 with a grade of C or better.\nBasic principles of analysis and design of computer-based circuits. Application of transistors, logic families, digital, devices in computer and embedded processor interfacing, importance of phasors and the complex plane. Basic DC/AC circuit fundamentals. Laboratory safety. \nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "225",
              "title": "Digital Logic and Assembly Programming (3)",
              "details": "Prerequisite: CECS 174 or equivalent with a grade of “C” or better\nAn introductory course in Digital Logic and Assembly Programming covering number representation, digital codes, Boolean Algebra, combinatorial logic design, sequential logic design, programmable logic devices, internal organization of microprocessor and microcontroller systems and programming in assembly language. \nLetter grade only (A-F). (Lecture 2 hours, Laboratory 3 hours)"
          },
          {
              "id": "228",
              "title": "Discrete Structures with Computing Applications (3)",
              "details": "Prerequisites: CECS 174 and MATH 113 or equivalent all with a grade of C or better.\nAn introduction to discrete mathematics with applications towards computing. Topics include sets, functions, logic, relations, graphs, trees, recursion, combinatorics, and mathematical reasoning. \nLetter grade only (A-F). (Lecture 2 hours, laboratory/problem session 3 hours). Same course as CECS 228H. Not open for credit to students with credit in CECS 228H."
          },
          {
              "id": "2281",
              "title": "Discrete Structures with Computing Applications (3)",
              "details": "Prerequisites: CECS 174 and MATH 113 or equivalent all with a grade of C or better.\nAn introduction to discrete mathematics with applications towards computing. Topics include sets, functions, logic, relations, graphs, trees, recursion, combinatorics, and mathematical reasoning. \nLetter grade only (A-F). CECS 228H is open only to students in the Engineering Honors Program. Additional assignments/projects adding depth to the course materials required for Engineering Honors students. Not open for credit to students with credit in CECS 228. (Lecture 2 hours, laboratory/problem session 3 hours)"
          },
          {
              "id": "229",
              "title": "Discrete Structures with Computing Applications II (3)",
              "details": "Prerequisites: MATH 123 and CECS 228 both with a Grade of C or better\nThis is the second course in a two-course sequence in computing applications of discrete structures. Topics include applications of computer arithmetic and matrices in computer systems. Programming assignments in Python will be provided. \nLetter grade only (A-F). (Lecture 2 hours, Laboratory 3 hours). Same course as CECS 229H. Not open for credit to students with credit in CECS 229H."
          },
          {
              "id": "2291",
              "title": "Discrete Structures with Computing Applications II (3)",
              "details": "Prerequisites: MATH 123 and CECS 228 both with a Grade of C or better\nThis is the second course in a two-course sequence in computing applications of discrete structures. Topics include applications of computer arithmetic and matrices in computer systems. Programming assignments in Python will be provided. \nLetter grade only (A-F). CECS 229H is open only to students in the Engineering Honors Program. Additional assignments/projects adding depth to the course materials required for Engineering Honors students. Not open for credit to students with credit in CECS 229. (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "262",
              "title": "Introduction to Embedded System Programming (3)",
              "details": "Prerequisites: CECS 174 and CECS 201 all with a grade of C or better.\nIntroduction to embedded system architecture, memory organization and programming using C. Interfacing with external I/O devices, Use of internal special function registers. Development tools and extended C instructions unique to embedded systems. Course will be taught using an embedded processor development board.\n(Lecture 2 hours, laboratory 3 hours.) Letter grade only (A-F)."
          },
          {
              "id": "271",
              "title": "Introduction to Numerical Methods (3)",
              "details": "Prerequisites: CECS 229 or MATH 247 with a grade of C or better.\nNumerical methods for algebraic equations, computer arithmetic, error propagation, fixed and arbitrary precision, numerical integration and differentiation, ordinary differential equations, Fourier Transform, discrete Fourier Transform. Programming assignments for implementation.\nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "274",
              "title": "Object Oriented Programming and Data Structures (3)",
              "details": "Prerequisite: CECS 174 with a grade of C or better.\nDisciplined methods of design, coding and testing using the Java programming language. Data abstraction, object-oriented design. Introduction to data structures (linked lists, stacks, queues and trees.) Recursion. Sorting and searching. \nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours). Same course as CECS 274H. Not open for credit to students with credit in CECS 274H."
          },
          {
              "id": "2741",
              "title": "Object Oriented Programming and Data Structures (3)",
              "details": "Prerequisite: CECS 174 with a grade of C or better.\nDisciplined methods of design, coding and testing using the Java programming language. Data abstraction, object-oriented design. Introduction to data structures (linked lists, stacks, queues and trees.) Recursion. Sorting and searching. \nLetter grade only (A-F). CECS 274H is open only to students in the Engineering Honors Program. Additional assignments/projects adding depth to the course materials required for Engineering Honors students. Not open for credit to students with credit in CECS 274. (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "275",
              "title": "Programming and Data Structures in C++ (3)",
              "details": "Prerequisite: CECS 174 or equivalent with a grade of C or better\nDisciplined methods of design, coding and testing using the C++ programming language. Data abstraction and class design. Introduction to data structures (linked lists, stacks, queues and trees.) Recursion. Sorting and searching.\nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "277",
              "title": "Object Oriented Application Development (3)",
              "details": "Prerequisite: CECS 274 with a grade of C or better.\nAdvanced introduction to the fundamentals of computer science and software engineering methodology. Advanced programming techniques and design methodology typically used in large programming projects using the Java programming language. \nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "278",
              "title": "Cyber Security Principles (3)",
              "details": "Prerequisite: CECS 100\nPrinciples, mechanisms, implementation, and sound practices of computer security and data protection. Cryptography. Authentication and access control. Internet security. Malicious software. Common vulnerabilities. Practical security in everyday life. \nLetter grade only (A-F). (Lecture 2 hours, laboratory 3 hours)"
          },
          {
              "id": "282",
              "title": "C++ for Java Programmers (3)",
              "details": "Prerequisite: CECS 274 with a grade of C or better.\nStructured and Object Oriented Programming in C++.\u202f Common features and differences between Java and C++.\u202f Pointers, references, and memory management, stream I/O, classes, operator overloading, exception handling, STL. \n(Lecture 2 hours, laboratory 3 hours) Letter grade only (A-F). Same course as CECS 282H. Not open for credit to students with credit in CECS 282H."
          },
          {
              "id": "2821",
              "title": "C++ for Java Programmers (3)",
              "details": "Prerequisite: CECS 274 with a grade of C or better.\nStructured and Object Oriented Programming in C++.\u202f Common features and differences between Java and C++.\u202f Pointers, references, and memory management, stream I/O, classes, operator overloading, exception handling, STL. \nLetter grade only (A-F). CECS 282H is open only to students in the Engineering Honors Program. Additional assignments/projects adding depth to the course materials required for Engineering Honors students. Not open for credit to students with credit in CECS 282. (Lecture 2 hours, laboratory 3 hours)"
          }
      ];

      return {
        all: function() {
          return courses;
        },
          get: function(courseId) {
              for (var i = 0; i < courses.length; i++) {
                  if (courses[i].id === courseId) {
                      return courses[i];
                  }
              }
              return null;
      }
    };}
    )

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
