import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() { 
  return (
   <>
   <Outlet></Outlet>
    <main>
     <PostList  />  
    </main>
   </>
  );
}

export default Posts;

export async function loader(){
  const response= await fetch(`${process.env.BACKEND_URL}/posts`);
  const resData=await response.json();
  return resData.posts;
}
