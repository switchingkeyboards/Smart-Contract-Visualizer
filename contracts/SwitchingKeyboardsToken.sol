//SPDX-License-Identifier: MIT

pragma solidity^0.8.1;



contract SwitchingKeyboardsToken {
    uint256 private _totalSupply;
    uint256 private _decimals;
    mapping (address=>uint256) private _balances;
    bool private _finished;
    address private _owner;
    string private _metadata;
    bool private _metadata_set;

    modifier OnlyOwner {
      require(msg.sender == _owner, "Only owner of this contract can call this method.");
      _;
    }

    constructor() {
        _finished = false;
        _totalSupply = 1000;
        _metadata = "";
        _metadata_set = false;
        _owner = msg.sender;
        _decimals = 0;
        _balances[msg.sender] = _totalSupply;
    }

    function is_finished() public view returns (bool) {
        return _finished;
    }

    function finish() public OnlyOwner {
        require(_metadata_set, "Metadata must be set before finishing");
        _finished = true;
    }

    function set_metadata(string memory meta_uri_) public OnlyOwner {
        _metadata = meta_uri_;
        _metadata_set = true;
    }

    function metadata() public view returns (string memory){
        return _metadata;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _holder) public view returns (uint256) {
        return _balances[_holder];
    }

    function senderTransfer(address _to) public {
        // Unimplemented
    }
}
