'use strict';

// class Mailer {
//   sendMailNow(mail) {
//     console.log('mail: ===', mail);
//   }
// }

// class Order {
//   constructor({ mail }) {
//     this.mail = mail;
//   }

//   save() {
//     console.log('Save');
//     this.sendMail();
//   }

//   sendMail() {
//     const mailer = new Mailer();
//     mailer.sendMailNow(this.mail);
//   }
// }

// const order = new Order({ mail: 'mail.ru' });
// order.save();

//
//
const EventMy = {
  chanels: {},

  subscribe(chanalName, listenerCB) {
    if (!this.chanels[chanalName]) {
      this.chanels[chanalName] = [listenerCB];
      return;
    }
    this.chanels[chanalName].push(listenerCB);
  },

  publish(chanalName, data) {
    const chanal = this.chanels[chanalName];
    if (!this.chanal?.length) return;
    chanal.forEach(listener => listener(data));
  },
};

// EventMy.subscribe('TET', message => {
//   console.log('subscribe on TET', message);
// });
// EventMy.subscribe('TET', message => {
//   console.log('subscribe on TET222', message);
// });
// EventMy.subscribe('CTB', message => {
//   console.log('subscribe on CTB', message);
// });

// EventMy.publish('TET', 'TEST publish: WORK=)');

//
//
//
//

const EventLangeses = {
  chanels: {},

  subscribe(chanalName, listenerCB) {
    if (!this.chanels[chanalName]) {
      this.chanels[chanalName] = [listenerCB];
      return;
    }
    this.chanels[chanalName].push(listenerCB);
  },

  publish(chanalName, data) {
    const chanal = this.chanels[chanalName];

    if (!chanal?.length) return;

    chanal.forEach(listener => listener(data));
  },
};

class Order {
  constructor({ mail }) {
    this.mail = mail;
    this.save();
  }

  save() {
    console.log('Save');
    EventLangeses.publish('order/new', { mail: this.mail });
  }
}

class Mailer {
  constructor() {
    EventLangeses.subscribe('order/new', this.sendMailNow);
  }

  sendMailNow({ mail }) {
    console.log('mail: sendMailNow:', mail);
  }
}

const mailer = new Mailer();
const order = new Order({ mail: 'mail_222.ru' });

console.log(EventLangeses.chanels);
