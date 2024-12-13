const { default: ProductCard } = require("@/components/cards")


const hoodiepage = () => {

      return(
        <div className="rotesmain">
            <h1 className="routesH">Categories - Hoodies </h1>
            <h1 className="routesH2">Filter</h1>
            <div className="firstrow">
             <ProductCard
              name='Adidas Hoodie'
              description='Black Hoodie
              Hallowen Special Edition
              100% Cotton
              Oversized'
              price='319'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZ1PI0J7zGCgYqA8X9jartbJpRi3MCeSRs3-XuZ2ISgOv2OLzhSuyaik-ATENmkWos9-D9V8wI7qU3FVdFPnPn9EY489yM0kaBjRraK-8Hu3qFHGniaNJHhn5x8tPchOgxe7KW--E&usqp=CAc'
             />
              <ProductCard
              name='Supreme Hoodie'
              description='Black Hoddie
              100% cotton
              fitted size
              Casual Edition'
              price='279'
              image='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkRSvXQxTgOgjkwM_cuDR4E8L2ehWDgtIgT9q7cjfYaY7XKOEC5CeAbE-tLHbD5z0oWy5GTO9YKR_heYu15CsWMdwXsr4CpBAzVF6K8uJnzuJFY9Kqpr_SQfr-ei0l1dhgwK7wGw&usqp=CAc'
             />
              <ProductCard
              name='Supreme Hoodie'
              description='Black hoodie
              100% cotton
              oversized Fit
              Red Edition'
              price='99'
              image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJxtuOejnbOs7gtFvaIwaYxMtyQRelEgA7ROiTiwGLxACzljlQoJkfUJ8IhwKz2MiUz1Udp0kn3lccG9C6zhaGMrb-O26vnpuCgl1q4hv2WzT1sdRX7F0_4es4D3pzRIplHVytjtfNpa8&usqp=CAc'
             />
            </div>
            <div className="secondrow">
            <ProductCard
              name='Nike hoodie'
              description='Nike White Hoodie
              Normal Size 
              100% Cotton
              Casual'
              price='409'
              image='data:image/webp;base64,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'
             />
              <ProductCard
              name='Levis Hoodie'
              description='White Hoodie
              Oversized Fit
              100% Cotton'
              price='109'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRR9urhjEC02Y9BzfpCTY13SOfVP1M3RYl3kT85gD94VDoskUPoKibR3mdEPBVZubFiQERdMmNPub_bUr4GQyMl8aYe-0xQUdTRVJnDljQaF99QSoRfz6SDnsH41KkQZVQ6oTfq5oAwkZw&usqp=CAc'
             />
              <ProductCard
              name='Los Angeles Hoodie'
              description='White Hoddie
              Oversized
              100% Cotton
              Los Angeles edition'
              price='59'
              image='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3JKiMDYXMsfa7svYE55ozOXR-SVx2lcsH6n7YJ9sdXVszePN_tGLYM_8lTRBRX1rWwrvL06-93YksMFODijp9WsCe0ZLK6lkm-J0dMGsxkDPgCarUzpYp&usqp=CAc'
             />
            </div>
            <div className="thirdrow">
            <ProductCard
              name='Los Angeles Hoodie'
              description='Bold Brown Hoodie
              Oversized
              100% Cotton 
              Los Angeles Edition
              Warm'
              price='490'
              image='data:image/webp;base64,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'
             />
              <ProductCard
              name='Nike Hoodie'
              description='Badge Color Hoodie
              Oversized
              100% Cotton 
              Casual
              Warm'
              price='219'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2rABD_RX8DXgbvIpsGQECFeDX6-ZIGxANPYQ4Mu1ZJO1xn2XMB4QRUaVSbEzR4n33DVPog5nj7mHJuEUk8EKS12l1FLIByxrVXY-CkAAM_hzqwAQ-TgppkhcYYosKXwK5BfQGKwQ&usqp=CAc'
             />
              <ProductCard
              name=''
              description='Pale Brown Hoodie
              Oversized
              100% Cotton 
              Casual
              Warm'
              price='199'
              image='data:image/webp;base64,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'
             />
            </div>
        </div>
      )


}
export default hoodiepage