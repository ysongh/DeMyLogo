pragma solidity >=0.4.21 <0.7.0;

contract DeMyLogo {
  string public name = "DeMyLogo";
  uint public taskCount = 0;
  uint public logoCount = 0;
  mapping(uint => Task) public tasks;
  mapping(uint => Logo) public logos;

  struct Task {
    uint taskId;
    string name;
    string description;
    string contact;
    uint amount;
    bool completed;
    address payable owner;
  }

  struct Logo {
    uint logoId;
    string fileHash;
    string email;
    address designer;
    address owner;
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

  event LogoCreated (
    uint logoId,
    string fileHash,
    string email,
    address designer,
    address owner
  );

  event Payment (
    address from,
    address to,
    uint taskId,
    uint amount
  );

  function createTask(string memory _name, string memory _description, string memory _contact, uint _amount) public {
    taskCount++;

    tasks[taskCount] = Task(taskCount, _name, _description, _contact, _amount, false, msg.sender);
    emit TaskCreated(taskCount, _name, _description, _contact, _amount, false, msg.sender);
  }

  function createLogo(string memory _fileHash, string memory _email, address _owner) public {
    logoCount++;

    logos[logoCount] = Logo(logoCount, _fileHash, _email, msg.sender, _owner);
    emit LogoCreated(logoCount, _fileHash, _email, msg.sender, _owner);
  }

  function payDesigner(uint _taskId, address payable _designer) public payable {
    Task memory _task = tasks[_taskId];

    address(_designer).transfer(msg.value);

    _task.completed = true;
    tasks[_taskId] = _task;

    emit Payment(msg.sender, _designer, _taskId, _task.amount);
  }
}
