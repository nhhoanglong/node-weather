console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne  = document.querySelector('#messageOne')
const messageTwo  = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
        
    messageOne.textContent = ''
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent =data.forecast
                messageTwo.textContent =data.location
            }
            
        })
    })

})