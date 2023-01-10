// // object literal:
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     drow: function () {
//         console.log('drow')
//     }
// }

// circle.drow()

// // // Factory fanction:
// function createCircle(radius) {
//     return {
//         radius,

//         drow: function () {
//             console.log('drow')
//         }
//     }
// }

// const circle = createCircle(1)

// // Constructor function:
// function createCircle(radius) {
//     this.radius,
//         this.drow = function () {
//             console.log('drow')
//         }
// }
// const another = new createCircle(1)

function Timer() {
  this.duration = 0;

  this.start = function () {
    console.log("timer started");
  };

  this.stop = function () {
    console.log("timer stoped");
  };

  this.reset = function () {
    console.log("timer reseted");
  };
}
