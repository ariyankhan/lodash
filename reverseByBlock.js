/**
 * This function reverses an array by blocks
 * but the contents of the blocks are not changed.
 *
 * **Note:** This method mutates `array`.
 *
 * @category Array
 * @param {Array} array The target array
 * @param {...int} [indexes] The last indexes of every block
 * @returns {Array} Returns `array`.
 * @example
 *
 * var arr =  [1, 2, 3, 2, 4, 56, 66, 22, 111, 3, 1];
 * reverseByBlock(arr, 2, 6, 10);
 * // => arr = [22, 111, 3, 1, 2, 4, 56, 66, 1, 2, 3]
 */
function reverseByBlock(array) {
    var lastIndexes = Array.prototype.slice.call(arguments, 1),
        lastIndex = 0,
        firstIndex = 0,
        ln = lastIndexes.length,
        low,
        high,
        temp,
        arrLn = array.length,
        i = 0;

    if (ln === 0) return array;

    while (i < ln && firstIndex < arrLn) {
        if (firstIndex > lastIndexes[i]) {
            i++;
            continue; // Ignore invalid indexes
        }
        lastIndex = lastIndexes[i];
        lastIndex = Math.min(arrLn - 1, lastIndex);
        low = firstIndex;
        high = lastIndex;
        while(high > low) {
            temp = array[low];
            array[low] = array[high];
            array[high] = temp;
            high--;
            low++;
        }
        firstIndex = lastIndex + 1;
        i++;
    }

    low = 0;
    high = Math.min(arrLn - 1, lastIndex);
    while (high > low) {
        temp = array[low];
        array[low] = array[high];
        array[high] = temp;
        high--;
        low++;
    }

    return array;
}

export default reverseByBlock;
