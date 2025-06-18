const BlogList = ({title,blgs}) => { {/*instead of this, const BlogList = (props) =>  , we can deconstruct props*/}
    //const blogs = props.blgs;
    //const title = props.title

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blgs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;