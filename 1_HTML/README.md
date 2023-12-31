### 목차

- [HRML 기초](#html-기초)
- [글자 태그](#글자-태그)
- [목록 태그](#목록-태그)
- [이미지 및 멀티미디어 태그](#이미지-및-멀티미디어-태그)
- [하이퍼링크 태그](#하이퍼링크-태그)
- [테이블 태그](#테이블-태그)
- [폼 태그](#폼_태그)
- [영역 태그](#영역-태그)
- [시맨틱 태그](#시맨틱-태그semantic-tag)

# HTML 기초

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램

- Chrome, Fire Fox, Safari, Opera, Edge..
- 사용자가 사용하는 브라우저는 정해져 있지 않으며 브라우저마다 화면이 다르게    
  출력될 수 있으니 브라우저마다 테스트를 하면서 수정
  => 크로스 브라우징

## 웹 페이지 개발 방법

- 구조(Structure) : HTML
- 표현(Presentation) : CSS
- 동작(Behavior) : JavaScript

## HTML(Hyper Text Markup Language)

- 웹 문서 / HTML 문서 / HTML 페이지

## 웹 페이지 생성
- 저장 시 확장자는 .html 또는 .htm
- 처음 보여지는 화면의 파일 이름은 "index.html"

## main page, sub page

- main page : index.html
- sub page : index.html 제외 파일명.html 파일들

## HTML 내용 작성

1. 이해하기 쉽게
2. 논리적으로
3. 의미있게
4. 구조적으로
5. 콘텐츠는 "제목 + 내용"으로 작성
6. 디자인에는 없는 요소들도 내용 전달에 필요하면 추가 작성
7. 중요도, 선호도, 사용빈도가 높은 순으로

## 코딩 순서

1. 내용 작성
2. 마크업 : 용도나 목적에 맞는 태그 작성
3. 콘텐츠 블럭
4. CSS 초기화
5. CSS 작성
6. 스크립트 적용 (자바스크립트)
7. 프로그래밍 적용
8. 표준/접근성 검사
9. 수정/보안

## 태그

<태그 속성="값"> </태그>
1. "<"와 ">" 사이에 명령어(tag, element) 작성
2. 시작태그와 종료태그로 구성
3. 종료태그가 없는 태그(br, img, hr, meta, input)
4. 태그는 중첩 가능하며 종료태그는 나중에 작성한 태그먼저 작성
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분
 html
<a href="#"></a>

2. 여러 개의 속성을 사용할 수 있다.
 html
<img src="/" width="100">

3. 하나의 속성에는 값을 한개만 지정 가능하다.
 html
<img src="/" width="100,200"> <!-- 이렇게는 작성 불가 -->

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용이 불가능하다.
 html
<img src="/" sidth="삼백">  <!-- 이렇게는 작성 불가 -->
<meta name="keywords" content="영화, 한국영화, 외국영화"> <!-- 예외적인 경우 -->

## HTML 기본 문서 구조

 html
<!DOCTYPE html>  <!-- 문서 형식 -->
<html lang="ko">  <!-- 기본 언어 설정 -->
    <head>
        <title> 문서 제목 </title>
    </head>
    <body></body>
</html>

- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서를 뜻함
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보
- body : 실제 웹 브라우저에 나타날 내용

## head에 많이 쓰는 태그

1. title : 문서의 제목
2. mete : 문서의 속성

## meta 태그

 html
<meta charset="UTF-8">  <!-- ★ 필수 ★ 문자 세트 지정 -->
<meta name="viewport" content="width=devide-width, initial-scale=1.0">  <!-- 모바일 기기와 연관 -->
<meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- 인터넷 익스플로러 브라우저 때문 -->

<!-- 검색 엔진 -->
<meta name="keywords" content="키워드1, 키워드2">
<meta name="description" content="문서 설명">
<meta name="author" content="문서 작성자">
- keywords를 사용함으로 옛날에는 검색되게끔 했지만 과한 키워드 추가로 현재는 검색 엔진에서 사용하지 않는다.(구글은 가능)

# 글자 태그

[위로 이동](#목차)

## hn(Heading)

- 제목 표시
- h1(큰 제목) ~ h6(작은 제목)
- 줄 바꿈 + 볼드체 적용

## p(Paragraph)

- 문단 구분

## br(Break)

- 줄 바꿈

## hr(Horizontal)

- 수평 줄

## pre(Preformat)

- 입력하는 대로 화면에 표시

## b(Bold), strong

- 글자를 강조
- 굴게 표시

## i(Itelic), em(Emphasized)

- 글자를 기울여서 표시

## u(Underline)

- 글자에 밑줄

## s(Strikethrough)

- 취소선

## mark

- 형광펜

## small

- 글자를 작게

## sup(Superscript Text), sub(Subscript Text)

- 위/아래 첨자

## q, blockquote

- 글을 인용할 경우

## abbr(Abbreviation)

- 약어 표시

<br>

# 목록 태그

[위로 이동](#목차)

## ul(Unordered List)

- 순서 없는 목록

# ol(Ordered List)

- 순서 있는 목록
- type : 항목 앞에 표시되는 숫자의 종류 변경
- stasrt : 항목의 시작 번호 변경 (기본값 : 1)
- reversed : 항목을 역순으로 표시

## li(List Item)

- ul, ol의 항목

## dl(Description List)

- 정의 목록

## dt(Definition Term)

- 목록에 대한 정의

## dd(Definition Description)

- 정의 목록의 항목

<br>

# 이미지 및 멀티미디어

[위로 이동](#목차)

## img

- 웹 페이지에 이미지 불러오기
- 고정길이 : px, 가변길이 : % => 기본값은 px 단위

```html
<img src = "이미지 경로" alt = "이미지 설명 문구"
width = "가로길이(px/%)" height = "세로길이(px/%)">
```

## img 태그 속성의 alt
- 사진의 경로가 잘못되거나 이미지를 제대로 표현할 수 없는 경우 대체 텍스트의 용도
- 웹 접근성의 의해 정보를 청각, 촉각으로 얻는 사람들을 위해 img 속성의 alt로 정보를 전달한다.
- 전달할 정보가 없더라도 alt는 사용한다.(예시 alt = "")

## audio

```html
<audio src = "오디오 경로" controls autoplay loop></audio>
```
- controls : 재생도구 출력 여부
- autoplay : 자동 재생여부 지정
- loop : 반복 재생여부 지정

## video

```html
<video src="비디오 경로" controls autoplay loop width="" height="" poseter ="썸네일 이미지 경로">
```

- 기존 : object element, embeded element로 Flast, media player와 같은 플러그인을 사용
- HTML5 : 플로그인 없이 동영상 재생
- 재생, 일시중지 등 web browser 자체 control 제공

## iframe
```html
<iframe width="너비" height="높이" src="페이지 경로"></iframe>
```
- 웹 문서 안에 다른 웹 페이지를 추가하는 태그(인라인 프레임)
- 유튜브 영상을 페이지에 넣고 싶을 때 사용

<br>

# 하이퍼링크 태그

[위로 이동](#목차)

## a(Anchor)

- 하이퍼링크 기능은 웹 문서의 가장 핵심적인 기능
- 클릭을 통해 연결된 곳으로 이동하여 사용을 편리하게 해주는 기능
- 텍스트를 클릭해 링크를 이동하는 방법, 이미지를 클릭해서 넘어가는 방법 등 존재
- 페이지 내에서의 링크를 통한 이동도 가능

# 테이블 태그들

[위로 이동](#목차)

## 테이블

- 웹 문서에서 자료를 정리할 때 사용
- 행과 열로 이루어져 있고, 행과 열이 만나는 지점을 셀
 
 ## 특징
 1. 각 행의 셀 개수는 동일
 2. 같은 행에 있는 셀들은 높이가 동일
 3. 같은 열에 있는 셀들은 길이가 동일

 ## 관련 태그

 1. table : 테이블의 외곽선 표시
 2. tr(Table Row) : 테이블의 행(줄) 구분
 3. td(Table Data Cell) : 셀(칸) 생성 

 ## 셀 병합 속성
1. colspan : 열 병합
2. rowspan : 행 병합

## 접근성 향상을 위한 요소
1. th(Table Header) : 제목 셀 지정
2. caption : 테이블의 제목
3. thead(제목) / tfoot(결과) / tbody(내용) : 각 셀들의 역할 별 구분

<br>

# 폼 태그
[위로 이동](#목차)

## 입력 양식(Web Form)
- 사용자가 페이지에 값을 전달하는 모든 형식

## form
1. 모든 양식은 `<form> ~ </form>` 안에서 작성
2. 모든 양식은 이름(name) 입력 : 서버로 전송된 값들을 구분하기 위한 키 
  (key)값으로 사용
3. 대부분의 양식은 `<input>` 태그의 "type" 속성으로 정의
4. `<select>, <option>` : 콤보 상자 작성
5. `<textarea>` : 텍스트를 여러 줄 입력하는 상자 작성
6.`<button>` : 버튼 형식의 요소 작성(input 대신 button 사용)

- form 태그 속성
    - name : form 태그의 이름을 지정한다.
    - method : 데이터 전송 방식을 지정한다.
    - action : 데이터를 전달할 서버(페이지)를 저장한다.

## GET, POST
- GET
    - 데이터를 불러올 때 사용한다.
    - 데이터의 안정성이 낮다.
    - 데이터를 URL에 노출시켜서 서버에 전달한다.
    - 데이터 전달 속도가 빠르다.

- POST
    - 데이터를 보낼 때 사용한다.
    - 데이터의 안전성이 높다.
    - 데이터를 URL에 노출시키지 않고 서버에 전달한다.
    - GET 보다 데이터 전달 속도가 느리다.

## input
- 사용자로부터 데이터를 입력받기 위한 태그
- 속성 type의 값에 따라서 input이 변형된다.
- 속성 값 종류

1. **text** : 한 줄의 텍스트를 입력받을 수 있다.
- size : 입력 칸의 길이(보이는 글자 수)
- maxlength : 최대 입력 가능한 글자 수
- minlength : 최소 입력 글자 수
- value : 입력 값

2. **password** : 비밀번호를 입력받을 수 있다.

3. **checkbox** : 여러 항목 중 여러 가지를 선택할 수 있다.
- value : check 된 상태로 데이터 전송을 하면 value의 값이 전송된다.
- checked : checkbox가 체크된 상태로 페이지가 열린다.

4. **radio** : 여러 항목 중 한 가지만 선택할 수 있다.
- name : name 이 같은 애들끼리 중에서 하나만 체크가 된다.

5. **file** : 파일을 첨부할 수 있다.
- multiple 속성을 통해 파일을 다중으로 선택할 수 있다.
- accept : 파일 선택할 때 보여지는 파일들의 종류를 지정한다.

6. **hidden** : 정보를 가지고 있어야 하지만 사용자에게 안 보이게 할 때 사용한다.

7. **button** : 기본적으로 가진 기능이 없어 다른 기능과 연결해서 사용한다.
- value : 버튼의 text를 바꿀 수 있다.

8. **submit** : 데이터를 전송할 때 사용하는 버튼이다.
- form 태그의 method 속성에 지정된 전송 방식으로 action속성에 지정한 서버로 입력한 값들을 전송한다.

9. **reset** : form 에서 입력한 값을 모두 초기화한다.

## 추가된 Type
1. 날짜 관련 Type
- **datetime** or **datetime-local** : 년/월/일/시/분/초 에 대한 데이터를 입력받을 수 있다.
- **week** : 주에 대한 데이터를 입력받을 수 있다.
- **month** : 년/월에 대한 데이터를 입력받을 수 있다.
- **date** : 년/월/일에 대한 데이터를 입력받을 수 있다.
- **time** : 시간(시/분/초)에 대한 데이터를 입력받을 수 있다.

2. **email** : 이메일 주소를 입력받을 수 있다.
- 입력받은 값이 email 주소 형식이 맞는지 자동으로 체크해준다.

3. **url** : URL을 입력받을 수 있다.

4. **search** : 검색 값을 입력받을 수 있다.
- text 타입과 다르게 검색어 입력 시 'X' 가 표시되고 검색어를 쉽게 지울 수 있다.

5. **color** : 색상을 선택할 수 있다.

6. **number** : 숫자를 입력받을 수 있다.
- min : 입력할 수 있는 최소값 (기본값 : 0)
- max : 입력할 수 있는 최대값 (기본값 : 100)
- step : 증감되는 숫자의 간격을 저장 (기본값 : 1 )
- value : 표시할 초기값

7. **range** : 슬라이드바를 통해 숫자를 입력할 수 있다.

8. **tel** : 전화번호를 입력받을 수 있다.
- 모바일 기기의 경우 가상 키보드 배열이 전화번호를 입력받을 수 있도록 바뀐다.

## input 기본 속성
1. placeholder : 텍스트 입력에 도움이 되는 힌트를 표시
2. autofocus : 요소에 마우스 커서를 표시
3. required : 필수로 입력해야하는 태그에 사용
4. readonly : 읽기 전용으로 설정
5. disabled : 비활성화

## 표준 & 접근성 향상
1. fieldset : 양식의 소그룹
2. legend : fieldset의 제목
3. label : 필드와 텍스트의 그룹

 # 영역 태그

[위로 이동](#목차)

## 블럭 태그

- 한 줄 단위로 영역을 차지하는 요소 (너비가 100%)
- 블럭 태그의 왼쪽/오른쪽에 다른 요소가 올 수 없다.
- 대표적인 블럭 태그는 div, p, pre, hr, table 태그 등이 있다.
- 블럭 태그 안에는 블럭, 인라인 태그를 사용할 수 있다.

## 인라인 태그

- 내용에 해당하는 부분만 영역을 차지하는 요소
- 인라인 태그의 왼쪽/오른쪽에 다른 요소가 올 수 있다.
- 대표적인 인라인 태그는 span, img, input, button 태그 등이 있다.
- 인라인 태그 안에는 인라인 태그만 사용할 수 있다.

## div와 span

- HTML에서 주로 사용되는 의미 없는 태그
- 요소들을 그룹화하여 스타일(CSS)을 적용하는데 사용

<br>

# 시맨틱 태그(Semantic Tag)

- 페이지의 독자적 요소
- 상단 로고, GNB, topmenu 등
- 반드시 하나 이상의 제목(h1~h6) 명시
- 주로 페이지 안내(이동)에 관한 요소 포함

## nav

- 페이지 링크, 내부 링크가 있는 섹션 마크업 시 사용
- 메인 내비게인션이 있는 섹션에만 사용]

## main

- 문서의 주요 내용 정의
- 문서 내에 한 번만 사용
- 페이지별 내용, LNB, 배너, 게시판, 퀵메뉴 등
- 해당 페이지에서 나타내고자 하는 내용 작성

## section

- 단락, 이미지, 제목 등의 콘텐츠를 묶어 더 큰 논리적 단위 형성
- class나 id 속성을 사용하여 섹션을 구분

## article

- 페이지 내용상 별개의 내용을 구성할 때 사용되는 섹션

## aside

- 본문 내용에 대한 추가적인 설명, 부수적 콘텐츠 표시에 사용하는 태그

## footer

- 회사나 사이트에 대한 정보
- 저작권, 개인정보 보호정책, 연락처, 관리자 정보, 카피라이트 등

## figure

- 이미지에 대한 캡션이나 설명을 위한 태그
- 문서의 흐름에 영향을 주지 않는 콘텐츠 마크업에도 사용