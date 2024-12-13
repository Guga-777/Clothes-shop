const { default: ProductCard } = require("@/components/cards")


const pantspage = () => {

      return(
        <div className="rotesmain">
            <h1 className="routesH">Categories - Hoodies </h1>
            <h1 className="routesH2">Filter</h1>
            <div className="firstrow">
            <ProductCard
              name='Bottega Venetta'
              description='Bottega Venetta light blue heans oversized 100% cotton'
              price='139'
              image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuSEpOZqjbeo4UiIY1c4kH8XLEpJwonHvs0FRGWXk2fneiSfaJcm1rBspAPWgpqRPJAP8awa_hJk4YhZQfyHVM7-dLFPIh1DKHq9ER56hBCNgWQnbGzieA8FO4p9ykQU4ybGsO9g&usqp=CAc'
             />
              <ProductCard
              name='Prada Jeans'
              description='Prada black jeans oversized
              100% cotton'
              price='599'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5NFPIgOCHxp6qnGaPzvpbCRj_rVPnRIMod3Z1jMipKFXJyObKg0lw1L4HvEAUr12w4fk_uRictoHL_WX7i95p-D_UWmPJ1rJynJF4paFH06sSm3ZZlWmBYyG-lITaTknRucCSfA&usqp=CAc'
             />
              <ProductCard
              name='Loewe Jeans'
              description='Loewe dark blue jeans 100% cotton'
              price='99'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6coOJniRlLFLk_24kVmnYZ49-Klfz17UJfZnZDFrpt2mMBRKnya2Ooz0roQKOuhnyFGCjYfYx46SMG7p0D50k08G32kpt345GwiBr7UsfAM_OThOLZYlLc_Rh6Dmtkc0A53sHzA&usqp=CAc'
             />
            </div>
            <div className="secondrow">
            <ProductCard
              name='Levis Jeans'
              description='light blue jeans fitted style'
              price='119'
              image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSptZ4xgOsg69PevVm2hNoJn1egFTBsoQ8V3NvGGzQ9C1uEhIK78THizHiqA5YWSEKCmhoV-_pwpZ6VRrk1NCeWirPqytqSvC0payHwSe8vAM7lEAjzM1wrDMg&usqp=CAc'
             />
              <ProductCard
              name='Nike Pants'
              description='Oversized black cotton Pants
              100% cotton'
              price='99'
              image='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-WD7lkXFIWWZbMOfu2O46zmyx5vBld3lQmXGBl07qa_OG9MVwfDcb4SfumD1Hyq4wbRzqe4-ll9Dz6EDVLBOGThwh_SRaysTGCqyjcHRho_GvTxCGURaq&usqp=CAc'
             />
              <ProductCard
              name='Jil Salander'
              description='Jil Salander Classic style black Pants'
              price='400'
              image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdeSIcssNEA_nWPHGJ_VuxZgng_dzxd0s3bdApb1Nz-u3kquIJKFBy9WJmA_SD154CLJSSxIKAAtGD1Jl07g8F0JSI5Je3D2F_mMDszfxiudyZeG9TLuQllIYhZPhO_pBMsa5B-lw&usqp=CAc'
             />
            </div>
            <div className="thirdrow">
             <ProductCard
              name='Saint Laurant'
              description='Saint Laurant grey sport type pants 100% cotton'
              price='199'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGZZ7O1JIwfQFGsYjYWmD_LsA75NLHTpcEGJQvHFE55Fsyuvm-y8Z9GrRhGNJy52lN7qmJiTHo7q90EMTIoAfpCSr687PPN4vYvIi3JLLLuHPcUaW5rM3DUZzM5ZbbmRsgfCP8UUs&usqp=CAc'
             />
              <ProductCard
              name='Saint Laurant'
              description='Saint Laurant Black Jeans
              100% cotton casual type'
              price='309'
              image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFeB34_7hW3r6Ef0PN8bBMVYr_tov7NXelu21JRwOkuqlhiNCx9BdDuC1PHzau4H522jDMj_dWgT1VnOyJJ7Wf1rav-467T0fr_edt5sLkvyVkW2EkgcInGRhTb4TRQmvO98P4XxU&usqp=CAc'
             />
              <ProductCard
              name='Jil Sander'
              description='Jil Sander sport type Pants Black color'
              price='200'
              image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyxSJQU19XA9wx5DXHa4t4cMADuE5NvbKIKpPfTqj1AksqBJphqKF6Srj_icX36Hw3YeYeKlpa5BdOu35qx_y2dEnN_Ur85iLmcI-sRNAKzWv0tI53-jy8DFt_ozQifGFkCYADng&usqp=CAc'
             />
            </div>
        </div>
      )


}
export default pantspage