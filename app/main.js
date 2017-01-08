const state = {
  msgs: [],
};

const getMsgs = () => {
  return (
    fetch('https://regimen-server-quauxdvexe.now.sh/').then((response) => {
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
  const text = document.createTextNode(msg.text);
  elem.appendChild(text);
  const target = document.getElementById('root');
  const first = target.firstChild;
  target.insertBefore(elem, first);
};

const handleNewMsgs = () => {
  return (
    getMsgs().then((res) => {
      const newMsgs = diffMsgs(res);
      newMsgs.map(msg => makeElem(msg));
      state.msgs = state.msgs.concat(newMsgs);
      console.log(state.msgs);
    })
  );
};

handleNewMsgs();

setTimeout(() => {
  handleNewMsgs();
}, 5000);

