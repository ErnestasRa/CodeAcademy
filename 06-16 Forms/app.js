
    
    
    const studentForm = document.querySelector('form');

    const itKnowledgeInputElement = document.querySelector('#student-it-knowledge')
    const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output')

    itKnowledgeInputElement.addEventListener('input',(event) => {
        itKnowledgeOutputElement.textContent = event.target.value
        
    }) 

    studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let studentName = document.querySelector('#student-name').value;
    let studentSurname = document.getElementById('student-surname').value;
    // let studentAge = studentForm.querySelector('#student-age').value;
    let studentAge = event.target.querySelector('#student-age').value;
    let studentPhone = studentForm.querySelector('[name="phone"]').value;
    let studentEmail = event.target.elements.email.value;
    let studentItKnowledge = event.target.elements['it-knowledge'].value
    let studentGroup = event.target.elements.group.value
    let interests = document.querySelectorAll('input[name="interest"]:checked')
   
    let errorMessage = document.createElement('span')
    errorMessage.textContent = ' Sis laukelis yra privalomas'


    let studentsList = document.querySelector('#students-list')
    let studentItem = document.createElement('div')

    if(!studentName) {
        document.querySelector('#student-name').style.borderColor = 'red'
        document.querySelector('#student-name').after(errorMessage)
        return;
    }



            studentItem.classList.add('student-item')

            let nameElement = document.createElement('p')
            nameElement.textContent = `name: ${studentName}`
            

            let surnameElement = document.createElement('p')
            surnameElement.textContent = `Surname: ${studentSurname}`
    
            let ageElement = document.createElement('p')
            ageElement.textContent  = `Age: ${studentAge}`
            
            let phoneElement = document.createElement('p')
            phoneElement.textContent  = `Phone: *****`
     
            let emailElement = document.createElement('p')
            emailElement.textContent  = `Email: *****`

            let itKnowledgeElement = document.createElement('p')
            itKnowledgeElement.textContent  = `Knowledge: ${studentItKnowledge}`

            let groupElement = document.createElement('p')
            groupElement.textContent  = `group: ${studentGroup}`

            let interestWrapperElement = document.createElement('div')
            interestWrapperElement.classList.add('interest-wrapper')
        
            let interestTitleElement = document.createElement('h4')
            interestTitleElement.classList.add('interest-title')
            interestTitleElement.textContent = 'Interests:'

            let interestListElement = document.createElement('ul')
            interestListElement.classList.add('interest-list')

            interests.forEach(interest => {
                let interestItemElement = document.createElement('li')
                interestItemElement.textContent = interest.value
                interestListElement.append(interestItemElement)
            })

            let privateInfoButton = document.createElement('button')
            privateInfoButton.textContent = 'Rodyti Info'

            let hiddenData = true


            privateInfoButton.addEventListener('click' ,() => {
                if(hiddenData) {
                    phoneElement.innerHTML = `Phone: ${studentPhone}`
                    emailElement.innerHTML = `Email: ${studentEmail}`
                    privateInfoButton.textContent = 'Slepti'
                    hiddenData = false;
                } else {
                    phoneElement.innerHTML = `Phone: ***`
                    emailElement.innerHTML = `Email: ***`
                    privateInfoButton.textContent = 'Rodyti'
                    hiddenData = true;
                }

                

            })


            interestWrapperElement.append(interestTitleElement,interestListElement)
            studentItem.append(nameElement,surnameElement,ageElement,phoneElement,emailElement,itKnowledgeElement,groupElement, interestWrapperElement,privateInfoButton)
            studentsList.prepend(studentItem)
        


            // studentForm.reset()
            event.target.reset()

            const alertElement = document.querySelector('#alert')
            let alertText = `Sukurtas studentas ${studentName} ${studentSurname}`;

            alertElement.textContent = alertText

            setTimeout(() => {
                alertElement.textContent = ''
            }, 5000);
    })
    
//     4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.
// 5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente.

// 6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.

// 7. Range reikšmės atvaizdavimas naujame elemente.
    
  
  

// TREČIA DALIS:
// 1. Vietoje asmens duomenų (el. paštas ir tel. nr) rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
// 3.1. Parodyti to studento el. paštą ir tel. nr.
// 3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
// 4.1. Paslėpti asmens duomenis.
// 4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".




// Papildyti formos validaciją. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
// 2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
// 3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
// 4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
// 5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12, parašyti: „Įvestas telefono numeris yra neteisingas".
// 6. Elektroninis paštas yra trumpesnis nei 5 simboliai arba jame nėra panaudotas @ simbolis, parašyti: „Įvestas elektroninis paštas yra neteisingas".



