import Footer from '../footer/index'

const Register = () => {
    return (
        <div className=' xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto px-3'>
            <div className="text-slate-200 max-w-lg mx-auto border border-slate-700 rounded-lg bg-orderItems p-3 space-y-5 mt-8">
                <div className="mt-4">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-center text-green-300">Đăng ký</h1>
                </div>
                <div className="ml-2 flex flex-col gap-3">
                    <label htmlFor="#">
                        <span>Email/Phone</span>
                        <input type="text" className="w-full p-1.5 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg"/>
                    </label>
                    <label htmlFor="#">
                        <span>Mật khẩu</span>
                        <div className="relative">
                            <input type="password" placeholder="Ít nhất 3 ký tự" className="w-full p-1.5 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg placeholder:text-yellow-500/60"/>
                            <button className=" absolute top-2 right-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </label>
                    <label htmlFor="#">
                        <span>Gõ lại mật khẩu</span>
                        <div className="relative">
                            <input type="password" placeholder="Ít nhất 3 ký tự" className="w-full p-1.5 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg placeholder:text-yellow-500/60"/>
                            <button className=" absolute top-2 right-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </label>
                    <label htmlFor="#">
                        <span>Họ và tên</span>
                        <input type="text" className="w-full p-1.5 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg"/>
                    </label>
                    <label htmlFor="#">
                        <span>Địa chỉ</span>
                        <input type="text" className="w-full p-1.5 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg"/>
                    </label>
                    <label htmlFor="#" className="flex flex-wrap items-center gap-1">
                        <input type="checkbox" className="h-4 w-4 accent-pink-500"/>
                        <span className="text-yellow-500">Tôi đồng ý với các điều khoản và điều kiện</span>
                    </label>
                </div>
                <div>
                    <button className="w-full rounded-full bg-gradient-to-r from-buttonGradient1 to-buttonGradient2 p-2 active:ring active:ring-blue-500/50">Đăng ký</button>
                </div>
                <hr className="w-3/4 mx-auto"/>
                <div>
                    <p className="text-center mb-5">Bạn đã có tài khoản? <a href="#" className="text-green-300">Đăng nhập</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;