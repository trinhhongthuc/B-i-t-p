

// Viết chương trình kiếm tra xem trong object1 có chứa thuộc tính nào trùng với object 2 hay không 


// function check() {
//     var array = [];
//     var array2 = [];
//     let object1 = {
//         name: "object1",
//         numbers: 2,
//         age: 5,
//         mousedown: "mousedown"
//     };

//     let object2 = {
//         name: "object1",
//         numbers: 2,
//         age : 5,
//         mousedown: 1
//     };
    
//     for( let index in object1 ) {
//        array.push( index );
//        array.push( object1[ index ] );
//     }

//     for( let index in object2 ) {
//         array2.push( index );
//         array2.push( object2[ index ] );
//     }
//     let length = array.length;
//     let length2 = array2.length;
//     console.log( array );
//     console.log( array2 );
//     for ( let i = 0; i < length2 ; i +=2) {
//         for( let j = 0; j < length ; j+=2 ) {
//             if( array2[i] === array[j] && array2[i + 1] === array[j + 1] ){
//                 break;   
//             } 
//             if(j === length - 2  ) {
//                 console.log( "false ");
//                 return false;
//             }
//         }
//     } 
//     console.log( "true");
//     return true;
// }

// check();

// mảng====================================
//Viết chương trình chuyển đổi một số cố định thành một mảng các chữ số

    // function check( number ) {
    //     var result = number.toString();
    //     console.log(  [...result] );
    // }
    // check( "123" );


    // Viết chương trình lọc các giá trị trong mảng và trả về mảng đã lọc mà không có giá trị đó

    // function check( array ) {
    //     var length = array.length;
    //     for( let i = 0; i < length - 1; i++) {
    //          for ( let j = i + 1; j < length; j++ ) {
    //              if ( array[i] === array[j] ) {
    //                  array.splice( j, 1);
    //                  length--;
    //                  j--;
    //                  var result = array[i];
    //              }
    //          }

    //          if( result === array[i]) {
    //              array.splice( i, 1);
    //              length--;
    //              i--;
    //          }
    //     }

    //     console.log( array );
    // }   

    // check( [ 1, 2, 5, 2, 6, 7, 8, 8] );


    // Viết chương trình kết hợp tất cả các số của một mảng nhất định thành một mảng chứa tất cả các kết hợp đó 

    // function create ( array ) {
    //    var string = array.join("");
    //    var arrayEmpty = [];
    //     arrayEmpty.push( [] );
    //     for( let i = 0; i < string.length; i++ ) {
    //         var arrayEmpty2 = [];
    //         arrayEmpty2.push( parseInt(  string[i]  ));
    //         arrayEmpty.unshift( arrayEmpty2 );
    //         for ( let j =  i + 1 ; j < string.length ; j++ ) {
    //             arrayEmpty2 = []
    //             var  result = string.slice( i, j + 1);
    //             arrayEmpty2.push( parseInt( result) );
    //             arrayEmpty.unshift( arrayEmpty2 );
    //         }
    //     }
    //     console.log( arrayEmpty )
    // }

    // create ( [1, 2, 3, 4] );

    // Viết chương trình trích xuất các giá trị tại vị trí chit mục 


    // function display( array, ...number ) {
    //     var length = array.length;
    //     var arrayEmpty = [];
    //     for ( let i = 0; i < number.length ; i ++ ) {
    //         for( let j = 0; j < length; j++  ) {
    //             if ( number[i] === j  ) {
    //                 arrayEmpty.push( array[j] );
    //             }
    //         }
    //     }
    //     console.log( arrayEmpty );
    // }

    // display( [1, 5, 8, 3, 2], 0, 1, 2, 3);

    // Viết chương trình in ra ngẫu nhiên mã màu thập lục phân

    // function color() {
    //     var string = "#"
    //     for( let i = 1; i <= 6; i++) {
    //         var result = Math.floor(Math.random() * 16)
    //         if( result === 10 ){
    //             string += "a"
    //         } else if( result === 11 ){
    //             string += "b"
    //         } else if( result === 12 ){
    //             string += "c"
    //         } else if( result === 13){
    //             string += "d"
    //         } else if( result === 14 ){
    //             string += "e"
    //         } else if( result === 15 ){
    //             string += "f"
    //         } else {
    //             string += result.toString();
    //         }
    //     }
       
    //     console.log( string )
    // }

    // color()

    // Viết chương trình xóa các kí tự trong bảng mã ascii không được in trong một chuỗi

    // function deleteString( string ) {
    //     var length = string.length;
    //         var resultString = '';
    //     for( let i = 0; i < length; i++) {
    //         var result = string.charCodeAt( i );
    //         if ( result >= 65 && result <=90 || result >= 97  && result <= 122  || result >= 48 && result <= 57) {
    //             resultString += string[i];
    //         }
    //     }
    //     console.log( resultString )
    // }
    // deleteString( 'äÄçÇéÉêw3resouröceÖÐþúÚ' );

    // Viết chương trình thay đổi nhiều khóa của đối tượng bằng cách chỉ định khóa cho đối tượng đó 

    // function check( object ) {
    //     var object2 = {
    //         name: 'thuc',
    //         age: 21,
    //         class: "k11TT"
    //     };
    //     var array = [];
    //     var result = Object.keys( object2 );
    //     var value = Object.values( object2 );
    //     var objectEmpty = '';
    //     for ( let i = 0; i < result.length; i++ ) {
    //         for( let index in object ) {
    //             if ( result[i] === index ) {
    //                 result[i] = object[index];
    //                 console.log( result[i] );
    //             }
    //         }
    //     }
    //     for( let i = 0; i < result.length; i++ ) { 
    //          array.push(  result[ i ] + ": "+ value[ i ] );
    //     }
    //     var result = "{" + array.join(",") + "}";
    //     console.log( result );
    // }
    // check ({ name: 'firstName', age: 'trinhhongthuc' })

    // Viết chương trình trả về true Nếu hàm vị ngữ được cung cấp giá trị trả về 

    // function check( array, x) {
    //    var result  = array.every( x);
    //     console.log( result );
    // }

    // check( [1, 2, 3, 5], x => x > 0) 

    // Viết chương trình chia một mảng thành hai nhóm , nếu là true thì sẽ ở một nhóm ngược lại thì ở nhóm khác

    // function check( array1, array2 ) {
    //     const length = array1.length;
    //     var   arrayEmpty1 = [];
    //     var arrayEmpty2 = [];
    //     var arrayEmpty3 = [];
    //     for( let i = 0 ; i < length; i++ ) {
    //         if(array2[ i ]) {
    //             arrayEmpty1.push( array1[ i ] );
    //         } else {
    //             arrayEmpty2.push( array1[ i ] );
    //         }
    //     }
    //     arrayEmpty3.push ( arrayEmpty1, arrayEmpty2 );
    //     console.log( arrayEmpty3 );
    // }
    // check( [1, 2, 3, 4], [ true, true, true, true]);

    // Viết chương trình xóa phần tử ở bên trái mảng do ta chỉ định

    // function deleteElement ( array, number ) {
    //     if( number === undefined ) {
    //         number = 1;
    //     }

    //     var length = array.length;
    //     for (let i = 1; i <= number; i++) {
    //         array.splice( 0, number);
    //         console.log( array );
    //         return true;
    //     }
    // }   

    // deleteElement( [1, 2, 3, 4, 5], 6)

    // Viết chương trình xóa phần tử bên phải của mảng đã cho 

    // function check( array, number ) {
    //     if( number === undefined) {
    //         number = -1;
    //     }
    //     for( ; ;) {
    //         array.splice( number);
    //         console.log( array );
    //         return true;
    //     }
    // }
    // check( [1, 2, 3, 4, 5], -3)

    // Viết chương trình mở rộng mã màu từ 3 thành 6

    function widthToColor( string ) {
        var array = string.split("");
        var length = array.length;
        var result = array.map( course => course + course);
        var resultString = result.join("").split("");
        resultString.splice(0, 1);
        console.log( resultString.join(""));
    }

    widthToColor( "#7f9");














