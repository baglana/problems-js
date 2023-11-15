function callbackExec(callback: Function) {
  const timeoutID = setTimeout(() => {
    callback();
    clearTimeout(timeoutID);
  }, 2000);

}

export default callbackExec;
