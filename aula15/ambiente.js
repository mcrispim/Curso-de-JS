let num = [5, 2, 8, 9, 3]
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[3])
num.sort()
console.log(num)
num.push(7)
console.log(num)
 
for (let i = 0; i < num.length; i++) {
    num[i] = i;
}
console.log(num)

for (let pos in num) {
    console.log(pos)
}
console.log(num.indexOf(7))

console.log(num.indexOf(4))
