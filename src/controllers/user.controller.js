const User = require('../schema/user.schema');
const Post = require('../schema/post.schema');

module.exports.getUsersWithPostCount = async (req, res) => {
    try {
        //TODO: Implement this API
        const user=await User.find()
        const post=await Post.find({$lookup:{userId:user._id}})
       








        
        // const data=post.reduce((acc,dec)=>{
            
        //     if(){

        //     }
        // },[])
        // post.map(post=>{
        //     user.map(user=>{
        //         if(user._id==post.userId){
        //             data.push({
        //                 'id':user._id,
        //                 'name':user.name,

        //             })
        //         }
        //     })
        // })
        // Promise.all([user,post])
       
        res.status(200).json({
            user: data
        })
    } catch (error) {
        res.send({error: error.message});
    }
}