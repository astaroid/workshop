import { 
    describe, 
    it, 
    expect, 
    test 
} from "vitest"
import { 
    colorMixer, 
    colorSchemer,
    crystalGenerator
} from "../src/index.js"
import { CrystalColorScheme } from "../src/utils.js"

describe("Test colorMixer function", () => {
    it("Test with 0 color", () => {
        expect(colorMixer()).toBeNull()
    })
    it("Test with 1 color", () => {
        expect(colorMixer("#FF0000")).toEqual("#FF0000")
    })
    it("Test with 2 colors", () => {
        expect(colorMixer("#FF0000", "#00FF00")).toEqual("#B89714")
    })
    it("Test with more 3 colors", () => {
        expect(colorMixer("#2196F3", "#FF9800", "#FFF3D00")).toEqual("#382F1E")
    })
})

test("Test colorSchemer function", () => {
    let actual = colorSchemer("#382F1E")
    let expected = {
        background: '#382F1E',
        side: {
          bottomLeft: '#363326',
          topLeft: '#2E2819',
          bottomCenter: '#776840',
          topRight: '#4C3C2A',
          topCenter: '#776046'
        }
    }
    expect(actual).toMatchObject<CrystalColorScheme>(expected)
})

test("Test crystalGenerator function", () => {
    let actual = crystalGenerator("#FF9800")(32, 332)
    let expected = `<svg width="32" height="332" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2101 7.8999H7.79012C7.70882 7.90103 7.62882 7.9205 7.5561 7.95686C7.48337 7.99322 7.4198 8.04554 7.37012 8.1099L2.15012 14.9999C2.07114 15.0937 2.02783 15.2123 2.02783 15.3349C2.02783 15.4575 2.07114 15.5761 2.15012 15.6699L15.5901 29.8999C15.6388 29.952 15.6976 29.9935 15.763 30.0219C15.8283 30.0503 15.8989 30.0649 15.9701 30.0649C16.0414 30.0649 16.1119 30.0503 16.1773 30.0219C16.2426 29.9935 16.3015 29.952 16.3501 29.8999L29.7901 15.6699C29.8691 15.5761 29.9124 15.4575 29.9124 15.3349C29.9124 15.2123 29.8691 15.0937 29.7901 14.9999L24.6301 8.1099C24.5804 8.04554 24.5169 7.99322 24.4441 7.95686C24.3714 7.9205 24.2914 7.90103 24.2101 7.8999Z" fill="#FF9800" /><path d="M15.5939 29.9023C15.7501 30.068 15.9272 30.0781 15.9962 30.0625L16.0126 29.9648V13.9961H2.91028C2.70975 14.2617 2.27824 14.8328 2.15636 14.9922C2.00402 15.1914 1.90246 15.4102 2.15636 15.6797C2.41027 15.9492 15.3986 29.6953 15.5939 29.9023Z" fill="#F0C014"/><path d="M15.9962 7.8999H7.79011C7.70881 7.90103 7.62881 7.9205 7.55608 7.95686C7.48336 7.99322 7.41979 8.04554 7.37011 8.1099L2.53281 14.4948C2.33116 14.7535 2.1271 15.2069 3.03407 15.2072C6.40343 15.2085 9.18999 15.216 11.1396 15.216C12.1859 13.6504 13.8636 11.1386 15.9962 7.8999Z" fill="#F09800" /><path d="M15.9999 30.0585L11.1399 15.2299H20.8599L15.9999 30.0585Z" fill="#FFCA61"/><path d="M24.0469 7.90015H16.0156V15.1978H29.8994C29.8972 15.1771 29.8741 15.1089 29.7989 15.0015C29.7049 14.8673 24.8164 8.35938 24.6992 8.19531C24.582 8.03125 24.3711 7.90015 24.0469 7.90015Z" fill="#FE8B20"/><path d="M15.9999 7.8999L18.4299 11.5699L20.8599 15.2299H11.1399L13.5699 11.5699L15.9999 7.8999Z" fill="#FCB069"/></svg>`
    expect(actual).toBe<string>(expected)
})