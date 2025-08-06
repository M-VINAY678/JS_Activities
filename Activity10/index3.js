async function getProcessedData(url) {
  try {
    const data = await downloadData(url); 
  } catch (error) {
    const data = await downloadFallbackData(url);
  }
  return await processDataInWorker(fallbackData);
}
