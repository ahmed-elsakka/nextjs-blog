import Link from "next/link";
import '../app/globals.css';


const Layout = ({children}) => {
    return (
        <div className="container mx-auto px-4">
            <header className="py-4">
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/add-post">Add Post</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;