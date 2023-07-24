if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { createHash } = require('node:crypto')

/**
 * Returns an MD5 hash for the given `content`.
 *
 * @param {String} content
 *
 * @returns {String}
 */

function md5(content) {
    return createHash('md5').update(content).digest('hex')
}

const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Creates a URL for searching Marvel API for comics with titles starting with a given search term
function createURL() {
    // Get the current timestamp
    const ts = Date.now();

    // Create a new URLSearchParams object and set the necessary query parameters
    const params = new URLSearchParams({
        ts: ts,
        apikey: publicKey,
        hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
    });
    // Construct the endpoint URL for searching comics with the query parameters
    const endpoint = `${apiBaseURL}/characters?`; // Notice the question mark to start the query parameters.

    // Combine the endpoint URL with the query parameters to form the complete API request URL
    const url = endpoint + params;

    // Return the complete API request URL
    return url;
}

const url = createURL();

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the API response here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the API request
        console.error(error);
    })