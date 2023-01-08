const button = document.getElementById('button');
button.addEventListener("click", () => {
    const data = {
    model: 'text-davinci-003',
    prompt: `${input.value} ->`,
    max_tokens: 1500,
}
fetch(`https://api.openai.com/v1/completions`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
         'Authorization': `Bearer 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`
    },
    body: JSON.stringify(data)
})
.then((res) => {
    return res.json(); 
})
.then((data) => {
    console.log(data);
    const output = data.choices[0].text;
    document.getElementById('output').innerHTML = `${output}`;
});
})
