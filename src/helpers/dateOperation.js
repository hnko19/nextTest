export function dateSyntax(datex){
    let result = new Date(datex).toLocaleDateString("ar-EG")
    return result;
}