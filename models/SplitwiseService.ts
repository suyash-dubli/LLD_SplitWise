import { User } from "./User";
import { Group } from "./Group";

export class SplitWiseService{
    private static instance:SplitWiseService
    private constructor(){}
    
    users:Map<number,User> = new Map();
    groups:Map<number,Group> = new Map();

    //Singleton DP
    static getInstance(){
        if(!this.instance){
            this.instance = new SplitWiseService();
        }
        return this.instance;
    }

    //create users
    createUser(user:User){
        this.users.set( user.id, user );
        console.log("User Created!!!!");
    }
    createGroup(group:Group){
        this.groups.set( group.id, group );
        console.log("Group Created!!!!");
    }
    getUser(userID:number){
        return this.users.get( userID );
    }
    getGroup(groupID:number){
        return this.groups.get( groupID );
    }
    //create group
    //add user to group
    
}