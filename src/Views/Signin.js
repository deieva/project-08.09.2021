import '../Assets/Css/Signin.css';
import $ from 'jquery';

function Signin() {

	let i = 0;
	$(document).ready(function () {
		$('#add_more').on('click', function () {
			let colorR = Math.floor((Math.random() * 256));
			let colorG = Math.floor((Math.random() * 256));
			let colorB = Math.floor((Math.random() * 256));
			i++;
			let html = '<div id="append_no_' + i + '" className="animated bounceInLeft">' +
				'<div className="input-group mt-3">' +
				'<div className="input-group-prepend">' +
				'<span className="input-group-text br-15" style="color:rgb(' + colorR + ',' + colorG + ',' + colorB + '">' +
				'<i className="fas fa-user-graduate"></i></span>' +
				'</div>' +
				'<input type="text" placeholder="Student Name"  className="form-control"/>' +
				'</div>' +
				'<div className="input-group mt-3">' +
				'<div className="input-group-prepend">' +
				'<span className="input-group-text br-15" style="color:rgb(' + colorR + ',' + colorG + ',' + colorB + '">' +
				'<i className="fas fa-phone-square"></i></span>' +
				'</div>' +
				'<input type="text" placeholder="Student Phone" className="form-control"/>' +
				'</div>' +
				'<div className="input-group mt-3">' +
				'<div className="input-group-prepend">' +
				'<span className="input-group-text br-15" style="color:rgb(' + colorR + ',' + colorG + ',' + colorB + '">' +
				'<i className="fas fa-at"></i></span>' +
				'</div>' +
				'<input type="email" placeholder="Student Email" className="form-control"/>' +
				'</div></div>';

			$('#dynamic_container').append(html);
			$('#remove_more').fadeIn(function () {
				$(this).show();
			});
		});

		$('#remove_more').on('click', function () {

			$('#append_no_' + i).removeClass('bounceInLeft').addClass('bounceOutRight')
				.fadeOut(function () {
					$(this).remove();
				});
			i--;
			if (i == 0) {
				$('#remove_more').fadeOut(function () {
					$(this).hide()
				});;
			}

		});
	});

	return (
		<div className="signin-container">
			<dvi className="container h-100">
				<div className="d-flex justify-content-center">
					<div className="card mt-5 col-md-4 animated bounceInDown myForm">
						<div className="card-header">
							<h4>Contact Details</h4>
						</div>
						<div className="card-body">
							<form>
								<div id="dynamic_container">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text br-15"><i className="fas fa-user-graduate"></i></span>
										</div>
										<input type="text" placeholder="Name" className="form-control" />
									</div>
									<div className="input-group mt-3">
										<div className="input-group-prepend">
											<span className="input-group-text br-15"><i className="fas fa-phone-square"></i></span>
										</div>
										<input type="text" placeholder="Phone" className="form-control" />
									</div>
									<div className="input-group mt-3">
										<div className="input-group-prepend">
											<span className="input-group-text br-15"><i className="fas fa-at"></i></span>
										</div>
										<input type="email" placeholder="Email" className="form-control" />
									</div>
								</div>
							</form>
						</div>
						<div className="card-footer">
							{/* <a className="btn btn-secondary btn-sm" id="add_more"><i className="fas fa-plus-circle"></i> Add</a> */}
							<a className="btn btn-secondary btn-sm" id="remove_more"><i className="fas fa-trash-alt"></i> Remove</a>
							<button className="btn btn-success btn-sm float-right submit_btn"><i className="fas fa-arrow-alt-circle-right"></i> Submit</button>
						</div>
					</div>
				</div>
			</dvi>

		</div>
	)
}

export default Signin;