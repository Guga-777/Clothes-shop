const { default: ProductCard } = require("@/components/cards")


const hoodiepage = () => {

      return(
        <div className="hoodiemain">
            <h1 className="routesH">Categories - Hoodies </h1>
            <h1 className="routesH2">Filter</h1>
            <div className="firstrow">
            <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
            </div>
            <div className="secondrow">
            <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
            </div>
            <div className="thirdrow">
             <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
              <ProductCard
              name=''
              description=''
              price=''
              image=''
             />
            </div>
        </div>
      )


}