type Colors = Record<string, string | Record<string, string>>;

const defaultDefaultShade = 500;

export default function defaultShades(
  colors: Colors,
  defaultShade: number | string | Record<string, number | string> = defaultDefaultShade
): Colors {
  if (!colors || typeof colors !== 'object') {
    throw new Error(
      `defaultShades: received unexpected \`colors\` argument value of \`${JSON.stringify(colors)}\`. Expected an object with string keys of the color names in your theme, each with a string key of its associated color value or an object with the shades for that color, comprised of string or numeric keys and string values for the color of each shade.`
    );
  }
  if (!defaultShade) {
    throw new Error(
      `defaultShades: received unexpected \`defaultShade\` argument value of \`${JSON.stringify(defaultShade)}\`. Expected a numeric or string key, or an object with keys matching a partial list of the colors in your Tailwind CSS configuration (or \`DEFAULT\`) and numeric or string values of the desired shade for each.`
    );
  }
  const usingKeyedShades = typeof defaultShade === 'object';
  if (usingKeyedShades) defaultShade.DEFAULT ??= defaultDefaultShade;

  const resultColors: Record<string, string | Record<string, string>> = {};
  for (const [name, shades] of Object.entries(colors)) {
    if (!shades) {
      throw new Error(
        `defaultShades: shades for color \`${name}\` was an unexpected value of \`${JSON.stringify(shades)}\`. Expected a string representing a single color value or an object with individual shades for that color, comprised of string or numeric keys and string values for the color of each shade.`
      );
    }
    if (typeof shades === 'string') {
      resultColors[name] = shades;
      continue;
    }
    const newShades = { ...shades };
    const newShadesDefault =
      shades[usingKeyedShades ? defaultShade[name] ?? (defaultShade.DEFAULT as string) : defaultShade];
    if (newShadesDefault) newShades.DEFAULT ??= newShadesDefault;
    resultColors[name] = newShades;
  }
  return resultColors;
}
