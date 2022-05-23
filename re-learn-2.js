// The list of operations can be performed
const addNumbers = (num1, num2) => num1 + num2;
const subNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num1 / num2;

// CalculatorCommand class initialize with execute function, undo function // and the value 
class CalculatorCommand {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}
// Here we are creating the command objects
const DoAddition = value => new CalculatorCommand(addNumbers, subNumbers, value);
const DoSubtraction = value => new CalculatorCommand(subNumbers, addNumbers, value);
const DoMultiplication = value => new CalculatorCommand(multiplyNumbers, divideNumbers, value);
const DoDivision = value => new CalculatorCommand(divideNumbers, multiplyNumbers, value);

// AdvancedCalculator which maintains the list of commands to execute and // undo the executed command
class AdvancedCalculator {
  constructor() {
    this.current = 0;
    this.commands = [];
  }

  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
  }

  undo() {
    let command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }

  getCurrentValue() {
    return this.current;
  }
}

// usage
const advCal = new AdvancedCalculator();

// invoke commands
advCal.execute(new DoAddition(50)); //50
advCal.execute(new DoSubtraction(25)); //25
advCal.execute(new DoMultiplication(4)); //100
advCal.execute(new DoDivision(2)); //50

// undo commands
advCal.undo();
advCal.getCurrentValue(); //100