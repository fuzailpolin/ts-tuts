let userInput: unknown;
let userName: string;

userInput = 232
userInput = '2343'

// cannot assign unkonw type to a string
//userName = userInput 

// so we have to first check the type then assign

if( typeof userInput == 'string' ){
    userName = userInput
} 

const generateError = (message: string, code: number) => {
    throw { message: message, code: code}
}

generateError("An error occured!", 500)
