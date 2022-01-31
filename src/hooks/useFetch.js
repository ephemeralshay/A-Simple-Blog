//Custom Hook for fetching data from an API Endpoint
import { useState, useEffect } from "react";

//Fetch takes an url as a parameter from which data is to be fetched
const useFetch = (url) => {
    //Declare all the states just after the sfc
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Use to abort the fetch on pages other than 'Home'
        const abortCont = new AbortController();

        //Artificially delay the fetch operation by 1 sec so as to simulate getting data from an API endpoint on Internet 
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                //Analyse the response that we get from the API Endpoint
                .then(res => {
                    //If response is not okay, throw Error
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resourse');
                    }
                    //If response is okay, return the response
                    return res.json();
                })

                .then(data => {
                    //Since we got response, Pending status message is set to be false
                    setIsPending(false);
                    //If we get data from the response, Data is set as data (from the Endpoint)
                    setData(data);
                    //Since we got response, Error is kept null
                    setError(null);
                })

                .catch(err => {
                    //Artificially aborted fetch operation is catched as an Error, so we need to specify that fetch has been aborted
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted')
                    }
                    //Auto catches Network/Connection Error
                    else {
                        //Pending status is set as false, else it will keep showing 'Loading...' along with the error
                        setIsPending(false);
                        //Custom Error Message
                        setError(err.message);
                    }
                })
        }, 1000);
        //Aborts the fetch
        return () => abortCont.abort();
        //url is passed as an useEffect dependency --- avoids infinite loop when passed with dependencies like [] or [parameter]
    }, [url])

    return { data, isPending, error }
}

export default useFetch;