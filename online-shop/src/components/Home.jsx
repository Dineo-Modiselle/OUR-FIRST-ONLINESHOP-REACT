import { useContext } from "react";
import { MyContext } from "./ContextProvider";
import { Loader } from "lucide-react";
import NavBar from "./NavBar";
import Footer from "./Footer";



export default function Home() {
  const { shop, loading, error } = useContext(MyContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" size={90} />
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <NavBar />
      <h1 className="flex items-center text-4xl  p-5 text-[#50d71e]">Our Products:</h1>
      
    
      <div className="flex flex-wrap">
        {shop.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="border p-4 rounded-lg h-full flex flex-col">
              <img
                src={product.image}
                alt={product.title}
                className=" h-48 object-contain border-4"
              />
              <h2 className="text-xl font-bold mt-2">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-red-500">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}