let Donald = {
  name: 'Donald',
  color: 'white',
  old: '1 year',
  voice: 'Krya Krya!',
  getStr: function () {
      console.log(`${this.name}, ${this.color}, ${this.old}`)
  },
  say: function () {
      console.log(`${this.voice}`)
  },
};

Donald.getStr();
Donald.say();