

// Viết chương trình kiếm tra xem trong object1 có chứa thuộc tính nào trùng với object 2 hay không 


function check() {
    var array = [];
    var array2 = [];
    let object1 = {
        name: "object1",
        numbers: 2,
        age: 5,
        mousedown: "mousedown"
    };

    let object2 = {
        name: "object1",
        numbers: 2,
        age : 5,
        mousedown: 1
    };
    
    for( let index in object1 ) {
       array.push( index );
       array.push( object1[ index ] );
    }

    for( let index in object2 ) {
        array2.push( index );
        array2.push( object2[ index ] );
    }
    let length = array.length;
    let length2 = array2.length;
    console.log( array );
    console.log( array2 );
    for ( let i = 0; i < length2 ; i +=2) {
        for( let j = 0; j < length ; j+=2 ) {
            if( array2[i] === array[j] && array2[i + 1] === array[j + 1] ){
                break;   
            } 
            if(j === length - 2  ) {
                console.log( "false ");
                return false;
            }
        }
    } 
    console.log( "true");
    return true;



}

check();

