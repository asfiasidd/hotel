(function() {
    "use strict";

    var instances = [];
    var defaultOptions = {
        precision: 100,
        elapse: false,
        defer: false
    };

    function Countdown(el, finalDate, options) {
        this.el = el;
        this.interval = null;
        this.offset = {};
        this.options = Object.assign({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);

        if (options) {
            if (typeof options === "function") {
                this.el.addEventListener("update.countdown", options);
                this.el.addEventListener("stoped.countdown", options);
                this.el.addEventListener("finish.countdown", options);
            } else {
                this.options = Object.assign({}, defaultOptions, options);
            }
        }

        this.setFinalDate(finalDate);

        if (this.options.defer === false) {
            this.start();
        }
    }

    Countdown.prototype = {
        start: function() {
            if (this.interval !== null) {
                clearInterval(this.interval);
            }

            var self = this;
            this.update();
            
            this.interval = setInterval(function() {
                self.update.call(self);
            }, this.options.precision);
        },
        // ... (other methods remain unchanged)
    };

    function parseDateString(dateString) {
        if (dateString instanceof Date) {
            return dateString;
        }
        // ... (remaining parseDateString function remains unchanged)
    }

    function strftime(offsetObject) {
        // ... (remaining strftime function remains unchanged)
    }

    function pluralize(format, count) {
        // ... (remaining pluralize function remains unchanged)
    }

    // ... (remaining code remains unchanged)

    window.Countdown = Countdown;
})();

// Example usage:
// var countdownInstance = new Countdown(document.getElementById('yourElementId'), '2024-02-28');
// countdownInstance.start();
