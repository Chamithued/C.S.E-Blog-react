import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

    /*const [name, setName] = useState('John')*/
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [error,setError] = useState(null)
        /*[{title: "My first group project",body:"ipsem Lorem...",author:"John",id:"1"},
        {title: "First day I met her",body:"ipsem Lorem...",author:"CSE",id:"2"},
        {title: "Facing first interview...",body:"ipsem Lorem...",author:"CSE",id:"3"}]*/


    useEffect(() => {
        
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data due to an error')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setisLoading(false);
            }).catch(err => {
                setError(err.message)
                setisLoading(false)
            })
    },[])


    return ( 
        <div className="home">
            {error && <div>{error}</div>}        {/*conditional rendering 36,37,38,39 */}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blgs={blogs} title = "All blogs"/>}
           {blogs && <BlogList blgs={blogs.filter((blog) => blog.author === "yoshi")} title = "John's blogs"/>}
        </div>
     );
}
 
export default Home;