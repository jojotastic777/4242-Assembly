

const theProgram = [
  ["0",42,"acc"], //MOV 42 ACC
  ["1",3], //ADD 3
  ["2",5], //SUB 5
  ["3","label"], //GOTO label
  ["1",2], //ADD 2
  [":","label"], //:label
  ["2",1] //SUB 1
];

/*

OPCODE LIST:

0x0: MOVE
0x1: ADD
0x2: SUB
0x3: GOTO

*/

var acc = 0;

function runProgram(program) {
  var labels = {};
  for (let line = 0; line<program.length; line++) {
    var currLine = program[line];
    if(currLine[0] == "//") {
      //Its a comment. We dont do anything here.
    } else if (currLine[0] == ":") {
      labels[currLine[1]] = line;
    }
  }
  
  for (var line = 0; line<program.length; line++) {
    var currLine = program[line];
    var opcode = parseInt(currLine[0]);
    
    if(opcode === 0) {
      if (typeof currLine[1] === "string") {
        if (typeof currLine[2] === "string") {
          if (currLine[1] == "acc") {
            if (currLine[2] == "acc") {
              acc = acc;
            }
          }
        } else if (typeof currLine === "number") {
          
          throw "ERROR: Can't set the value of a number!";
          
        }
      } else if (typeof currLine[1] === "number") {
        if (typeof currLine[2] === "string") {
          if (currLine[2] == "acc") {
            acc = currLine[1];
          }
        } else if (typeof currLine[2] === "number") {
          
          throw "ERROR: Can't set the value of a number!";
          
        }
      }
    } else if (opcode == 1) {
      if (typeof currLine[1] === "string") {
        if (currLine[1] == "acc") {
          acc = acc+acc;
        }
      } else if (typeof currLine[1] === "number") {
        acc = acc+currLine[1];
      }
    } else if (opcode == 2) {
      if (typeof currLine[1] === "string") {
        if (currLine[1] == "acc") {
          acc = acc-acc;
        }
      } else if (typeof currLine[1] === "number") {
        acc = acc-currLine[1];
      }
    } else if (opcode == 3) {
      line = labels[currLine[1]];
    }
    
  }
}
