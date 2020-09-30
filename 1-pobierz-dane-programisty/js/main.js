let btnGetData = document.getElementById('get-data');

const getData = () =>
{
    console.log('Click!');

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(res => res.json())
    .then(data => 
        {
            console.log(data);
            let mainDiv = document.createElement('div');
            

            let pImie = document.createElement('p');
            let pNazwisko = document.createElement('p');
            let pZawod = document.createElement('p');
            let pFirma = document.createElement('p');

            pImie.innerText = `Imię: ${data.imie}`;
            pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
            pZawod.innerText = `Zawód: ${data.zawod}`;
            pFirma.innerText = `Firma: ${data.firma}`;

            mainDiv.appendChild(pImie);
            mainDiv.appendChild(pNazwisko);
            mainDiv.appendChild(pZawod);
            mainDiv.appendChild(pFirma);



            document.body.appendChild(mainDiv);

            
            

        })
}

btnGetData.addEventListener('click', getData);