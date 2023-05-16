async function main(){
    let summary = await getSummary()
    console.log(summary);
  
    // Container
    const ce_main_container = document.createElement('DIV');
    ce_main_container.classList.add('ce_main');
    // ce_main_container.style.display = 'none';
    document.querySelector('body').appendChild(ce_main_container);

    // Top row span
    const ce_top_row = document.createElement('SPAN');
    ce_top_row.style.padding = '3px';
    ce_top_row.style.inline

    // Logo
    const ce_logo_img = document.createElement('IMG');
    ce_logo_img.src = chrome.runtime.getURL('images/logo-48.png');
    ce_logo_img.alt = 'OneLaunch';
    ce_logo_img.style.width = '30px';
    ce_logo_img.style.height = '30px';

    const ce_logo = document.createElement('DIV');
    ce_logo.style.float = 'left';
    ce_logo.id = 'ce_logo';
    ce_logo.appendChild(ce_logo_img);
    ce_top_row.appendChild(ce_logo);

    // Title
    var ce_title = document.createElement('DIV');
    ce_title.id = 'ce_title';
    ce_title.textContent = 'Summary';
    ce_title.style.fontWeight = 'bold';
    ce_title.style.marginBottom = '0px';
    ce_title.style.paddingTop = '5px';
    ce_title.style.display = 'inline-block';

    ce_top_row.appendChild(ce_title);

    // Exit Icon
    const ce_exit = document.createElement('DIV');
    ce_exit.id = 'ce_exit'
    ce_exit.innerHTML = 'X';
    ce_exit.style.position = 'absolute';
    ce_exit.style.top = '5px';
    ce_exit.style.right = '5px';
    ce_exit.style.padding = '5px';
    ce_exit.style.cursor = 'pointer';
    ce_exit.style.fontSize = '16px';

    ce_exit.addEventListener('click', function() {
      ce_main_container.style.display = 'none';
    });

    ce_top_row.appendChild(ce_exit);
    ce_main_container.appendChild(ce_top_row);

    // Summary
    const ce_summary = document.createElement('DIV');
    ce_summary.id = 'ce_summary';
    ce_main_container.appendChild(ce_summary);

    // AD
    const ce_ad_img = document.createElement('IMG');
    ce_ad_img.id = 'ce_ad_img';
    ce_ad_img.src = chrome.runtime.getURL('images/ad-ac.png');
    ce_ad_img.alt = 'AD';

    const ce_ad = document.createElement('DIV');
    ce_ad.id = 'ce_ad_container';
    ce_ad.appendChild(ce_ad_img);
    ce_main_container.appendChild(ce_ad);



    chrome.runtime.sendMessage({ 
        message: "get_name"
    }, response => {
        if (response.message === 'success') {
            ce_summary.innerHTML = summary['html'];
        }
    });
}

main()


async function getSummary(){
    const data = new FormData();
data.append("url", window.location.href);

const response = await fetch('https://yupdlekmfs.us12.qoddiapp.com/api/', {
    method: 'POST',
    body: data
})
const jsonData = await response.json();
return jsonData;

}