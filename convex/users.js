import {mutation} from "./_generated/server";
import {v} from "convex/values";




export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string(),

    },
    handler: async (ctx, args) => {
        // Check if user exists
        const users = await ctx.db
            .query("users")
            .filter(q => q.eq(q.field("email"), args.email))
            .collect(); // Need to add .collect() to execute the query
        
        console.log('Users found:', users);

        if (users.length === 0) {
            const result = await ctx.db.insert("users", {
                name: args.name,
                email: args.email,
                picture: args.picture,
                credits: 3,
            });
            console.log('User created:', result);
            return result;
        }
        return users[0];

    }


})



