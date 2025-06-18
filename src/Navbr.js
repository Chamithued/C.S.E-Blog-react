const Navbar = () =>  {
    return (
        <nav className="navbar">
            <h1>C.S.E blog</h1>
            <div className="links">
                <a href="/">Home</a>  {/*Below inline styles used, for inline style can't use css ,have to use jsx*/}
                <a href="/" style={{      
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;