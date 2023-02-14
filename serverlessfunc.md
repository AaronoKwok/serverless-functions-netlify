# Serverless Functions

## Serverless Function
- Must be an asynchronous handler function that returns an object with 2 keys: 
    - statusCode: ie. 200, 400, etc
    - body: usually is a JSON object that needs to be converted to a string using JSON.stringify() so that it can be read
    ```
    export const handler = async () => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'This is what will be returned!'
            })
        }
    }
    ```