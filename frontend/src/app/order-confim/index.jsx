import product from '../../assets/product.jpeg'
import Header from '../header/index';
import Footer from '../footer/index';

const OrderComfirm = () => {
    return (
        <div className=' xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto px-3'>
            <Header />
            <div className="text-slate-200 mt-9">
                <div className="w-full p-3 rounded-lg shadow-orderComfirm mx-auto max-w-[600px] *:p-2">
                    <h1 className="font-semibold sm:text-4xl text-3xl">Xác nhận đơn hàng</h1>
                    <p>Cảm ơn bạn đã đặt hàng! Dưới đây là thông tin chi tiết về đơn hàng của bạn.</p>
                </div>
                <div className='mt-10 border rounded-md p-3 bg-orderItems'>
                    <table className='w-full text-center '>
                        <thead>
                            <tr className='*:p-2'>
                                <th className='w-1/2 text-left'>Sản phẩm</th>
                                <th className='w-1/6'>Số lượng</th>
                                <th className='w-1/6'>Đơn giá</th>
                                <th className='w-1/6'>Tổng giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='*:p-2'>
                                <td className='sm:flex sm:flex-wrap sm:items-center sm:gap-3 space-y-2'>
                                    <img src={product} alt="product image" className='w-[100px] h-[100px] object-cover rounded-md'/>
                                    <p className='text-left'>iphone 13</p>
                                </td>
                                <td>2</td>
                                <td>100,000 đ</td>
                                <td>200,000 đ</td>
                            </tr>
                            <tr className='*:p-2'>
                                <td className='sm:flex sm:flex-wrap sm:items-center sm:gap-3 space-y-2'>
                                    <img src={product} alt="product image" className='w-[100px] h-[100px] object-cover rounded-md'/>
                                    <p className='text-left'>Macbook pro M2 2023</p>
                                </td>
                                <td>2</td>
                                <td>100,000 đ</td>
                                <td>200,000 đ</td>
                            </tr>
                            <tr className='*:p-2'>
                                <td className='sm:flex sm:flex-wrap sm:items-center sm:gap-3 space-y-2'>
                                    <img src={product} alt="product image" className='w-[100px] h-[100px] object-cover rounded-md'/>
                                    <p className='text-left'>Apple Vision Pro 2023</p>
                                </td>
                                <td>2</td>
                                <td>100,000 đ</td>
                                <td>200,000 đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full'>
                    <button className='block mx-auto w-60 p-2 mt-4 bg-gradient-to-l to-buttonGradient1 from-buttonGradient2 rounded-full active:ring active:outline-none'>Tiếp tục mua sản phẩm</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrderComfirm;