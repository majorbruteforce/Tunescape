import style from "./footer.module.css"
export default function Footer() {
    return (

        <footer className={`${style.colorTheme} footer footer-center p-10 bg-gradient-to-r from-gray-870 to-gray-900`}>
            <aside>
                <p className="font-bold">
                    Tunescape - A Cloud Powered Music Streaming Platform <br />New way of listening to low latency music,for all
                </p>
                <p>Copyright © {new Date().getFullYear().toLocaleString()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/majorbruteforce/Tunescape" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.208 11.385.6.11.793-.262.793-.585 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.613-4.042-1.613C4.827 17.11 3.54 16.7 3.54 16.7c-1.08-.738.084-.723.084-.723 1.194.084 1.818 1.227 1.818 1.227 1.06 1.818 2.784 1.293 3.46.99.107-.77.415-1.293.754-1.588-2.648-.3-5.42-1.324-5.42-5.89 0-1.3.465-2.37 1.227-3.21-.12-.303-.532-1.523.117-3.17 0 0 1.005-.322 3.3 1.23a11.568 11.568 0 0 1 3-.39c1.025.007 2.057.137 3 .39 2.292-1.553 3.295-1.23 3.295-1.23.652 1.648.24 2.867.12 3.17.747.825 1.2 1.91 1.2 3.21 0 4.578-2.777 5.587-5.432 5.883.427.36.81 1.095.81 2.206 0 1.59-.014 2.874-.014 3.27 0 .322.18.7.803.583C20.566 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    )
}