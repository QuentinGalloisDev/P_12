
const Performance = () => {
    fetch(`http://localhost:3000/user/12/performance `)
        .then(response => response.json())
        .then(performance => {
            console.log(performance.data)


        })
}
export default Performance