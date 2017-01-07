window.msgs = [];

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

getMsgs().then((res) => {
  window.msgs = res;
});
