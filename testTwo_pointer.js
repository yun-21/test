const a = [1, "콜라", true];
//실제 데이터 신지윤이 가지고있음
a[1] = "포카리 스웨트";
//김정수씨 신지윤한테 포카리 스웨트 마시라고 하세요.
const b = a;
//얕은 복사
console.log(b)