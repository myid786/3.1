const heading = document.querySelector('.heading');
const resetButton = document.querySelector('.reset-btn');
const gameCells = document.querySelectorAll('.cell');
console.log(gameCells);

let isXturn = true;
let counter = 0;

const checkingStatus = () => {
    const index0checkList = gameCells[0].classList;
    const index1checkList = gameCells[1].classList;
    const index2checkList = gameCells[2].classList;
    const index3checkList = gameCells[3].classList;
    const index4checkList = gameCells[4].classList;
    const index5checkList = gameCells[5].classList;
    const index6checkList = gameCells[6].classList;
    const index7checkList = gameCells[7].classList;
    const index8checkList = gameCells[8].classList;
  
    if(!isXturn){
        if(index0checkList.contains('X')){
            if(index1checkList.contains('X') && index2checkList.contains('X')){
                setTimeout(function(){
                    alert('X is winner');
                    resetHandler();
                },100);
                 
            }
        }
    if(index0checkList.contains('X')){
        if(index3checkList.contains('X') && index6checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
    if(index0checkList.contains('X')){
        if(index4checkList.contains('X') && index8checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
    if(index1checkList.contains('X')){
        if(index4checkList.contains('X') && index7checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
    if(index2checkList.contains('X')){
        if(index4checkList.contains('X') && index6checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
    if(index2checkList.contains('X')){
        if(index5checkList.contains('X') && index8checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
    if(index3checkList.contains('X')){
        if(index4checkList.contains('X') && index5checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    } 
    if(index6checkList.contains('X')){
        if(index7checkList.contains('X') && index8checkList.contains('X')){
            setTimeout(function(){
                alert('X is winner');
                resetHandler();
            },100);
        }
    }
} else{
    if(index0checkList.contains('O')){
        if(index1checkList.contains('O') && index2checkList.contains('O')){
            setTimeout(function(){
                alert('O is winner');
                resetHandler();
            },100);
        }
    }
if(index0checkList.contains('O')){
    if(index3checkList.contains('O') && index6checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
if(index0checkList.contains('O')){
    if(index4checkList.contains('O') && index8checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
if(index1checkList.contains('O')){
    if(index4checkList.contains('O') && index7checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
if(index2checkList.contains('O')){
    if(index4checkList.contains('O') && index6checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
if(index2checkList.contains('O')){
    if(index5checkList.contains('O') && index8checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
if(index3checkList.contains('O')){
    if(index4checkList.contains('O') && index5checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
} 
if(index6checkList.contains('O')){
    if(index7checkList.contains('O') && index8checkList.contains('O')){
        setTimeout(function(){
            alert('O is winner');
            resetHandler();
        },100);
    }
}
}
}

function cellHandler(event){
    // console.log(event.target.classList);
    const classList = event.target.classList;

    if(classList.length > 1){
        return;
    }

    if(isXturn){
    classList.add('X');
    isXturn = false;
    heading.textContent = "O's turn";
    }else{
        classList.add('O');
        isXturn = true;
        heading.textContent = "X's turn";
    }
    counter += 1;
    if(counter > 4){
        // console.log('checking');
        checkingStatus();
    }
    
}

const resetHandler = () => {
    window.location.reload();
}

resetButton.addEventListener('click',resetHandler);

for (const cell of gameCells) {
    // console.log(cell);
    cell.addEventListener('click', cellHandler);
}

