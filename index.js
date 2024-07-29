class CustomIDGenerator {
    constructor() {
        this.presets = {};
    }

    setPreset(name, options) {
        this.presets[name] = options;
    }

    generate(presetName) {
        let options = this.presets[presetName] || {};
        const { length = 8, prefix = '', suffix = '', charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', customFunction } = options;

        let id = '';

        if (typeof customFunction === 'function') {
            id = customFunction();
        } else {
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                id += charset[randomIndex];
            }
        }

        const currentYear = new Date().getFullYear();
        return `${prefix}${id}${suffix}${currentYear}`;
    }

    generateCustom(options) {
        const { length = 8, prefix = '', suffix = '', charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', customFunction } = options;

        let id = '';

        if (typeof customFunction === 'function') {
            id = customFunction();
        } else {
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                id += charset[randomIndex];
            }
        }

        const currentYear = new Date().getFullYear();
        return `${prefix}${id}${suffix}${currentYear}`;
    }
}

module.exports = CustomIDGenerator;
