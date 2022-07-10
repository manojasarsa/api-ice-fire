import "./bookdetails.css";

export const BookDetails = () => {
    return (
        <main className="">

            <div className="flex flex-col gap-4 w-11/12  p-2 mx-auto mt-[3rem] h-fit">
                <h1 className="text-5xl self-center text-[#fff] font-extrabold">Books</h1>

                <div className="books-container w-full bg-[#fcd34d] m-2">

                    <div className="bg-blue-200">
                        <h1 className="text-5xl self-center text-[#fff] font-extrabold">About Book</h1>
                        
                        <h2 className="text-5xl self-center text-[#fff] font-extrabold">
                        Whether you're starting for the first time or looking to dive deeper, we've got you covered.
                        </h2>

                        <div className="">
                            <h2 className="">NAME: <span className="">"BOOK NAME"</span></h2>
                            <h2 className="">AUTHORS: <span className="">"BOOK NAME"</span></h2>
                            <h2 className="">PUBLISHER: <span className="">"BOOK NAME"</span></h2>
                            <h2 className="">COUNTRY: <span className="">"BOOK NAME"</span></h2>
                            <h2 className="">MEDIA TYPE: <span className="">"BOOK NAME"</span></h2>
                            <h2 className="">RELEASED: <span className="">"BOOK NAME"</span></h2>
                        </div>
                    </div>

                    <h1 className="text-5xl self-center text-[#fff] font-extrabold">Featured Characters</h1>

                    <ul className="text-slate-100 flex justify-evenly p-8">
                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/5/4/0/a-game-of-thrones-original-imafbuq5eduw9ceb.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>
                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/0/3/3/sfi2-original-imafburhh3hysvqh.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>

                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/l26hdow0/book/j/0/p/a-storm-of-swords-part-2-blood-and-gold-original-imagdh68ud7nfzqv.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>


                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/jph83gw0/book/0/3/1/a-feast-for-crows-original-imafbzzhtbqghgqx.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>


                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/ki6bgcw0-0/book/i/h/r/a-dance-with-dragons-original-imafyy74ppgfyauq.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>


                    </ul>

                </div>

            </div>

        </main>
    )
}