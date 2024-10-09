// lesson 3 
// interface
interface User{
    name: string,
    age: number,
    skills: string[],
    log:(id:number)=> string
}
interface Role {
    roleId: number
}
interface UserWithRole extends User,Role{
    
}
// interface UserWithRole extends User{
//     roleId: number 
// }
let user:UserWithRole ={
    name: 'sdfasdf',
    age: 23,
    skills: ['dasd','asfdd'],
    roleId: 2,
    log:(id)=> ''
}
