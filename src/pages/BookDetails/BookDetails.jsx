import "./bookdetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const BookDetails = () => {

    const { 
        book: { books, isLoading}
    } = useSelector(state => state);

    const [selectedBook, setSelectedBook] = useState(books);
    const { bookid } = useParams();

    useEffect(() => {
        let res = books.slice();
        if (bookid) {
            res = res.find(
                (book) => book.isbn === bookid
            )
        }
        setSelectedBook(res);
    }, [bookid, books])

    console.log("BOOK --", selectedBook);

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
                            <h2 className="">NAME: <span className="">{ selectedBook.name }</span></h2>
                            <h2 className="">AUTHORS: <span className="">{ selectedBook.authors }</span></h2>
                            <h2 className="">PUBLISHER: <span className="">{ selectedBook.publisher }</span></h2>
                            <h2 className="">COUNTRY: <span className="">{ selectedBook.country }</span></h2>
                            <h2 className="">MEDIA TYPE: <span className="">{ selectedBook.mediaType }</span></h2>
                            <h2 className="">NUMBER OF PAGES: <span className="">{ selectedBook.numberOfPages }</span></h2>
                        </div>
                    </div>

                    {/* <h1 className="text-5xl self-center text-[#fff] font-extrabold">Featured Characters</h1> */}

                    {/* <ul className="text-slate-100 flex justify-evenly p-8">
                        {selectedBook.po}
                        <li>
                            <div className="w-[15rem] h-auto flex flex-col hover:scale-95 sepia-0 hover:sepia ease-in-out duration-700">
                                <img
                                    src="https://rukminim1.flixcart.com/image/416/416/jpodaq80/book/5/4/0/a-game-of-thrones-original-imafbuq5eduw9ceb.jpeg?q=70"
                                    className="w-max-full h-auto cursor-pointer"
                                    alt=""
                                />

                            </div>
                        </li>
                    </ul> */}

                </div>

            </div>

        </main>
    )
}