// apply, call, bind 를 사용하여 this를 조작하거나 고정할 수 있음

// call() 메서드 인수에 this로 사용할 값을 전달 가능
var peter = {
  name : 'Peter Parker',
  sayName : function(){    
		console.log(this.name);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}
peter.sayName.call(bruce);  // this를 bruce로 잡으라고 고정해줌
// peter.sayName()을 하면 Peter Parker가 출력

// argument 전달
var peter = {
  name : 'Peter Parker',
  sayName : function(감탄사){    
		console.log(this.name + 감탄사);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); // Bruce Wayne!
peter.sayName('!')  // Peter Parker!
peter.sayName()   // Peter Parkerundefined

// apply() 메서드의 인수에 this로 사용할 값을 전달할 수 있으며, 배열의 형태로 전달 가능
var peter = {
  name : 'Peter Parker',
  sayName : function(is, is2){    
		console.log(this.name+ ' is '+ is + ' or ' + is2);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);  // 아규먼트가 배열로 바뀐 call과 동일

// call과 apply 비교
// 1.
var peter = {
  name : 'Peter Parker',
  sayName : function(감탄사){    
		console.log(this.name + 감탄사);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!'); // Bruce Wayne!!!

// 2.
var peter = {
  name : 'Peter Parker',
  sayName : function(감탄사){    
		console.log(this.name + 감탄사);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']); // Bruce Wayne!,!!

// bind() 는 this가 고정된 새로운 함수를 반환
function sayName(){
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName : sayName
}

var peter = {
  name : 'peter',
  sayName : sayName.bind(bruce)
}

peter.sayName();  // bruce
bruce.sayName();  // bruce