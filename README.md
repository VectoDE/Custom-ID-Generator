# Custom ID Generator

Ein benutzerdefiniertes ID-Generator-NPM-Package, das Entwicklern ermöglicht, die Struktur der IDs selbst zu wählen und Presets zu setzen.

## Installation

```sh
npm install custom-id-generator
```

## Verwendung

```javascript
Code kopieren
const CustomIDGenerator = require('custom-id-generator');

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
```

## Optionen
### `setPreset(name, options)`
- `name`: Der Name des Presets.
- `options`: Die Optionen für das Preset.
  - `length`: Die Länge der generierten ID (Standard: 8).
  - `prefix`: Ein optionaler Präfix, der der ID vorangestellt wird.
  - `suffix`: Ein optionaler Suffix, der an die ID angehängt wird.
  - `charset`: Die Zeichen, die zur Generierung der ID verwendet werden (Standard: alphanumerische Zeichen).
  - `customFunction`: Eine benutzerdefinierte Funktion zur Generierung der ID. Wenn diese Funktion definiert ist, werden die anderen Optionen ignoriert.

## generate(presetName)
- `presetName`: Der Name des zu verwendenden Presets.
- Gibt die generierte ID zurück basierend auf dem Preset und fügt das aktuelle Jahr nach dem Suffix hinzu.

### `generateCustom(options)`
- `options`: Die Optionen zur Generierung der ID ohne Preset.
  - `length`: Die Länge der generierten ID (Standard: 8).
  - `prefix`: Ein optionaler Präfix, der der ID vorangestellt wird.
  - `suffix`: Ein optionaler Suffix, der an die ID angehängt wird.
  - `charset`: Die Zeichen, die zur Generierung der ID verwendet werden (Standard: alphanumerische Zeichen).
  - `customFunction`: Eine benutzerdefinierte Funktion zur Generierung der ID. Wenn diese Funktion definiert ist, werden die anderen Optionen ignoriert.
- Gibt die generierte ID zurück basierend auf den angegebenen Optionen und fügt das aktuelle Jahr nach dem Suffix hinzu.

## Lizenz
MIT

Diese README.md bietet eine umfassende Anleitung zur Nutzung deines NPM-Pakets, einschließlich der Möglichkeit, Presets zu setzen und benutzerdefinierte IDs zu generieren, wobei das aktuelle Jahr nach dem Suffix hinzugefügt wird.# Custom-ID-Generator
