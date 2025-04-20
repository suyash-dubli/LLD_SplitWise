import { SplitWiseService } from "./models/SplitwiseService";
import { User } from "./models/User";
import { Group } from "./models/Group";


const splitWiseService = SplitWiseService.getInstance();

const user1 = new User({id:1,name:"Suyash",email:"suyash@gmail.com",groupIds:[],balanceIds:[]});
const user2 = new User({id:2,name:"divyanshu",email:"divyanshu@gmail.com",groupIds:[],balanceIds:[]});

const group1 = new Group({id:1,name:"group1",members:[],createdDate:new Date()})

splitWiseService.createUser(user1);
splitWiseService.createUser(user2);
splitWiseService.createGroup(group1);

const g1 = splitWiseService.getGroup(1);
console.log(g1);
const u1 = splitWiseService.getUser(1);
console.log(u1);
const u2 = splitWiseService.getUser(2);
console.log(u2);