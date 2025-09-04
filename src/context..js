import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm.trim()}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map(({ key, author_name, cover_i, edition_count, first_publish_year, title }) => ({
                    id: key,
                    author: author_name || ["Unknown"],
                    cover_id: cover_i,
                    edition_count,
                    first_publish_year,
                    title
                }));

                setBooks(newBooks);
                setResultTitle(newBooks.length > 0 ? "Your Search Result" : "No Search Result Found!");
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
        } catch (error) {
            console.error(error);
            setBooks([]);
            setResultTitle("Failed to fetch books!");
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
