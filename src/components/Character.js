import React  from "react";

const Character = ({post}) => {
	return ( 
		<div className='col-xl-3 col-sm-4 col mt-2' key={post.id}>
			<div className="card shadow rounded-lg">
				<div className="card-body">
					<div className="row">
						<div className="col-xl-5">
							
								<img src={post.image} alt={post.name} width="100%" />
								
							
						</div>
						<div className="col-xl-7">
							<h6 className=''>{post.name}</h6>
							<div className="d-flex">
								<div className={post.status==='Alive' ? 'bg-success text-white btn round-status-success' : 
									'text-white btn bg-danger round-status-danger'}>{ post.status==='Alive' ? '✔' : 'X' }</div>
								<small className='mx-2'>{post.status} - {post.species}</small>
							</div>
							<h6>Last location</h6>
							<p>{post.location.name}</p>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default Character;