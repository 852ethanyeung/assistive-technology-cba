// List of characters that may appear.
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()=+,.?'";

// This is what allows me to not have to hardcode this function for every element that uses it. Each item will be stored as [a, b], with a representing the id of the element and b representing the id of the interval responsible for running the function on a.
let intervalList = [];

// I've sliced the function into two parts: the first part checks whether the element selected already has a corresponding interval, and the second part runs the actual code.
function hackerTextEffect(target) {
    // This variable has two functions: it helps check whether the element selected has a corresponding interval; if not, it itself will be the interval id of the element.
    let interval = 0;

    // Checks through intervalList
    for (listItem of intervalList) {
        // For each item [a, b]:
        // If a is equal to the id of the selected element.
        if (listItem[0] === target.id) {
            // Set interval to 1: the if-statement below this will only run if interval is 0; setting it to one tells the code that the selected element already has a corresponding interval.
            interval = 1;
            // clearInterval stops and clears the interval of the interval id inputted in. Here, listItem[1] is b, which is the interval id of a.
            clearInterval(listItem[1]);
            // Runs the hacker text effect function on the selected element. The function returns a new interval id, which we will put it in place of the original interval id, which is now unused.
            listItem[1] = hackerTextEffectInterval(target);
        }
    }

    // After checking through intervalList, if the element selected does not have a corresponding interval:
    if (interval === 0) {
        // Runs the hacker text effect function on the selected element, and set the interval variable to its interval id.
        interval = hackerTextEffectInterval(target);
        // Add the id of the selected element and its corresponding interval id into intervalList.
        intervalList.push([target.id, interval]);
        // Now, if the function is to be triggered again on this element, the for-statement above will detect that this element already has a running interval, which the for-statement will then stop and give it a new interval and interval id. All of this is to prevent a situation where an element has two intervals running the function on it at the same time, which would break the code.
    }
}

// The actual code that creates the effect
function hackerTextEffectInterval(target) {
    // Creates a variable to keep track of how many times the interval below has repeated
    let iteration = 0;

    // setInterval() returns an interval id, which this function will send to the first part function.
    let interval = setInterval(() => {
        // Change the text content of the selected element
        target.innerText = target.innerText
        // Split the element into characters, and put all of them into an array
            .split("")
            // For each item in the character array:
            .map((character, index) => {
                // If the position of the character in the selected element as a number, is smaller than the iteration variable, which increases by 0.5 every repetition:
                if (index < iteration) {
                    // Change that character to the original character of the selected element, saved in data-text
                    return target.dataset.text[index];
                    // This prevents the hacker text effect from running forever, and instead gradually show the original text by de-effecting from left to right.
                }
                // Else, change that character to a random character picked from the list of characters at the top
                return characters[Math.floor(Math.random() * characters.length)];
            })
            // Join the array of characters back into one variable, which will be displayed in place of the original text of the selected element.
            .join("");

        // If the iteration variable is longer than the number of characters in the original text of the selected element:
        if (iteration >= target.dataset.text.length) {
            // Stop the interval from running and wasting energy
            clearInterval(interval);
        }

        // Increase iteration by 0.5 instead of 1
        iteration += 1 / 2;
    }, 30);
    // Interval repeats every 30 milliseconds

    // Returns the interval id to the first part function
    return interval;
}