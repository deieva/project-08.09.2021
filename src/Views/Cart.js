import '../Assets/Css/Cart.css';

function Cart() {

    return (

        <div>

            <div className="container">
                <h1 style={{fontWeight: '300'}}>Cart</h1>
                <div className="cart-table">

                    <div className="row cart-row">
                        <div className="col-xs-12 col-md-2">
                            <img src="https://profilewear.se/image/catalog/shop_information/kategori/pw3/T-shirt.png" width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-articlenr">#643489</div>
                            <div className="product-name">Basic T-shirt</div>
                            <div className="product-options"><span>Color:</span> Grey<br/><span>Size: </span> M</div>
                            <div className="product-price">
                                <input type="text" name="quantity[4]" value="1" size="1" className="form-control"/>
                                <button type ="submit" data-toggle="tooltip" title="Uppdatera" className ="update"><i className ="fas fa-sync"></i></button>
                                <div className ="product-price"><small>x</small> 49 SEK</div>
                            </div>
                        </div>
                        <div className="col-md-3 cart-actions">
                            <div className="product-price-total">49 SEK</div>
                            <div className="product-delete">
                                <button type="button" data-toggle="tooltip" title="Ta bort" className="delete" onclick="cart.remove('5');"><i className="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="row cart-row">
                        <div className="col-xs-12 col-md-2">
                            <img src="https://profilewear.se/image/catalog/shop_information/kategori/pw3/T-shirt.png" width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-articlenr">#643489</div>
                            <div className="product-name">Basic T-shirt</div>
                            <div className="product-options"><span>Color:</span> Grey<br/><span>Size: </span> M</div>
                            <div className="product-price">
                                <input type="text" name="quantity[4]" value="1" size="1" className="form-control"/>
                                <button type ="submit" data-toggle="tooltip" title="Uppdatera" className ="update"><i className ="fas fa-sync"></i></button>
                                <div className ="product-price"><small>x</small> 49 SEK</div>
                            </div>
                        </div>
                        <div className="col-md-3 cart-actions">
                            <div className="product-price-total">49 SEK</div>
                            <div className="product-delete">
                                <button type="button" data-toggle="tooltip" title="Ta bort" className="delete" onclick="cart.remove('5');"><i className="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="row cart-row">
                        <div className="col-xs-12 col-md-2">
                            <img src="https://profilewear.se/image/catalog/shop_information/kategori/pw3/T-shirt.png" width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-articlenr">#643489</div>
                            <div className="product-name">Basic T-shirt</div>
                            <div className="product-options"><span>Color:</span> Grey<br/><span>Size: </span> M</div>
                            <div className="product-price">
                                <input type="text" name="quantity[4]" value="1" size="1" className="form-control"/>
                                <button type ="submit" data-toggle="tooltip" title="Uppdatera" className ="update"><i className ="fas fa-sync"></i></button>
                                <div className ="product-price"><small>x</small> 49 SEK</div>
                            </div>
                        </div>
                        <div className="col-md-3 cart-actions">
                            <div className="product-price-total">49 SEK</div>
                            <div className="product-delete">
                                <button type="button" data-toggle="tooltip" title="Ta bort" className="delete" onclick="cart.remove('5');"><i className="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="row cart-row">
                        <div className="col-xs-12 col-md-2">
                            <img src="https://profilewear.se/image/catalog/shop_information/kategori/pw3/T-shirt.png" width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-articlenr">#643489</div>
                            <div className="product-name">Basic T-shirt</div>
                            <div className="product-options"><span>Color:</span> Grey<br/><span>Size: </span> M</div>
                            <div className="product-price">
                                <input type="text" name="quantity[4]" value="1" size="1" className="form-control" />
                                <button type="submit" data-toggle="tooltip" title="Uppdatera" className="update"><i className="fas fa-sync"></i></button>
                                <div className="product-price"><small>x</small> 49 SEK</div>
                            </div>
                        </div>
                        <div className="col-md-3 cart-actions">
                            <div className="product-price-total">49 SEK</div>
                            <div className="product-delete">
                                <button type="button" data-toggle="tooltip" title="Ta bort" className="delete" onclick="cart.remove('5');"><i className="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </div>


                    <div className="row cart-special-holder">
                        <div className="col-md-12">
                            <div className="cart-special"><div className="cart-special-content">Add some more articles and get discount!!</div></div>
                        </div>

                    </div>

                </div>




             </div>
            </div>
            )
}

            export default Cart;