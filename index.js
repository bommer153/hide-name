function isNameInvalid(name) {
  return !(typeof name !== 'string' || name.trim() === '' || !/^[a-zA-Z\s]+$/.test(name) || !name.includes(' '));
}

function hideNamePart(name) {    
  if (name.length <= 3) {
    return name;
  }

  const firstTwo = name.slice(0, 2);
  const lastChar = name.slice(-1);
  const asterisk = '*'.repeat(name.length - 3);

  return firstTwo + asterisk + lastChar;
}

export function hideName(name) {
  if (!isNameInvalid(name)) {
    return 'Input provided is not a valid name.';
  }

  const splitName = name.split(' ');
  let firstName = '';

  for (let i = 0; i < splitName.length - 1; i++) {
    firstName += hideNamePart(splitName[i]) + ' ';     
  }

  let lastName = splitName[splitName.length - 1].toUpperCase().charAt(0) + '.'; 
  let finalName = firstName + lastName;
  
  return finalName.toUpperCase();
}



