// use state object to store application state
const state = {
  msgs: [],
};

// promise returns all msgs
const fetchMsgs = () => {
  return (
    fetch('https://regimen-server-ooutifygsa.now.sh/').then((response) => {
      return response.json();
    }).then((json) => {
      return json;
    })
  );
};

// takes in all msgs from fetch and returns only new messages
// not already in state.msgs
const diffMsgs = (newMsgs) => {
  const oldMsgs = state.msgs;
  return newMsgs.filter(msg => oldMsgs.indexOf(msg) === -1);
};

// create DOM element - div with text
const makeElem = (msg) => {
  const elem = document.createElement('div');
  elem.className = 'msg';
  const text = document.createTextNode(msg);
  elem.appendChild(text);
  const target = document.getElementById('root');
  const first = target.firstChild;
  target.insertBefore(elem, first);
};

// fetch messages, extract text from response, find new messages
// create elements for new messages
// then update state
const processNewMsgs = () => {
  return (
    fetchMsgs().then((res) => {
      const msgs = res.map(msg => msg.text);
      const newMsgs = diffMsgs(msgs);
      newMsgs.map(msg => makeElem(msg));
      state.msgs = state.msgs.concat(newMsgs);
    })
  );
};

// call first time to populate initial page paint
processNewMsgs();

// then repeat every x seconds
setInterval(() => {
  processNewMsgs();
}, 1000);

