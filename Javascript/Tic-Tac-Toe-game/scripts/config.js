function openPlayerConfig(event) {
    editedPlayer =event.target.dataset.playerid;
    playerConfigOVerlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOVerlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enterdPlayername=formData.get('playername').trim();

    if(!enterdPlayername){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
    const updatedPlayerDataElement=document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerDataElement.children[1].textContent = enterdPlayername;

    players[editedPlayer-1].name=enterdPlayername;
    closePlayerConfig();
}