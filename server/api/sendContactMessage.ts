export default eventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  try {
    // Extract query parameters and body from the event
    const { locale } = getQuery(event);
    const payload = await readBody(event);

    // Send the PUT request to Strapi
    const response = await fetch(
      `${strapiURL}/api/contact-messages?locale=${locale}`,
      {
        method: 'POST',
        body: JSON.stringify(payload), // Ensure the payload is stringified
        headers: {
          'Content-Type': 'application/json', // Specify the content type
          Authorization: `Bearer ${authToken}`
        }
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from Strapi:', errorData);
      throw new Error(`Strapi responded with status ${response.status}`);
    }

    // Return the parsed JSON data from Strapi
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error processing the request:', error);
    // Return a 500 status code and error message
    return {
      statusCode: 500,
      body: { error: 'Internal Server Error', message: error.message }
    };
  }
});
