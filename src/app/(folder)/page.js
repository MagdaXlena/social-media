import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server"

export default async function PostsPage() {
    const {userId} = auth();
    const db = connect();
    const posts = await db.query(`SELECT
                                        posts.id,
                                        profiles.username,
                                        posts.content
                                        FROM posts
                                INNER JOIN profiles ON posts.clerk_id = profiles.clerk_id`);
   

    async function handleCreatePost(formData) {
        "use server";
        const db = connect();
        const content = formData.get("content")        
        await db.query('INSERT INTO posts (clerk_id, content) VALUES ($1, $2)', [userId, content])
    }

    return (
        <div className="bg-gray-200 h-screen rounded-xl p-4 text-black">
            
                <form action={handleCreatePost} className="flex flex-col gap-2 m-6">
                    <textarea name="content" placeholder="New Post" className="bg-white rounded-xl px-3 py-1 h-20 shadow-2xl"></textarea>
                    <button className="bg-orange-500  hover:bg-orange-600 text-black py-2 px-4 shadow-2xl rounded-full w-40 mb-10">Submit</button>
                </form>

            {posts.rows.map((post) => {
              return (
                <div key={post.id} className="bg-slate-600 text-white px-3 py-1 rounded-xl h-36 shadow-2xl m-6" >
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                </div> 
              )
            })}

        </div>
    )
}