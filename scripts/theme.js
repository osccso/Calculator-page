export default function themeChanger() {
    let radio1 = document.getElementById("theme1")
    let radio2 = document.getElementById("theme2")
    let radio3 = document.getElementById("theme3")
    // add the listeners
    radio1.addEventListener('change',async e => {
        //importing json files
        let getJson= async () => {
            let response = await fetch('scripts/themes.json')
            let data = await response.json()
            return data;
        }
        let themesObject =await getJson()
        document.documentElement.style.setProperty('--background',themesObject.theme1.background)
        document.documentElement.style.setProperty('--padToggleBackground',themesObject.theme1.padToggleBackground)
        document.documentElement.style.setProperty('--screenBackground',themesObject.theme1.screenBackground)
        document.documentElement.style.setProperty('--keyBackgroundReset',themesObject.theme1.keyBackgroundReset)
        document.documentElement.style.setProperty('--keyShadowReset',themesObject.theme1.keyShadowReset)
        document.documentElement.style.setProperty('--keyBackgroundEqual',themesObject.theme1.keyBackgroundEqual)
        document.documentElement.style.setProperty('--keyShadowEqual',themesObject.theme1.keyShadowEqual)
        document.documentElement.style.setProperty('--keyBackground',themesObject.theme1.keyBackground)
        document.documentElement.style.setProperty('--keyShadow',themesObject.theme1.keyShadow)
        document.documentElement.style.setProperty('--textDefault',themesObject.theme1.textDefault)
        document.documentElement.style.setProperty('--textResult',themesObject.theme1.textResult)
        document.documentElement.style.setProperty('--textEqual',themesObject.theme1.textResult)
    }) 

    radio2.addEventListener('change',async e => {
        //importing json files
        let getJson= async () => {
            let response = await fetch('scripts/themes.json')
            let data = await response.json()
            return data;
        }
        let themesObject =await getJson()
        document.documentElement.style.setProperty('--background',themesObject.theme2.background)
        document.documentElement.style.setProperty('--padToggleBackground',themesObject.theme2.padToggleBackground)
        document.documentElement.style.setProperty('--screenBackground',themesObject.theme2.screenBackground)
        document.documentElement.style.setProperty('--keyBackgroundReset',themesObject.theme2.keyBackgroundReset)
        document.documentElement.style.setProperty('--keyShadowReset',themesObject.theme2.keyShadowReset)
        document.documentElement.style.setProperty('--keyBackgroundEqual',themesObject.theme2.keyBackgroundEqual)
        document.documentElement.style.setProperty('--keyShadowEqual',themesObject.theme2.keyShadowEqual)
        document.documentElement.style.setProperty('--keyBackground',themesObject.theme2.keyBackground)
        document.documentElement.style.setProperty('--keyShadow',themesObject.theme2.keyShadow)
        document.documentElement.style.setProperty('--textDefault',themesObject.theme2.textDefault)
        document.documentElement.style.setProperty('--textResult',themesObject.theme2.textResult)
        document.documentElement.style.setProperty('--textEqual',themesObject.theme2.textResult)
    })

    radio3.addEventListener('change',async e => {
        //importing json files
        let getJson= async () => {
            let response = await fetch('scripts/themes.json')
            let data = await response.json()
            return data;
        }
        let themesObject =await getJson()
        document.documentElement.style.setProperty('--background',themesObject.theme3.background)
        document.documentElement.style.setProperty('--padToggleBackground',themesObject.theme3.screenBackground)
        document.documentElement.style.setProperty('--screenBackground',themesObject.theme3.screenBackground)
        document.documentElement.style.setProperty('--keyBackgroundReset',themesObject.theme3.keyBackgroundReset)
        document.documentElement.style.setProperty('--keyShadowReset',themesObject.theme3.keyShadowReset)
        document.documentElement.style.setProperty('--keyBackgroundEqual',themesObject.theme3.keyBackgroundEqual)
        document.documentElement.style.setProperty('--keyShadowEqual',themesObject.theme3.keyShadowEqual)
        document.documentElement.style.setProperty('--keyBackground',themesObject.theme3.keyBackground)
        document.documentElement.style.setProperty('--keyShadow',themesObject.theme3.keyShadow)
        document.documentElement.style.setProperty('--textDefault',themesObject.theme3.textDefault)
        document.documentElement.style.setProperty('--textResult',themesObject.theme3.textResult)
        document.documentElement.style.setProperty('--textEqual',themesObject.theme3.textEqual)
    }) 
    //by default the first theme is applied
    radio1.click()
}