양의 정수 N 내의 이진 갭은 N의 이진 표현에서 양쪽 끝에 1로 둘러싸인 연속적인 0의 최대 시퀀스입니다.

예를 들어, 숫자 9는 이진 표현 1001을 가지며 길이 2의 이진 간격을 포함합니다. 숫자 529는 이진 표현 1000010001을 가지며 길이 2는 길이 4와 길이 3의 두 이진 간격을 포함합니다. 길이 15의 이진 간격 1 개 숫자 15는 이진 표현 1111을 가지며 이진 간격이 없습니다. 숫자 32는 이진 표현 100000을 가지며 이진 간격이 없습니다.

함수를 작성하십시오.

기능 솔루션 (N);

양의 정수 N이 주어지면 가장 긴 이진 간격의 길이를 반환합니다. N에 이진 간격이 없으면 함수는 0을 반환해야합니다.

예를 들어, N = 1041이 주어지면 함수는 5를 반환해야합니다. N에는 이진 표현이 10000010001이므로 가장 긴 이진 간격은 5입니다. N = 32이면 N은 이진 표현 '100000'이므로 함수는 0을 반환해야합니다. 이진 간격이 없습니다.

다음 가정을위한 효율적인 알고리즘을 작성하십시오.

N은 [1..2,147,483,647] 범위의 정수입니다.