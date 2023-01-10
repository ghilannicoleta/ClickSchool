const vm = function Vm(version) {
  let MAJOR = "0";
  let MINOR = "0";
  let PATCH = "1";

  let previousVersionArr = [];

  if (version) {
    let versionArr = version.split(".");

    versionArr.forEach((element, index) => {
      if (index < 3 && isNaN(element)) {
        throw new Error("Error occured while parsing version!");
      }
    });

    if (versionArr.length == 1) {
      MAJOR = versionArr[0];
      MINOR = "0";
      PATCH = "0";
    } else if (versionArr.length == 2) {
      MAJOR = versionArr[0];
      MINOR = versionArr[1];
      PATCH = "0";
    } else {
      MAJOR = versionArr[0];
      MINOR = versionArr[1];
      PATCH = versionArr[2];
    }
  }

  return {
    release: function () {
      return `${MAJOR}.${MINOR}.${PATCH}`;
    },

    major: function () {
      previousVersionArr.push({
        MAJOR: MAJOR,
        MINOR: MINOR,
        PATCH: PATCH,
      });
      MAJOR++;
      MINOR = 0;
      PATCH = 0;
      return this;
    },

    minor: function () {
      previousVersionArr.push({
        MAJOR: MAJOR,
        MINOR: MINOR,
        PATCH: PATCH,
      });
      MINOR++;
      PATCH = 0;
      return this;
    },

    patch: function () {
      previousVersionArr.push({
        MAJOR: MAJOR,
        MINOR: MINOR,
        PATCH: PATCH,
      });
      PATCH++;
      return this;
    },

    rollback: function () {
      if (previousVersionArr.length == 0) {
        throw new Error("Cannot rollback!");
      }
      let previousVersion = previousVersionArr.pop();
      MAJOR = previousVersion.MAJOR;
      MINOR = previousVersion.MINOR;
      PATCH = previousVersion.PATCH;
      return this;
    },
  };
};

console.log(vm("1.2.3.d").release());
console.log(vm("a.b.c"));
console.log(vm().major().rollback().release());
console.log(vm().patch().release());
console.log(vm().minor().release());
console.log(vm().major().release());
console.log(vm("1.1").release());
console.log(vm("1").release());
console.log(vm().release());
console.log(vm("1.2.3").release());
