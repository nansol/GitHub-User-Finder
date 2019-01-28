const github = new GitHub;
const ui = new UI;

let searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    let userInput = e.target.value;
    if(userInput !== ''){
        github.getUser(userInput)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger');
            }else {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
})