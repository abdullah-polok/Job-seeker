import icon from '../../assets/android-chrome-512x512.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-zinc-100 shadow-md text-black mt-24">
            <aside>
                <img className='w-[50px]' src={icon} alt="" />
                <p>JobSeeker<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title text-base">Company</header>
                <a href='https://www.facebook.com/jobseeker.srilanka/' className="link link-hover text-base">About us</a>
                <a href='https://www.facebook.com/jobseeker.srilanka/' className="link link-hover">Contact</a>
                <a href='https://www.facebook.com/jobseeker.srilanka/' className="link link-hover">Jobs</a>
                <a href='https://www.facebook.com/jobseeker.srilanka/' className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-base">Legal</header>
                <a href='https://www.jobseeker.com/en/terms' className="link link-hover text-base">Terms of use</a>
                <a href='https://www.jobseeker.com/en/privacy' className="link link-hover text-base">Privacy policy</a>
                <a href='https://www.jobseeker.com/en/privacy' className="link link-hover text-base">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;