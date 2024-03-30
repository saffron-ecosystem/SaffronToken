// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Saffron is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, OwnableUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialOwner) initializer public {
        __ERC20_init("Saffron", "SFC");
        __ERC20Burnable_init();
        __Ownable_init(initialOwner);

        _mint(msg.sender, 2000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(amount > 0,"Zero amount");
        require((totalSupply()+amount) <= tSupply,"Invalid amount");
        _mint(to, amount);
    }
}