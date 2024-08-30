export default eventHandler(async (event) => {
  const queryParams = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  return await fetch(
    `${strapiURL}/api/faq-questions?locale=${queryParams.locale}&populate[descriptions][populate]=*&populate[questions][populate]=*&populate[list][populate]=*&sort=title:ASC`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
});
