function showAlert() {
    alert(" button clicked")
}
function changeName() {
    document.getElementById("button").innerHTML = "sampally";

}
function printingtable(num) {
    let a = " ";
    for (let i = 1; i <= 10; i++) {
        a += `${num} * ${i} = ${num * i} <br>`
    }
    document.getElementById("t2").innerHTML = a;
}
// let data = [1,2,3,4,5,6]
// let newdata = data.map(radius => radius*2)
// console.log(newdata)
// let data1= data1.filter(num => (num%2))
// console.log(data1)
// const c =0;
// let data2 = data.reduce((a,b)=>(a+b,c));
// console.log(data2);
// printingtable(10)
async function getdata(url) {
    try {
        let data = await fetch(url);
        data = await data.json();
        let str = " ";
        for (let i = 0; i < data.products.length; i++) {
            str += `<tr> 
        <td>  ${data.products[i].brand} </td>
        <td>  ${data.products[i].description} </td>
      </tr>`
        }
        document.getElementById("data1").innerHTML = str
    }
    catch (error) {
        console.log(error);
    }
}

getdata("https://dummyjson.com/products")