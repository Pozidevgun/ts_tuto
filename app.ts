// lesson 3 
// interface vs type
// interface User{
//     name: string
// }
// interface User{
//     age: number
// }
// //можно соединять
// const user: User = {
//     name: 'as',
//        age: 22
// }
type IDI = string | number
// или и 
type User = {
    name: string | number
}
//можно соединять 
const user: User = {
    name: 'as'
}