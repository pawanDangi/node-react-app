/* eslint-disable no-alert */

const isValidEpasso = epasso =>
  (typeof epasso === 'string' || epasso instanceof String) && epasso;

const getCookies = () => {
  const cookies = document.cookie.split(';');
  const all = {};
  let string = '';
  cookies.forEach(c => {
    string = c;
    while (c.charAt(0) === ' ') {
      string = c.string(1);
    }
    const substring = string.split('=') || [];
    if (substring.length === 2) {
      const key = substring[0];
      const value = substring[1];
      all[key] = value;
    }
  });
  if (
    process.env.REACT_APP_ENVIRONMENT === 'dev' &&
    !isValidEpasso(all.epasso)
  ) {
    const epasso = prompt(
      'You need to set the access token *epasso* manually. Please put a valid epasso token in the below input box:-',
      ''
    );
    document.cookie = `epasso=${epasso}`;
    all.epasso = epasso;
  }
  return all;
};

export default getCookies;
