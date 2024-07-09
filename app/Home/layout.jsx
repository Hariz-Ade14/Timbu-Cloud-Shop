"use client"
import {Header} from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";


export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<Header/>
			
			 <body className>
				{children}
			 </body>
			<Footer/>
			
		</html>
		
	);
}
