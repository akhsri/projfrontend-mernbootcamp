import React, { Fragment } from 'react'
import Menu from './Menu';
import Footer from './Footer';


const Base = (
    { title = "",
        description = "",
        className = "bg-light text-dark",
        children }
) => {
    return (
        <Fragment>
            <div className="bg-light" >
                <Menu />
                <div id="home">
                    <div className="container-fluid">

                        <div className={className}>{children}</div>
                    </div>

                </div>
                <div>
                    <Footer />
                </div>

            </div>
            <style>{`
            #home{
                margin: 50px
            }

            
           
              
              
              
        `}</style>
        </Fragment>
    )
}

export default Base
