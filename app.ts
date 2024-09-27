// typeof function

// function getFullName(firstname:string,secondname:string):string{
//     return `${firstname} ${secondname}`;
// }
// const getFullNameArrow= (firstname:string,secondname:string):string =>{
//     return `${firstname} ${secondname}`;
// }
// console.log(getFullName('sadasd','fasfa'))


// typeof object

// function getFullName(userInfo: {firstname:string,secondname:string}):string{
//     return `${userInfo.firstname} ${userInfo.secondname}`;
// }
// const userInfo = {
//     firstname:"Sasha",
//     secondname:"Pozihun",
//     age: 31,
//     city: "Kyiv",
// }
// console.log(getFullName(userInfo))

// typizetion object
// let info :{
//     officeId: number,
//     isOpened: boolean,
//     contacts:{
//         phone: string,
//         email: string,
//         address:{
//             city: string
//         }
//     }
// }={
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+38000000000",
// 		"email": "my@gmai.com",
// 		"address": {
// 			"city": "Kyiv"
// 		}
// 	}
// }
 
// typeof array
 const arr: string[] = ['js', 'css', 'html'];
 for(const lang of arr){
    console.log(lang.toUpperCase())
 } 
 const res = arr.filter((l:string)=>l !== 'css')
 .map(l=>l+'! ')
 .reduce((a,b) => a+b);

 console.log(res)