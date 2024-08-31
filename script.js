function firstChar(str) {
    // Trim leading and trailing spaces
    const trimmedStr = str.trim();
    
    // Return the first character if the string is not empty
    if (trimmedStr.length > 0) {
        return trimmedStr[0];
    }
    
    // Return an empty string if there are no non-space characters
    return '';
}

// Example usage:
console.log(firstChar(' Rosa Parks ')); // 'R'
console.log(firstChar(' Hello World ')); // 'H'
console.log(firstChar(' ')); // ''
console.log(firstChar('')); // ''
