/****************************************** 
COMMENT: The List ADT   
******************************************/
class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  // adding element to the list
  append(element) {
    this.dataStore[this.listSize++] = element;
    console.log(this.dataStore);
  }

  // find an element in the list
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      } else {
        return -1;
      }
    }
  }

  // remove an element from the list
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      console.log(`the ${element} has been removed successfully`);
      console.log(`The list is now ${this.dataStore}`);
      return true;
    } else {
      console.log(`the ${element} has not been found`);
      return false;
    }
  }

  // length
  length() {
    console.log(this.listSize);
  }

  // inserting an element into the list
  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      console.log(`${element} has been inserted`);
      console.log(`The list is now ${this.dataStore}`);
      return true;
    } else {
      console.log(`couldn't insert ${element}`);
      console.log(insertPos);
      return false;
    }
  }
}

const list1 = new List();
list1.append("Zahed");
list1.append("Abrar");
list1.append("Hussen");
// list1.remove("Abrar");
list1.insert("kamal", "Abrar");

// list1.length();
