"use strict";
fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => {
    if (!response.ok) {
        throw new Error("Data not found");
    }
    else {
        return response.json();
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(`Error ${e.message}`);
});
//# sourceMappingURL=task-3.js.map