document.getElementById('calculate').addEventListener('click',function(){
    const moneyk = document.getElementById('moneyk');
    const money = parseFloat(moneyk.value);


    if (isNaN(money) || money <= 0) {
        alert('Please enter a valid amount of money.');
        return;
    }


    const nissab = document.getElementById('nissab');
    const amount = document.getElementById('amount');


    if (money >= 17000 ){
        nissab.innerHTML='the amount exceeds el nissab and your zakat is :';
        let result =( money * 0.025).toFixed(2);;
        amount.innerHTML= ` ${result} DZ`

    }
    else{
        nissab.innerHTML='the amount did not reach el nissab ';
        amount.innerHTML= '0 DZ';
    }
})