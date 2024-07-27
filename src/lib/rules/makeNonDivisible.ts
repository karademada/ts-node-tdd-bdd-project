
const makeNonDividibleValidationRule = (divisor: number, error: string)=>{
    return (n: number, result: string[])=>{
        if(n % divisor === 0){
            result.push(error)
        }
    }
}
export default makeNonDividibleValidationRule