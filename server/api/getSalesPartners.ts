import { readFileSync } from "fs";

export default eventHandler(async (event) => {
  const mockFilePath = "mock-data/sales-partners.json";
  try {
    const mockData = readFileSync(mockFilePath, "utf-8");
    return JSON.parse(mockData);
  } catch (error) {
    console.error("Error reading mock data:", error);
    return null;
  }
});
