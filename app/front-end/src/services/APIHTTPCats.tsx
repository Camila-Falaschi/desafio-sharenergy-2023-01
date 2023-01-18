// Unable to connect with the API because of the error CORS policy: Access to fetch at 'https://http.cat/100' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

export const catCodeImage = async (code: string) => {
  try {
    const response = await fetch(`https://http.cat/${code}`, {
      // mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Allow-Hearders": "*",
      },
    });

    return response.json();
  } catch (e) {
    console.log(e);
    ;
  }
}
