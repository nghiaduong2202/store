import Header from '../header/index';
import Footer from '../footer/index';

const Login = () => {
    return (
        <div className=' xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto px-3'>
            <Header />
            <div className="text-slate-200 max-w-lg mx-auto border border-slate-800 rounded-lg bg-orderItems p-3 space-y-6">
                <h1 className="text-center text-2xl sm:text-3xl font-semibold text-green-300">Đăng nhập</h1>
                <div className="space-y-8">
                    <label htmlFor="#" className="block">
                        <span>Email/Phone</span>
                        <input type="text" className="w-full bg-transparent border-0 border-b-2 p-2 focus:ring focus:ring-blue-500 focus:outline-none focus:rounded-md"/>
                    </label>
                    <label htmlFor="#" className="block">
                        <span>Mật khẩu</span>
                        <div className="relative">
                            <input type="password" placeholder="Ít nhất 3 ký tự" className="w-full bg-transparent border-0 border-b-2 p-2 focus:ring focus:ring-blue-500 focus:outline-none focus:rounded-md placeholder:text-yellow-600 placeholder:opacity-60"></input>
                            <button className=" absolute top-2 right-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </label>
                </div>
                <div className="flex flex-wrap justify-between">
                    <label htmlFor="#" className="flex items-center gap-1">
                        <input type="checkbox"  className="w-4 h-4 accent-pink-500"/>
                        <span className="text-yellow-500">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="text-green-300">Quên mật khẩu</a>
                </div>
                <div className="w-full">
                    <select name="role" id="role" className=" appearance-none p-1.5 w-52 rounded-md border border-pink-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 *:font-medium">
                        <option value="0" disabled selected className=' text-gray-400'>Quyền đăng nhập</option>
                        <option value="1" className='text-black'>Người dùng</option>
                        <option value="2" className='text-black'>Quản trị viên</option>
                    </select>
                </div>
                <div>
                    <button className="w-full bg-gradient-to-r from-buttonGradient1 to to-buttonGradient2 p-2 rounded-full active:ring active:ring-blue-500/40">Đăng nhập</button>
                </div>
                <hr className=" block w-3/4 mx-auto bg-yellow-500 my-2"/>
                <div>
                    <p className="text-center mb-5">Bạn chưa đăng ký? <a href="#" className="text-green-300">Tạo tài khoản</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
