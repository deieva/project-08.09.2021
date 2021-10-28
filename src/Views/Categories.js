import '../Assets/Css/Categories.css';
import laptop1 from '../Assets/Images/laptop1.jpg';
import laptop2 from '../Assets/Images/laptop2.jpg';

function Categories() {

    return (
        <div className="categories-container">
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3 mx-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Laptops A</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Laptops B</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Laptops C</button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Laptops D</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div className="laptops-a-container">
                            <div className="row">
                                <div className="col">
                                    <div className="card bg-light" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-light">Cras justo odio</li>
                                            <li className="list-group-item bg-light">Dapibus ac facilisis in</li>
                                            <li className="list-group-item bg-light">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body bg-light">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="laptops-b-container">
                            <div className="row">
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div className="laptops-c-container">
                            <div className="row">
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <div className="laptops-d-container">
                            <div className="row">
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={laptop2} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;