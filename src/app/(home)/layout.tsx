import Header from "@/components/Shared/header";
import Footer from "@/components/Shared/footer";

export default function RootLayout({
  children,
}: {  

  children: React.ReactNode;
}) {
  return (
    <div>
      
        <Header/>
      <main> {children}</main> 
        <Footer/>
  
    </div>
  );
}
