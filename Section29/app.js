//모든 문자열에 대한 프로토타입 객체
String.prototype.yell = function () {
    console.log('테스트');
    // console.log(this.toUpperCase());
    return `${this.toUpperCase()}!!!!`;
};

//특정 객체이자 템플릿, 모든 배열에 대해 메서드와 특성을 저장하고 있다.
Array.prototype.pop = function () {
    return 'Sorry I want that element, i will naver pop it off';
};

const dog = 'timothy';
console.log(dog.__proto__);

// dog.prototype. = function () {
//     console.log('hi');
// };

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = 'English'; //기능이 같으므로 메모리에 1번만 올려서 사용

Person.prototype.name = function () {
    //기능이 같으므로 메모리에 1번만 올려서 사용
    return this.firstName + ' dd' + this.lastName;
};

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

//! 프로토타입은 마치 자바에서 Static을 이용하는 것처럼 메모리를 공유하기 위해 사용할 수 있다.
//! 메모리의 낭비없이 사용할 수 있게되는 것이다.

//! 모든 배열은 하나의 프로토타입 배열 객체에서 자신만의 내장된 객체 메서드를 가진다.
