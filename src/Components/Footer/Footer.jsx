const Footer = () => {
    return (
        <footer className="container mx-auto grid xl:grid-cols-3 items-center justify-center justify-items-center py-20 mt-20 md:grid-cols-2 grid-cols-1 text-center xl:text-start gap-10 px-6 xl:px-0">
            <div>
                <img src=" https://i.ibb.co/f00B42N/div-2.png" className="mx-auto xl:mx-0" alt="" />
                <p className="text-white text-xs">Copyright © 2022 Certo Software Limited | Registered in <br /> England & Wales No. 10072356</p>
                <p className="text-xs text-white mt-10">Designed & developed by Bigger Picture</p>
                <p className="text-xs text-white mt-10 ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
            <div>
                <img src="https://i.ibb.co/hs0C7CF/div-1.png" alt="" />
            </div>
            <div>
                <img src="https://i.ibb.co/xYbbxmc/form-newsletter-signup-footer-form.png" alt="" />
            </div>
        </footer>
    );
};

export default Footer;