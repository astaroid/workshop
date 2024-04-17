import { CrystalSideColorScheme, HSL } from "./utils.js"

type CrystalSide = keyof CrystalSideColorScheme

export const CrystalSideColorSchemeDiff: Record<CrystalSide, HSL> = {
    bottomLeft: {
        hue: 11,
        saturation: -12,
        lightness: 1
    },
    topLeft: {
        hue: 2,
        saturation: 0,
        lightness: -3
    },
    bottomCenter: {
        hue: 4,
        saturation: 0,
        lightness: 19
    },
    topRight: {
        hue: -7,
        saturation: -1,
        lightness: 6
    },
    topCenter: {
        hue: -7,
        saturation: -4,
        lightness: 20
    }
}