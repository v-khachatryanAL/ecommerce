export default eventHandler(async (event) => {
  const queryParams = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  return await fetch(
    `${strapiURL}/api/home-page?locale=${queryParams.locale}&populate[top_section][populate]=*&populate[about_us][populate]=*&populate[industries][populate]=*&populate[articles][populate]=*&populate[contact_us][populate]=*`,
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
