"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultDefaultShade = 500;
function defaultShades(colors, defaultShade = defaultDefaultShade) {
    var _a, _b, _c;
    if (!colors || typeof colors !== 'object') {
        throw new Error(`defaultShades: received unexpected \`colors\` argument value of \`${JSON.stringify(colors)}\`. Expected an object with string keys of the color names in your theme, each with a string key of its associated color value or an object with the shades for that color, comprised of string or numeric keys and string values for the color of each shade.`);
    }
    if (!defaultShade) {
        throw new Error(`defaultShades: received unexpected \`defaultShade\` argument value of \`${JSON.stringify(defaultShade)}\`. Expected a numeric or string key, or an object with keys matching a partial list of the colors in your Tailwind CSS configuration (or \`DEFAULT\`) and numeric or string values of the desired shade for each.`);
    }
    const usingKeyedShades = typeof defaultShade === 'object';
    if (usingKeyedShades)
        (_a = defaultShade.DEFAULT) !== null && _a !== void 0 ? _a : (defaultShade.DEFAULT = defaultDefaultShade);
    const resultColors = {};
    for (const [name, shades] of Object.entries(colors)) {
        if (typeof shades === 'string') {
            resultColors[name] = shades;
            continue;
        }
        const newShades = { ...shades };
        (_b = newShades.DEFAULT) !== null && _b !== void 0 ? _b : (newShades.DEFAULT = shades[usingKeyedShades ? (_c = defaultShade[name]) !== null && _c !== void 0 ? _c : defaultShade.DEFAULT : defaultShade]);
        resultColors[name] = newShades;
    }
    return resultColors;
}
exports.default = defaultShades;
