const nonPositiveValidationRule = (n: number, result: string[])=>{
    if(n <= 0){
        result.push('error.nonpositive')
    }
}
export default nonPositiveValidationRule