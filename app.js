"use strict";
//tuples readonly
// const arr: readonly [number, string]  = [1, 'dev'];
// // arr.push('sdfsad')
// // arr.pop()
// // const [id, arrName] = arr
// // const arr1: [number,string,...boolean[]] = [1, 'dsafasd', false, true, false]
// let a = 5; 
// const arr1: ReadonlyArray<string>  = ['1', 'dev'];
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 4] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "",
    statusCode: StatusCode.SUCCESS,
};
/* 1 - успіх
    2 -в процесі
    3 - відключино
*/
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
const res2 = 1 /* Roles.ADMIN */;
// function test(x:{ADMIN: number}){
// }
// test(Roles)
