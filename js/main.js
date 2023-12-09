const elList = document.querySelector('.list');
const elBtnNext = document.querySelector('.js-btn-next');
let changePage = false; 

function api(page, node) {
    node.innerHTML = '';
    let result = fetch(`https://reqres.in/api/users?page=${page}`)
    .then((response) => response.json())
    .then((data) => data.data.forEach(item =>  {
        
        const liELement = document.createElement('li');
        liELement.classList.add('d-flex', 'flex-column', 'gap-4', 'align-items-center', 'border', 'border-2','border-primary', 'p-4', 'rounded', 'flex-grow-1', 'border-opacity-50');
        
        const firstNameElement = document.createElement('strong');
        firstNameElement.textContent = `First Name : ${item.first_name}`;
        firstNameElement.classList.add('fs-5');
        
        const lastNameElement = document.createElement('strong');
        lastNameElement.textContent = `Last Name : ${item.last_name}`;
        lastNameElement.classList.add('fs-5');
        
        const emailElement = document.createElement('a');
        emailElement.href = `mailto:${item.email}`
        emailElement.textContent = `Email : ${item.email}`
        
        const imgElement = document.createElement('img');
        imgElement.src = item.avatar;
        imgElement.classList.add('avatar')
        
        liELement.append(imgElement,firstNameElement,lastNameElement, emailElement,)
        node.appendChild(liELement)
        
    }))
    .catch((error) => console.log(error))
    
}
api(1,elList);


elBtnNext.addEventListener('click' , () => {
    changePage = !changePage;
    elBtnNext.textContent = 'Preview page'
    changeBtn()
})
function changeBtn() {
    if(changePage) {
        elBtnNext.textContent = 'Preview page'
        api(2, elList);
    }
    else {
        elBtnNext.textContent = 'Next page'
        api(1, elList)
    }
}