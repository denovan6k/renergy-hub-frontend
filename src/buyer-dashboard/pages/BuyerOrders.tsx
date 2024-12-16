import { ProductsOrdered, Orders } from '../db/ProductsData';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "../../components/ui/card"

  import { Button } from '../../components/ui/button';

const BuyerOrders = () => {
  return (
     <section className=" md:ml-[250px] w-full h-full mb-10 px-3 py-3">
        <div className='flex items-center gap-2 py-4'>
            <h1 className="text-[#007300]">Ongoing/Delivered (5)</h1>
            <h1 className="">Cancelled/Returned (5)</h1>
        </div>
            
            {/* product container */}
            <div className='grid w-fit gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {ProductsOrdered.map((product: Orders, index: number) => (
                    <Card className='w-[230px]' key={index}>
                    <CardHeader>
                      <img src={product.img} alt="img" />
                    </CardHeader>
                    <CardContent>
                      <p className='text-[13px]'>
                        {product.item}
                      </p>
                      <h2>
                        Order 452
                      </h2>
                    </CardContent>
                    <CardFooter className='px-2 flex flex-col gap-3 items-center justify-center'>
                        <div className='flex items-center gap-4'>
                            <Button className='border bg-transparent border-slate-600'>
                                <h1 className='text-[#007300] px-1 text-semibold'>Confirmed</h1>
                            </Button>
                            <p className='text-[14px] text-slate-400'>
                                See Details
                            </p>
                        </div>
                        <div>
                            <p className='text-[15px]'>
                            Delivered between 1st to Nov
                            </p>
                        </div>
                      
                    </CardFooter>
                  </Card>
                  
                ))
                }
            </div>
        </section>
  )
}

export default BuyerOrders
