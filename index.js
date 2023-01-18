import strictEquals from "./strictEquals.js";

console.log(strictEquals(1, 1) + "    1,1");
console.log(strictEquals(NaN, NaN) + "   NaN,NaN");
console.log(strictEquals(0, -0) + "    0,-0");
console.log(strictEquals(-0, 0) + "    -0,0");
console.log(strictEquals(1, "1") + "   1, '1'");
console.log(strictEquals(true, false) + "   true,false");
console.log(strictEquals(false, false) + "    false,true");
console.log(strictEquals("water", "oil") + "   'water','oil'");
