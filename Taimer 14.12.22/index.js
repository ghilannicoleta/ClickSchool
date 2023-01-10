function Timer() {
    let duration = 0;
    let startTime;
    let endTime;

    this.start = function () {
        startTime = new Date()
    }

    this.stop = function () {
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000
    }

    this.reset = function () {
        endTime = null
        startTime = null
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
}

let timer = new Timer() 