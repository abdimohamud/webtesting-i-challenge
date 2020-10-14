module.exports = {
  success,
  fail,
  repair,
  get,
};
const object = {
  name: 'fire',
  durability:100,
  enhancement:0
}

function success(item) {
  if(item.enhancement===20){
    return {...item, enhancement}
  } else
  return { ...item, enhancement:enhancement+1 };
}

function fail(item) {
  if(item.enhancement<15){
    return { ...item, durability:durability-5 };
  }
  else if(item.enhancement===15){
    return { ...item, durability:durability-10 };
  }
  else if(item.enhancement>20){
    return { ...item, durability:durability-1 };
  }
  
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  return { ...item };
}


// - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
// - a `get()` method for use when working on the stretch problem.

// The following sections list information provided by the client about `items` and the game's enhancing system.

// ### Items.

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

// ### When enhancement succeeds

// x The item's enhancement increases by 1.
// x If the item enhancement level is 20, the enhancement level is not changed.
// x The durability of the item is not changed.

// ### When enhancement fails

// x If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// x If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// x If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
