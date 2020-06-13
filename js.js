

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