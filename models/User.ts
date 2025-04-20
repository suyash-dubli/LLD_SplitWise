export class User{
    id: number;
    name: string;
    email: string;
    groupIds: number[];
    balanceIds: number[];
    constructor({id,name,email,groupIds,balanceIds}){
        this.id = id;
        this.name = name;
        this.email = email;
        this.groupIds = groupIds;
        this.balanceIds = balanceIds;
    }

    updateUserData(){
        console.log("Update user data");
    }

    geUserBalances(){
        console.log("Get all balances");
    }
    
    getUserGroups(id:number){
        console.log("Get all user group")
        return this.groupIds;
    }

}