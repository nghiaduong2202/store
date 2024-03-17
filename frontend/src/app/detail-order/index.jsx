import product from '../../assets/product.jpeg'
import Header from '../header/index'
import Footer from '../footer/index'
const DetailOrder = () => {
    return (
        <div className=' xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto px-3'>
            <Header />
            <div className="text-slate-200">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-semibold">Đây là trang Order</h1>
                    <p>Sử dụng Tailwindcss</p>
                </div>
                <div className="mt-8 md:grid md:grid-cols-2 md:gap-6">
                    <div className="font-semibold flex flex-col gap-4">
                        <h1 className="text-2xl sm:text-3xl text-pink-500">Thông tin người nhận</h1>
                        <label htmlFor="#">
                            <span>Họ và tên</span>
                            <input type="text" className="w-full p-2 mt-2 bg-productItem border border-slate-700 rounded-lg focus:ring-1 focus:outline-none "/>
                        </label>
                        <label htmlFor="#">
                            <span>Email</span>
                            <input type="email" name="email" id="email" className="w-full p-2 mt-2 bg-productItem border border-slate-700 rounded-lg focus:ring-1 focus:outline-none invalid:ring invalid:ring-pink-600"/>
                        </label>
                        <label htmlFor="#">
                            <span>Số điện thoại</span>
                            <input type="text" className="w-full p-2 mt-2 bg-productItem border border-slate-700 rounded-lg focus:ring-1 focus:outline-none "/>
                        </label>
                    </div>
                    <div className="space-y-4 mt-5 md:mt-0">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-semibold text-green-300">Sản phẩm đã đặt hàng</h1>
                        </div>
                        <div className="border border-slate-300 shadow-lg rounded-lg p-2 bg-orderItems">
                            <table className='text-center w-full'>
                                <thead>
                                    <tr className='*:p-2'>
                                        <th className=' w-1/2 text-left'>Sản phẩm</th>
                                        <th className=' w-1/6'>Số lượng</th>
                                        <th className=' w-1/6'>Đơn giá</th>
                                        <th className=' w-1/6'>Tổng giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='*:p-2'>
                                        <td className='flex flex-wrap items-center gap-2'>
                                            <img src={product} alt="product image"  className='object-cover w-[100px] h-[100px] rounded-md'/>
                                            <span>Tên sản phẩm</span>
                                        </td>
                                        <td>2</td>
                                        <td>100,000 đ</td>
                                        <td>200,000 đ</td>
                                    </tr>
                                    <tr className='*:p-2'>
                                        <td className='flex flex-wrap items-center gap-2'>
                                            <img src={product} alt="product image"  className='object-cover w-[100px] h-[100px] rounded-md'/>
                                            <span>Tên sản phẩm</span>
                                        </td>
                                        <td>1</td>
                                        <td>150,000 đ</td>
                                        <td>150,000 đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-right">Tổng giá: 350,000 đ</h2>
                        </div>
                        <div>
                            <label htmlFor="#">
                                <span className="font-semibold text-2xl sm:text-3xl text-pink-500">Nhập coupon</span>
                                <div className="mt-3 flex flex-wrap">
                                    <input type="text" placeholder="Nhập coupon" className="p-2 bg-productItem border-slate-700 rounded-l-lg focus:ring-1 focus:outline-none w-3/5"/>
                                    <button className="p-2 text-center w-2/5 rounded-r-full active:ring active:ring-blue-500 acitve:outline-none bg-gradient-to-r from-buttonGradient1 to-buttonGradient2">Áp dụng</button>
                                </div>
                            </label>
                        </div>
                        <div>
                            <button className="p-2 bg-gradient-to-r from-buttonGradient1 to-buttonGradient2 w-52 rounded-full active:ring active:ring-blue-500">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailOrder;