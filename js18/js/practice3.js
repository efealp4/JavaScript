class BankAccount{
    #balance; //private 
    constructor(accountNumber,ownerName,initialBalance){
        this.accosuntNumber= accountNumber;
        this.ownerName= ownerName;
        this.#balance= initialBalance;
    }

    getBalance(){
        return `Account: ${this.accountNumber} | Owner: ${this.ownerName} | Balance: ${this.#balance}`
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited: ${amount}.\nNew Balance: ${this.#balance}`)
        }
        else{
            console.log("Deposit amount must be greater than zero.")
        }
    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log(`There is not enough money in your account.\n
                Current Balance: ${this.#balance}`)
        }
        else{
            this.#balance-=amount;
            console.log(`Withdrew: ${amount}.\n
                Current Balance: ${this.#balance}`)
        }
    }
}

const myAccount= new BankAccount("123456789","Efe Alp",500);

console.log(myAccount.getBalance()); // Starting balance

myAccount.deposit(200);
console.log(myAccount.getBalance());

myAccount.withdraw(900);
myAccount.withdraw(500);

console.log(myAccount.getBalance());

/* console.log(myAccount.#balance); */


