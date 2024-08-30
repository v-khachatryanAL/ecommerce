export default eventHandler(async (event) => {
  const queryParams = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  return await fetch(
    `${strapiURL}/api/hardware-page?locale=${queryParams.locale}&populate[top_section][populate]=*&populate[contact_us][populate]=*&populate[product_slide][populate][product][populate][image][populate]&populate[product_slide][populate][description][populate]=*`,
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
