import product from '../../assets/product.jpeg'
import Header from '../header/index';
import Footer from '../footer/index';
const DetailProduct = () => {
    return (
        <div className=' xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto px-3'>
            <Header />
            <div className="text-slate-200">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-semibold">Đây là trang chi tiết sản phẩm</h1>
                    <p>Sử dụng Tailwindcss</p>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-10 mt-10'>
                    <div className='space-y-4 relative'>
                        <div>
                            <img src={product} alt="product image"/>
                            <button type="button" className="group absolute -top-14 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <svg className="w-6 h-6 text-gray-600 group-hover:text-slate-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                                </svg>
                            </button>
                            <button type="button" className="group absolute -top-14 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <svg className="w-6 h-6 text-gray-600 group-hover:text-slate-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                                </svg>
                            </button>
                        </div>
                        <div className=' grid grid-cols-5 gap-1'>
                            <img src={product} alt="product image" className=' h-32 object-cover border-2 border-white' />
                            <img src={product} alt="product image" className=' h-32 object-cover' />
                            <img src={product} alt="product image" className=' h-32 object-cover' />
                            <img src={product} alt="product image" className=' h-32 object-cover' />
                            <img src={product} alt="product image" className=' h-32 object-cover' />
                        </div>
                    </div>
                    <div className='mt-7 space-y-4'>
                        <h1 className='text-2xl sm:text-3xl font-semibold'>Thông tin chi tiết sản phẩm </h1>
                        <p>Mô tả sản phẩm</p>
                        <p>Giá: $99</p>
                        <div className='flex flex-wrap gap-3 text-slate-50'>
                            <button className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 active:ring active:ring-blue-800'>Thêm vào giỏ hàng</button>
                            <button className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 active:ring active:ring-green-900'>Mua ngay</button>
                        </div>
                        <div className=' w-max border border-slate-100 px-1 font-semibold'>
                            <button className=' border-r px-2'>-</button>
                            <input type="text" defaultValue={1} className=' bg-transparent appearance-none text-center w-20 outline-none'/>
                            <button className='border-l px-2'>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;