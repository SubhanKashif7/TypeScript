"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var total_marks = 100;
var got_marks = 80;
var percentageCalculator = function (total, got) {
    if (total === void 0) { total = 100; }
    if (got === void 0) { got = 0; }
    var per = got_marks / total_marks * 100;
    return per;
};
console.log(percentageCalculator(total_marks, got_marks));
var TypeLang = /** @class */ (function () {
    function TypeLang(parameters) {
        console.log(parameters);
    }
    return TypeLang;
}());
;
var obj = new TypeLang("Subhan");
