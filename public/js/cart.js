const $ = id => document.getElementById(id)

const addItemToCart = async (quantity, product) => {
    try {
        const response = await fetch(`/api/cart/item?quantity=${quantity}&product=${product}`);
        const result = await response.json();
        if(!result.ok){
            throw new Error(result.msg)
        }else {
            console.log(result)
        }
        
    } catch (error) {
        
        Swal.fire({
            title: "Upppsss",
            text: "Hubo un error",
            icon: "error",
            html: `Debes <a class="link-primary" href="/users/login">Loguearte</a> para agregar datos al carrito`
        });
    }
}


window.onload = function(){

    $('btn-cart') && $('btn-cart').addEventListener('click', async function(e) {
        try {

            const response = await fetch('/api/cart');
            const {ok,data} = await response.json();

            if(ok){
                if(data.products.length){

                    $('cart-body').innerHTML = `<table class="table">
                        
                    <thead>

                        <tr>
                            <th scope="col">N°:</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                        </tr>

                    </thead>

                <tbody id="cart-table">

                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                </tbody>

            </table>`

                    data.products.forEach(product => {
                        $('cart-body').innerHTML = ``
                    });

                }else {
                    $('cart-body').innerHTML = '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>'
                }
            }
            
        } catch (error) {
            console.error
            alert(error.message)
        }
    })


}