// A: ให้สร้าง function ในการหาค่ามากที่สุด จาก array ที่ input มา โดยห้ามใช้ sort function

// โดย interface ของ function จะเป็น
// max(inputs: Array<Number>) -> Number

// Example input and output:

// #1 example:
// max([ -1, 4, 30, 2, -4 ]) expected return 30

// #2 example:
// max([ 3, 4, 5, 6, 7 ]) expected return 7

// คำตอบ
// function max(num) {

//   let numMax = -Infinity

//   for (let i = 0; i <= num.length; i++) {
//     if (numMax < num[i]) {
//       numMax = num[i]
//     }
//   }
//   return numMax
// }

// console.log(max([-1, 4, 30, 2, -4]))
// console.log(max([3, 4, 5, 6, 7]))





// B: สร้าง function รับ array ของตัวเลขจำนวนเต็ม และจำนวนเต็ม k แล้วให้หาผลรวมมากที่สุดของจำนวนที่ติดกัน k ตัว

// โดย interface ของ function จะเป็น
// fn(inputs: Array<Number>, k: Number) -> Number

// Example input and output:

// #1 example:
// fn([1, 4, -1, 2, 3], 3)  expected return 5 (เกิดจาก 4 -1 +2)

// #2 example:
// fn([1, 4, -1, 2, 3], 2)  expected return 5 (เกิดจาก 2 + 3)

//คำตอบ
function sum(arr, k) {
    let num = -Infinity
  
    for (let i = 0; i < arr.length; i++) {
      let arrsum = arr.slice(i, i + k).reduce((acc, cur) => acc + cur)
    
      if (arrsum > num) {
        num = arrsum
      }
    }
  
  
    return num
  }
  
  console.log(sum([1, 4, -1, 2, 3], 3))
