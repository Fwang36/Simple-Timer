const arg = process.argv.slice(2);

for (let item of arg) {
  if (item > 0) {

    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(item);
    }, (item * 1000));
  }
}

