import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../features/Book/helpers/getAllBooks";
import { useEffect } from "react";

export const Home = () => {

    const navigate = useNavigate();
    const { 
        book: { books, isLoading}
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooks());
    }, []);

    const getRequiredBooks = (books) => {
        return books.filter((book) => ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons"].includes(book.name));
    }

    const iceAndFireBooks = getRequiredBooks(books);

    console.log("arr", iceAndFireBooks);

    return (
        <div className="flex flex-col m-auto">
            <header className="header-section w-screen h-screen">

                <div className="flex flex-col gap-4 w-[28rem] p-2 ml-[7rem] mt-[15rem]">
                    <h1 className="text-5xl text-[#fff] font-extrabold">Your Guide To Game of Thrones</h1>
                    <a className="text-3xl bg-[#fbbf24] max-w-fit px-3 py-2" href="#main-section">Explore</a>
                </div>

            </header>

            <main className="main-section w-screen h-screen" id="main-section">

                <div className="flex flex-col gap-4 w-11/12  p-2 mx-auto mt-[3rem] h-fit">
                    <h1 className="text-5xl self-center text-[#fff] font-extrabold">Books</h1>

                    <div className="books-container w-full bg-[#fcd34d] m-2">
                        <ul className="text-slate-100 flex justify-evenly p-8">
                            <li>
                                <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/5/4/0/a-game-of-thrones-original-imafbuq5eduw9ceb.jpeg?q=70"
                                        className="w-max-full h-auto cursor-pointer"
                                        alt=""
                                        onClick={() => navigate("/bookdetails")}
                                    />

                                </div>
                            </li>
                            <li>
                                <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/0/3/3/sfi2-original-imafburhh3hysvqh.jpeg?q=70"
                                        className="w-max-full h-auto cursor-pointer"
                                        alt=""
                                        onClick={() => navigate("/bookdetails")}
                                    />

                                </div>
                            </li>

                            <li>
                                <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/416/416/l26hdow0/book/j/0/p/a-storm-of-swords-part-2-blood-and-gold-original-imagdh68ud7nfzqv.jpeg?q=70"
                                        className="w-max-full h-auto cursor-pointer"
                                        alt=""
                                        onClick={() => navigate("/bookdetails")}
                                    />

                                </div>
                            </li>


                            <li>
                                <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/416/416/jph83gw0/book/0/3/1/a-feast-for-crows-original-imafbzzhtbqghgqx.jpeg?q=70"
                                        className="w-max-full h-auto cursor-pointer"
                                        alt=""
                                        onClick={() => navigate("/bookdetails")}
                                    />

                                </div>
                            </li>


                            <li>
                                <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/416/416/ki6bgcw0-0/book/i/h/r/a-dance-with-dragons-original-imafyy74ppgfyauq.jpeg?q=70"
                                        className="w-max-full h-auto cursor-pointer"
                                        alt=""
                                        onClick={() => navigate("/bookdetails")}
                                    />

                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="books-container w-full bg-[#fcd34d] m-2">

                        {iceAndFireBooks.map((book) => (
                            <div key={book.isbn} className="bg-blue-300">
                                <li>{book.name}</li>
                                <Link className="p-2 bg-blue-400 text-slate-100" to={book.isbn}>Explore Quiz</Link>
                            </div>
                        )
                         )}

                    </div>

                </div>

            </main>
        </div>
    )
}