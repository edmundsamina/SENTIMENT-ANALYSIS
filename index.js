const language = require("@google-cloud/language");
//Testing GithubCodeSpaces
const client = new language.LanguageServiceClient();

// Text for sentiment analysis
const positiveText =
"Great job on your recent coding project! Your attention to detail and problem-solving skills are impressive. Your code is clean, well-structured, and easy to read. You have shown significant improvement in your understanding of the programming concepts we covered in class. Keep up the excellent work, and I have no doubt you will excel in your future coding endeavors!";

const negativeText =
"I'm concerned about your recent performance in the coding bootcamp. Your code for the last few assignments has been subpar, and it's evident that you're struggling to grasp some fundamental concepts. I understand that learning coding can be challenging, but your lack of progress is worrying. It's essential to address these issues promptly to avoid falling further behind. I strongly recommend seeking additional help and dedicating more time to practice outside of the bootcamp. It's crucial that you find ways to overcome your current difficulties and regain your confidence. Remember, dropping out should be your last resort, and with the right support and effort, you can still succeed in this program.";

// Format for Cloud Natural Language API
const positiveDocument = {
  type: "PLAIN_TEXT",
  content: positiveText,
};

const negativeDocument = {
  type: "PLAIN_TEXT",
  content: negativeText,
};

// Call Cloud Natural Language API sentiment analyzer and console log results
(async () => {
  const positiveResults = await client.analyzeSentiment({
    document: positiveDocument,
  });
  const negativeResults = await client.analyzeSentiment({
    document: negativeDocument,
  });
  console.log(positiveResults);
  console.log(negativeResults);
})();

//   The sentiment analysis tool in Google Cloud's Natural Language API uses a scale from -1 to 1 for both the sentiment score and the magnitude.

//   Sentiment Score:

//   A sentiment score greater than 0 indicates a positive sentiment.
//   A sentiment score less than 0 indicates a negative sentiment.
//   A sentiment score of exactly 0 indicates a neutral sentiment.
//   Magnitude (no specific range):

//   The magnitude value represents the overall strength or intensity of the sentiment, regardless of whether it is positive or negative.
//   A higher magnitude value indicates a stronger sentiment, whether positive or negative.
//   A magnitude value close to 0 indicates a weaker or more neutral sentiment.
//   It's important to note that the sentiment score and magnitude are separate values and provide different insights. The sentiment score determines the sentiment polarity (positive, negative, or neutral), while the magnitude measures the strength or intensity of the sentiment expressed in the text.
