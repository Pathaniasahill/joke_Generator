import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response ) => {
        let data = '';

        // Collect data chunks
        response.on('data', (chunk) => {
            data += chunk;
        });

        // On end of response, parse and log the joke
        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(chalk.red(`Here's a joke for you: ${joke.type} - ${joke.punchline}`));
        

    })
})
}
getJoke();
