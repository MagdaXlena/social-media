// import { connect } from "@/lib/connect";
// import { auth } from "@clerk/nextjs/server"

// export default async function PostsPage() {
//     const {userId} = auth();
//     const db = connect();
//     const posts = await db.query('SELECT * FROM posts');

//     async function handleCreatePost(formData) {
//         "use server";
//         const db = connect();
//         const content = formData.get("content")        
//         await db.query('INSERT INTO posts (clerk_id, content) VALUES ($1, $2)', [userId, content])
//     }

//     return (
//         <div className="bg-gray-200 h-screen rounded-xl p-4 text-black">
//             <h2>Posts</h2>
//             <h3>Add New Post</h3>
//                 <form action={handleCreatePost} className="flex flex-col gap-2 m-6">
//                     <textarea name="content" placeholder="New Post" className="bg-white rounded-xl px-3 py-1 h-20 shadow-2xl"></textarea>
//                     <button className="bg-orange-500  hover:bg-orange-600 text-black py-2 px-4 shadow-2xl rounded-full w-40">Submit</button>
//                 </form>

//             <h3>All posts</h3>
//             {posts.rows.map((post) => {
//                 <div key={post.id}>
//                     <h4>{post.clerk_id}</h4>
//                     <p>{post.content}</p>
//                 </div>
//             })}

//         </div>
//     )
// }