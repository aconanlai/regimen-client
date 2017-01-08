const state = {
  msgs: [],
};

const getMsgs = () => {
  return (
    fetch('https://regimen-server-ooutifygsa.now.sh/').then((response) => {
      return response.json();
    }).then((json) => {
      return json;
    })
  );
};

const diffMsgs = (newMsgs) => {
  const oldMsgs = state.msgs;
  return newMsgs.filter(msg => oldMsgs.indexOf(msg) === -1);
};

const makeElem = (msg) => {
  const elem = document.createElement('div');
  elem.className = 'msg';
  const text = document.createTextNode(msg);
  elem.appendChild(text);
  const target = document.getElementById('root');
  const first = target.firstChild;
  target.insertBefore(elem, first);
};

const handleNewMsgs = () => {
  return (
    getMsgs().then((res) => {
      const msgs = res.map((msg) => msg.text);
      console.log(msgs);
      const newMsgs = diffMsgs(msgs);
      newMsgs.map(msg => makeElem(msg));
      state.msgs = state.msgs.concat(newMsgs);
      console.log('new trigger');
    })
  );
};

handleNewMsgs();

setInterval(() => {
  handleNewMsgs();
}, 1000);

