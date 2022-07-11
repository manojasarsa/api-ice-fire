import "./bookdetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const BookDetails = () => {

    const {
        book: { books, isLoading }
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
        <main className="main-book-wrapper w-screen h-screen">

            <h2 className="px-20 pt-20 text-center text-5xl self-center text-[#fff] font-extrabold">
                Whether you're starting for the first time or looking to dive deeper, we've got you covered.
            </h2>

            <div className="flex flex-col gap-4 w-11/12  p-2 mx-auto mt-[2rem] h-fit">

                <h1 className="text-5xl self-center text-[#fff] font-extrabold">About Book</h1>

                <div className="books-container w-full bg-black m-2">

                    <div className="p-10 text-center mt-4 text-[#fff]">

                        <ul className="flex flex-col align-center">
                            <li className="">NAME: <span className="">{selectedBook.name}</span></li>
                            <li className="">AUTHORS: <span className="">{selectedBook.authors}</span></li>
                            <li className="">PUBLISHER: <span className="">{selectedBook.publisher}</span></li>
                            <li className="">COUNTRY: <span className="">{selectedBook.country}</span></li>
                            <li className="">MEDIA TYPE: <span className="">{selectedBook.mediaType}</span></li>
                            <li className="">NUMBER OF PAGES: <span className="">{selectedBook.numberOfPages}</span></li>
                        </ul>

                    </div>
                </div>
            </div>

        </main>
    )
}