//function for adding number
export function addNumber(stringName,number) {
    //verify with regex condition for number to be valid
    let regex = /[+x\/\s-]0/
    if (stringName.slice(-2,stringName.length).match(regex)) return stringName
    stringName += number
    return stringName
}
//function for adding primary operations +,-
export function addOperationPrimary(stringName,operation){
    //there cannot be expressions like this  "--" (invalid)
    let regex1 = /\-{2,}/ 
    //there cannot be expressions like this "++" (invalid)
    let regex2 = /\+{2,}/
    let regex3 = /[+\/x-]\./
    if (stringName.slice(-2,stringName.length).match(regex3)) return stringName
    stringName += operation
    if (stringName.match(regex1) || stringName.match(regex2)) return stringName.slice(0,-1)
    return stringName
}
//function for adding secondary operations x,/
export function addOperationSecondary(stringName,operation){
    //this kind of operation cannot follow any other kind
    if (stringName === "") return stringName
    let regex = /[+\/x-]/
    let regex2 = /[+\/x-]\./
    if (stringName.slice(-1).match(regex) || stringName.slice(-2,stringName.length).match(regex2)) return stringName
    stringName += operation
    return stringName
}
//function for adding dot
export function addingDot(stringName){
    if (stringName.slice(-1) === ".") return stringName
    stringName += "."
    //defines regular expression
    let regex = /\.[0-9]*\./
    if (stringName.match(regex)) return stringName.slice(0,-1)
    return stringName
}
//function for deleting
export function stringDelete(stringName) {
    if (stringName === "") return stringName
    return stringName.slice(0,-1)
}

//function for adding thousand separator
export function addSeparators(stringName) {
    //stripping separators
    stringName = stringName.replaceAll(",","")
    //add Spaces to the beggining and end
    stringName=" "+stringName+" "
    // we identify certain patterns
    let regex = /[+x\/\s-]\d{4,}/g
    let changes = stringName.match(regex)
    console.log(stringName)
    console.log(changes)
    // iterate  over the changes
    if (changes) {
        for (let change of changes){
            let newChange = change.slice(1,change.length)
            stringName = stringName.replace(newChange,parseInt(newChange).toLocaleString())
        }
    }
    return stringName.slice(1,-1)
}
//function to get result
export function getResult(stringName) {
    stringName = stringName.replaceAll(",","")
    stringName = ' ' + stringName + ' '
    let test1 = stringName.match(/[x\/+-]{1,}\s/)
    console.log(test1)
    if (test1) stringName = stringName.replaceAll(test1,"")   
    //replace the x by *
    stringName = stringName.replaceAll("x","*")
    let reckonValue = eval(stringName)
    stringName = reckonValue.toString()
    return stringName
}