
const Navbar = () => {
    return(
        <>
        /* Header styles */
                header {background - color: #333; color: #fff; padding: 1rem 0; text-align: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); } /* a large section at the top of the website */

                /* Navigation bar styles */
                nav ul {list - style: none; display: flex; justify-content: center; margin-top: 1rem; } /* Removes default bullet points */
                nav ul li {margin: 0 1rem; }
                nav ul li a {color: #fff; text-decoration: none; font-weight: bold; padding: 0.5rem 1rem; transition: color 0.3s ease; } /* Removes default underline from links and smooth color change on hover */
                nav ul li a:hover {color: #4CAF50; } /* Changes link color when the user hovers over it */

                
        </>
    )
}

export default Navbar