function Categories() {

    return (

        <div>

            <div className="container"><h1>Bootstrap  tab panel example (using nav-pills)  </h1></div>
            <div id="exTab1" className="container">
                <ul className="nav nav-pills">
                    <li className="active">
                        <a href="#1a" data-toggle="tab">Overview</a>
                    </li>
                    <li><a href="#2a" data-toggle="tab">Using nav-pills</a>
                    </li>
                    <li><a href="#3a" data-toggle="tab">Applying clearfix</a>
                    </li>
                    <li><a href="#4a" data-toggle="tab">Background color</a>
                    </li>
                </ul>

                <div className="tab-content clearfix">
                    <div className="tab-pane active" id="1a">
                        <h3>Content's background color is the same for the tab</h3>
                    </div>
                    <div className="tab-pane" id="2a">
                        <h3>We use the className nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
                    </div>
                    <div className="tab-pane" id="3a">
                        <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
                    </div>
                    <div className="tab-pane" id="4a">
                        <h3>We use css to change the background color of the content to be equal to the tab</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Categories;