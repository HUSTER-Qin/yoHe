Promise.prototype.finally = function (callback) {
  letP = this.constructor;
  returnthis.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throwreason;
      })
  );
};
