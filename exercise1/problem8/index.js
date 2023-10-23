function longestTime(h, m, s) {
  hSeconds = h * 60 * 60;
  mSeconds = m * 60;
  const maxSeconds = Math.max(hSeconds, mSeconds, s);

  switch (maxSeconds) {
    case s:
      return s;

    case mSeconds:
      return m;

    default:
      return h;
  }
}

export default longestTime;
