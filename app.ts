//tuples readonly

// const arr: readonly [number, string]  = [1, 'dev'];

// // arr.push('sdfsad')
// // arr.pop()
// // const [id, arrName] = arr
// // const arr1: [number,string,...boolean[]] = [1, 'dsafasd', false, true, false]
// let a = 5; 

// const arr1: ReadonlyArray<string>  = ['1', 'dev'];
enum StatusCode{
    SUCCESS = 1,
    IN_PROCESS = 3, 
    FAILED
} 
const res = {
    message:"",
    statusCode: StatusCode.SUCCESS,
}

/* 1 - успіх 
    2 -в процесі 
    3 - відключино
*/
if (res.statusCode === StatusCode.SUCCESS){

} 

function action (status: StatusCode){

}
action(StatusCode.SUCCESS)
action(1)
// action('f') и за того что цифровые значения используе по умолчанию 

const enum Roles{
    ADMIN =1,
    USER = 2
}
const res2 = Roles.ADMIN
// function test(x:{ADMIN: number}){

// }
// test(Roles)