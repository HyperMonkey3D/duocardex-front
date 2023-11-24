import Link from "next/link"

const HomeScreen = () => {
    return(
        <div className="flex flex-col justify-between  h-full">
            <div>
                <h2 className="text-2xl font-bold">Welcome user.name</h2>
            </div>
            <div className="h-[500px] bg-slate-100">
                <form className="flex flex-col">
                    <label className="text-2xl font-semibold">Find Something</label>
                    <div className="w-full h-fit bg-slate-400 flex flex-wrap lg:flex lg:flex-nowrap justify-between">
                        
                        <input type="text" className="my-[15px] w-full  py-2"/>
                        <button className="px-[30px] ml-[15px] my-[14px] bg-brand-black text-white">Search</button>
                    </div>
                </form>
                <div className="flex flex-wrap md:flex md:flex-nowrap justify-between py-[50px]">
                    <div className="bg-slate-700 w-[350px] h-[130px] flex justify-center items-center"> 
                        <Link href={"/add-clinic"} >Add New Clinic</Link>
                    </div>
                    <div className="bg-slate-700 w-[350px] h-[130px] flex justify-center items-center">
                        <Link href={"/add-order"}>Add New Order</Link>         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen