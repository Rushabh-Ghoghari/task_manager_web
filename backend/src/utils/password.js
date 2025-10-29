export const generateDefaultPassword = (email) => {
  const localPart = email.split("@")[0];
  const randomDigits = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6 random digits
  return `${localPart}@${randomDigits}`;
};
