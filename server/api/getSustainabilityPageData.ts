export default eventHandler(async (event) => {
  const queryParams = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  return await fetch(
    `${strapiURL}/api/sustainability-page?locale=${queryParams.locale}&populate[top_section][populate]=*&populate[contact_us][populate]=*&populate[accordion_items][populate]=*&populate[accordion_image][populate]=*&populate[power_pue_energy][populate]`,
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
