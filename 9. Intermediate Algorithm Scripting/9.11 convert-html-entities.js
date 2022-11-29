function convertHTML(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '&') arr [i] = '&amp;';
    if (arr[i] === '>') arr [i] = '&gt;';
    if (arr[i] === '<') arr [i] = '&lt;';
    if (arr[i] === '"') arr [i] = '&quot;';
    if (arr[i] === '\'') arr [i] = '&apos;';
  }

  return arr.join('');
}

convertHTML("Dolce & Gabbana");