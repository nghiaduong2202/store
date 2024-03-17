import image from '../../assets/logo.jpg'
const Header = () => {
    return (
        <div className=" w-full h-max py-10 flex flex-wrap justify-between md:justify-start items-center font-semibold">
            <a href="#">
                <img src={image} alt="Logo" className='h-12 w-12 border border-transparent rounded-full ring-4 ring-pink-500'/>
            </a>
            <button className=' md:hidden mr-2 rounded-sm w-14 h-10 border-transparent active:ring active:ring-black focus:ring focus:ring-black'>
                <svg className="w-6 h-6 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            <div className='hidden md:block w-max text-slate-400'>
                <ul className='flex flex-row mx-5'>
                    <li>
                        <a href="#" className='block px-4 py-2 rounded-full hover:bg-violet-600 hover:text-slate-100 active:ring active:ring-violet-700'>Trang chủ</a>
                    </li>
                    <li>
                        <a href="#" className='block px-4 py-2 rounded-full hover:bg-violet-600 hover:text-slate-100 active:ring active:ring-violet-700'>Thông báo</a>
                    </li>
                    <li>
                        <a href="#" className='flex flex-wrap px-4 py-2 rounded-full hover:bg-violet-600 hover:text-slate-100 active:ring active:ring-violet-700'>
                            <svg className="flex-1 w-6 h-6 fill-current" viewBox="0 0 24 24" >
                                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                            </svg>
                            <p>Giỏ hàng</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='block px-4 py-2 rounded-full hover:bg-violet-600 hover:text-slate-100 active:ring active:ring-violet-700'>Đăng nhập</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;