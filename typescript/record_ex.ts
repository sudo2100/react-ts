
// 동적 키와 값을 정의
type StringMap = Record<string, string>;

const translations: StringMap = {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요"
}

// 출력
console.log(translations.hello);
console.log(translations.goodbye);

