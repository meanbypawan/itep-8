import pool from "../db/dbConfig.js";
class User{
    constructor(id,username,email,password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    create(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              let sql = "insert into user(username,email,password) values(?,?,?)";
              con.query(sql,[this.username,this.email,this.password],(err,result)=>{
                err ? reject(err) : resolve(result);
                con.release();
              })
            }
            else
              reject(err);
        })
      });
    }
    static findOne(email,password){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from user where email = ? and password = ?";
              con.query(sql,[email,password],(err,result)=>{
                err ? reject(err) : resolve(result);
                con.release();
              });
            }
            else reject(err);
              
          });
      });
    }
}

export default User;