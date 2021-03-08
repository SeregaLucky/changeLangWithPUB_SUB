'use strict';

/*
 * PUB/SUB
 */
export const Lang = {
  langsObj: {},

  /* ПОДПИСЫВАЕТСЯ */
  subscribe(typeLang, cb) {
    if (!this.langsObj[typeLang]) {
      this.langsObj[typeLang] = [];
    }

    this.langsObj[typeLang].push(cb);
  },

  /* ВЫЗЫВАЕТСЯ */
  publish(typeLang, langNow) {
    const langArr = this.langsObj[typeLang];

    if (!langArr?.length) return;

    langArr.forEach(cb => cb(langNow));
  },
};
