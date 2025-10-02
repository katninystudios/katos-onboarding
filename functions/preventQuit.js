document.addEventListener("keydown", (event) => {
    console.log(event.key);

    if (event.altKey && event.key === "F4") {
        event.preventDefault();
        event.stopPropagation();
    }
});