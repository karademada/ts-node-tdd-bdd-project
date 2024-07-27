import nonPositiveValidationRule from "./rules/nonPositive"
import makeNonDivisibleValidationRule from "./rules/makeNonDivisible"


const validationRules = [
    nonPositiveValidationRule,
    makeNonDivisibleValidationRule(3, 'error.three'),
    makeNonDivisibleValidationRule(5, 'error.five')
]


const validator = (n: number) => {
    return validationRules.reduce((result, rule)=>{
        rule(n, result)
        return result
    }, [] as string[])
};

export default validator
