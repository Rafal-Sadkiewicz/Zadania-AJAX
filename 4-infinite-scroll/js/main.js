
let preloading = false;

const showPreloader = () =>
{
    preloading = true;
    let prelodaer = document.getElementById('preloader');
    prelodaer.style.display = 'block';
}

const hidePreloader = () =>
{
    let prelodaer = document.getElementById('preloader');
    prelodaer.style.display = 'none';
    preloading = false;
}

const getData = () =>
{
    if (!preloading)
    {
        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => 
            {
                let jsbody = document.body;
                let hr = document.createElement('hr');
                jsbody.appendChild(hr);

                for (let user of data)
                {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`
                    pWebsite.innerHTML = `User URL: ${user.website}<br />--------`;

                    jsbody.appendChild(pId);
                    jsbody.appendChild(pName);
                    jsbody.appendChild(pWebsite);
                }
                
                
                hidePreloader();       
            })
        .catch(error =>
        {
            console.error(error);
        })
    }
}


const scrollToEndOfPage = () =>
{
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;
    let clientHeight = d.clientHeight;
    let scrollTop = d.scrollTop;

    let sumScroll = Math.ceil(clientHeight + scrollTop)

    if (scrollHeight <= sumScroll)
    { 
        getData();
    }
    
}

window.addEventListener('scroll', scrollToEndOfPage);