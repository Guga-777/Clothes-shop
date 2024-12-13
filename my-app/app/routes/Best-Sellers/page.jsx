import ProductCard from "@/components/cards"
import Link from "next/link"

export default function bestSellers () {


return(
     <div>
        <header className=" bg-gray-800 text-white ml-48 mr-48 rounded-b-3xl *">
           
           <nav className="container mx-auto p-4 pt-4">
              <ul className="flex justify-center space-x-8">
                <li><Link href={`../`} className="hover:text-orange-600 delay-200">Home</Link></li>
                <li><Link href="#" className="hover:text-orange-600 delay-200">Gift Ideas</Link></li>
                <li><Link href="#" className="hover:text-orange-600 delay-200">New Releases</Link></li>
                <li><Link href="#" className="hover:text-orange-600 delay-200">Today's Deals</Link></li>
                <li><Link href="#" className="hover:text-orange-600 delay-200">Customer Service</Link></li>
              </ul>
            </nav>          
          </header>
        <h1 className="flex justify-center mt-7 font-extrabold text-3xl ">Best Sellers Of The Past Year</h1>

    <div className=" mt-10 ">
    <div className="flex justify-evenly ">
    <ProductCard 
    name = 'Man T-shirt' 
    description= 'man basic Tee'
    price='45'
    image=' https://html.design/demo/eflyer/images/tshirt-img.png '
    />
    <ProductCard 
    name = 'Man T-shirt' 
    description= 'man basic Tee'
    price='24'
    image=' https://html.design/demo/eflyer/images/dress-shirt-img.png '
    />
    <ProductCard 
    name = 'Woman Dress' 
    description= 'Woman'
    price='76'
    image='https://html.design/demo/eflyer/images/women-clothes-img.png '
    /> 
    </div>
    
    {/* second row */}
    <div className="flex justify-evenly mt-10 mb-10">
    <ProductCard 
    name = 'Man pants' 
    description= 'man pant'
    price='80'
    image=' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYKV5JYYpBO22o38RGANoJsFKj1uLpV-
    iTJVbeEFbOtzKoH7WMtr7jjOrSG8bmASjGm__T_JGrl6ja9IXUNV8o91-CQO6btXSy_4KTdfQmn1bLDTI58J7XBbWm-QmOQdgjn-zGtYwcrA&usqp=CAc '
    />
    <ProductCard 
    name = 'Man coat' 
    description= 'man coat'
    price='170'
    image=' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSarGuQ3iEpOccTAxTpdnQLI2-wgI-mU7U8pSJ_Uyvcy4JoYOz_
    FHOY0xGp09TgIbpdnTbydDg7SKfmkuMiHr3DDi0-uLgKfI_VmJb6HNFn6QZBmkPbPtzZSnWT5fKjTlVRGyjvc7M&usqp=CAc '
    />
    <ProductCard 
    name = 'man hoodie' 
    description= 'Hoodie'
    price='90'
    image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUWat6ybcqJLHGXI37EN9ZOGwpBtk9oLctii0t6gTnvc7Qd7nUsCnaRSMXy60XZ5TyVo5e6p-
    M5u5iqaEbnJnPtXgZY0mr7toHz7AQsV-Wh259W_9zSWWRTwWBInC5OcnN1SXbdA&usqp=CAc '
    />
    </div>
    </div>
  </div>
)

}