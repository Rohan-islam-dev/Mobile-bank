const validPin = 1234;
//add money feature
document.getElementById('add-money-btn').addEventListener('click',function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('add-pin').value);
    
    const avaiableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(avaiableBalance);

    if(accountNumber.length < 11){
        alert('Please provide valid accoutn number');
        return;
    }

    if(pin !== validPin){
        alert('Please provide valid pin number')
        return;
    }

    const totalNewAvailabeBalance = amount + avaiableBalance;
    
    document.getElementById('available-balance').innerText = totalNewAvailabeBalance;
})

//cashout money feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    
    const amount = parseInt(document.getElementById('widthdraw-amount').value);
    
    const avaiableBalance = parseInt(document.getElementById('available-balance').innerText);
    
    const totalNewAvailabeBalance = avaiableBalance - amount;
    
    document.getElementById('available-balance').innerText = totalNewAvailabeBalance ;
    
})



// toggling feature

document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none';
})

