const state = {
  msgs: [],
};

const getMsgs = (cb) => {
  return (
    fetch('https://regimen-server-quauxdvexe.now.sh/')
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }).then((json) => {
      return (json);
    }).catch((ex) => {
      console.log('parsing failed', ex);
    })
  );
};

const diffMsgs = (newMsgs) => {
  const oldMsgs = state.msgs;
  return oldMsgs.filter(msg => newMsgs.includes(msg));
};

const makeElem = (msg) => {
  console.log('making element');
  const elem = document.createElement('div');
  elem.className = 'msg';
  const text = document.createTextNode(msg);
  elem.appendChild(text);
  const target = document.getElementById('root');
  const first = target.firstChild;
  target.insertBefore(elem, first);
};

getMsgs().then((res) => {
  
  const newMsgs = diffMsgs(res);
  console.log(newMsgs);
  newMsgs.map(msg => makeElem(msg));
  state.msgs = state.msgs.concat(newMsgs);
});
