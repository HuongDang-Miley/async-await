const doIHaveMoney = false;
// // Promise
const willIGetANewCar = (brand, color) => {
  return new Promise((resolve, reject) => {
    // fat arrow
    if (doIHaveMoney) {
      const car = {
        brand,
        color
      };
      resolve(car);
    } else {
      const reason = new Error('I am broke');
      reject(reason);
    }
  });
};
const showOff = (brand, color) => {
  const message = 'Check it out, I have a new ' + color + ' ' + brand + ' car!';
  return Promise.resolve(message);
};

const checkBankAccount = () => {
    console.log('Checking my bank account');
    willIGetANewCar('Maybach', 'blue')
      .then(({ brand, color }) => {
        showOff(brand, color)
          .then((val) => console.log(val))
          .then(() =>
            console.log('My bank account is now empty, no more purchases')
          )
          .catch((err) => err.message);
      })
      .catch((err) => err.message);
  };
  const checkBankAccount2 = async () => {
    try {
      console.log('Checking my bank account');
      const a = await willIGetANewCar('Mayback', 'blue');
      const { brand, color } = a;
      const b = await showOff(brand, color);
      console.log(b);
      console.log('My account is now empty, no more purchases');
    } catch (err) {
      console.log(err.message);
    }
  };
  checkBankAccount2();
