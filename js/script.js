let inputs = document.querySelectorAll('input');

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target;
        let inputValue = currentInput.value; 
        let inputName = currentInput.getAttribute('name');

        switch(inputName){

            case 'ime_prezime':
                let validacija = inputValue.trim();
                validacija = validacija.split(" ");
                if(validacija.length < 2) {
                    document.getElementById('ime').innerHTML = '<li id = "a"><br>Moras napisati i ime i prezime</li>';
                }
                else if(document.getElementById('ime').hasChildNodes())
                    {
                        let li = document.getElementById('a');
                        document.getElementById('ime').removeChild(li);
                    }
              break;

            case 'email':
                if(!validanEmail(inputValue))
                    document.getElementById('mejl').innerHTML = '<li id="b"><br>Neispravna email adresa</li>';
                else if(document.getElementById('mejl').hasChildNodes())
                    {
                        let li = document.getElementById('b');
                        document.getElementById('mejl').removeChild(li);
                    }
                break;

            case 'ponovi_lozinku':
                let lozinka = document.getElementById('lozinka').value;
                if(inputValue != lozinka)
                    document.getElementById('ponovi').innerHTML = '<li id="c"><br>Neispravna lozinka</li>';
                else if(document.getElementById('ponovi').hasChildNodes())
                {
                    let li = document.getElementById('c');
                    document.getElementById('ponovi').removeChild(li);
                }
                break;
        }
    }) 
    
})


const validanEmail = email => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return true;
    else
        return false;
}


function myFunction(){
    let br=0;
    
    const registracija=[];
        if(document.getElementById('ime').hasChildNodes() || document.getElementById('mejl').hasChildNodes() || document.getElementById('ponovi').hasChildNodes() )
            {
                alert("Neispravni podaci!");
            }
        else
        {
            registracija[br++] = document.getElementById('ime_prezime').value + "\n";
            if(document.getElementById('muski').checked)
                registracija[br++] = "Muski pol\n";
            else
                registracija[br++]="Zenski pol\n";
            registracija[br++] = document.getElementById('korisnicko_ime').value + "\n";
            registracija[br++] = document.getElementById('email').value + "\n";
            registracija[br++] = document.getElementById('lozinka').value + "\n";
            registracija[br++] = document.getElementById('komentar').value + "\n";
            const korisnik = registracija.join(' ');

            alert("Korisnik je validiran:\n"+ korisnik);
        }

}
// const registracija = {
    //     ime_prezime : [],
    //     pol: [],
    //     korisnicko_ime: [],
    //     email: [],
    //     lozinka: [],
    //     komentar: []
    // };