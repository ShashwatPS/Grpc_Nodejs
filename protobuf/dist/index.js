"use strict";
const protobuf = require('protobufjs');
protobuf.load('./message.proto')
    // @ts-ignore
    .then(root => {
    const Person = root.lookupType('Person');
    const person = { name: "Shashwat Singh", age: 19 };
    const buffer = Person.encode(person).finish();
    require('fs').writeFileSync('person.bin', buffer);
    console.log('Person serialized and saved to person.bin');
    const data = require('fs').readFileSync('person.bin');
    const deserializedPerson = Person.decode(data);
    console.log('Person deserialized from person.bin:', deserializedPerson);
})
    .catch(console.error);
