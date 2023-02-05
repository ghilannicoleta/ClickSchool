class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
      if (min > args[i]) {
        min = args[i];
      }
    }
    return min;
  }
}

const SmollNumber = new SmallestIntegerFinder();

console.log(SmollNumber.findSmallestInt([78, 56, 232, 12, 8]));
