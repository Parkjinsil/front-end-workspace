// 1. Filtering 메소드
// 선택된 요소들 중 첫번째 요소를 가져와서 스타일 변경
$('h4').first().css("font-size", "4rem");
$('h4:first').css("font-size", "3rem");
$('h4').filter(':first').css("font-size", "2rem");

// h4 중 마지막 요소의 글자 크기를 2rem으로

// h4 중 다섯번째 요소의 텍스트를 '테스트-5'로 변경

// 클래스 선택자 : test를 선택해서 홀수 인덱스 요소만
// 배경색상 : royalblue, 글자색 : white

// 클래스 선택자 : test를 선택해서 짝수 인덱스 요소만
// 배경색상 : hotpink, 글자색 : white

// h4 중 클래스 선택자 test가 아닌 요소를 선택해서
// 배경색상 : chocolate, 글자색 : white

