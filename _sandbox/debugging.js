function displayMessage(msgText, msgType) {
    const body = document.body;

    const pane1 = document.createElement('div');
    pane1.setAttribute("Class", "msgBox");
    body.appendChild(pane1);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    pane1.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'OK';
    pane1.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => 
    pane1.parentNode.removeChild(pane1));

    closeBtn.addEventListener("click", () =>
    displayMessage('Thanks for visiting!', 'success'));
}

msgText = 'Welcome to my Website!';
msgType = 'info';

displayMessage(msgText, msgType);