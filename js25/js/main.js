// main.js: Higher Order Functions 

/* What suppose the Higher Order Functions? 
1-) It takes another function as a paremeter.
2-) Return a function.
*/

// Import the posts from "posts.js" file.
import { posts } from "./posts.js";

// 1) forEach(): It prints the every element that inside of the array.
posts.forEach(post => {
    console.log(post);
});

console.clear(); // It cleans the console.

// 2) filter(): It filter the elements.
const filterPosts= posts.filter(post=>{
    return post.userId === 1;
});

console.log(filterPosts);

// 3) map(): Multipy the the posts that filtered with 10.
const mappedPosts= filterPosts.map(post=>{
    return post.id*10;
})

console.log(mappedPosts);

// 4) reduce(): Sum every number in the mappedPosts array.
const reducedPostsValue= mappedPosts.reduce((sum,post)=>{
    return sum+post;
})

console.log(reducedPostsValue);
