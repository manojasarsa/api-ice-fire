import "./bookdetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const BookDetails = () => {

    const {
        book: { books }
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
        <main className="main-book-wrapper sm:h-screen">

            <h2 className="hidden sm:block px-20 pt-20 text-center text-5xl self-center text-[#fff] font-extrabold">
                Whether you're starting for the first time or looking to dive deeper, we've got you covered.
            </h2>

            <div className="flex flex-col gap-4 w-11/12  p-2 mx-auto sm:mt-[2rem] h-fit">

                <h1 className="text-5xl self-center px-5 py-4 font-extrabold text-black  bg-[#fbbf24] hover:bg-black hover:text-[#fbbf24] ease-in-out duration-1000">About Book</h1>

                <div className="books-container w-full m-2 flex flex-col gap-8">

                    <div className="backdrop-opacity-10 backdrop-invert bg-[#fbbf24]/30 p-10 text-center mt-4 text-black   hover:bg-black/30 hover:text-[#fbbf24] ease-in-out duration-1000">

                        <ul className="flex flex-col align-center gap-4">
                            <div className="">
                                <span className="text-3xl font-bold pr-5">AUTHORS: </span>
                                <span className="text-3xl font-bold pr-5">{selectedBook.authors}</span>
                            </div>

                            <div className="">
                                <span className="text-3xl font-bold pr-5">PUBLISHER: </span>
                                <span className="text-3xl font-bold pr-5">{selectedBook.publisher}</span>
                            </div>

                            <div className="">
                                <span className="text-3xl font-bold pr-5">COUNTRY: </span>
                                <span className="text-3xl font-bold pr-5">{selectedBook.country}</span>
                            </div>

                            <div className="">
                                <span className="text-3xl font-bold pr-5">MEDIA TYPE: </span>
                                <span className="text-3xl font-bold pr-5">{selectedBook.mediaType}</span>
                            </div>

                            <div className="">
                                <span className="text-3xl font-bold pr-5">NUMBER OF PAGES: </span>
                                <span className="text-3xl font-bold pr-5">{selectedBook.numberOfPages}</span>
                            </div>
                        </ul>

                    </div>
                    <Link to={"/"} className="bg-black text-xl text-white w-fit px-4 py-2">{"<-"} Home</Link>
                </div>
            </div>

        </main>
    )
}