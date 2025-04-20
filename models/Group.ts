import { User } from "./User"
import { Transaction } from "./Transaction"

export class Group{
    id:number
    name:string
    members: User[]
    createdDate:Date
    groupTransactions:Transaction[]
    
    constructor({id,name,members,createdDate}){
        this.id = id;
        this.name = name;
        this.members = members;
        this.createdDate = createdDate || new Date();
        this.groupTransactions = [];
    } 
    addMemberToGroup(user:User){
        this.members.push(user);
    }
    deleteMemberFromGroup(user:User){
        this.members = this.members.filter(member => member.id !== user.id);
    }
    getGroupMembers(){
        return this.members;
    }
    addTransactionToGroup(transaction:Transaction){
        this.groupTransactions.push(transaction);
    }
    getGroupTransactions(){
        return this.groupTransactions;
    }
}
    
    
