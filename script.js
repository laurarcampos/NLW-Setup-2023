const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', addRegistro)
form.addEventListener("change", saveDate)


function addRegistro(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já cadastrado")
        return
    }
    nlwSetup.addDay(today)
}


function saveDate(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup = set.Data(data)
nlwSetup.load()