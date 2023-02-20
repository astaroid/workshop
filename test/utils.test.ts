import { 
    toHSL, 
    toHex, 
    HSL, 
    HSLClamp 
} from "../src/utils.js"
import { describe, it, expect } from "vitest"

describe("Test utilities functions", () => {
    it ("Test HSLClamp function", () => {
        let actual:HSL = HSLClamp({
            lightness: -50,
            hue: 370,
            saturation: 50
        })
        expect(actual).toMatchObject<HSL>({
            lightness: 0,
            hue: 360,
            saturation: 50
        })
    })
    it ("Test toHSL function", () => {
        let actual = toHSL("#FF0000")
        expect(actual).toMatchObject<HSL>({ 
            hue: 0,
            saturation: 100,
            lightness: 50
        })
    })

    it ("Test toHex function", () => {
        let actual = toHex({ 
            hue: 0,
            saturation: 100,
            lightness: 50
        })
        expect(actual).toMatchObject("#FF0000")
    })
})

