


function Navbar({ postData }) {


    const sidenav = {
        height: '100%',
        width: '160px',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: '#111',
        overflowX: 'hidden',
        paddingTop: '20px',
    }


    const link = {
        padding: '6px 8px 6px 16px',
        textDecoration: 'none',
        fontSize: '25px',
        color: '#818181',
        display: 'block'
    }


    

    return (
        <>

            <div style={sidenav}>
                <a style = {link} href="#about">About</a>
                <a style = {link} href="#services">Services</a>
                <a style = {link} href="#clients">Clients</a>
                <a style = {link} href="#contact">Contact</a>
            </div>





        </>
    )
}

export default Navbar;