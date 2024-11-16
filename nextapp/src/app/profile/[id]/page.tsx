export default function  UserProfile ({params}: any){
    return(
        <div className="h-screen flex flex-col justify-center items-center ">
                <div className="flex flex-col  bg-pink-600  ">
            <h1>profile</h1>
            <hr />
            <p className="text-4xl mt-4 ">profile page <span className="bg-orange-500 rounded-sm p-2">{params.id}</span> </p>
        </div>
        </div>
       
    )
}