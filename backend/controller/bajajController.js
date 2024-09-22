const processData = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: 'Invalid input format' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && item.length === 1);
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }) > 0 ? a : b)] : [];

    const response = {
      is_success: true,
      user_id: "RagulSankar04",
      email: "rs7342@srmist.edu.in",
      roll_number: "RA2111003020576",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet
    };

    res.json(response);
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ is_success: false, error: 'Internal server error' });
  }
};

const getOperationCode = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

module.exports = {
  processData,
  getOperationCode
};