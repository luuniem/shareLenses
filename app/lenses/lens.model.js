System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Lens;
    return {
        setters:[],
        execute: function() {
            Lens = (function () {
                function Lens(datePosted, brand, type, fLength, location, price, rating, imageUrl, description) {
                    this.datePosted = datePosted;
                    this.brand = brand;
                    this.type = type;
                    this.fLength = fLength;
                    this.location = location;
                    this.price = price;
                    this.rating = rating;
                    this.imageUrl = imageUrl;
                    this.description = description;
                }
                return Lens;
            }());
            exports_1("Lens", Lens);
        }
    }
});
//# sourceMappingURL=lens.model.js.map