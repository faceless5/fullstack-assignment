import { useQuery } from 'react-query';
const BookLists = () => {
    // Fetcher function
    const getBooks = async() => {
        const res = await fetch('https://www.abibliadigital.com.br/api/books');
        return res.json();
    };
    // Using the hook
    const { data, error, isLoading } = useQuery('randomFacts', getBooks);
    // Error and Loading states
    if (error) return <div > Request Failed < /div>;
    if (isLoading) return <div > Loading... < /div>;
        // Show the response if everything is fine

    return ( <
        div >
        <
        ul > {
            data.map(d => ( <
                >
                <
                li >
                <
                h1 > Book Name: < /h1> <
                p > { d.name } < /p>   <
                /li> <
                />
            ))
        } <
        /ul> <
        /div>
    );
}

export default BookLists;