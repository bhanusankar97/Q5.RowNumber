let a = [[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]
let list_a = []
for(let i of a){
    let count = 0
    for(let j of i){
        if(j==1){
            count = count + 1
        }
    }
    list_a.push(count)
}
let max = Math.max(...list_a)
console.log(list_a.indexOf(max))