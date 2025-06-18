import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

    /*const [name, setName] = useState('John')*/
    const [blogs, setBlogs] = useState([
        {title: "My first group project",body:"ipsem Lorem...",author:"John",id:"1"},
        {title: "First day I met her",body:"ipsem Lorem...",author:"CSE",id:"2"},
        {title: "Facing first interview...",body:"ipsem Lorem...",author:"CSE",id:"3"}
    ])

    return ( 
        <div className="home">
            <BlogList blgs={blogs} title = "All blogs"/>
            <BlogList blgs={blogs.filter((blog) => blog.author === "John")} title = "John's blogs"/>
        </div>
     );
}
 
export default Home;