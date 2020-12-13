pragma solidity >=0.4.21 <0.7.0;

contract DeMyLogo {
  string public name = "DeMyLogo";
  uint public taskCount = 0;
  mapping(uint => Task) public tasks;

  struct Task {
    uint taskId;
    string name;
    string description;
    string contact;
    uint amount;
    bool completed;
    address payable owner;
  }

  event TaskCreated (
    uint taskId,
    string name,
    string description,
    string contact,
    uint amount,
    bool completed,
    address payable owner
  );

  function createTask(string memory _name, string memory _description, string memory _contact, uint _amount) public {
    taskCount++;

    tasks[taskCount] = Task(taskCount, _name, _description, _contact, _amount, false, msg.sender);
    emit TaskCreated(taskCount, _name, _description, _contact, _amount, false, msg.sender);
  }
}
