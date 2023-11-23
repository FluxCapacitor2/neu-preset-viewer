import groupBy from "just-group-by";
import { colorCodesToClassNames, maxEnchantTiers, ultimateEnchantments } from "./constants";

export type Preset = {
  name?: string;
  author: string;
  link: string;
  preset: string;
};

// https://stackoverflow.com/a/41358305
export function toRoman(num: number) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";

  for (const i of Object.keys(roman) as (keyof typeof roman)[]) {
    let q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

export function parsePreset(content: string) {
  return {
    type: content.substring(0, content.indexOf("/")),
    content: JSON.parse(content.substring(content.indexOf("/") + 1)),
  };
}

export function mapEnchantsToTiers(enchantList: string[], mapper: (maxTier: number) => number) {
  return Object.fromEntries(
    enchantList.map((enchant) => [enchant, mapper(maxEnchantTiers[enchant])])
  );
}

export function mapEnchantsToMaxTiers(enchantList: string[]) {
  return Object.fromEntries(enchantList.map((enchant) => [enchant, maxEnchantTiers[enchant]]));
}

export function parseEnchantPreset(content: string[]) {
  const grouped = groupBy(content, (item) => item.substring(0, item.indexOf(":")));

  const findMatchingFilters = (name: string) => {
    let matched = [];
    for (const [matcher, filters] of Object.entries(grouped)) {
      if (RegExp(matcher).test(name)) {
        matched.push(...filters);
      }
    }
    return matched;
  };

  return (name: string, level: number) => {
    for (const filter of findMatchingFilters(name)) {
      const [_, comparator, number, colorCode, modifiers] = filter.split(":");
      try {
        if (applyComparator(comparator, level, parseInt(number))) {
          const colorClass = colorCodesToClassNames[colorCode] ?? "unknown-color-code";
          return [colorClass, getModifierClasses(parseInt(modifiers))].join(" ");
        }
      } catch {
        return "parsing-error";
      }
    }
    if (ultimateEnchantments.includes(name)) {
      return "minecraft-light-purple font-bold";
    }
    return "minecraft-blue";
  };
}

function getModifierClasses(bitmask: number) {
  let classes: string[] = [];

  if ((bitmask & 0b01) !== 0) {
    classes.push("font-bold");
  }
  if ((bitmask & 0b10) !== 0) {
    classes.push("italic");
  }
  if ((bitmask & 0b1000) !== 0) {
    classes.push("underline");
  }
  if ((bitmask & 0b100) !== 0) {
    classes.push("minecraft-obfuscated");
  }
  if ((bitmask & 0b10000) !== 0) {
    classes.push("line-through");
  }

  return classes.join(" ");
}

function applyComparator(comparator: string, lhs: number, rhs: number) {
  switch (comparator) {
    case "=": {
      return lhs === rhs;
    }
    case "<": {
      return lhs < rhs;
    }
    case ">": {
      return lhs > rhs;
    }
    default: {
      throw new Error("Unexpected comparator: '" + comparator + "'");
    }
  }
}
