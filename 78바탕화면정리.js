"use strict";
/*
    - 바탕화면 아이콘	지저분해 지우려고함
    - 바탕화면 : 각 칸이 정사각형인 격자판
    - wallpaper가 주어짐
    - 파일들은 격자칸에 위치
    - 격자점은 격자 왼쪽 위(0,0) 처럼 표기
    - 빈칸 : "."
    - 파일 존재 : "#"
    - 드래그 가능

    - 머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 wallpaper가 매개변수로 주어질 때
    - 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return
        > ex,  드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]
    
    [제한사항]
    - 1 ≤ wallpaper의 길이 ≤ 50
    - 1 ≤ wallpaper[i]의 길이 ≤ 50
    - wallpaper의 모든 원소의 길이는 동일합니다.
    - wallpaper[i][j]는 바탕화면에서 i + 1행 j + 1열에 해당하는 칸의 상태를 나타냅니다.
    - wallpaper[i][j]는 "#" 또는 "."의 값만 가집니다.
    - 바탕화면에는 적어도 하나의 파일이 있습니다.
    - 드래그 시작점 (lux, luy)와 끝점 (rdx, rdy)는 lux < rdx, luy < rdy를 만족해야 합니다.
*/
function 바탕화면정리(wallpaper) {
    let result = {};
    wallpaper.forEach((str, idx) => {
        if (str.match('#') !== null) {
            result.x1 = result.hasOwnProperty('x1')
                ? (result.x1 > str.indexOf('#') ? str.indexOf('#') : result.x1)
                : str.indexOf('#');
            result.y1 = result.hasOwnProperty('y1')
                ? (result.y1 > idx ? idx : result.y1)
                : idx;
            result.x2 = result.hasOwnProperty('x2')
                ? (result.x2 < str.lastIndexOf('#') ? str.lastIndexOf('#') : result.x2)
                : str.lastIndexOf('#');
            result.y2 = result.hasOwnProperty('y2')
                ? (result.y2 < idx ? idx : result.y2)
                : idx;
        }
    });
    return [result.y1, result.x1, result.y2 + 1, result.x2 + 1];
}
// console.log(바탕화면정리([".#...", "..#..", "...#."]));	//	[0, 1, 3, 4]
// console.log(바탕화면정리(["..........", ".....#....", "......##..", "...##.....", "....#....."]));	//	[1, 3, 5, 8]
console.log(바탕화면정리([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])); //	[0, 0, 7, 9]
// console.log(바탕화면정리(["..", "#."]));	//	[1, 0, 2, 1]
//# sourceMappingURL=78%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4%EC%A0%95%EB%A6%AC.js.map