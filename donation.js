//cards-1

document.getElementById('donation-noakhali-btn').addEventListener('click',function(event) {
    event.preventDefault();
    const donationAmount = getInputFeildById('input-donation-noakhali');
    
   if (checkingIsNaN(donationAmount) === true) {
        return;
    }
    
    const moneyCount = getTextValueById('money-count-box')
        
        
    let newBalance = moneyCount + donationAmount;
    
    const myMoney = getTextValueById('my-money');
    
    if (checkingEnoughMoney(donationAmount) === true) {
        return;
    }
    let accountBalance = myMoney - donationAmount;
    document.getElementById('money-count-box').innerText = newBalance +' '+'BDT';
    
document.getElementById('my-money').innerText = accountBalance + ' ' + 'BDT'
    
    const header = document.createElement('h1')
    header.innerText = `${donationAmount} TK is donated for famine-2024 Feni, Bangladesh`
    document.getElementById('history-section').appendChild(header);
     document.getElementById('history-section').classList.add('border', 'border-2', 'p-6', 'rounded-lg', 'mt-16')

 
 header.classList.add('lg:text-2xl', 'text-base', 'lg:font-bold', 'font-medium','mb-6','mt-4')
    
    let currentTime = new Date().toString()
   const timePara = document.createElement('p')
   timePara.innerText = currentTime;
   document.getElementById('history-section').appendChild(timePara);
   document.getElementById('my_modal_1').showModal();
   
})

//cards-2

document.getElementById('donation-noakhali-btn-one').addEventListener('click',function(event) {
    event.preventDefault();
    const donationAmount = getInputFeildById('input-donation-noakhali-one');
    
    const header = document.createElement('h1')
    header.innerText = `${donationAmount} TK is donated for flood relief in Feni, Bangladesh`
    document.getElementById('history-section').appendChild(header);
    
    document.getElementById('history-section').classList.add('border', 'border-2', 'p-6', 'rounded-lg', 'mt-16')
 
 header.classList.add('lg:text-2xl', 'text-base', 'font-medium', 'lg:font-bold','mb-6','mt-4');
    
    let currentTime = new Date().toString()
   const timePara = document.createElement('p')
   timePara.innerText = currentTime;
   document.getElementById('history-section').appendChild(timePara);
    
   if (checkingIsNaN(donationAmount) === true) {
        return;
    }
    const moneyCount = getTextValueById('money-count-box-one')
        
    let newBalance = moneyCount + donationAmount;
    const myMoney = getTextValueById('my-money')
    
    let accountBalance = myMoney - donationAmount;
    document.getElementById('money-count-box-one').innerText = newBalance +' '+'BDT';
 
 document.getElementById('my-money').innerText = accountBalance + ' ' + 'BDT'

document.getElementById('my_modal_1').showModal();
 
})




//cards-3


document.getElementById('donation-noakhali-btn-two').addEventListener('click',function(event) {
    event.preventDefault();
    const donationAmount = getInputFeildById('input-donation-noakhali-two');
    
   if (checkingIsNaN(donationAmount) === true) {
        return;
    }
    const moneyCount = getTextValueById('money-count-box-two')
        
    let newBalance = moneyCount + donationAmount;
    const myMoney = getTextValueById('my-money')
    
    let accountBalance = myMoney - donationAmount;
    document.getElementById('money-count-box-two').innerText = newBalance +' '+'BDT';

document.getElementById('my-money').innerText = accountBalance + ' ' + 'BDT'
    
    const header = document.createElement('h1')
    header.innerText = `${donationAmount} TK is Donated for Aid for Injured in the Quota Movement, Bangladesh`
    document.getElementById('history-section').appendChild(header);
    
    document.getElementById('history-section').classList.add('border', 'border-2', 'p-6', 'rounded-lg', 'mt-16')
 
 header.classList.add('lg:text-2xl', 'text-base', 'lg:font-bold', 'font-medium', 'mb-6','mt-4');
 
 let currentTime = new Date().toString()
   const timePara = document.createElement('p')
   timePara.innerText = currentTime;
   document.getElementById('history-section').appendChild(timePara);
 document.getElementById('my_modal_1').showModal();
})


