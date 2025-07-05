import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, pswrd, name}) {
        try {
           const userAccount = await this.account.create(
                ID.unique(),
                email,
                pswrd,
                name
            )
            if(userAccount){
                return this.login(email, pswrd);
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email, pswrd){
        try {
               return await this.account.createEmailPasswordSession(email, pswrd) 
                } catch (error) {
                    throw error;
                }
    }

    async getCurrUSer(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    
    async logout(){
        try {
             await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
    
}

const authService = new AuthService(); //obj

export default authService