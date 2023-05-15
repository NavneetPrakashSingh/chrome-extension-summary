const url = window.location.href;
async function main(){
    let summary = await getSummary()
    console.log(summary)

        
    const ce_main_container = document.createElement('DIV');
    const ce_name = document.createElement('DIV');
    const ce_input = document.createElement('INPUT');
    const ce_button = document.createElement('DIV');

    ce_main_container.classList.add('ce_main');
    ce_name.id = 'ce_name';

    ce_main_container.appendChild(ce_name);


    document.querySelector('body').appendChild(ce_main_container);

    chrome.runtime.sendMessage({ 
        message: "get_name"
    }, response => {
        if (response.message === 'success') {
            ce_name.innerHTML = `Summary is `+ summary["html"];
        }
    });

    ce_button.addEventListener('click', () => {
        chrome.runtime.sendMessage({ 
            message: "change_name",
            payload: ce_input.value
        }, response => {
            if (response.message === 'success') {
                ce_name.innerHTML = `Hello ${ce_input.value}`;
            }
        });
    });
}

main()


async function getSummary(){
    const data = new FormData();
data.append("url", "https://techcrunch.com/2023/05/01/crowd-control-interactive-stream/");

const response = await fetch('https://yupdlekmfs.us12.qoddiapp.com/api/', {
    method: 'POST',
    body: data
})
const jsonData = await response.json();
return jsonData;

}