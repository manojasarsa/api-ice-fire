import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../features/Book/helpers/getAllBooks";
import { useEffect, useState } from "react";

export const Home = () => {

    const [url, setUrl] = useState("");

    const navigate = useNavigate();
    const {
        book: { books, isLoading }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooks());
    }, []);

    const imgUrls = ["https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/5/4/0/a-game-of-thrones-original-imafbuq5eduw9ceb.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/0/3/3/sfi2-original-imafburhh3hysvqh.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/l26hdow0/book/j/0/p/a-storm-of-swords-part-2-blood-and-gold-original-imagdh68ud7nfzqv.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jph83gw0/book/0/3/1/a-feast-for-crows-original-imafbzzhtbqghgqx.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/ki6bgcw0-0/book/i/h/r/a-dance-with-dragons-original-imafyy74ppgfyauq.jpeg?q=70"
    ]

    const getRequiredBooks = (books) => {
        return books.filter((book) => ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons"].includes(book.name));
    }

    const iceAndFireBooks = getRequiredBooks(books);

    console.log("arr", iceAndFireBooks);

    return (
        <div className="flex flex-col m-auto">
            <header className="header-section h-screen">

                <div className="flex flex-col gap-4 w-[28rem] p-2 ml-[7rem] mt-[15rem]">
                    <h1 className="text-5xl text-[#fff] font-extrabold">Your Guide To Game of Thrones</h1>
                    <a className="text-3xl max-w-fit px-5 py-3 text-black  bg-[#fbbf24] hover:bg-black hover:text-[#fbbf24] ease-in-out duration-1000" href="#main-section">Explore</a>
                </div>

            </header>

            <main className="main-section h-screen pt-10" id="main-section">

                <div className="flex flex-col gap-4 w-11/12  p-2 mx-auto mt-[3rem] h-fit">
                    <h1 className="text-5xl self-center text-[#fff] font-extrabold">Books</h1>

                    <div className="flex books-container bg-black m-2">

                        {iceAndFireBooks.map((book) => (
                            <ul key={book.isbn} className="text-slate-100 p-8 flex">

                                <li>
                                    <div className="hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">

                                        <Link to={book.isbn}>
                                            <img
                                                src={imgUrls[iceAndFireBooks.indexOf(book)]}
                                                className="cursor-pointer"
                                                alt={book.name}
                                            />
                                        </Link>
                                        <h2>{book.name}</h2>
                                    </div>
                                </li>
                            </ul>
                        )
                        )}
                        

                    </div>

                </div>

            </main>
        </div>
    )
}