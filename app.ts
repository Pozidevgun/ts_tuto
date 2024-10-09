// lesson 3 
// Literal type
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1{
    return 1
}
// fetchWithAuth('sdf', 'post')
// fetchWithAuth('sdf', 's')
// let a:'sadfasddsa'  = 'sadfasddsa'; нельзя переименовать из-за литерального типа
// a = 'asfdasf'
let method = 'post';
fetchWithAuth('s',method as 'post') 
// использовать as только если точно знает что ничего другого (значения) бить не может єто приведения к виду 