//rgb -> 핵사코드
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//?팩토리 함수
//* 호출할때마다 새 객체를 반환 해당 객체에 매번 고유의 개별 메서드를 추가
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    return color;
}

const firstColor = makeColor(35, 122, 145);
// firstColor.rgb();
// console.log(firstColor.rgb());
// console.log(firstColor.hex());
// console.log(firstColor.r);

//?생성자 함수

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // console.log(this);
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 0.1) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

//new를 사용하지 않으면 window 객체 불러오고
//new 사용하면 현제 객체를 불러옴
new Color(12, 223, 55);

// console.log(new Color(255, 255, 255).rgb());
// console.log(new Color(145, 15, 2).hex());
// console.log(new Color(145, 15, 26).rgba(0.5));

//?javascript 클래스

//! 클래스나 생성자 함수를 표시할 때는 보통 대문자를 사용
class Color2 {
    //* 프로토타입 클래스안에 한번에 모을수 있음
    //Color2 클래스의 인스턴스를 인스턴스화할때마다 이 함수가 자동으로 실행됨
    constructor(r, g, b, name) {
        // console.log('constructor 안');
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.log(r, g, b, name);
    }

    innerRGB() {
        const { r, g, b } = this;
        return `rgb ${r}, ${g}, ${b}`;
    }

    rgb() {
        return `${this.innerRGB()}`;
    }

    rgba(a = 1.0) {
        return `${this.innerRGB()}, ${a}`;
    }

    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

// const c1 = new Color2(12, 33, 137, 'w');
// console.log(c1.rgb());
// console.log(c1.rgba(0.2));
// console.log(c1.hex());

//? 클래스 extend,super

class Pat {
    constructor(name, age) {
        console.log('Pat 클래스');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pat {
    constructor(name, age, livesLeft = 9) {
        console.log('Cat 클래스');
        super(name, age); //부모 생성자 가져옴(재사용)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWW!!';
    }
}

class Dog extends Pat {
    bark() {
        return 'WOOOFF!!';
    }
    eat() {
        return `${this.name} 차이 테스트`;
    }
}

const cat1 = new Cat('ho', 3);
console.log(cat1);

// const dog1 = new Dog('so', 5);
// console.log(dog1.eat());
