import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function ProfilePage() {
    const { userId } = auth();

    async function handleUpdateProfile(formData) {
        "use server"
        const db = connect();
        const username = formData.get("username");
        const bio = formData.get("bio")

        const profiles = await db.query(`SELECT * FROM profiles WHERE clerk_id = $1`, [userId]);
        if(profiles.rowCount === 0) {

        await db.query(`INSERT INTO PROFILES (clerk_id,username, bio) VALUES ($1, $2, $3)`, [userId, username, bio]
        );

    } else {
        await db.query(`UPDATE profiles SET username = $1, bio =$2 WHERE clerk_id=$3`, [username, bio, userId]
        );
    };
}

    return (
        <div className="bg-gray-200 h-screen rounded-xl p-4 text-black">
            <h2 className="text-center">Profile Page</h2>
            <form action={handleUpdateProfile} className="flex flex-col gap-5 p-5">
                <input name="username" placeholder="Username" className=" rounded-xl p-1 shadow-2xl"></input>
                <input name="bio" placeholder="Bio" className="shadow-2xl rounded-xl p-1 h-40"></input>
                <button className="bg-orange-500  hover:bg-orange-600 text-black py-2 px-4 shadow-2xl rounded-full w-40 mb-10">Submit</button>
            </form>
        </div>
    )

}