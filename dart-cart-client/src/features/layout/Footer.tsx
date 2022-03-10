import Navbar from "./Navbar";
import About from "./About";
import SocialMedia from "./SocialMedia";
import UsefulLinks from "./UsefulLinks";
import FooterNav from "./FooterNav";

export default function Footer() {
    // divs dealing with managing columns were not abstracted away so this area can focus on applying styles correctly

    return (
        <footer className="text-center text-lg-start bg-black">
            <section className="footer-info">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <SocialMedia />
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
                            <FooterNav />
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <UsefulLinks />
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <About />
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2022 Dart Cart
            </div>
        </footer>
    );
}
