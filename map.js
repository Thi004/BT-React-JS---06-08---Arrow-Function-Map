//1.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.

let arr = [2, 5, 3]
let newArr = []
arr.map(e => {
    newArr.push(Math.pow(e, 2));
    return newArr;
})
console.log('cau 1: ' + newArr);

//2.Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.

let arr2 = ['Hi', 'Hello', 'Bye'];
let newArr2 = [];
arr2.map(e => {
    newArr2.push(e.length)
})
console.log('cau 2: ' + newArr2);

// 3.Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.

let arr3 = [
    {
        name: 'A',
        age: 30,
    },
    {
        name: 'B',
        age: 28
    }
];
let newArr3 = [];
arr3.map(e => {
    newArr3.push(e.name)
})
console.log('cau 3: ' + newArr3);

//4.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.

let arr4 = [2, 5, 3, 9];
let newArr4 = [];
arr4.map(e => {
    if (e % 2 === 0) {
        e = 'even';
    } else {
        e = 'odd'
    }
    newArr4.push(e);
})
console.log('cau 4: ' + newArr4);

//5. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa

let arr5 = ['Hi', 'Hello', 'Bye'];
let newArr5 = [];
arr5.map(e => {
    newArr5.push(e.toUpperCase())
})
console.log('cau 5: ' + newArr5);