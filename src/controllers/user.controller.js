const User = require('../schema/user.schema');
const Post = require('../schema/post.schema');

module.exports.getUsersWithPostCount = async (req, res) => {
    try {
        //TODO: Implement this API

        // const post=await Post.find({$lookup:{userId:user._id}})

        const user = await User.aggregate([
            
               { $lookup:

                {
                    from: "Post",
                    localField: "_id",
                    foreignField: "userId",
                    as: "Post"

                }
            },
            { $addFields: {studentCount: {$size: "$Post"}}}
                
            
        ])
    // User: 1,
    // numberOfLikes: {
    //   $cond: {
    //     if: {
    //       $isArray: "$likes"
    //     },
    //     then: {
    //       $size: "$likes"
    //     },
    //     else: "NA"
    //   }

    // db.collection.aggregate([
    //     {
    //       $project: {
    //         User: 1,
    //         numberOfLikes: {
    //           $cond: {
    //             if: {
    //               $isArray: "$likes"
    //             },
    //             then: {
    //               $size: "$likes"
    //             },
    //             else: "NA"
    //           }
    //         }
    //       }
    //     }
    //   ])







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
        user: user
    })
} catch (error) {
    res.send({ error: error.message });
}
}