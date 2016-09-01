System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Lens;
    return {
        setters:[],
        execute: function() {
            Lens = (function () {
                function Lens(datePosted, brand, type, fLength, description, location, price, rating, imageUrl) {
                    this.datePosted = datePosted;
                    this.brand = brand;
                    this.type = type;
                    this.fLength = fLength;
                    this.description = description;
                    this.location = location;
                    this.price = price;
                    this.rating = rating;
                    this.imageUrl = imageUrl;
                }
                return Lens;
            }());
            exports_1("Lens", Lens);
        }
    }
});
//# sourceMappingURL=lens.model.js.map