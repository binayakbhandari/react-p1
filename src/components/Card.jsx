
const Card = () => {
    return (
        <>
            <div className="flex mb-10">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer hover:scale-101">
                    <img className="w-full" src="https://img.freepik.com/premium-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_1236033-36411.jpg?semt=ais_hybrid&w=740&q=80" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Car</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ReactJS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Vite</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#MERN</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card