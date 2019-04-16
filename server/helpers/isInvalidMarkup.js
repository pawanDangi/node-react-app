const adSlotsMiliCheck = (value = []) => {
  let invalid = false;
  value.forEach(v => {
    const keys = Object.keys(v || {});
    if (!(keys && keys.length)) {
      invalid = true;
    }
    if (keys.indexOf('start') === -1 || keys.indexOf('duration') === -1) {
      invalid = true;
    }
  });
  return invalid;
};

const isInvalidMarkup = (markup = {}) => {
  if (!markup || !Object.keys(markup)) {
    return false;
  }
  if (['frequency', 'slot', 'preRoll'].indexOf(markup.type) === -1) {
    return 'markup should be either frequency, slot or preRoll';
  }
  if (markup.type === 'frequency') {
    const valueKey = Object.keys(markup.value) || [];
    if (valueKey.indexOf('adFreqMili') === -1) {
      return 'frequency type markup should contain adFreqMili field in value';
    }
    if (valueKey.indexOf('adDurationMili') === -1) {
      return 'frequency type markup should contain adDurationMili field in value';
    }
  }
  if (markup.type === 'preRoll') {
    const valueKey = Object.keys(markup.value) || [];
    if (valueKey.indexOf('status') === -1) {
      return 'preRoll type markup should contain status field in value';
    }
    if (valueKey.indexOf('adPodDuration') === -1) {
      return 'preRoll type markup should contain adPodDuration field in value';
    }
  }
  if (markup.type === 'slot') {
    const valueKey = Object.keys(markup.value) || [];
    if (valueKey.indexOf('adSlotsMili') === -1) {
      return 'slot type markup should contain adSlotsMili field in value';
    }
    if (!Array.isArray(markup.value.adSlotsMili)) {
      return 'slot type markup should contain adSlotsMili field as a array of object in value';
    }
    if (adSlotsMiliCheck(markup.value.adSlotsMili)) {
      return 'slot type markup should contain adSlotsMili field as a array of object with start & duration keys in value';
    }
  }
  return false;
};

export default isInvalidMarkup;
