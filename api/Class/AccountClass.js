import AccountModel from "../models/AccountModel"

class ManagerAccount{
    constructor(
        userId,
        accountNumber,
        accountType,
        balance,
    ){
        this.userId = userId
        this.accountNumber = accountNumber
        this.accountType = accountType
        this.balance = balance

    }
    async getAccounts(){
        try {
            const accounts = AccountModel.find();
            return accounts;
            
        } catch (error) {
            throw new Error(`Error al obtener cuentas:${error}`)
        }
    };

    async getAccount(id){
        try {
            const account = await AccountModel.findById(id);
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuentas:${error}`)
        }
    };

    async addBalance(id.amounth){
        try {
            this.balance += amounth;
            await AccountModel.findByIdAndUpdate(id),{
                $set:{
                    balance:this.balance
                }
            };
            return "OK"
        } catch (error) {
            throw new Error(`Error al agregar monto:${error}`)
        }

    };

    async restBalance(id.amounth){
        try {
            this.balance -= amounth;
            await AccountModel.findByIdAndUpdate(id),{
                $set:{
                    balance:this.balance
                }
            };
            return "OK"
        } catch (error) {
            throw new Error(`Error al restar monto:${error}`)
        }

    };

    async createAccount(){
    try {
        const account = await AccountModel.create({
            userId:this.userId,
            accountNumber:this.accountNumber,
            accountType:this.accountType,
            balance:this.balance
        })  
        return account      
    } catch (error) {
            console.error(`Error al crear cuenta:${error}`);
       }
    };
};

export default ManagerAccount;

