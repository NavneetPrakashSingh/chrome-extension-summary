chrome.runtime.sendMessage({ 
    message: "get_name"
}, response => {
    if (response.message === 'success') {
        document.querySelector('div').innerHTML = `options Hello ${response.payload}`;
    }
});