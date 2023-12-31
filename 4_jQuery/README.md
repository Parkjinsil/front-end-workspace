# 제이쿼리(jQuery)

- "적게 쓰고 더 많이"라는 슬로건을 가진 자바스크립트 라이브러리
- Ajax 호출 및 DOM 조작과 같은 자바스크립트의 복잡한 작업을 간단히 처리

## 제이쿼리 적용

- CDN(Content Delivery Network)을 통해 제이쿼리를 적용

```html
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
```

## 제이쿼리 구문

```js
$(selector).action();
```

- $ 기호 : jQuery를 정의하고 jQuery를 호출하여 jQuery를 사용
- selector : HTML 요소를 쿼리(또는 찾기)하는 역할
- action() : 선택된 요소가 행하는 동작을 명시

## 문서 준비 : document.ready()

- 문서 로드가 완료되기 전에 jQuery 코드가 실행되지 않도록 하기 위한 것

```js
$(document).ready(function() {
    // 실행할 코드 전체
});

// or

$(function() {

});
```

<br>

# 선택자(selector)

1. `$("element")` : 특정 태그 지정
2. `$("#id")` : 특정 아이디 지정
3. `$(".class")` : 특정 클래스 지정

## 속성 선택자

1. `$("element[attribute]")` : 해당 속성을 가지는 요소만 지정
2. `$("element[attribute='value']")` : 특정 요소 내에 속성과 값이 일치하는 요소 지정
3. `$("element[attribute~='value']")` : 특정 요소 내에 공백을 포함한 속성값이 일치하는 요소 지정
4. `$("element[attribute^='value']")` : 특정 요소 내에 지정한 속성값으로 시작하는 요소 지정
5. `$("element[attribute$='value']")` : 특정 요소 내에 지정한 속성값으로 끝나는 요소 지정
6. `$("element[attribute*='value']")` : 특정 요소 내에 속성의 값을 포함하는 요소 지정
7. `$("element[attribute!='value']")` : 해당 속성값을 갖지 않는 요소만 지정   

## 입력 양식 선택자

- :input => `<input>` 모든 input 요소
- :text => `<input type="text">`
- :hidden => `<input type="hidden">`
- :focus
- :checked => `<input type="checkbox" checked="checked">`

# 객체 탐색
## Filtering 메소드

- 선택자로 지정한 객체 그룹에서 위치를 가지고 객체를 선택하는 메소드
- `$('선택자').first()` : 선택된 요소들 중 첫번째 요소 선택
- `$('선택자').last()` : 선택된 요소들 중 마지막번째 요소 선택
- `$('선택자').eq(n)` : 선택된 요소들 중 인덱스 번호와 일치하는 요소 선택 (0부터 시작)
- `$('선택자').filter('선택자')` : 선택된 요소들 중 인자값과 일치하는 요소 선택
- `$('선택자').odd()` : 홀수번째 인덱스에 위치한 요소 선택
- `$('선택자').even()` : 짝수번째 인덱스에 위치한 요소 선택
- `$('선택자').not('선택자')` : 선택된 요소들 중 특정 요소와 일치하지 않는 요소 선택
- `$('선택자').is('선택자')` : 선택된 요소들 중 특정 요소가 있는지 확인 (true, false를 리턴)