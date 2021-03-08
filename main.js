'use strict';
import { refs } from './refs.js';
import { Lang } from './changeLang.js';

const Langeses = {
  RU: 'ru',
  ENG: 'eng',
};

const DataLang = {
  [Langeses.RU]: {
    title: 'Заголовок',
    p: 'Тексе',
  },

  [Langeses.ENG]: {
    title: 'TITLE',
    p: 'Text',
  },
};

refs.btnRu.addEventListener('click', fnRu);
refs.btnEng.addEventListener('click', fnEng);

function fnRu() {
  console.log(111);
  Lang.publish('langNow', Langeses.RU);
  setLS(Langeses.RU);
}
function fnEng() {
  console.log(222);
  Lang.publish('langNow', Langeses.ENG);
  setLS(Langeses.ENG);
}
function setLS(leng) {
  localStorage.setItem('leng', leng);
}

refs.listFind().forEach(el => {
  Lang.subscribe('langNow', leng => {
    // console.log(el);
    el.textContent = DataLang[leng][el.dataset.teg];
  });
});

console.log('Lang.langsObj', Lang.langsObj);

const lengStart = localStorage.getItem('leng');
if (lengStart) {
  Lang.publish('langNow', lengStart);
}
