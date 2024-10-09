// lesson 3 
// Type Aliases
// type httpMethod = 'post' | ' get';

// type coolString = string;
// function fetchWithAuth(url: coolString, method: httpMethod): 1 | -1{
//     return 1
// }

type User = {
    name: string,
    age: number,
    skills: string[]
}
let user: User = {
    name: 'asd',
    age: 34,
    skills:['sdfasff','fsdfsdf']
}
type Role = {
    id: number
}
type FullUser  = User & Role

// type fullUser  = User | Role
let user1: FullUser = {
    name: 'asd',
    age: 34,
    skills:['sdfasff','fsdfsdf'],
    id: 1
}