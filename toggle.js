
const history = document.getElementById('history-btn');

const donation =  document.getElementById('donation-btn');

const blog = document.getElementById('blog-section');

document.getElementById('history-btn').addEventListener('click', function() {
    document.getElementById('cards-section').classList.add('hidden')
    document.getElementById('blog-section').classList.add('hidden')
document.getElementById('history-section').classList.remove('hidden')

history.style.backgroundColor = '#B4F461'
donation.style.backgroundColor = 'white'
donation.classList.add('border-2')
})


document.getElementById('donation-btn').addEventListener('click', function() {
 document.getElementById('cards-section').classList.remove('hidden')
 document.getElementById('blog-section').classList.add('hidden')
 
document.getElementById('history-section').classList.add('hidden')

document.getElementById('history-btn').style.backgroundColor = 'white'
document.getElementById('donation-btn').style.backgroundColor = '#B4F461'
})

document.getElementById('blog-btn').addEventListener('click',function() {
    document.getElementById('cards-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.remove('hidden');
    blog.classList.add('mt-12')
})
