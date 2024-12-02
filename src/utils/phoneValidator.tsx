export const phoneValidator = (phone: string) => {
    const regex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s\-]?)?[\d\-]{7,10}$/;
    return regex.test(phone);
  };