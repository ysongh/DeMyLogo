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
}
