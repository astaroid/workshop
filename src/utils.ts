export interface HSL {
    hue: number
    saturation: number
    lightness: number
}

export interface CrystalSideColorScheme {
    bottomLeft: string
    topLeft: string
    bottomCenter: string
    topRight: string
    topCenter: string
}

export interface CrystalColorScheme {
    background: string
    side: CrystalSideColorScheme 
}

const decToHex = (num:number): string => {
    const hex = Math.round(num * 255).toString(16).toUpperCase()
    return hex.length === 1 ? `0${hex}` : hex
}

const hue2rgb = (p:number, q:number, t:number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    
    if (t < 1 / 6) 
        return p + (q - p) * 6 * t
    
    if (t < 1 / 2) 
        return q;
    
    if (t < 2 / 3) 
        return p + (q - p) * (2 / 3 - t) * 6
    
    return p
}

export const HSLClamp = (hsl:HSL): HSL => {
    let { hue, saturation, lightness } = hsl
    
    hue = Math.min(Math.max(hue, 0), 360)
    
    saturation = Math.min(Math.max(saturation, 0), 100)
    
    lightness = Math.min(Math.max(lightness, 0), 100)

    return {
        hue,
        saturation,
        lightness
    }
}

export const toHSL = (hex:string): HSL => {
    hex = hex.toLowerCase()
    
    let hexRegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    
    if (!hexRegExpExecArray) {
        return {
            hue: 0,
            saturation: 0,
            lightness: 0
        }
    }

    let [_, rString, gString, bString] = hexRegExpExecArray

    let r = parseInt(rString, 16)/255,
        g = parseInt(gString, 16)/255,
        b = parseInt(bString, 16)/255

    let max = Math.max(r, g, b),
        min = Math.min(r, g, b)

    let h = 0, 
        s = 0, 
        l = (max + min) / 2

    if (max != min) {
        let diff = max - min
        s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)
        switch(max) {
            case r: 
                h = (g - b) / diff + (g < b ? 6 : 0)
                break
            case g: 
                h = (b - r) / diff + 2
                break
            case b: 
                h = (r - g) / diff + 4 
                break
        }
        h /= 6
    }

    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)

    return {
        hue: h,
        saturation: s,
        lightness: l
    }
}

export const toHex = (hsl:HSL): string => {
    let { saturation: s, hue: h, lightness: l } = hsl
    h /= 360
    s /= 100
    l /= 100

    let r = l,
        g = l,
        b = l
    
    if (s != 0) {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
    }
    
    return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`
}