import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18next/i18n"; //აუცილებლად დააიმპორტეთ ბიბლიოთეკა

export default function Page ({children}){
  const {t} = useTranslation() // გამზადებული ჰუკი ენის შესაცვლელად. ვიყენებთ მხოლოდ t  დასახელებას
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                  <i className="fas fa-film mr-2" />
                   TECH SHOP
                </Link>
{/* ენის ცვლილების ღიალკზე მისაბმელად არსებობს ფუნქცია, რომელიც უნდა წამოვიღოთ ბიბლიოთეკიდან. 
არგუმენტად გადაეცით ის ენა რომლის შესაბამისი json არსებობს და აუცილებლად აღწერილია i18next ფაილში*/}
                <button onClick={() => i18n.changeLanguage("en")}>ENG</button>
                <button onClick={() => i18n.changeLanguage("geo")}>GEO</button>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/product"
                        className="nav-link nav-link-1 active"
                        aria-current="page"
                      >
                        {t('PRODUCTS')} 
{/* არცერთი სახელი აღარ იქენბა პირდაპირ დაწერილი სიტყვიერად, მხოლოდ გამოვინებთ ჰუკს და იმ ქის რომელიც jsonში აღვწერეთ */}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-link-3" >
                      {t('About')}
  {/* არცერთი სახელი აღარ იქენბა პირდაპირ დაწერილი სიტყვიერად, მხოლოდ გამოვინებთ ჰუკს და იმ ქის რომელიც jsonში აღვწერეთ */}

                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-link-4" >
                      {t('Contact')}
{/* არცერთი სახელი აღარ იქენბა პირდაპირ დაწერილი სიტყვიერად, მხოლოდ გამოვინებთ ჰუკს და იმ ქის რომელიც jsonში აღვწერეთ */}

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <hr />

      {children}


  <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <div className="container-fluid tm-container-small">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                  <h3 className="tm-text-primary mb-4 tm-footer-title">
                    About Movies
                  </h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  asperiores corrupti molestiae velit magni mollitia alias aperiam
                  doloremque vel eius, quod tempora minima aspernatur eveniet
                  excepturi assumenda dicta, suscipit laboriosam.
                  <p />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                  <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                  <ul className="tm-footer-links pl-0">
                    <li>
                      <a href="#">Advertise</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Our Company</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                  Copyright 2020 All rights reserved.
                </div>
              </div>
            </div>
          </footer>
          </div>
    )
}