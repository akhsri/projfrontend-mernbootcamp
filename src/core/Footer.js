import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer bg-light mt-auto border border-gray py-3">
                <div className="row px-50">
                    <div className="col-12 text-center">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-youtube"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                    </div>
                </div>
                <div className="container-fluid bg-light text-dark-50 text-center ">
                    <h4>If you got any questions, feel free to reach out!</h4>
                    <button className="btn btn-danger btn-lg rounded-pill">Contact Us</button>
                </div>
                <div className="container">
                    <span className="text-muted">An amazing <span className="text-dark">MERN</span> Bootcamp</span>
                </div>

            </footer>

            <style>{`
        .fa {
            padding: 20px;
            padding-left: 14px;
            padding-top: 12px;
            font-size: 30px;
            width: 50px;
            height: 50px;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
            border-radius: 50%;
          }
          
          .fa:hover {
              opacity: 0.7;
          }
          
          .fa-facebook {
            background: #3B5998;
            color: white;
          }
          
          .fa-twitter {
            background: #55ACEE;
            color: white;
          }
          
          
          
          .fa-youtube {
            background: #bb0000;
            color: white;
          }
          
          .fa-instagram {
            background: #125688;
            color: white;
          }
          
          .fa-pinterest {
            background: #cb2027;
            color: white;
          }
          
          
        `}</style>

        </Fragment>
    )
}

export default Footer
