const CustomIDGenerator = require('./index');

const idGenerator = new CustomIDGenerator();

// Presets setzen
idGenerator.setPreset('user', {
    length: 10,
    prefix: 'USER-',
    charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
});

idGenerator.setPreset('plugin', {
    length: 12,
    prefix: 'PLUGIN-',
    suffix: '-ID',
    charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
});

// ID basierend auf Preset generieren
console.log(idGenerator.generate('user')); // Ausgabe: 'USER-ABCDEFGHIJ2024'
console.log(idGenerator.generate('plugin')); // Ausgabe: 'PLUGIN-abcdefghijk-ID2024'

// Benutzerdefinierte ID ohne Preset generieren
const customOptions = {
    length: 8,
    prefix: 'CUST-',
    charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    customFunction: () => 'CUSTOMID'
};
console.log(idGenerator.generateCustom(customOptions)); // Ausgabe: 'CUST-CUSTOMID2024'
